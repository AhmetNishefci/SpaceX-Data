import useMissions from "../hooks/useMissions";
import image from "../images/defaultImage.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const MissionsList = () => {
  const { error, data, loading } = useMissions();

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Something went wrong!</div>;

  return (
    <Container>
      <Row>
        {data.launchesPast.map((item, index) => {
          return (
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={
                    item && item.ships[0] && item.ships[0].image
                      ? item.ships[0].image
                      : image
                  }
                />
                <Card.Body>
                  <Card.Title>{item.mission_name}</Card.Title>
                  <Card.Title style={{ color: "red" }}>
                    {item.rocket.rocket_name}
                  </Card.Title>
                  <Card.Text>{item.launch_site.site_name_long}</Card.Text>
                  <Link to={`/${item.rocket.rocket.id}`}>
                    <Button variant="primary">
                      Check details about rocket
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default MissionsList;
