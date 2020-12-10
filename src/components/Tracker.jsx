import React from 'react';
import cn from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle, faPauseCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import './Tracker.less';

const Tracker = ({ tracker }) => {
  const { name, on, time, empty } = tracker;

  const trackerClasses = cn({
    Tracker: true,
    data: !empty,
    on: on,
  });

  return (
    <div className={trackerClasses}>
      {!empty && (
        <>
          <div className="name">{name}</div>
          <div className="time">{time}</div>
          <div className="btns">
            <button className="btn control">
              <FontAwesomeIcon icon={on ? faPauseCircle : faPlayCircle} />
            </button>
            <button className="btn remove">
              <FontAwesomeIcon icon={faMinusCircle} />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Tracker;
