import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';
import Question from '../components/Question';
import QuestionCount from '../components/QuestionCount';
import AnswerOption from '../components/AnswerOption';

function Quiz(props) {

  console.log("props from Quiz function" + props.questionImage)
  function renderAnswerOptions(key) {
    return (
      <AnswerOption
        key={key.content}
        answerContent={key.content}
        answerType={key.type}
        answer={props.answer}
        questionId={props.questionId}
        onAnswerSelected={props.onAnswerSelected}
      />
    );
  }
  //<QuestionCount counter={props.questionId} total={props.questionTotal} />

  /* 
  <CSSTransitionGroup
  className="container"
  component="div"
  transitionName="fade"
  transitionEnterTimeout={800}
  transitionLeaveTimeout={500}
  transitionAppear
  transitionAppearTimeout={500}>
  </CSSTransitionGroup>
  */
  return (
    
      
      <div key={props.questionId}>
        
        <Question content={props.question} image={props.questionImage} />
          <div class="row">
            <div class="col m3 offset-m4">
              <div class="card">
                <div class="card-image">
                  <img src={props.questionImage}/>
                </div>
                <div class="card-content">
                  <span class="card-title">{props.question}</span>
                  <ul>
                      {props.answerOptions.map(renderAnswerOptions)}
                  </ul>
                </div>
              </div>
            </div>
          </div>
      </div>
    
  );
}

Quiz.propTypes = {
  answer: PropTypes.string.isRequired,
  answerOptions: PropTypes.array.isRequired,
  question: PropTypes.string.isRequired,
  questionId: PropTypes.number.isRequired,
  questionTotal: PropTypes.number.isRequired,
  onAnswerSelected: PropTypes.func.isRequired
};

export default Quiz;
