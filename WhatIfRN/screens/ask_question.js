import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Keyboard
} from 'react-native';
import { NavigationActions } from 'react-navigation';
export default class AskQuestion extends Component {
  constructor(props){
    super(props);
    this.state = {
      question: "",
      disabled: false
    };
  }
  
  static navigationOptions = {
    header: null,
  }

  resetTo(routeName) {
    return NavigationActions.reset({
      index:0,
      actions: [
        NavigationActions.navigate({ routeName })
      ]
    });
  }

  handleSubmit = () => {
    this.setState({ disabled: true })
    console.log(this.props.user.id)
    Keyboard.dismiss()
    this.props.createQuestion({
      body: this.state.question,
      team_id: this.props.team.team.id,
      user_id: this.props.user.id
    }).then(() => {
      console.log("navigating", this.props);
      // if (Object.keys(this.props.questions).length === this.props.team.members) {
      //   return;
      // }
      this.props.navigation.dispatch(this.resetTo('QuestionLobby'));
    })
  }

  render() {
    return (
      <View
      style={styles.container}>
        <Text style={styles.question}>
          Write your question:
        </Text>
        <Text style={styles.whatIf}>
          What if...
        </Text>
        <View style={{width: "100%"}}>
          <TextInput
          onChangeText={question => this.setState({question})}
          value={this.state.question}
          multiline={true}
          autoFocus={true}
          blurOnSubmit={true}
          onSubmitEditing={this.handleSubmit}
          numberOfLines={ 4 }
          autoCapitalize={"none"}
          returnKeyType={'done'}
          style={{fontSize: 20, borderColor: 'rgb(100,100,100)', borderWidth: 1, marginBottom: 20}}/>
        </View>
        <View style={styles.button}>
          <Button disabled={this.state.disabled} title="Submit Question" onPress={this.handleSubmit} />
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
  question: {
    textAlign: 'center',
    margin: 25,
    fontSize: 30
  },
  whatIf: {
    fontSize: 24,
    marginBottom: 20,
    color: 'black',
    alignSelf: 'flex-start'
  },
  button: {
    width: 150
  }
});