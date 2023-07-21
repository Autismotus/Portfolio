import { Col, Container, Row } from "react-bootstrap";
export const Projects = () => {

    const projects = [
        
            {
                title: "iBeacon.se",
                description: "En beacon är en trådlös sändare med teknik som gör det möjligt för smartphones, surfplattor och andra enheter att utföra åtgärder när de befinner sig i närheten av en beacon.",
                
            },
            {
                title: "iBeacon.se",
                description: "En beacon är en trådlös sändare med teknik som gör det möjligt för smartphones, surfplattor och andra enheter att utföra åtgärder när de befinner sig i närheten av en beacon.",
                
            },    
    ];
return (
    <section className="project" id="project">
        <Container>
                <Row>
                    <Col>
                    <h2>Projects</h2>
                    <p>Lorem ipsum mf shit ass text for someone to read a long complicated and impressive and intrussive as well as something unproductive. </p>
                    </Col>
                </Row>
            </Container>
    </section>
)
    }