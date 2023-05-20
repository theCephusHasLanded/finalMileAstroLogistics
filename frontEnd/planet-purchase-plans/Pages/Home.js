
import React from "react";
import { Container } from "react-bootstrap";

function Home() {
return (
<Container className="text-center">
<h2>Welcome</h2>
<h3>To Planet Purchase Plans!</h3>
<h6><i>"Explore, Discover, and Purchase Your Dream Planet!"</i></h6>
<div style={{ borderRadius: "10px", overflow: "hidden" }}>
<div style={{ width: "480px" }}>
<iframe
         src="https://giphy.com/embed/LERpNudtTGL9jNIFNl/video"
         width="480"
         height="480"
         frameBorder="0"
         allowFullScreen
         title="Planets GIF"
       ></iframe>
</div>
</div>
<p>
<a href="https://giphy.com/embed/LERpNudtTGL9jNIFNl/video" style={{ fontFamily: "Victor Mono", color: "green" }}>"Start Your Interstellar Journey Today! 👍🏼"</a>
</p>
</Container>
);
}

export default Home;