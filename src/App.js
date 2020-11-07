import logo from './logo.svg';
import './App.css';
import App2 from './App2';
import {useState} from 'react'

function App() {
  
  //let names = ['Varun', 'Harkirat', 'Jayant'];

  let [names, setNames] = useState(['Varun', 'Harkirat', 'Jayant']);
  
  console.log('high');

  const updateName = function(index){
    let names2  = [];

    for (let i = 0; i < names.length; i++) {
      if(i !== index) names2.push(names[i]);
    };
    
    setNames(names2);
  }

  return (
    <div>
      Hello World
      
      {names.map(function(element, id, array){
        return <App2 name={element} func={updateName} id={id}/>;
      })}

       
    </div>
  );
}

export default App;
