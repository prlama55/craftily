import { useCallback } from 'react';

export function useEventCallback<T extends Event>(
  handler?: (event: T) => void,
  deps: any[] = []
) {
  return useCallback(
    (event: T) => {
      handler?.(event);
    },
    [handler, ...deps]
  );
}
