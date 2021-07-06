import React, { useState, useEffect } from 'react'
import IssuesList from '../components/IssuesList'

const AllIssuesPage = () => {
  const [issues, setIssues] = useState([])

  useEffect(() => {
    const getIssues = async () => {
      const res = await fetch('/issues')
      const data = await res.json()
      setIssues(data)
    }
    getIssues()
  }, [])

  return (
    <>
      <h1>Issue List</h1>
      <IssuesList issues={issues} />
    </>
  )
}

export default AllIssuesPage
