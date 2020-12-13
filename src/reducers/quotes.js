export default (state = [], action) => {
  switch (action.type){
    case "ADD_QUOTE":
      return {...state.concat(action.quote)}
      break;
    case "REMOVE_QUOTE":
      const index = state.findIndex((quote) => quote.id === action.quoteId)
      return {...state.slice(0, index).concat(...state.slice(index+1))}
    case "UPVOTE_QUOTE":

    case "DOWNVOTE_QUOTE":

      default:
      return state;
  }
}
