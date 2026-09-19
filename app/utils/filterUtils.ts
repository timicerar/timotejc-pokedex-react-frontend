export const parseList = <T extends string>(value: string | null): T[] => {
  return value ? (value?.split(',') as T[]) : [];
};

export const serializeList = (value: string[]): string | null => {
  return value?.length ? value?.join(',') : null;
};
