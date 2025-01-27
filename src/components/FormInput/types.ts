import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';

export type ErrorMessageType =
  | string
  | FieldError
  | Merge<FieldError, FieldErrorsImpl<never>>
  | undefined;
