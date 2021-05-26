const initialState = {
  cart: [],
  num: 0,
};

const cartList = (state, action) => {
  state = initialState;
  const { type, payload } = action;
  switch (type) {
    case "ADD":
      state.num += 1;
      state.cart.push(payload.name);
      return { ...state };
    case "REMOVE":
      state.num -= 1;
      state.cart.filter((item) => {});
      return { ...state };

    default:
      return { ...state };
  }
};

export default cartList;
