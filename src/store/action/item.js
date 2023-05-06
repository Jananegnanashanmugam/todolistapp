export const add = (item) => {
  return {
    type: "ADD_ITEM",
    payload: item,
  };
};
export const deleteitem = (id) => {
  return {
    type: "DELETE_ITEM",
    id,
  };
};
