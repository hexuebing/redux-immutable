import React, { useEffect } from "react";
import { connect } from "react-redux";
import { add_todo } from "./action";
const ParentComponent = props => {
  useEffect(() => {
    console.log("props", props.todos);
  }, [props.todos]);
  return (
    <div>
      <button onClick={() => props.add_todo()}>Click to Add </button>
    </div>
  );
};

const mapStateToProps = state => ({
  todos: state.item
});

export default connect(
  mapStateToProps,
  { add_todo }
)(ParentComponent);
