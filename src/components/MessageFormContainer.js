// import React from "react";
// import { connect } from "react-redux";

// const FormContainer = props => (
//   <ul>
//     {props.movies.list.map(movie => (
//       <li key={uuid()}>{movie}</li>
//     ))}
//   </ul>
// );

// const mapStateToProps = state => ({
//   movies: state.movies
// });

// export default connect(mapStateToProps, {})(FormContainer);

import { connect } from "react-redux";
import MessageForm from "./MessageForm";
import { messageActions } from "../app/messages/duck";

const mapDispatchToProps = dispatch => ({
  add: newComment => dispatch(messageActions.addComment(newComment))
});

export default connect(null, mapDispatchToProps)(MessageForm);
