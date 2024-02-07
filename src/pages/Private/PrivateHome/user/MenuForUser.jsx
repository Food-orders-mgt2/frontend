import React from 'react'
import NavigateLink from '../../../../components/NavigateLink';
import SearchPage from '../../../../components/SearchPage'
import CardForProduct from '../../../../components/CardProduct';

export default function Menu() {
  return (
    <>
      <div>
        <div>
          <NavigateLink />
        </div>
        <div style={{ marginLeft: '120px' }} id='space-data'>
          <SearchPage />
          <div className='row gap-2'>
            <CardForProduct />
            <CardForProduct />
            <CardForProduct />
            <CardForProduct />
          </div>
        </div>
      </div>
    </>
  )
}