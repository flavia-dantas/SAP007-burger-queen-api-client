export const hideErrorMessage = (setErrorMessage) => {
  setTimeout(() => setErrorMessage(""), 5000 );
};

export const filterMenu = (data, type) => {
  return data.filter((item) => item.type === type);
};


export const sortData = (data) => {
  const copyData = [...data];
  return copyData.sort((a, b) =>b.id -a.id);
};
