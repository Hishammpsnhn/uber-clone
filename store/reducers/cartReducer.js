let defaultState = {
  selectedItems: { items: [], restaurantName: "" },
};
let cartReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      let newState = { ...state };
      if (action.payload.checkboxValue) {
        console.log("Adding to cart")
        newState.selectedItems = {
          items: [...state.selectedItems.items, action.payload],
          restaurantName: action.payload.restaurantName
        }
      } else {
        console.log("remove from cart")
        newState.selectedItems = {
          items: [...state.selectedItems.items.filter(
            (item) => item.id !== action.payload.id
          )],
          restaurantName: action.payload.restaurantName
        }
      }
      console.log(newState);
      return newState;
    }
    default:
      return state;
  }
}
export default cartReducer;