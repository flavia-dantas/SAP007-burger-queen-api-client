export const filterType = (data, type) => {
  return data.filter((item) => item.type === type);
};

export const filterStatus = (data, status1, status2 ) => {
  return data.filter((element) => element.status === status1 || (status2 && element.status === status2) );
};
