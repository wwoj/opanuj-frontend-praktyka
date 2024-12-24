import {
  MSG_ERROR_INVALID_INPUT,
  MSG_ERROR_INVALID_INT,
  MSG_SUCCESS_VALID_INT,
} from './messages';

import { type NumericValidationMethod, isValidInteger } from './methods';
// IMPROT Numeric validation methods

export function validate(
  input: string,
  validators: NumericValidationMethod[]
): string {
  if (!isValidInteger(input)) {
    return MSG_ERROR_INVALID_INPUT;
  }

  const isValidRangeInteger = validators.every((validateFn) =>
    validateFn(Number(input))
  );

  if (!isValidRangeInteger) {
    return MSG_ERROR_INVALID_INT;
  }

  return MSG_SUCCESS_VALID_INT;
}
