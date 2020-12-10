import React from 'react';
import Tracker from './Tracker';
import './TrackersList.less';

const trackers = [
  { id: 1, name: 'Tracker wit a very long name', time: '11:00:55', on: true },
  { id: 2, name: 'Tracker wit a short name', time: '11:00:55', on: false },
];

const TrackersList = () => {
  return (
    <div className="TrackersList">
      {trackers.map(({ id, name, time, on }) => (
        <Tracker key={id} name={name} time={time} on={on} />
      ))}
    </div>
  );
};

export default TrackersList;
