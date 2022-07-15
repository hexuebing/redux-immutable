import { fromJS } from "immutable";
// import { ADD_TODO } from "./action";
import createReducer from "./createReducer";
const initialState = fromJS({
  items: {
    id: 1,
    title: "default title",
    data: {
      nestVal: "default data"
    }
  }
});

export default createReducer(initialState, {
  ADD_TODO: (state, action) => {
    console.log(action.payload);
    state = state.setIn(["items", "title"], action.payload.title);
    state = state.setIn(
      ["items", "data", "nestVal"],
      action.payload.data.nestVal
    );

    return state;
  }
});
