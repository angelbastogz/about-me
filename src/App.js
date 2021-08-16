// Style
import './App.scss';
// Constants
import SOCIAL_NETWORKS from './constants/socialNetworks';
// Components
import SocialNetworkComponent from './components/socialNetwork/SocialNetwork';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>
          Angel Basto González
        </h2>
        <code>Frontend Developer</code>
        <div className="social-networks">
          {
            SOCIAL_NETWORKS.map((socialNetwork) => (
              <SocialNetworkComponent
                key={ socialNetwork.description }
                url={ socialNetwork.url }
                logo={ socialNetwork.logo }
                description={ socialNetwork.description }
              />
            ))
          }
        </div>
      </header>
    </div>
  );
}


export default App;
