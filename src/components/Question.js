import React from 'react';
import PropTypes from 'prop-types';

function Question(props) {
  console.log(props)
  return ( 
    <div>
      <h2 className="question"> {props.content}  </h2> <img src={props.image}/>
    </div>
  );
  
}

Question.propTypes = {
  content: PropTypes.string.isRequired
};

export default Question;
