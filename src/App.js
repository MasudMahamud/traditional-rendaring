import { useState } from 'react';
import './App.css';
import User from './Components/User/User';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


function App() {
  const [familiar, setFamiliar] = useState(false);
  return (
    <div className="App">
        <h2>Is Familiar: {familiar.toString()} </h2>
        <Button variant="contained" color="secondary" onClick={ ()=> setFamiliar(!familiar)}> 
          Toogle
        </Button>
        
        <User familiar={familiar}> </User>
      
    </div>
  );
}

export default App;
