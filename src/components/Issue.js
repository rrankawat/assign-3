import React from 'react';
import PropTypes from 'prop-types';

const Issue = ({ issue }) => {
  return (
    <tr>
      <td>{issue.id}</td>
      <td>{issue.description}</td>
      <td>{issue.severity}</td>
      <td>{issue.status}</td>
    </tr>
  );
};

Issue.propTypes = {
  issue: PropTypes.object.isRequired,
};

export default Issue;
