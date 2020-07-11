import React from 'react';
import UserInfo from './UserInfo'

function Followers (props) {
    
    
    return (
        <>
            <h4>Followers:</h4>
            {props.followers.map(item => (
                <UserInfo userData={item}/>
            ))}
        </>
    )
}

export default Followers