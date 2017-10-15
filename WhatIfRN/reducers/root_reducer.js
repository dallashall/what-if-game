import { combineReducers } from 'redux';
import TeamReducer from './team_reducer';
import QuestionReducer from './question_reducer';
import ArrangementReducer from './arrangement_reducer';
import AnswerReducer from './answer_reducer';

export default combineReducers({
  team: TeamReducer,
  questions: QuestionReducer,
  answer: AnswerReducer,
  arrangement: ArrangementReducer,
  cable: (state = {}) => {return state;},
});
