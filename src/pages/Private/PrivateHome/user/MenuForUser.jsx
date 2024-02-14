import React from 'react'
import NavigateLink from '../../../../components/NavigateLink';
import SearchPage from '../../../../components/SearchPage'
import DishList from '../../../../service/DataDishList'

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
              <DishList />
            </div>
        </div>
      </div>
    </>
  )
}