
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Profile = styled.div`
max-width: 400px;
background-color: #FFF;
border-radius: 5px;
box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.1);
overflow: hidden;
position: relative;
margin: 10px auto;
cursor: pointer;
z-index: 10;
& .profile-card {

    & a {
        color: inherit;
        text-decoration: none;
    }

    &:hover {
        & img {
            transform: rotate(5deg) scale(1.1, 1.1);
            filter: brightness(110%);
        }
    }

    & img {
        transition: all 0.25s linear;
        // min-height: 400px;
    }

    & .profile-content {
        position: relative;
        padding: 15px;
        background-color: #FFF;

        &:before {
            content: "";
            position: absolute;
            height: 20px;
            top: -10px;
            left: 0px;
            right: 0px;
            background-color: #FFF;
            z-index: 0;
            transform: skewY(3deg);
        }
    }

    & .profile-name {
        font-weight: bold;
        position: absolute;
        left: 0px;
        right: 0px;
        top: -70px;
        color: #FFF;
        font-size: 17px;

        & p {
            font-weight: 600;
            font-size: 13px;
            letter-spacing: 1.5px;
        }
    }

    & .profile-description {
        color: #777;
        font-size: 12px;
        padding: 10px;
    }

    & .profile-overview {
        padding: 15px 0px;

        & p {
            font-size: 10px;
            font-weight: 600;
            color: #777;
        }

        & h4 {
            color: #273751;
            font-weight: bold;
        }
    }
}
`

// Fetch the users data from the Github api
export default function Gitprofile({login}) {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`https://api.github.com/users/${login}`)
        .then(res => res.json())
        .then(setData)
        .catch(console.error);
    }, []);
    
    // If the data exists, then return it, otherwise return nothing
    if(data) {
        return (
            <>
            <Profile>
                <div className="profile-card text-center">
                    <img src={data.avatar_url} className="img img-responsive" />
                    <div className="profile-content">
                        <div className="profile-name">
                            {data.name}
                            <a href={data.html_url} target="_blank">
                                <p>@{data.login}</p>
                            </a>
                        </div>
                        <div className="profile-description">
                            {data.bio}
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="profile-overview">
                                    <a href={`https://github.com/${data.login}?tab=repositories`} target="_blank">
                                        <p>Public Repos</p>
                                        <h4>{data.public_repos}</h4>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="profile-overview">
                                    <p>Followers</p>
                                    <h4>{data.followers}</h4>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="profile-overview">
                                    <p>Following</p>
                                    <h4>{data.following}</h4>
                                </div>
                            </div>
                        </div>
                        <span className="profile-description">Last updated: 
                            {new Date(data.updated_at).toLocaleString('en-GB', {hour24: false})}
                        </span>
                    </div>
                </div>
            </Profile>
            </>
        )
    }
    return null;
}