export const emailValidator = (email: string) => {
  const re = /\S+@\S+\.\S+/;

  if (!email || email.length <= 0) return `Email não pode ser vazio.`;
  if (!re.test(email)) return `Ooops! O email digitado não é válido.`;

  return ``;
};

export const passwordValidator = (password: string) => {
  if (!password || password.length <= 0) return `Senha não pode ser vazia.`;

  return ``;
};

export const nameValidator = (name: string) => {
  if (!name || name.length <= 0) return `Seu nome não pode ser vazio.`;

  return ``;
};
