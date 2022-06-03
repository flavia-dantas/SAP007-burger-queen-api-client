export const RegisterError = ({status}) => {
  switch (status) {
    case 400:
      return "Preencha os dados obrigatórios";
    case 401:
      return "Usuário não autenticado";
    case 403:
      return "Email já cadastrado";
    default:
      return "Ocorreu um erro, tente novamente";
  }
};

export const LoginError = ({status}) => {
  switch (status) {
    case 400:
      return "E-mail e/ou senha inválidos";
    case 401:
      return "Usuário não autenticado";
    case 404:
      return "Usuário não encontrado";
    default:
      return "Ocorreu um erro, tente novamente";
  }
};
