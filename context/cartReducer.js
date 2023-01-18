const cartReducer = (state, { type, payload }) => {
  switch(type){
    case "ADD":
      return {
        ...state,
        ...payload
      }

    case 'REMOVE_ITEM':
      return {
        ...payload
      }

    default:
      return state
  }
}

export default cartReducer