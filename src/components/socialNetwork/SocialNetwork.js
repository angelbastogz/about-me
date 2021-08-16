// styles
import './SocialNetwork.scss';

export default function SocialNetworkComponent(props) {
  const { logo, url, description } = props;

  return (
    <div className="social-network">
      <a href={ url }>
        <img src={ logo } alt={ description } />
      </a>
    </div>
  );
}
