const initialState = {
  products: [],
};

const product = (state = initialState, action) => {
  switch (action.type) {
    case "Form":
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case "Edit":
      console.log(state.products);
      return {
        ...state,
        products: state.products.map(
          (product) => product.id !== action.payload.id
        )
          ? product
          : action.payload,
      };
    case "Delete":
      return {
        products: state.products.filter(
          (product) => product.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default product;
