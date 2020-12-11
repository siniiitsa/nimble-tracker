import React from 'react';
import Tracker from './Tracker';
import './TrackersList.less';

const trackers = [
  { id: 1, name: 'Tracker with a very long name', time: '11:00:55', on: true },
  { id: 2, name: 'Tracker with a short name', time: '11:00:55', on: false },
];

const prepareTrackers = (trackers = [], outputLength = 0) => {
  if (trackers.length >= outputLength) return trackers;
  const emptyTrackers = Array(outputLength).fill({ empty: true });
  return [...trackers, ...emptyTrackers].slice(0, outputLength);
};

const TrackersList = () => {
  const preparedTrackers = prepareTrackers(trackers, 5);

  return (
    <ul className="TrackersList">
      {preparedTrackers.map((tracker, index) => (
        <Tracker key={index} tracker={tracker} />
      ))}
    </ul>
  );
};

export default TrackersList;
