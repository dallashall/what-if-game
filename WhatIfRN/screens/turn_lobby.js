import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

export default class TurnLobby extends Component {
  constructor(props){
    super(props);
    this.state = {
    
    };
  }

  nextPlayer = () => {
    this.props.setOrdinal({
      ordinal: this.props.arrangement.ordinal + 1,
      code: this.props.team.team.code
    });
  };

  readOrWait = () => {
    const { arrangement, ordinal } = this.props.arrangement;
    const { user } = this.props;
    return arrangement[ordinal][user.id] ? (
      <View>
          {arrangement[ordinal][user.id].question_id ? (
            <Text>
              Then...
            </Text>
          ) : (
            <Text>
              What if...
            </Text>
          )}
        <Text>
          {arrangement[ordinal][user.id].body}
        </Text>
        <Button title="Done Reading" onPress={this.nextPlayer} />
      </View>
    ) : (
      <View>
        <Text>
          Waiting for turn.
        </Text>
      </View>
    );
  };

  render() {
    console.log('turnLobby', this.props);
    return (
      <View>
        {this.readOrWait()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  styleName: {
    flex: 1,
  },
});