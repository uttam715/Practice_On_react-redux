export default function CartItem(
  state = { product: [], count: 0, isOpen: false, itemCount: 1 },
  action
) {
  switch (action.type) {
    case "TOTALCARTITEMCOUNT":
      return { ...state, count: state.count + 1 };

    case "CARTPRODUCT":
      return { ...state, product: [...state.product, action.product] };

    case "ISOPEN":
      return { ...state, isOpen: action.isOpen };

      case "ITEMCOUNT": 
      return {...state, itemCount: state.itemCount+1}

    default:
      return state;
  }
}
