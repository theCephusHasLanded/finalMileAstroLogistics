import { Container } from "react-bootstrap";

function HomePage() {
  return (
    <Container className="text-center" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h2>Welcome</h2>
      <h3>To Planet Purchase Plans!</h3>
      <h6>
        <i>"Explore, Discover, and Purchase Your Dream Planet!"</i>
      </h6>
      <div style={{ borderRadius: "10px", overflow: "hidden", width: "100%", maxWidth: "1167px" }}>
        <iframe
          src="https://assets.pinterest.com/ext/embed.html?id=5981411998669989"
          height="600"
          width="100%"
          frameborder="0"
          allowFullScreen
          title="Planets GIF"
          autoplay
        ></iframe>
      </div>
      <p>
        <a
          href="https://www.youtube.com/watch?v=uZN5xjoS6TU"
          style={{ fontFamily: "Victor Mono", color: "green" }}
        >
          "Learn More about Direct Imaging & Habitable Worlds -- LKHN* 👍🏼"
        </a>
      </p>
    </Container>
  );
}

export default HomePage;
