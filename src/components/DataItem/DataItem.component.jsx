import React from 'react';

const DataItem = ({ label, value }) => (
  <>
    {value && (
      <div>
        <strong>{`${label}:`}</strong>
        <span>{value}</span>
      </div>
    )}
  </>
);

export default DataItem;
