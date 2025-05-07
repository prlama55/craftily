export type HTMLCompatible<T> = {
  [K in keyof T]: T[K] extends boolean ? boolean | '' : T[K];
};
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [K: string]: Partial<HTMLCompatible<any>>;
    }
  }
}

declare module 'vue' {
  export interface GlobalComponents {
    [K: string]: Partial<HTMLCompatible<any>>;
  }
}
