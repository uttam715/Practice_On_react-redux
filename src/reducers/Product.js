// export default function CountReducer(state = { count: 0 }, action) {
//   switch (action.type) {
//     case "INCREAMENT":
//       return { ...state, count: state.count + 1 };

//     case "DECREAMENT":
//       if (state.count > 0) return { ...state, count: state.count - 1 };
//       return state;

//       case "VALUEINCREASE":
//         return {...state, count : state.count+action.data}

//     default:
//       return state;
//   }
// }

export default function Product(state ={productList: []}, action){
    switch(action.type){
        case "PRODUCTLIST": 
        return {...state, productList : action.productList}

        default : return state;
    }
}