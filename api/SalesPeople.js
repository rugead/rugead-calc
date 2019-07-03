import React from 'react'
import styled from 'styled-components'
import { Button, Wrapper } from '../css/Buttons'

const SalesPeopleWrapper = styled(Wrapper)`
  background-color: lightgreen;
  width: 12em;

`;

const salesPeopleData = [
  { userName: 'verkäufer eins', number: '1111', color: '' },
  { userName: 'verkäufer zwei', number: '2222', color: '' },
  { userName: 'verkäufer drei', number: '3333', color: '' },
  { userName: 'verkäufer vier', number: '4444', color: '' },
]


const SalesPeople = (props) => {
  const salesPeopleList = salesPeopleData.map(x =>
    <div key={x.number} >
      Bedienername:<br />{x.userName }<br />Bedienernummer<br />{ x.number} 
    </div>
  )
  return <SalesPeopleWrapper className="sales-people"> Bitte Bedienernummer eingeben: { salesPeopleList } </SalesPeopleWrapper>
 }

export {salesPeopleData}
export default SalesPeople