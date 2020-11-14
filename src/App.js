import React from 'react';
import './App.css';
import { Alert } from 'design-react-kit';
import 'bootstrap-italia/dist/css/bootstrap-italia.min.css';
import 'typeface-titillium-web';
import 'typeface-roboto-mono';
import 'typeface-lora';
import { Button } from 'design-react-kit';

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
      </React.Fragment>
    );
};

export default App;