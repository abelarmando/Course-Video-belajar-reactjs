export const saveToLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getFromLocalStorage = (key) => {
  if (!localStorage.getItem(key)) return null;
  return JSON.parse(localStorage.getItem(key));
};
