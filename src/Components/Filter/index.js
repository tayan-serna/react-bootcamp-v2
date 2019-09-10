import React from 'react';
import PropTypes from 'prop-types';

const Filter = props => {
  return (
    <div className="App_label-group App_filter">
      <label>Filter:</label>
      <input value={props.filterValue} onChange={props.handleChange} />
    </div>
  );
};

Filter.propTypes = {
  handleChange: PropTypes.func.isRequired,
  filterValue: PropTypes.string.isRequired
};

export default Filter;
