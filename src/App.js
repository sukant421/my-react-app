import logo from './logo.svg';
import './App.css';
import { Button } from 'semantic-ui-react'
import { useState } from 'react';

function App() {

const [like, setLike] = useState(false);

  return (
    <div className="App">
      <h1>Hello world</h1>
      <>
  {/* <Button content='Like' icon='like' /> */}
  <Button onClick={()=>{setLike(!like)}} color='light-blue' content={`click to ${like ? 'unlike' : 'like'}`} icon={{ name: 'like', color: like ? 'red' : 'gray' }} />
</>                           
    </div>
  );
}

export default App;
