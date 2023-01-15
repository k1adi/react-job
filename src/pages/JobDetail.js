import './../style/main.scss';
import brokenImage from '../broken-image.jpg';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import AppNavbar from '../components/navbar';
import AppFooter from '../components/footer';
import JobSource from '../data/job-source';

const JobDetail = () => {
  const [job, setJob] = useState([]);
  const { positionId } = useParams();

  useEffect(() => {
    JobSource.getDetailJob(positionId).then((result) => {
      setJob(result);
    });
  }, []);

  const JobDetail = () => {
    console.log(job);
    return(
      <div className="Card--detail">
        <div className="Card--detail__head">
          <p><span className="text-green">{job.type}</span> / {job.location}</p>
          <h1>{job.title}</h1>
        </div>
        <div className="Card--detail__content">
          <div className="Card--detail__desc">
            <div dangerouslySetInnerHTML={{ __html: job.description }}></div>
          </div>
          <div className="Card--detail__info">
            <img src={job.company_logo} alt="Company logo" />
            <h4>{job.company}</h4>

            <div className="Card--detail__apply">
              <h4>How to apply</h4>
              <p>Follow this link:</p>
              <div dangerouslySetInnerHTML={{ __html: job.how_to_apply }}></div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="App">
      <AppNavbar />
      <div className="App-content">
        <Link to="/" className="text-link">Back to Home</Link>
        <JobDetail />
      </div>
      <AppFooter />
    </div>
  );
};

export default JobDetail;
