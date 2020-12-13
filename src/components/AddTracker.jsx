import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as dayjs from 'dayjs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { addTracker } from '../store/trackers';
import './AddTracker.less';

const AddTracker = () => {
  const [trackerName, setTrackerName] = useState('');
  const dispatch = useDispatch();

  const handleUpdateTrackerName = (e) => {
    setTrackerName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = trackerName.trim() || dayjs().format('[Started] DD/MM/YYYY [at] HH:mm:ss');
    dispatch(addTracker({ name }));
    setTrackerName('');
  };

  return (
    <form className="AddTracker" onSubmit={handleSubmit}>
      <div className="frame">
        <input
          className="field"
          type="text"
          onChange={handleUpdateTrackerName}
          placeholder="Enter tracker name"
          value={trackerName}
        />
        <button className="btn" type="submit">
          <FontAwesomeIcon className="icon" icon={faPlayCircle} />
        </button>
      </div>
    </form>
  );
};

export default AddTracker;
