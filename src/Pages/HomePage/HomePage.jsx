import './HomePage.scss';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div className="home-page">
            <Link to={'/gamepage'}><button className="home-page__button">
                Start
            </button></Link>
        </div>
    )
}

export default HomePage