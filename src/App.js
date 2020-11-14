import React from 'react';
import './App.css';
import { Alert } from 'design-react-kit';
import 'bootstrap-italia/dist/css/bootstrap-italia.min.css';
import 'typeface-titillium-web';
import 'typeface-roboto-mono';
import 'typeface-lora';
import { Button } from 'design-react-kit';
import { Card, CardBody, CardTitle, CardText } from 'design-react-kit';

const App = () => {
    return (
      <React.Fragment>
        <Alert>This is an Alert</Alert>
        <Button
          color="primary"
          icon={false}
          tag="button"
        >
          Primary
        </Button>
        <div className="row">
  <div className="col-12 col-lg-4">
    <Card
      noWrapper={false}
      tag="div"
    >
      <CardBody tag="div">
        <CardTitle tag="h5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…
        </CardTitle>
        <CardText tag="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </CardText>
      </CardBody>
    </Card>
  </div>
  <div className="col-12 col-lg-4">
    <Card
      noWrapper={false}
      tag="div"
    >
      <CardBody tag="div">
        <CardTitle tag="h5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…
        </CardTitle>
        <CardText tag="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </CardText>
      </CardBody>
    </Card>
  </div>
  <div className="col-12 col-lg-4">
    <Card
      noWrapper={false}
      tag="div"
    >
      <CardBody tag="div">
        <CardTitle tag="h5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…
        </CardTitle>
        <CardText tag="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </CardText>
      </CardBody>
    </Card>
  </div>
</div>
      </React.Fragment>
    );
};

export default App;