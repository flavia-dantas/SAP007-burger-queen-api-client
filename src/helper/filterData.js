export const filterData = (data, type1, type2 ) => {
  return data.filter((element) => element.status === type1 || (type2 && element.status === type2) );
};
