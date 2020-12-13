// TODO: Create action creators as defined in tests
export function action(){
return{
    addQuote: (quote) => ({type: "ADD_QUOTE",
    quote: quote,}),
    removeQuote: (Id) => ({
            type: "REMOVE_QUOTE",
            quoteId: Id
        }),
    upvoteQuote: (Id) => ({type: "UPVOTE_QUOTE", quoteId: Id}),
    downvoteQuote: (id) => ({type: "DOWNVOTE_QUOTE",
    quoteId: id})
 }
}