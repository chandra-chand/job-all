import Header from '../Header'

import './index.css'

const Home = () => (
  <div className="home-container">
    <Header />
    <div className="text-container">
      <h1 className="head">Find The Job That Fits Your Life</h1>
      <p className="para">
        Millions of people are searching for jobs, salary information, company
        reviews.Find the job that fits your abilities and potential.
      </p>
      <button className="job-button" type="button">
        Find Jobs
      </button>
    </div>
  </div>
)
export default Home
