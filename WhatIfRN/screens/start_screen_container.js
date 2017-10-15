import { connect } from 'react-redux';
import StartScreen from './start_screen';
import { createTeam } from '../actions/team_actions';

const mapState = ({cable, all}) => ({
  cable
});

const actions = (dispatch) => ({ createTeam: () => dispatch(createTeam()) });

export default connect(mapState, actions)(StartScreen);
