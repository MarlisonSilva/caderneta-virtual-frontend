export const validar_Email = (email: string) => {
  return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email);
};
export const validar_Senha = (password: string) => {
  const minLength = 6;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  if (
    password.length >= minLength &&
    hasUpperCase &&
    hasLowerCase &&
    hasNumber &&
    hasSpecialChar
  ) {
    return true;
  }

  return false;
};

export const validar_telefone = (telefone: string) => {
  return /(?:(^\\+\\d{2})?)(?:([1-9]{2})|([0-9]{3})?)(\\d{4,5}).?(\\d{4})/.test(
    telefone
  );
};

export const validar_nome = (name: string) => {
  const maxLength = 255;
  const minLength = 3;

  if (name.length < minLength || name.length > maxLength) {
    return false;
  }
  return true;
};
