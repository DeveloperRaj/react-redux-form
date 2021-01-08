export const form = (newProductObject) => {
  return {
    type: "Form",
    payload: newProductObject,
  };
};

export const OnEdit = (id) => {
  return {
    type: "Edit",
    payload: id,
  };
};

export const onDelete = (id) => {
  return {
    type: "Delete",
    payload: id,
  };
};
