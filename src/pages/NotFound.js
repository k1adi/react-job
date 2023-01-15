import './../style/main.scss';
import { Link } from 'react-router-dom';
import AppNavbar from '../components/navbar';
import AppFooter from '../components/footer';

const NotFound = () => {  
  return (
    <div className="App">
      <AppNavbar />
        <div className="App-content" id="appError">
          <div>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <Link to="/" className="text-link">Back to home</Link>
          </div>
        </div>
      <AppFooter />
    </div>
  );
};

export default NotFound;
