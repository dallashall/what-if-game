import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Keyboard
} from 'react-native';

export default class AnswerQuestion extends Component {
  constructor(props){
    super(props);
    this.state = {
      answer: "",
      disabled: false
    };
  }

  static navigationOptions = {
    header: null,
  } 

  handleSubmit = () => {
    Keyboard.dismiss();
    this.setState({ disabled: true });
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
      <View style={styles.container}>
        <Text style={styles.whatIf}>
          What if...
        </Text>
        <Text style={styles.question}>
          ...{questions[user.id] ? questions[user.id].body : ""}
        </Text>
        <View style={styles.textBoxContainer}>
          <TextInput
          onSubmitEditing={this.handleSubmit}
          blurOnSubmit={true} multiline={true}
          onChangeText={answer => this.setState({answer})}
          value={this.state.answer}
          numberOfLines={4}
          style={styles.textBox}/>
        </View>
        <View style={styles.button}>
          <Button disabled={this.state.disabled} title="Submit Answer" onPress={this.handleSubmit} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  whatIf: {
    fontSize: 30,
    textAlign: "center",
    padding: 20
  },
  question: {
    fontSize: 20,
    alignSelf: 'flex-start',
    marginBottom: 20
  },
  textBoxContainer: {
    width: '100%'
  },
  textBox: {
    borderColor: 'rgb(100,100,100)',
    borderWidth: 1,
    marginBottom: 20
  },
  button: {
    width: 150
  }
});