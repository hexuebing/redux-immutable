import React, { useEffect } from "react";
import { connect } from "react-redux";
const ChildComponent = props => {
  useEffect(() => {
    console.log("props", props.todos);
  }, [props.todos]);
  return (
    <div>
      <h2>{props.title}</h2>
      <h3>{props.value}</h3>
    </div>
  );
};

const mapStateToProps = state => ({
  title: state.getIn(["items", "title"]),
  value: state.getIn(["items", "data", "nestVal"])
});

export default connect(
  mapStateToProps,
  {}
)(ChildComponent);
