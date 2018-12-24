import React from 'react';
import PropTypes from 'prop-types';

function Question(props) {
  console.log(props)
  return (<div></div>);
}

Question.propTypes = {
  content: PropTypes.string.isRequired
};

export default Question;
