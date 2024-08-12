export const hasEmptyFields = (item) => {
  return Object.values(item).some((value) => value === "" || value === null);
};
