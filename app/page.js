import SearchJob from './components/SearchJob'; 
import Advertisment from './components/Advertisment';
import LatestJobs from './components/LatestJobs';

export default function HomePage() { 
  return ( 
    <>
      <section className="search_job"> 
         <SearchJob />
      </section>
      <section className="partners"> 
         <Advertisment />
      </section> 
      <section className="lastest_jobs"> 
         <LatestJobs />
      </section>       
    </> 
  );
}