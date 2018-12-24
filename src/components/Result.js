import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';

function Result(props) {
  //You prefer <strong>{props.quizResult}</strong>!
  return (
    <CSSTransitionGroup
      className="container result"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
      <div class="video-container">
        <iframe width="853" height="480" src="https://www.youtube.com/embed/r0SocbXEal8?rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe>
      </div>
    </CSSTransitionGroup>
  );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired
};

export default Result;
