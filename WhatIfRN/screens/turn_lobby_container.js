import { connect } from 'react-redux';
import QuestionLobby from './question_lobby';

const mapState = ({ user, cable, team, questions, screen, arrangement }) => ({
  cable,
  user,
  team,
  arrangement,
  screen
});

const mapDispatch = (dispatch) => ({
  dispatch: action => dispatch(action)
 });

export default connect(mapState, mapDispatch)(QuestionLobby);
