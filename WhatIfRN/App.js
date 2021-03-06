import ActionCable from 'react-native-actioncable';
import React, { Component, PropTypes } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import RootReducer from './reducers/root_reducer';

const cable = ActionCable.createConsumer('ws://az-dallas.eastus.cloudapp.azure.com/cable');

const store = createStore(RootReducer, { cable }, applyMiddleware(thunk));

import StartScreen from './screens/start_screen_container';
import CreateTeam from './screens/create_team_container';
import JoinTeam from './screens/join_game_container';
import GameLobby from './screens/game_lobby_container';
import AskQuestion from './screens/ask_question_container';
import QuestionLobby from './screens/question_lobby_container';
import AnswerQuestion from './screens/answer_question_container';
import AnswerLobby from './screens/answer_lobby_container';
import TurnLobby from './screens/turn_lobby_container';
import Instructions from './screens/instructions';

const Nav = StackNavigator({
  Home: { screen: StartScreen },
  CreateTeam: { screen: CreateTeam },
  JoinTeam: { screen: JoinTeam },
  GameLobby: { screen: GameLobby },
  AskQuestion: { screen: AskQuestion},
  QuestionLobby: { screen: QuestionLobby },
  AnswerQuestion: { screen: AnswerQuestion },
  AnswerLobby: { screen: AnswerLobby },
  TurnLobby: { screen: TurnLobby },
  Instructions: { screen: Instructions },
});

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Nav />
      </Provider>
    );
  }
}
