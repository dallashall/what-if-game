import { connect } from 'react-redux';
import CreateTeam from './create_team';
import {
  createTeam,
  startGame
 } from '../actions/team_actions';

const mapState = ({cable, team, screen}) => ({
  screen,
  cable,
  team
});

const actions = (dispatch) => ({
  createTeam: () => dispatch(createTeam()),
  startGame: (code) => dispatch(startGame(code)),
  dispatch: action => dispatch(action)
});

export default connect(mapState, actions)(CreateTeam);
