import classNames from 'classnames';
import type { KeyboardEvent } from 'react';
import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import type {
  SelectOptionData,
  SelectProps,
} from '~/components/components/Select/Select.interface';
import SelectMenu from '~/components/components/Select/SelectMenu/SelectMenu';
import SelectTrigger from '~/components/components/Select/SelectTrigger/SelectTrigger';
import { useOnClickOutside } from '~/hooks/useOnClickOutside';
import classes from './Select.module.scss';

const Select = <T extends SelectOptionData = SelectOptionData>({
  options,
  renderOption,
  value,
  defaultValue,
  onChange,
  multiple = false,
  label,
  placeholder: placeholderProp,
  resetLabel: resetLabelProp,
  leadingIcon,
  disabled,
  maxWidth,
  className,
  id,
  ...props
}: SelectProps<T>) => {
  const { t } = useTranslation();

  const placeholder = useMemo(
    () => placeholderProp ?? t('select.placeholder'),
    [placeholderProp, t],
  );

  const resetLabel = useMemo(
    () => resetLabelProp ?? t('select.reset'),
    [resetLabelProp, t],
  );

  const generatedId = useId();
  const idBase = id ?? generatedId;
  const listboxId = `${idBase}-listbox`;

  const wrapperRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const listboxRef = useRef<HTMLDivElement>(null);

  const [open, setOpen] = useState(false);
  const [internalValues, setInternalValues] = useState<string[]>(() => {
    if (!defaultValue) {
      return [];
    }

    return Array.isArray(defaultValue) ? defaultValue : [defaultValue];
  });

  const selectedValues = useMemo(() => {
    if (value === undefined) {
      return internalValues;
    }

    if (Array.isArray(value)) {
      return value;
    }

    return value ? [value] : [];
  }, [value, internalValues]);

  const hasSelection = selectedValues.length > 0;

  const selectedOptions = useMemo(
    () => options.filter((option) => selectedValues.includes(option.value)),
    [options, selectedValues],
  );

  const triggerLabel = useMemo(() => {
    if (selectedOptions.length === 0) {
      return placeholder;
    }

    if (selectedOptions.length === 1) {
      return selectedOptions[0].label;
    }

    return `${selectedOptions.length} selected`;
  }, [selectedOptions, placeholder]);

  const closeMenu = useCallback((focusTrigger: boolean) => {
    setOpen(false);

    if (focusTrigger) {
      triggerRef.current?.focus();
    }
  }, []);

  const handleClickOutside = useCallback(() => closeMenu(false), [closeMenu]);
  useOnClickOutside(wrapperRef, handleClickOutside, open);

  useEffect(() => {
    if (!open) {
      return;
    }

    const target =
      listboxRef.current?.querySelector<HTMLElement>(
        '[aria-selected="true"]',
      ) ?? listboxRef.current?.querySelector<HTMLElement>('[role="option"]');

    target?.focus();
  }, [open]);

  const emitChange = (nextValues: string[]) => {
    if (value === undefined) {
      setInternalValues(nextValues);
    }

    onChange?.(multiple ? nextValues : (nextValues[0] ?? ''));
  };

  const handleSelect = (optionValue: string) => {
    if (multiple) {
      const nextValues = selectedValues.includes(optionValue)
        ? selectedValues.filter((val) => val !== optionValue)
        : [...selectedValues, optionValue];

      emitChange(nextValues);
      return;
    }

    emitChange([optionValue]);
    closeMenu(true);
  };

  const handleReset = () => {
    emitChange([]);
    closeMenu(true);
  };

  const getOptionElements = () =>
    Array.from(
      listboxRef.current?.querySelectorAll<HTMLElement>('[role="option"]') ??
        [],
    );

  const focusOptionAt = (index: number) => {
    const items = getOptionElements();

    if (items.length === 0) {
      return;
    }

    const nextIndex = ((index % items.length) + items.length) % items.length;
    items[nextIndex]?.focus();
  };

  const handleOptionKeyDown = (
    event: KeyboardEvent<HTMLDivElement>,
    onActivate: () => void,
  ) => {
    const items = getOptionElements();
    const currentIndex = items.indexOf(event.currentTarget);

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        focusOptionAt(currentIndex + 1);
        break;
      case 'ArrowUp':
        event.preventDefault();
        focusOptionAt(currentIndex - 1);
        break;
      case 'Home':
        event.preventDefault();
        focusOptionAt(0);
        break;
      case 'End':
        event.preventDefault();
        focusOptionAt(items.length - 1);
        break;
      case 'Enter':
      case ' ':
        event.preventDefault();
        onActivate();
        break;
      case 'Escape':
        event.preventDefault();
        closeMenu(true);
        break;
      case 'Tab':
        closeMenu(false);
        break;
      default:
        break;
    }
  };

  const handleTriggerKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      setOpen(true);
    }
  };

  return (
    <div
      ref={wrapperRef}
      className={classNames(classes.wrapper, className)}
      style={maxWidth !== undefined ? { maxWidth } : undefined}
    >
      <SelectTrigger
        {...props}
        ref={triggerRef}
        id={idBase}
        listboxId={listboxId}
        label={label}
        open={open}
        disabled={disabled}
        triggerLabel={triggerLabel}
        leadingIcon={leadingIcon}
        onToggle={() => (open ? closeMenu(false) : setOpen(true))}
        onTriggerKeyDown={handleTriggerKeyDown}
      />
      {open && (
        <SelectMenu
          ref={listboxRef}
          id={listboxId}
          label={label}
          multiple={multiple}
          options={options}
          selectedValues={selectedValues}
          hasSelection={hasSelection}
          resetLabel={resetLabel}
          renderOption={renderOption}
          onSelectOption={handleSelect}
          onReset={handleReset}
          onOptionKeyDown={handleOptionKeyDown}
        />
      )}
    </div>
  );
};

export default Select;
