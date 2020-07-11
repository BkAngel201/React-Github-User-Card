import React from 'react';

function UserInfo(props) {

const handleOnCLickExpandBtn = (e) => {
    let parent = e.target.parentNode
    parent.classList.toggle('expand')
    
}

    return (
        <div class="card">
            <img src={props.userData.avatar_url === null ? "No Data" :props.userData.avatar_url} />
            <div class="card-info">
                <h3 class="name">{props.userData.name === null ? "No Data" : props.userData.name}</h3>
                <p class="username">{props.userData.login === null ? "No Data" : props.userData.login}</p>
                <p>Location: {props.userData.location === null ? "No Data" : props.userData.location}</p>
                <p>Profile:
                    <a href={props.userData.url}>{props.userData.url === null ? "No Data" : props.userData.url}</a>
                </p>
                <p>Followers: {props.userData.followers === null ? "No Data" : props.userData.followers}</p>
                <p>Following: {props.userData.following === null ? "No Data" : props.userData.following}</p>
                <p>Bio: {props.userData.bio === null ? "No Data" : props.userData.bio}</p>
            </div>
            <img className="contribution" alt={`Contribution Chart ${props.userData.login}`} src={`https://ghchart.rshah.org/${props.userData.login}`} />
            <a className="expand-btn" onClick={handleOnCLickExpandBtn}>Contribution Graph</a>
        </div>
    )
}

export default UserInfo