import { connect } from 'react-redux';
import QuestionLobby from './question_lobby';

const mapState = ({ user, cable, team, questions }) => ({
  cable,
  user,
  team,
  questions
});

const mapDispatch = (dispatch) => ({
  dispatch: action => dispatch(action)
 });

export default connect(mapState, mapDispatch)(QuestionLobby);
