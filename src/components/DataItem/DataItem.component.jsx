import React from 'react';

const DataItem = ({ label, value, className }) => (
  <>
    {value && (
      <div className={className}>
        <strong>{`${label}: `}</strong>
        <span>{value}</span>
      </div>
    )}
  </>
);

export default DataItem;
