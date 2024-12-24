import { validate } from './validation/validator';
import { NUMBER_VALIDATORS } from './validation/methods';
function main() {
  const result: HTMLElement = document.querySelector('#result')!;

  const input: HTMLInputElement = document.querySelector('input')!;
  const validateButton: HTMLElement =
    document.querySelector('#validation-btn')!;

  validateButton.addEventListener('click', () => {
    const validationMessage = validate(input.value, NUMBER_VALIDATORS);

    result.innerHTML = validationMessage;
    console.log(validationMessage);
  });

  const clearInputButton: HTMLElement = document.querySelector('#cleanup-btn')!;

  clearInputButton.addEventListener('click', () => {
    input.value = '';
    result.innerHTML = '';
  });
}

main();
