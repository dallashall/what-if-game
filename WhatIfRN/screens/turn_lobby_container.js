import { connect } from 'react-redux';
import TurnLobby from './turn_lobby';
import { setOrdinal } from '../actions/arrangement_actions';

const mapState = ({ user, cable, team, questions, screen, arrangement }) => ({
  cable,
  user,
  team,
  arrangement,
  screen
});

const mapDispatch = (dispatch) => ({
  dispatch: action => dispatch(action),
  setOrdinal: ordinal => dispatch(setOrdinal(ordinal))
 });

export default connect(mapState, mapDispatch)(TurnLobby);
