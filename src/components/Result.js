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
      <div>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScZuXbaC4jKerw2Q9hyunKorE8b8I3rNbt_XtV8ejJ48yoxIw/viewform?embedded=true" width="640" height="1015" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
      </div>
    </CSSTransitionGroup>
  );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired
};

export default Result;
