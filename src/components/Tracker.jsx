import React from 'react';
import { useDispatch } from 'react-redux';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle, faPauseCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import { removeTracker } from '../store/trackers';
import './Tracker.less';

const Tracker = ({ tracker }) => {
  const { id, name, on, time, empty } = tracker;
  const dispatch = useDispatch();

  const trackerClasses = cn({
    Tracker: true,
    data: !empty,
    on: on,
  });

  const handleRemoveTracker = () => {
    dispatch(removeTracker({ id }));
  };

  return (
    <li className={trackerClasses}>
      {!empty && (
        <>
          <div className="name">{name}</div>
          <div className="time">{time}</div>
          <div className="btns">
            <button className="btn control">
              <FontAwesomeIcon icon={on ? faPauseCircle : faPlayCircle} />
            </button>
            <button className="btn remove" onClick={handleRemoveTracker}>
              <FontAwesomeIcon icon={faMinusCircle} />
            </button>
          </div>
        </>
      )}
    </li>
  );
};

Tracker.propTypes = {
  tracker: PropTypes.object.isRequired,
};

export default Tracker;
