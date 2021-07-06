import React from 'react'
import Issue from './Issue'
import PropTypes from 'prop-types'

const IssuesList = ({ issues }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Issue Description</th>
          <th>Severity</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        {issues.map((issue) => (
          <Issue key={issue.id} issue={issue} />
        ))}
      </tbody>
    </table>
  )
}

IssuesList.propTypes = {
  issues: PropTypes.array.isRequired,
}

export default IssuesList
