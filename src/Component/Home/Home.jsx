import React from "react";
import "./home.css";

const Home = () => {
  return (
    <>
      <div className="header">
        <div className="container-head">
          <div className="head-content text-center">
            <h1>
              Every idea needs a <strong>Medium.</strong>
            </h1>
          </div>
        </div>

        <div className="home-content ">
          <div className=" row-first  ">
            <h4 className="description   ">
              The best ideas can change who we are. Medium is where those ideas
              take shape, take off, and spark powerful conversations. We’re an
              open platform where over 100 million readers come to find
              insightful and dynamic thinking. Here, expert and undiscovered
              voices alike dive into the heart of any topic and bring new ideas
              to the surface. Our purpose is to spread these ideas and deepen
              understanding of the world.
              <br />
              <br />
              We’re creating a new model for digital publishing. One that
              supports nuance, complexity, and vital storytelling without giving
              in to the incentives of advertising. It’s an environment that’s
              open to everyone but promotes substance and authenticity. And it’s
              where deeper connections forged between readers and writers can
              lead to discovery and growth. Together with millions of
              collaborators, we’re building a trusted and vibrant ecosystem
              fueled by important ideas and the people who think about them.
            </h4>
          </div>
          <div className="row-second">
            <iframe
              title="gif"
              src="https://player.vimeo.com/video/467834328?api=1&background=1&mute=1&loop=1"
              frameBorder="0"
              positioning="relative"
              width="100%"
              height="100%"
              allow="autoplay"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
