import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';
import MainScreen from './MainScreen';
import { fetchQuizzes } from '../actions/quizzes';

export default compose(
  connect(null, { fetchQuizzes }),
  withHandlers({
    onPress: ({fetchQuizzes}) => fetchQuizzes
  })
)(MainScreen)
