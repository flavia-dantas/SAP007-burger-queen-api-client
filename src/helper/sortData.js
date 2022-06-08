export const sortData = (data) => {
  const copyData = [...data];
  return copyData.sort((a, b) => b.id - a.id);
};
