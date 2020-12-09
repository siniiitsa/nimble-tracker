import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import './AddTracker.less';

const AddTracker = () => {
  return (
    <form className="AddTracker">
      <div className="frame">
        <input className="field" type="text" placeholder="Enter tracker name" />
        <button className="btn" type="submit">
          <FontAwesomeIcon className="icon" icon={faPlayCircle} />
        </button>
      </div>
    </form>
  );
};

export default AddTracker;
