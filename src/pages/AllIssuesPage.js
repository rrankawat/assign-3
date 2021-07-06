import React, { Component } from 'react'
import IssuesList from '../components/IssuesList'

class AllIssuesPage extends Component {
  state = {
    issues: [],
  }

  async componentDidMount() {
    const res = await fetch('/issues')
    const data = await res.json()
    this.setState({ issues: data })
  }

  render() {
    return (
      <>
        <h1>Issue List</h1>
        <IssuesList issues={this.state.issues} />
      </>
    )
  }
}

export default AllIssuesPage
