export const electronics = (category) => {
  return {
    type: "ELECTRONICS",
    payload: category,
  };
};

export const food = (category) => {
  return {
    type: "FOOD",
    payload: category,
  };
};

export const add = (category) => {
  return {
    type: "ADD",
    payload: category,
  };
};

export const remove = (category) => {
  return {
    type: "REMOVE",
    payload: category,
  };
};

export const get = (category) => {
  return {
    type: "GET",
    payload: category,
  };
};
