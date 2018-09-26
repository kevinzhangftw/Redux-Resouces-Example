import React, {Component} from 'react';
import { connect } from 'react-redux'
import MainScreen from './MainScreen'
// import fetchQuizzes from '../actions/quizzes'
import fetchResources from '../actions/resources'

type Props = {};
class MainScreenContainer extends Component<Props> {
  render() {
    const queryString = `https://opentdb.com/api.php?amount=5&difficulty=hard&type=boolean`
    const handlePress = () => this.props.dispatch(fetchResources('quizzes', 'fetchQuizzes', queryString))
    return (
        <MainScreen onPress={handlePress} />
    );
  }
}

export default connect()(MainScreenContainer)
