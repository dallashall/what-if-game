import { connect } from 'react-redux';
import CreateTeam from './create_team';
import {
  createTeam,
  receiveTeam
 } from '../actions/team_actions';

const mapState = ({cable, team}) => ({
  cable,
  team
});

const actions = (dispatch) => ({
  createTeam: () => dispatch(createTeam()),
  dispatch: action => dispatch(action)
});

export default connect(mapState, actions)(CreateTeam);
