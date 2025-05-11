export function formValidator(
  firstName: string,
  lastName: string,
  age: number
) {
  const errors: string[] = [];

  if (!firstName || firstName.trim().length < 1) {
    errors.push('First name is required');
  }

  if (!lastName || lastName.trim().length < 1) {
    errors.push('Last name is required');
  }

  if (age == null || isNaN(Number(age))) {
    errors.push('Age must be a number');
  }

  if (age < 0) {
    errors.push('Age must be a positive number');
  }

  return errors;
}
