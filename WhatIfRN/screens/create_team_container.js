import { connect } from 'react-redux';
import CreateTeam from './create_team';
import {
  createTeam,
  receiveTeam
 } from '../actions/team_actions';

const mapState = ({cable, all}) => ({
  cable,
  all
});

const actions = (dispatch) => ({
  createTeam: () => dispatch(createTeam()),
  receiveTeam: team => dispatch(receiveTeam(team))
});

export default connect(mapState, actions)(CreateTeam);
