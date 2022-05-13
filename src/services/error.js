export const errorMessage = (response) => {
  switch(response.status){
    case 400:
      alert("Preencha os dados obrigatórios");
      break;
    case 401:
      alert("Usuário não autenticado");
      break;
    case 403:
      alert("Email já cadastrado");
      break;
    case 404:
      alert("Usuário não encontrado");
      break;
    default:
      alert("Ocorreu um erro, tente novamente");
  }
};
