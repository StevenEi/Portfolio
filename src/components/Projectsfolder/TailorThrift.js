import React from 'react';
import { Card, Button } from "react-bootstrap"
import photo from "../../images/Tailorthrift.jpg"

export default function TailorThrift() {
    return (
            <div className="card">
                <Card style={{ width: '18rem' }} border="primary">
                    <Card.Img className="card-img" src={photo} />
                    <Card.Body className="card-body">
                        <Card.Title style={{ textDecoration: "underline" }}>TailorThrift</Card.Title>
                        <Card.Text>
                            A custom tailoring website that connects individuals with well fitting tailored goods
                        </Card.Text>
                        <Button className="card-btn"href="https://tailorthrift.herokuapp.com/" variant="primary">Deployed Site</Button>
                        <Button className="card-btn"href="https://github.com/StevenEi/Project-03-TailorThrift" variant="primary">GitHub Repo</Button>
                    </Card.Body>
                </Card>
            </div>
    );
};
