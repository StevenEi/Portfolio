import React from "react";
import { Card, Button } from "react-bootstrap";
import photo from "../../images/digitalanvil.jpg";

export default function DigitalAnvil() {
  return (
    <div className="card">
      <Card style={{ width: "18rem" }} border="primary">
        <Card.Img className="card-img" src={photo} />
        <Card.Body className="card-body">
          <Card.Title style={{ textDecoration: "underline" }}>
            Digital Anvil
          </Card.Title>
          <Card.Text>
            A video game review site for games from all platforms. The review
            site managed by players, for players.
          </Card.Text>
          <Button
            className="card-btn"
            href="https://shrouded-woodland-50128.herokuapp.com/"
            variant="primary"
          >
            Deployed Site
          </Button>
          <Button
            className="card-btn"
            href="https://github.com/DanPGolden/project2#link-to-digital-anvil"
            variant="primary"
          >
            GitHub Repo
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
