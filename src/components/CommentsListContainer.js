import { connect } from "react-redux";
import CommentsList from "./CommentsList";

const mapStateToProps = state => ({
  comments: state.messages
});

export default connect(mapStateToProps)(CommentsList);
