export const ADD_TODO = "ADD_TODO";

export const add_todo = () => dispatch => {
  let item = {
    id: 1,
    title: "Cloudnweb",
    data: {
      nestVal: "Immutable Nested"
    }
  };
  console.log("action firing");
  dispatch({
    type: ADD_TODO,
    payload: item
  });
};
