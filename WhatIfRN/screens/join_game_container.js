import { connect } from 'react-redux';
import JoinGame from './join_game';
import { joinGame } from '../actions/team_actions';

const mapState = ({ user, cable }) => ({
  cable,
  user
});

const mapDispatch = (dispatch) => ({
  joinGame : (code) => dispatch(joinGame(code)),
  dispatch: action => dispatch(action)
 });

export default connect(mapState, mapDispatch)(JoinGame);
