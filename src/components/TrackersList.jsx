import React from 'react';
import { useSelector } from 'react-redux';
import Tracker from './Tracker';
import './TrackersList.less';

const emptySlotsCount = 5;

const prepareTrackers = (trackers = [], outputLength = 0) => {
  if (trackers.length >= outputLength) return trackers;
  const emptyTrackers = Array(outputLength).fill({ empty: true });
  return [...trackers, ...emptyTrackers].slice(0, outputLength);
};

const TrackersList = () => {
  const trackers = useSelector((state) => state.trackers);

  const preparedTrackers = prepareTrackers(trackers, emptySlotsCount);

  return (
    <ul className="TrackersList">
      {preparedTrackers.map((tracker, index) => (
        <Tracker key={index} tracker={tracker} />
      ))}
    </ul>
  );
};

export default TrackersList;
