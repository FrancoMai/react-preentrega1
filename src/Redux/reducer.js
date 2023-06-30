const initialState = {
    myFavorites: [],
    allItemsFav: [],
}

const reducer = (state = initialState, actions) => {
    switch (actions.type) {
        case "ADD_FAV":
            return {
                ...state,
                myFavorites: actions.payload,
                allItemsFav: actions.payload,
            }
        case "REMOVE_FAV":
            return {
                ...state,
                myFavorites: actions.payload,
                allItemsFav: actions.payload,
            }
        case "FILTER":
            const allItemsFiltered = state.allItemsFav.filter((item) => item.gender === actions.payload);
            return {
                ...state,
                myFavorites: allItemsFiltered
            }
        case "ORDER":
            const allItemsFavCopy = [...state.allItemsFav];
            return {
                ...state,
                myFavorites:
                    actions.payload === "A"
                        ? allItemsFavCopy.sort((a, b) => a.id - b.id)
                        : allItemsFavCopy.sort((a, b) => b.id - a.id)
            }
        default:
            return { ...state };
    }
};

export default reducer;