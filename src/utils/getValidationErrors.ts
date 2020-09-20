import { ValidationError } from 'yup';

interface Errors {
  // O [key: string] indica que pode ser qualquer nome, desde que seja uma string
  [key: string]: string;
}

export default function getValidationErrors(err: ValidationError): Errors {
  const validationErrors: Errors = {};

  err.inner.forEach((error) => {
    validationErrors[error.path] = error.message;
  });

  return validationErrors;
}
