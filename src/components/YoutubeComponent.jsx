import React from "react";
import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './YoutubeComponent.css';

const YoutubeComponent = (props) => {
  return (
    <div className="wrapper">
      <Card style={{ width: "18rem", border: 'none' }} className="bg-card">
        <Card.Img variant="top" src={props.imgSrc} />
        <Card.Body>
          <Card.Title className="text-truncate"> {props.title} </Card.Title>
          <Card.Text>
              <p className="text-truncate text-secondary" style={{fontSize: "13px"}}> {props.desc} </p>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

YoutubeComponent.defaultProps = {
  desc: "",
  title: "",
  imgSrc: "",
}

export default YoutubeComponent;
