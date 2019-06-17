import React from 'react'
import styled from 'styled-components'
import Colors from './../api/Colors'


const LoggedInUsersWrapper = styled.div(props => ({
  background: props.background,
  border: 'solid 1px black',
  width: '12em',
  padding: '0.1em'
}))

const UserInfo = styled.div(props => ({
  padding: '0.5em',
  background: props.background
}))

const LoggedInUsers = (props) => {
  // console.log('LoggedInUsers props: ', props)
  const loggedinUsersList = props.loggedInUsers.map( x => 
      <div key={x.number}>
            <UserInfo 
              background={x.color || ''}
              onClick={() => props.setCurrentUser(x)}
            >
              Name: {x.userName}<br />
              Personalnummer: {x.number}<br />
              Farbe: {x.color || ''}
            </UserInfo>
            <Colors 
              setUserColor={props.setUserColor}
              userNumber={x.number}
            />
      </div>
    )
  return  <LoggedInUsersWrapper> 
            <h3>angemeldete Bediener</h3>
            {loggedinUsersList}
          </LoggedInUsersWrapper>
}


export default LoggedInUsers