import React from 'react'
import styled from 'styled-components'
import Colors from './../api/Colors'


const LoggedInUsersWrapper = styled.div(props => ({
  background: props.background,
  border: 'solid 1px black',
  // height: '4em',
  width: '12em',
  padding: '0.1em'
}))

const UserInfo = styled.div(props => ({
  padding: '0.5em',
  background: props.background
}))

const LoggedInUsers = (props) => {
  console.log('LoggedInUsers props: ', props)
  const loggedinUsersList = props.loggedInUsers.map( x => 
      <div>
            <UserInfo 
              key={x.number}
              background={x.color || 'red'}
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
  return  <LoggedInUsersWrapper> {loggedinUsersList}</LoggedInUsersWrapper>
}


export default LoggedInUsers