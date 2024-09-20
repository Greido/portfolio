import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";
import { Col, Container, Row } from "react-bootstrap";
export default function Skills() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Consequuntur deleniti ullam enim incidunt cumque, dolorum
                cupiditate, accusantium placeat illo atque beatae voluptate vero
                voluptatum? Numquam debitis voluptatem molestiae hic nisi.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Web development</h5>
                </div>

                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Ux-Ui Design</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Mern stack</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img src="background-image" alt="bg" />
    </section>
  );
}
