export default (initialState, handlers) => (state = initialState, action) => {
  console.log("action3435", action);
  console.log("handler", handlers);
  const handler = handlers[action.type];
  if (handler) {
    return handler(state, action);
  }
  return state;
};
