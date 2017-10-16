import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from 'react-native';

export default class AskQuestion extends Component {
  constructor(props){
    super(props);
    this.state = {
      question: ""
    };
  }

  handleSubmit = () => {
    console.log(this.props.user.id)
    this.props.createQuestion({
      body: this.state.question,
      team_id: this.props.team.team.id,
      user_id: this.props.user.id
    }).then(() => {
      console.log("navigating", this.props);
      if (Object.keys(this.props.questions).length === this.props.team.members) {
        return;
      }
      this.props.navigation.navigate('QuestionLobby');
    })
  }

  render() {
    return (
      <View>
        <Text>
          Write your question:
        </Text>
        <Text>
          What if...
        </Text>
        <TextInput onChangeText={question => this.setState({question})} value={this.state.question}/>
        <Button title="Submit Question" onPress={this.handleSubmit} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  styleName: {
    flex: 1,
  },
});