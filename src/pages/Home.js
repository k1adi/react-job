import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './../style/main.scss';
import AppNavbar from '../components/navbar';
import AppFooter from '../components/footer';
import JobSource from '../data/job-source';

const HomePage = () => {
  const [jobs, setJobs] = useState([]);
  const descRef = useRef();
  const locationRef = useRef();

  useEffect(() => {
    JobSource.getJobList().then((result) => {
      setJobs(result);
    });
  }, []);

  const JobList = () => {
    return jobs.map((job, index) => {
      return (
        <Link to={`positions/${job.id}`} key={index} className="Card--lists">
          <div className="Card__title">
            <h4>{job.title}</h4>
            <p>{job.location}</p>
          </div>
          <div className="Card__desc">
            <p>{job.company} - <span className="text-green">{job.type}</span></p>
          </div>
        </Link>
      );
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    JobSource.filterJobList({
      desc: descRef.current.value, 
      location: locationRef.current.value
    })
    .then((result) => {
      setJobs(result);
    });
  };

  return (
    <div className="App">
      <AppNavbar />
      <div className="App-content">
        <form onSubmit={handleSubmit} className="Card--filter">
          <div className="Filter--title">
            <label htmlFor="title" className="Filter__label">Job Title</label>
            <input ref={descRef} type="text" className="Filter__input" name="title" id="title" placeholder="Filter by Title Position"/>
          </div>
          <div className="Filter--location">
            <label htmlFor="location" className="Filter__label">Location</label>
            <input ref={locationRef} type="text" className="Filter__input" name="location" id="location" placeholder="Filter by City"/>
          </div>
          <div className="Filter--button">
            <button className="btn-submit">Search</button>
          </div>
        </form>
        <div className="Card--content">
          <JobList />
        </div>
      </div>
      <AppFooter />
    </div>
  );
};

export default HomePage;
