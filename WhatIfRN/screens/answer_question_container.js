import { connect } from 'react-redux';
import AnswerQuestion from './answer_question';
import { createAnswer } from '../actions/answer_actions';

const mapState = ({ user, cable, team, questions, answers }) => ({
  cable,
  user,
  team,
  questions,
  answers
});

const mapDispatch = (dispatch) => ({
  createAnswer : (answer) => dispatch(createAnswer(answer)),
  dispatch: action => dispatch(action)
 });

export default connect(mapState, mapDispatch)(AnswerQuestion);
