import { useMemo } from 'react';
import { ButtonState } from '../enum';

export const useButtonState = (disabled: boolean, loading: boolean) => {
  return useMemo(() => {
    if (disabled) return ButtonState.DISABLED;
    if (loading) return ButtonState.LOADING;
    return ButtonState.DEFAULT;
  }, [disabled, loading]);
};
