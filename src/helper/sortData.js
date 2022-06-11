export const sortData = (data) => {
  const copyData = [...data];
  return copyData.sort((a, b) => a.id- b.id);
};
