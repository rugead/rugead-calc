import React from 'react'
import styled from 'styled-components'
import Colors from './../api/Colors'


const LoggedInUsersWrapper = styled.div(props => ({
  background: props.background,
  width: '12em',
}))

const UserInfo = styled.div(props => ({
  padding: '0em 0em 1em 0em',
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
        Nr: {x.number}<br />
        Farbe: {x.color || 'bitte wählen'}<br />
      </UserInfo>

        <Colors 
          setUserColor={props.setUserColor}
          userNumber={x.number}
        />
    </div>
    )
  return  <LoggedInUsersWrapper> 
            {<h3>keine Bediener angemeldet</h3> || loggedinUsersList}
          </LoggedInUsersWrapper>
}


export default LoggedInUsers