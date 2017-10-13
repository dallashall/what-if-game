import { connect } from 'react-redux';
import CreateTeam from './create_team';
import { createTeam } from '../actions/team_actions';

const mapState = ({cable, all}) => ({
  cable,
  all
});

const actions = (dispatch) => ({ createTeam: () => dispatch(createTeam()) });

export default connect(mapState, actions)(CreateTeam);
