export const statusCode = (response) => {
  let message = "";
  switch ((response.status, message)) {
    case 400:
      message = "Preencha os dados obrigatórios";
      break;
    case 401:
      message = "Usuário não autenticado";
      break;
    case 403:
      message = "Email já cadastrado";
      break;
    case 404:
      message = "Usuário não encontrado";
      break;
    default:
      message = "Ocorreu um erro, tente novamente";
  }
};
