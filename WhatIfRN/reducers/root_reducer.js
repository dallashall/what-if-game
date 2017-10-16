import { combineReducers } from 'redux';
import TeamReducer from './team_reducer';
import QuestionReducer from './question_reducer';
import ArrangementReducer from './arrangement_reducer';
import AnswerReducer from './answer_reducer';
import UserReducer from './user_reducer';
import ScreenReducer from './screen_reducer';

export default combineReducers({
  team: TeamReducer,
  questions: QuestionReducer,
  answers: AnswerReducer,
  arrangement: ArrangementReducer,
  user: UserReducer,
  screen: ScreenReducer,
  cable: (state = {}) => {return state;},
});
