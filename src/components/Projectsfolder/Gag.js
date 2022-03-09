import React from 'react';
import { Card, Button } from "react-bootstrap"
import photo from "../../images/Gag.jpg"

export default function Gag() {
  return (
    <div className="card">
      <Card style={{ width: '18rem' }} border="primary">
        <Card.Img className="card-img" src={photo} />
        <Card.Body className="card-body">
          <Card.Title style={{ textDecoration: "underline" }}>Gifs and Grub</Card.Title>
          <Card.Text>
            The gag website that takes in a search term and pairs tasty recipes with relatable GIFs!
          </Card.Text>
          <Button className="card-btn"href="https://joecliffordofficial.github.io/project_one_gr5/" variant="primary">Deployed Site</Button>
          <Button className="card-btn"href="https://github.com/joecliffordofficial/project_one_gr5" variant="primary">GitHub Repo</Button>
        </Card.Body>
      </Card>
    </div>
  );
}