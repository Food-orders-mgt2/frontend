import React from 'react'
import NavigateLink from '../../../../components/NavigateLink';
import CommandeNourriture from '../../../../components/CommandeNourriture';

export default function Commande() {
  return (
    <>
      <div>
        <div>
          <NavigateLink />
        </div>
        <div style={{ marginLeft: '120px' }} id='space-data'>
          <CommandeNourriture />
        </div>
      </div>
    </>
  )
}