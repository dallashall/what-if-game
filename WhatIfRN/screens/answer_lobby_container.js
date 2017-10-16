import { connect } from 'react-redux';
import AnswerLobby from './answer_lobby';
import { setOrdinal } from '../actions/arrangement_actions';

const mapState = ({ user, cable, team, questions, screen, answers }) => ({
  cable,
  user,
  team,
  questions,
  screen,
  answers
});

const mapDispatch = (dispatch) => ({
  setOrdinal: ordinal => dispatch(setOrdinal(ordinal)),
  dispatch: action => dispatch(action)
 });

export default connect(mapState, mapDispatch)(AnswerLobby);
