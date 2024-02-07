import React from 'react'
import NavigateLink from '../../../../components/NavigateLink';
import Dashboard from '../../../../components/DashboardForUser';

export default function PrivateHome() {
  return (
    <>
      <div>
        <div>
          <NavigateLink />
        </div>
        <div style={{ marginLeft: '120px' }} id='space-data'>
          <Dashboard />
        </div>
      </div>
    </>
  )
}