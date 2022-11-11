export type InitialState = {
  participents: undefined | [];
};
export type ActionType = {
  participents: undefined | [];
  type: string;
};
export const initialState = {
  participents: undefined,
};
export const actionTypes = {
  SET_PARTICIPENTS: "SET_PARTICIPENTS",
};
const reducer = (state: InitialState, action: ActionType) => {
  switch (action.type) {
    case actionTypes.SET_PARTICIPENTS:
      return {
        ...state,
        participents: action.participents,
      };
    default:
      return state;
  }
};
export default reducer;
