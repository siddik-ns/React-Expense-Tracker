const ContextReducer = (state, action) => {
  let transactions;
  switch (action.type) {
    case 'ADD_TRANSACTION':
      transactions = [action.payload, ...state];
      return transactions;
    case 'DELETE_TRANSACTION':
      transactions = state.filter(t => t.id !== action.payload);
      return transactions;
    default:
      return state;
  }
};

export default ContextReducer;