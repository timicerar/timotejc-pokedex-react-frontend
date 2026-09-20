import type {
  EmblaCarouselType,
  EmblaOptionsType,
  EmblaPluginType,
} from 'embla-carousel';
import type { ReactNode } from 'react';

export type CarouselProps = {
  children: ReactNode;
  className?: string;
  options?: EmblaOptionsType;
  plugins?: EmblaPluginType[];
  setApi?: (api: EmblaCarouselType | null) => void;
};
