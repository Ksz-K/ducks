import { connect } from "react-redux";
import Comment from "./Comment";
import { messageActions } from "../app/messages/duck";

const mapDispatchToProps = dispatch => ({
  plus: id => dispatch(messageActions.thumUp(id)),
  minus: id => dispatch(messageActions.thumDown(id))
});

export default connect(null, mapDispatchToProps)(Comment);
