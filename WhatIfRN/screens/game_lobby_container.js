import { connect } from 'react-redux';
import GameLobby from './game_lobby';
import {
  createTeam,
  receiveTeam
 } from '../actions/team_actions';

const mapState = ({cable, team, screen}) => ({
  cable,
  team,
  screen
});

const actions = (dispatch) => ({
  createTeam: () => dispatch(createTeam()),
  dispatch: action => dispatch(action)
});

export default connect(mapState, actions)(GameLobby);
