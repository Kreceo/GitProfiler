import { useEffect, useState } from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css'

const Background = styled.div`
  :after {
    background: no-repeat 25vw 40vh / 30vw url("https://assets.codepen.io/518555/blobSolid.svg");
    content: '';
    height: 100%;
    left: 0;
    opacity: 0.8;
    position: fixed;
    top: 0;
    width: 100%; 
  }

  & {
    align-items: center;
    background-color: #fff8e7;
    color: #545454;
    justify-content: center;
    position: relative;
  }

  :before {
    background: no-repeat 23vw 30vh   
    url("https://assets.codepen.io/518555/sparkles1.svg"), no-repeat right 25vw bottom 30vh 
    url("https://assets.codepen.io/518555/sparkles4.svg"), no-repeat 40vw 30vh / 35vw 
    url("https://assets.codepen.io/518555/blobStripe.svg");
    content: '';
    height: 100%;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%; 
  } 
`

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

export default function App() {

    function Gitprofile({login}) {
        const [data, setData] = useState(null);
        
        useEffect(() => {
            fetch(`https://api.github.com/users/${login}`)
            .then(res => res.json())
            .then(setData)
            .catch(console.error);
        }, []);
        
        console.log(JSON.stringify(data));
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
                            <span className="profile-description">Last updated: {new Date(data.updated_at).toLocaleString('en-US', {hour12: false})}</span>
                        </div>
                    </div>
                </Profile>
                </>
            )
        }
        return null;
    }

    return (
        <>
        <Background>
            <h1>Check out everyones repo: </h1>
            <h4>Theres a lot of interesting ones you can find</h4>
            <div className="d-flex flex-wrap ">
                <Gitprofile login="kreceo"/>
                <Gitprofile login="chrisbarberriley"/>
                <Gitprofile login="dgowing95"/>
                <Gitprofile login="mattpetts"/>
                <Gitprofile login="philjhazell2"/>
                <Gitprofile login="chesterblack"/>
                <Gitprofile login="seanryy"/>
                <Gitprofile login="davidcoe-"/>
                <Gitprofile login="csgabka"/>
                <Gitprofile login="roryjgyoungs"/>
                <Gitprofile login="louisepemble"/>
                <Gitprofile login="connorlukedavies"/>
                <Gitprofile login="alejandrosanchezdiaz"/>
                <Gitprofile login="samaceville"/>
            </div>
        </Background>
        </>
    )
}
