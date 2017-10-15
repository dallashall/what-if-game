import { combineReducers } from 'redux';
import TeamReducer from './team_reducer';
import QuestionReducer from './question_reducer';
import ArrangementReducer from './arrangement_reducer';
import AnswerReducer from './answer_reducer';
import UserReducer from './user_reducer';

export default combineReducers({
  team: TeamReducer,
  questions: QuestionReducer,
  answer: AnswerReducer,
  arrangement: ArrangementReducer,
  user: UserReducer,
  cable: (state = {}) => {return state;},
});
