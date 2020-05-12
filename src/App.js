import React, {Component} from 'react';

import Particles from 'react-particles-js';
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import Rank from './components/rank/Rank';
import ImageForm from './components/imageform/ImageForm';
import Recognition from './components/facerecognition/Recognition';
import SignIn from './components/signin/SignIn';
import Register from './components/signin/Register'
import './App.css';

const initialState={
  input:'',
  imageURL: '',
  box: {},
  isSignIn: false,
  route:'signin',
  user:{
    id:'',
    firstName:'',
    lastName:'',
    email:'',
    entries:'0',
    joined:''
  }

}




const particlesOptions ={
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 200
      }
    }
  }
};

class App extends Component {
  constructor(){
    super();
    this.state= initialState
  };
  // componentDidMount(){
  //   fetch('http://localhost:3000')
  //   .then(res => res.json())
  //   .then(console.log)
  // }

loadUser =(data)=>{
  this.setState({
    user:{
      id:data.id,
      firstName: data.firstname,
      lastName: data.lastname,
      email: data.email,
      entries:data.entries,
      joined: data.joined

    }
  })

}
caculateFaceBox =(data)=>{
  const faceLocation= data.outputs[0].data.regions[0].region_info.bounding_box;
  console.log(faceLocation)
  const getImage= document.getElementById('inputimage');
  const imagewidth = Number(getImage.width);
  const imageheight = Number(getImage.height);
  console.log(imagewidth, imageheight)
  return{
    leftCol: faceLocation.left_col * imagewidth,
    topRow: faceLocation.top_row * imageheight,
    rightCol: imagewidth - (faceLocation.right_col * imagewidth),
    bottomRow: imageheight - (faceLocation.bottom_row * imageheight)
    
  }
  
  
}
displayFaceBox= (box)=>{
  console.log('box',box)
  this.setState({box})
}
 onUserInput = (event) =>{
   this.setState({input:event.target.value})

};
  onUserSubmit = () =>{
    this.setState({imageURL: this.state.input})
    fetch('https://warm-spire-72965.herokuapp.com/imageURL',{
      method:'post',
      headers: {'Content-type':'application/json'},
      body: JSON.stringify({
          input:this.state.input,    
      })
    })
    .then(response => response.json())
    .then(response =>{ 
      if (response){
        fetch('https://warm-spire-72965.herokuapp.com/image',{
          method:'put',
          headers: {'Content-type':'application/json'},
          body: JSON.stringify({
              id:this.state.user.id,    
          })
        })
        
        .then(response => response.json())
        .then(count =>{
          // this.setState(Object.assign( { entries: count}, this.state.user))
          this.setState(Object.assign(this.state.user, { entries: count}))
          
          
        })
        console.log('check',this.state.user.entries)
      }
      this.displayFaceBox(this.caculateFaceBox(response))
    })
    .catch(error => console.log(error));
     
}



onGetRoute = (route) =>{
  if(route === 'home' ){
    this.setState({isSignIn:true})
  } else if (route === 'register'|| route === 'signin'){
    this.setState(initialState)
  }
  this.setState({route:route})
}
  render(){ 
    console.log('user', this.state.user)
    console.log('count', this.state.user.entries)
  return (
    <div className="App">
       <Particles className='particle'
                params={particlesOptions} />
      <Navigation  getRoute={this.onGetRoute} isSignIn={this.state.isSignIn}/>

       <Logo />
       {this.state.route === 'home'
        ? <div>
        <Rank entries={this.state.user.entries} name ={this.state.user.firstName}/>
        <ImageForm 
          userInput={this.onUserInput}
          userSubmit={this.onUserSubmit} />
        <Recognition imageURL={this.state.imageURL} box={this.state.box}/>
      </div> 
        : (
          this.state.route === 'signin' 
          ? <SignIn  loadUser={this.loadUser}  getRoute={this.onGetRoute} />
          : <Register loadUser={this.loadUser} getRoute={this.onGetRoute}></Register>
        )
        }
       
      
    </div>
  );
}
}

export default App;



  

