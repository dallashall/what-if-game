import { connect } from 'react-redux';
import JoinGame from './join_game';
import { joinGame } from '../actions/team_actions';

const mapState = ({ all, cable }) => ({
  all, cable
});

const mapDispatch = (dispatch) => ({
  joinGame : (code) => dispatch(joinGame(code)) });

export default connect(mapState, mapDispatch)(JoinGame);
