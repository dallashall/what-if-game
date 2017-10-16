import { connect } from 'react-redux';
import AskQuestion from './ask_question';
import { createQuestion } from '../actions/question_actions';

const mapState = ({ user, cable, team }) => ({
  cable,
  user,
  team
});

const mapDispatch = (dispatch) => ({
  createQuestion : (code) => dispatch(createQuestion(code)),
  dispatch: action => dispatch(action)
 });

export default connect(mapState, mapDispatch)(AskQuestion);
