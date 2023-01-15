import { Link } from 'react-router-dom';

const AppNavbar = () => {
  return (
    <header className="nav">
      <nav className="nav-wrapper">
        <Link to='/'>
          <h1>React<span>JOB</span></h1>
        </Link>
        <a href="#">Login</a>
      </nav>
    </header>
  );
};

export default AppNavbar;
