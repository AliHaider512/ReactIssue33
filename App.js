import logo from './logo.svg';
import './App.css';   
import Person from './Person/Person';
import { render } from '@testing-library/react';
import React, {Component} from 'react';


class App extends Component {

state=

  {

    persons:[
      {name:"ali", age:20},
      {name:"ahmed", age:24},
      {name:"molvi" ,age:21},
    ]
  }


 buttonHandler=(newname)=>{

  this.setState(
    {
      persons:[
        {name:newname,age:23},
        {name:"neymar",age:34},
        {name:"ronaldo",age:35},
      ]
    }
  );
}

changeNameHandler=(event)=>{
  this.setState(
    {
      persons:[
        {name:'messi',age:23},
        {name:'neymar',age:34},
        {name:event.target.value,age:35},
      ]
    }
  );
}

render (){
  const persot={};
return(

  <div className="App">
  <h1>hello world</h1>
  <p>this is my first react file</p>
  <button onClick={()=>this.buttonHandler('messi')}>Press the Button</button>
  <Person name={this.state.persons[0].name}
   age={this.state.persons[0].age}/>
  <Person name={this.state.persons[1].name} 
   age={this.state.persons[1].age}
   click={()=>this.buttonHandler('ali!!!!')}>How are u do'in</Person>
  <Person name={this.state.persons[2].name} 
   age={this.state.persons[2].age}
   changed={this.changeNameHandler}/>
  </div>
);
}
}

  export default App;
