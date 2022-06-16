export const statusVerification = (item) => {
  if(item.status === "pending") {
    return "pendente";
  } else if(item.status === "preparing") {
    return "em preparo";
  } else if(item.status === "ready") {
    return "pronto";
  } else if(item.status === "delivered") {
    return "entregue";
  }
};
