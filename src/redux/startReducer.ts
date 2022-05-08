const initialState = {};

type InitialStateType = typeof initialState;

type StartActionType = ReturnType<typeof startAC>;
type startReducerActionsType = StartActionType;

export const startReducer = (state: InitialStateType = initialState, action: startReducerActionsType): InitialStateType => {
    switch (action.type) {
        case "START-ACTION":
            return {...state};
        default:
            return state;
    }
};

export const startAC = () => ({type: "START-ACTION"} as const);