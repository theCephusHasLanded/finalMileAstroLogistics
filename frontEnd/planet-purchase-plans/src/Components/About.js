import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Image } from "react-bootstrap";
import cephusAvatar from "../assets/cephus.jpeg";
import ThemeContext from '../Components/ThemeContext';

function About() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div style={{ color: darkMode ? 'almond' : 'black', backgroundColor: darkMode ? '#333' : 'almond' }}>
      <div className="text-center">
      <h3>Follow Me on LinkedIn!</h3>
        <div className="d-flex justify-content-center">
          <div>
            <a
              href="https://www.linkedin.com/in/thecephus/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={cephusAvatar}
                alt="The Cephus"
                roundedCircle
                width="200"
              />
            </a>
            <p className="mt-2">
              <a
                href="https://www.linkedin.com/in/thecephus/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Christina Cephus
              </a>
            </p>
          </div>
        </div>
        <p>
          Welcome to Planet Purchase Plans! We're Christina and Cephus, two passionate
          software developers with a shared vision to revolutionize the final mile logistics industry.
          <br />
          <br />
          Our journey into software development began in different ways, but we
          both quickly fell in love with the process of creating and
          problem-solving. As we gained more experience, we found ourselves
          drawn to projects that had a positive impact on people's lives. That's
          when we decided to combine our skills and start Planet Purchase Plans.
          <br />
          <br />
          Our mission is to provide a platform that makes it easy for people to
          explore and purchase planets for their interstellar adventures. We believe that the wonders of the universe should be accessible to everyone, and that's why we've created a platform that's intuitive, informative, and inspiring.
          <br />
          <br />
          One of the things we're most proud of is our commitment to sustainability. We believe that as we venture into space, it's crucial to prioritize responsible practices that protect and preserve our celestial surroundings. That's why we partner with environmentally conscious space agencies and promote eco-friendly space travel.
          <br />
          <br />
          At Planet Purchase Plans, we're not just building a business, we're building a community of interstellar explorers. We're excited to connect with fellow space enthusiasts and provide them with an extraordinary experience of discovering and acquiring their very own celestial gems.
          <br />
          <br />
          Join us on this cosmic journey as we explore the final frontier together!
          <br />
          <br />
          Let's Reach for the Stars! 🚀
        </p>
      </div>
    </div>
  );
}

export default About;
