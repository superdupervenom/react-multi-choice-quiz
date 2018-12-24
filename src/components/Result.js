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
  
    <div class="row">
      <div class="col m6 offset-m3">
        <div class="card">
          <div class="card-image">
            <div class="video-container"> 
              <iframe width="853" height="480" src="https://www.youtube.com/embed/Bweau5RYAe8?rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe> 
            </div>
          </div>
          <div class="card-content">
            <span class="card-title"> Merry Christmas Ludim. Thank you for all the joy and love you have brought into my life! Love, Bryson </span>
            
          </div>
        </div>
      </div>
    </div>

    </CSSTransitionGroup>
  );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired
};

export default Result;
