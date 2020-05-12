import React from 'react'

class Register extends React.Component{
    constructor(){
        super();
        this.state={
            fisrtName: '',
            lastName: '',
            email:'',
            password:''
        }
    }
    onFirstNameChange= (event)=>{
        this.setState({
            fisrtName:event.target.value
        })

    };

    onLastNameChange = (event) =>{
        this.setState({
            lastName: event.target.value

        })

    };

    onEmailChange = (event) =>{
        this.setState({
            email: event.target.value

        })

    };

    onPasswordChange = (event) =>{
        this.setState({
            password: event.target.value

        })

    };
     

    onSubmitRegister =  (event) => {
        event.preventDefault();
        fetch('https://warm-spire-72965.herokuapp.com/register',{
            method:'post',
            headers: {'Content-type':'application/json'},
            body: JSON.stringify({
                firstname: this.state.fisrtName,
                lastname: this.state.lastName,
                email: this.state.email,
                password: this.state.password
            })
        })
        .then(res => res.json())
        .then(user =>{
            if (user.id){
                this.props.loadUser(user)
                this.props.getRoute('home')
            
            }
        })
        


    }
    render(){
        
        return(
            <div style={{display:'flex', justifyContent:'center'}} >
        <div className="jumbotron jumbotron-fluid shadow p-3 mb-5  rounded" style={{width:'60vw'}}>
        <div className="container">
        <form>
        <div className="form-row">
          <div className="col">
          <div className="form-group " >
          <label htmlFor="exampleInputEmail1">First Name</label>
          <input type="text" 
                 className="form-control" 
                 id="exampleInputEmail1" 
                 aria-describedby="emailHelp"
                 onChange={this.onFirstNameChange} />
          
        </div>
          </div>
          <div className="col">
          <div className="form-group " >
          <label htmlFor="exampleInputEmail1">Last Name</label>
          <input type="email" 
                 className="form-control" 
                 id="exampleInputEmail1" 
                 aria-describedby="emailHelp"
                 onChange={this.onLastNameChange} />
          
        </div>
          </div>
         
        </div>
        <div className="form-row">
          <div className="col">
          <div className="form-group " >
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" 
                 className="form-control" 
                 id="exampleInputEmail1" 
                 aria-describedby="emailHelp"
                 onChange={this.onEmailChange} />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
          </div>
          <div className="col">
          <div className="form-group " >
          <label htmlFor="exampleInputEmail1">Password</label>
          <input type="password" 
                 className="form-control" 
                 id="exampleInputEmail1" 
                 aria-describedby="emailHelp"
                 onChange={this.onPasswordChange} />
         
        </div>
          </div>
         
        </div>
        <div>
        <button type="submit" className="btn btn-primary" onClick={this.onSubmitRegister}>Register</button>
       
        </div>
      </form>
        </div>
      </div>
</div>  
        )
    }
}
export default Register;

// export default function Register({getRoute}) {
//     return (
//         <div style={{display:'flex', justifyContent:'center'}} >
//         <div className="jumbotron jumbotron-fluid shadow p-3 mb-5  rounded" style={{width:'60vw'}}>
//         <div className="container">
//         <form>
//         <div className="form-row">
//           <div className="col">
//           <div className="form-group " >
//           <label htmlFor="exampleInputEmail1">First Name</label>
//           <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          
//         </div>
//           </div>
//           <div className="col">
//           <div className="form-group " >
//           <label htmlFor="exampleInputEmail1">Last Name</label>
//           <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          
//         </div>
//           </div>
         
//         </div>
//         <div className="form-row">
//           <div className="col">
//           <div className="form-group " >
//           <label htmlFor="exampleInputEmail1">Email address</label>
//           <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
//           <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
//         </div>
//           </div>
//           <div className="col">
//           <div className="form-group " >
//           <label htmlFor="exampleInputEmail1">Password</label>
//           <input type="password" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
         
//         </div>
//           </div>
         
//         </div>
//         <div>
//         <button type="submit" className="btn btn-primary" onClick={() => getRoute('home')}>Register</button>
       
//         </div>
//       </form>
//         </div>
//       </div>
// </div>                                          
//     )
// }

{/* <a onClick={()=> getRoute('home')}>Register</a> */}