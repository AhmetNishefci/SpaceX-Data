import useRockets from "../hooks/useRockets";

import { useParams } from "react-router";
import { ListGroup, Container, Row } from "react-bootstrap";

const Rockets = () => {
  const { id } = useParams();
  const { data, loading, error } = useRockets(id);

  console.log({ error, loading, data });

  if (error) return <div>Something went wrong!</div>;

  if (loading) return <div>Loaing...</div>;

  return (
    // <div className="Rocket">
    //   <h1>{data.rocket.name}</h1>
    //   <h2>{data.rocket.company}</h2>
    //   <h2>{data.rocket.country}</h2>
    //   <h4>{data.rocket.description}</h4>
    //   <p>{data.rocket.first_stage.burn_time_sec}</p>
    //   <p>{data.rocket.second_stage.burn_time_sec}</p>
    // </div>
    <Container>
      <Row>
        <ListGroup style={{ marginTop: "70px", border: "5px solid black" }}>
          <h1 style={{ margin: "0 auto" }}>Rocket Details</h1>
          <ListGroup.Item>
            Rocket name: <strong>{data.rocket.name}</strong>
          </ListGroup.Item>
          <ListGroup.Item>
            Rocket company: <strong>{data.rocket.company}</strong>
          </ListGroup.Item>
          <ListGroup.Item>
            Rocket country: <strong>{data.rocket.country}</strong>
          </ListGroup.Item>
          <ListGroup.Item>{data.rocket.description}</ListGroup.Item>
          <ListGroup.Item>
            1st stage burn time per sec:
            <strong>{data.rocket.first_stage.burn_time_sec}s</strong>
          </ListGroup.Item>
          <ListGroup.Item>
            2nd stage burn time per sec:{" "}
            <strong>{data.rocket.second_stage.burn_time_sec}s</strong>
          </ListGroup.Item>
        </ListGroup>
      </Row>
    </Container>
  );
};

export default Rockets;
