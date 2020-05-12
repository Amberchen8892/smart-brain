import React from 'react'
import './SignIn.css'

class SignIn extends React.Component{
    constructor(){
        super();
        this.state={
            signInEmail: '',
            signInPassword: ''
        }
    }
    onEmailChange= (event)=>{
        this.setState({
            signInEmail:event.target.value
        })

    };

    onPasswordChange = (event) =>{
        this.setState({
            signInPassword: event.target.value

        })

    };

    onSubmitSignIn =  (event) => {
        event.preventDefault();
        fetch('https://warm-spire-72965.herokuapp.com/signin',{
            method:'post',
            headers: {'Content-type':'application/json'},
            body: JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.signInPassword
            })
        })
        .then(res => res.json())
        .then(user =>{
            if(user.id){
                this.props.loadUser(user)
                this.props.getRoute('home')

            }
        })
       

    }
    
    render(){
        const{getRoute} = this.props
        return(
            <div style={{display:'flex', justifyContent:'center'}} >
        <div className="jumbotron jumbotron-fluid shadow p-3 mb-5  rounded" style={{width:'60vw'}} >
        <div className="container" style={{width:'60%'}} >
        <form>
        <div className="form-group " >
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" 
                 className="form-control" 
                 id="exampleInputEmail1" 
                 aria-describedby="emailHelp"
                 onChange={this.onEmailChange} />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" 
                 className="form-control" 
                 id="exampleInputPassword1"
                 onChange={this.onPasswordChange} />
        </div>
       
        <div>
        <button type="submit" className="btn btn-primary zoom" style={{backgroundColor:'#D697FF', borderColor:'#D697FF', }}  onClick={this.onSubmitSignIn}>Submit</button>
       
        </div>
        <div>
        <button type="submit" className="btn btn-primary zoom" style={{marginTop:'30px', backgroundColor:'#04BDAF', borderColor:'#04BDAF'}} onClick={()=> getRoute('register')}>Register</button>
        </div>
       
      </form>
        </div>
      </div>
      </div>

        )
    }
}
export default SignIn;

