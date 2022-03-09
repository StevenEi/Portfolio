import { React } from 'react';
import { Card, Button } from "react-bootstrap"
import photo from "../../images/Game-Screenshot.jpg"

export default function Matching() {
    return (
            <div className="card">
                <Card style={{ width: '18rem' }} border="primary">
                    <Card.Img className="card-img" src={photo} />
                    <Card.Body className="card-body">
                        <Card.Title 
                        style={{ textDecoration: "underline" }}
                        >The Memory Game</Card.Title>
                        <Card.Text>
                            A fun card matching game with images of voice actors from my favorite D&D podcast, NaddPod
                        </Card.Text>
                        <Button className="card-btn"href="https://stevenei.github.io/Memory-Game/" variant="primary">Deployed Game</Button>
                        <Button className="card-btn"href="https://github.com/StevenEi/Memory-Game" variant="primary">GitHub Repo</Button>
                    </Card.Body>
                </Card>
            </div>
    );
};