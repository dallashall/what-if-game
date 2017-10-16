import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from 'react-native';

export default class AnswerQuestion extends Component {
  constructor(props){
    super(props);
    this.state = {
      answer: ""
    };
  }

  handleSubmit = () => {
    const { team, user, questions, answers, navigation } = this.props;
    console.log(this.props.user.id)
    this.props.createAnswer({
      body: this.state.answer,
      team_id: team.team.id,
      user_id: user.id,
      question_id: questions[user.id].id
    }).then(() => {
      console.log("navigating", this.props);
      if (Object.keys(answers).length === Object.keys(questions).length) {
        navigation.navigate('TurnLobby');
      }
      navigation.navigate('AnswerLobby');
    });
  }

  render() {
    const { user, questions } = this.props;
    return (
      <View>
        <Text>
          {questions[user.id].body}
        </Text>
        <TextInput onChangeText={answer => this.setState({answer})} value={this.state.answer}/>
        <Button title="Submit Answer" onPress={this.handleSubmit} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  styleName: {
    flex: 1,
  },
});