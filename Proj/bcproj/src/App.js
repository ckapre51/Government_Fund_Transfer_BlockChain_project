import logo from './logo.svg';
import './App.css';
import {Button} from '@material-ui/core'
import Central from './components/Central/Central';
import State from './components/State/State'
import axios from 'axios';
import Timepass from './components/Timepass';



function App() {

  // componentDidMount(){ 
    // axios.get('http://localhost:3000/requestdata')
    // .then(response=>{
    //     console.log(response);
    //     // this.setState({
    //     //     posts:response.data
    //     // })
    // })
    // .catch(error => {
    //     console.log(error)
    // })
    // 

// }

  return (
    <div className="App">
      
      {/* <header className="App-header"> */}
        {/* <Button>Button</Button> */}
        <Central></Central>
        {/* <Timepass></Timepass> */}
        {/* <State></State> */}

  
      {/* </header> */}

    </div>
  );
} 

export default App;
