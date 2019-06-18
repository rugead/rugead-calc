import React from 'react'
import styled from 'styled-components'
import Colors from './../api/Colors'


const LoggedInUsersWrapper = styled.div(props => ({
  background: props.background,
  border: 'solid 1px black',
  width: '20em',
  padding: '0.5em'
}))

const UserInfo = styled.div(props => ({
  padding: '0em',
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
        Name:<br />{x.userName}
        Personalnummer:<br />{x.number}
        Farbe:<br />{x.color || ''}
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