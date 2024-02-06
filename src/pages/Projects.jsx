import "./Details.css";

import youths from "../images/youths.jpg";
import teen from "../images/teen.jpg";
import handshake from "../images/handshake.jpg";
import father from "../images/father.jpg";
import freedom from "../images/freedom.jpg";

const Projects = () => {
  return (
    <>
      <div className=" details">
        <div className=" detailsBox">
          <h2>Projects</h2>

          <img className=" projectImg" src={youths} alt="projectImg" />

          <h2>Youth Minitry</h2>
          <p>Our Younth is our future, keep them well.</p>

          <img className=" projectImg" src={teen} alt="projectImg" />

          <h2>Children Schoolarship</h2>
          <p>Your child Education is key to their development</p>

          <img className=" projectImg" src={handshake} alt="projectImg" />

          <h2>Falicitation </h2>
          <p>We are what we present to people</p>
          <img className=" projectImg" src={father} alt="projectImg" />

          <h2>Parenting Advocacy</h2>
          <p>Like father like son or mother like daughter</p>
          <img className=" projectImg" src={freedom} alt="projectImg" />

          <h2>Charity </h2>
          <p>Giving is a life style of great minds</p>
        </div>
      </div>
    </>
  );
};
export default Projects;
