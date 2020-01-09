import { connect } from "react-redux";
import CommentList from "./CommentList";

const mapStateToProps = state => ({
  messages: state.chat.messages
});

export default connect(mapStateToProps)(CommentList);
