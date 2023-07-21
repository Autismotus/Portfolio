import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import jspic from "../assets/img/javascript-logo-transparent-logo-javascript-images-3.png";
import htmlpic from "../assets/img/html5-icon-13.png";
import csspic from "../assets/img/CSS3_logo.svg.png";
import git from "../assets/img/Git-Icon-1788C.png";
import coloursharp from "../assets/img/color-sharp.png";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                    <div className="skill-bx">
                        <h2>
                            Skills
                        </h2>
                        <p>Lorem impsum skit kan inte någon utantill så här har du nånting att läsa 10/10 skjut mig.<br></br></p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className="item">
                            <img src={jspic} alt="Image" />
                            <h5>Javascript</h5>
                            </div>
                            <div className="item">
                            <img src={htmlpic} alt="Image" />
                            <h5>HTML</h5>
                            </div>
                            <div className="item">
                            <img src={csspic} alt="Image" />
                            <h5>CSS</h5>
                            </div>
                            <div className="item">
                            <img src={''} alt="Image" />
                            <h5>Frameworks: React/Angular/Vue</h5>
                            </div>
                            <div className="item">
                            <img src={git} alt="Image" />
                            <h5>Git</h5>
                            </div>
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={coloursharp} />
        </section>
      )
}