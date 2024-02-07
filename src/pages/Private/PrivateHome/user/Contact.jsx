import React from 'react'
import NavigateLink from '../../../../components/NavigateLink';
import ContatPage from '../../../../components/ContactPage'

export default function Contact() {
  return (
    <>
      <div>
        <div>
          <NavigateLink />
        </div>
        <div style={{ marginLeft: '120px' }} id='space-data'>
          <ContatPage />
        </div>
      </div>
    </>
  )
}