import cards from './components/cards.jsx';
import { CiBookmark } from "react-icons/ci";
const jobOpenings = [
  {
    brandLogo: "google.png",
    companyName: "Google",
    datePosted: "2 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior",
    salary: "$32/hr",
    location: "Mumbai"
  },
  {
    brandLogo: "ms.png",
    companyName: "Microsoft",
    datePosted: "5 days ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Senior",
    salary: "$48/hr",
    location: "Bengaluru"
  },
  {
    brandLogo: "amazon.png",
    companyName: "Amazon",
    datePosted: "1 week ago",
    post: "UI/UX Designer",
    tag1: "Part Time",
    tag2: "Junior",
    salary: "$25/hr",
    location: "Jaipur"
  },
  {
    brandLogo: "netflix.png",
    companyName: "Netflix",
    datePosted: "3 days ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Senior",
    salary: "$55/hr",
    location: "Delhi"
  },
  {
    brandLogo: "spotify.png",
    companyName: "Spotify",
    datePosted: "6 days ago",
    post: "Product Designer",
    tag1: "Part Time",
    tag2: "Senior",
    salary: "$40/hr",
    location: "Pune"
  },
  {
    brandLogo: "adobe.png",
    companyName: "Adobe",
    datePosted: "4 days ago",
    post: "JavaScript Developer",
    tag1: "Full Time",
    tag2: "Junior",
    salary: "$30/hr",
    location: "Hyderabad"
  },
  {
    brandLogo: "bnb.png",
    companyName: "Airbnb",
    datePosted: "1 day ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Senior",
    salary: "$52/hr",
    location: "Chennai"
  },
  {
    brandLogo: "uber.png",
    companyName: "Uber",
    datePosted: "2 weeks ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Senior",
    salary: "$50/hr",
    location: "Kolkata"
  }
];
const App = () => {
  return (
    <div className='parent'>
    {jobOpenings.map(function(elem, idx){
     
     return cards(elem, idx)
    })}
      
    </div>
  )
}

export default App
