import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Alert} from 'react-native';
import { connect } from 'react-redux'
// import fetchQuizzes from '../actions/quizzes'
import fetchResources from '../actions/resources'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
class MainScreen extends Component<Props> {
  render() {
    const queryString = `https://opentdb.com/api.php?amount=5&difficulty=hard&type=boolean`
    return (
      <View style={styles.container}>
        <Button title='get some quizzes' onPress={() => this.props.dispatch(fetchResources('quizzes', 'fetchQuizzes', queryString))} />
        {/* <Button title='get some quizzes' onPress={() => this.props.dispatch(fetchQuizzes(10, 'hard', 'boolean'))} /> */}
      </View>
    );
  }
}

export default connect()(MainScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
