import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css'
import Gitprofile from '../components/UserCard';

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

export default function App() {
    
    // Array of users to loop through  
    const users = [
      'kreceo',
      'chrisbarberriley',
      'dgowing95',
      'mattpetts',
      'philjhazell2',
      'chesterblack',
      'seanryy',
      'davidcoe-',
      'csgabka',
      'roryjgyoungs',
      'louisepemble',
      'connorlukedavies',
      'alejandrosanchezdiaz',
      'samaceville'
    ]

    return (
        <>
        <Background>
        <div class="container pt-4 px-0">
          <div class="jumbotron">
            <h1>Check out everyones repo:</h1>
            <p>Theres a lot of interesting ones you can find, from projects on React, Javascript, PHP and more</p>
          </div>
        </div>
        <div className="container px-0">
          <div className="d-flex flex-wrap ">
              {/* Looping through the array and returning a card/s with the data for the users */}
              {users.map(user =>
                <Gitprofile login={user}/>
              )}
          </div>
        </div>
        </Background>
        </>
    )
}
