import React from 'react'
import styled from 'styled-components'
import { Button, Wrapper } from '../css/Buttons'

const SalesPeopleWrapper = styled(Wrapper)`
  flex-direction: column;
  background-color: darkgreen;
  width: 7em;
`;

const salesPeopleData = [
  { userName: 'verkäufer eins', number: '1111', color: '' },
  { userName: 'verkäufer zwei', number: '2222', color: '' },
  { userName: 'verkäufer drei', number: '3333', color: '' },
  { userName: 'verkäufer vier', number: '4444', color: '' },
]

const SalesPeople = (props) => {
  const salesPeopleList = salesPeopleData.map(x =>
    <Button key={x.number} onClick={() => props.onClick(x)} >
      {x.userName} 
    </Button>
  )
  return <SalesPeopleWrapper className="sales-people"> { salesPeopleList } </SalesPeopleWrapper>
 }

export {salesPeopleData}
export default SalesPeople