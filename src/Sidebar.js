import React, { Component } from "react";
import * as actionCreators from "./store/actions";
import { connect } from "react-redux";
class Sidebar extends Component {
  render() {
    return (
      <div id="sidebar">
        <img src="theindex.svg" className="logo" alt="the index logo" />
        <section>
          <h4 className="menu-item active">
            <button>AUTHORS</button>
          </h4>
          <h4 className="menu-item">
            <button onClick={() => this.props.onAddAuthor()}>
              + ADD AUTHOR
            </button>
          </h4>
        </section>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddAuthor: () => dispatch(actionCreators.addAuthor())
  };
};
export default connect(
  null,
  mapDispatchToProps
)(Sidebar);
