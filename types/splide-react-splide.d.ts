declare module '@splidejs/react-splide' {
    import React from 'react';
    import { Options } from '@splidejs/splide';
  
    export interface SplideProps extends React.HTMLAttributes<HTMLDivElement> {
      options?: Options;
      extensions?: Record<string, unknown>;
    }
  
    export const Splide: React.FC<SplideProps>;
    export const SplideSlide: React.FC<React.HTMLAttributes<HTMLLIElement>>;
  }
  
  declare module '@splidejs/splide-extension-auto-scroll' {
    export const AutoScroll: Record<string, unknown>;
  }
  