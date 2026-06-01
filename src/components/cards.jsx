import { CiBookmark } from "react-icons/ci";

const cards = (prop) => {
  return (
    <div className = "card">
      <div className = "top">
        <div className="logo">
          <img src={prop.brandLogo}/>
        </div>
        <div className="icon">
          <CiBookmark /> <span>Saved</span>
        </div>
      </div>
      <div className ="centre">
        <div className="Cn">
         <h2>{prop.companyName}</h2><span>5 days ago</span>
        </div>
        <div className="post">
          <h1>{prop.post}</h1>
        </div>
        <div className="tags">
          <div className="tag1"> {prop.tag1}</div>
          <div className="tag2"> {prop.tag2}</div>
        </div>
      </div>
      <div className ="down">
        <div className="p1">
          <div className="salary">
            <h3>{prop.salary}</h3>
          </div>
          <div className="loc">{prop.location}</div>
        </div>
        <div className="p2"><button>Apply Now</button></div>
      </div>
    </div>
  )
}

export default cards