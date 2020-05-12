import React from 'react';

const Navigation = ({getRoute, isSignIn}) =>{
    if(isSignIn){
        return(
            <nav className='f3 link dim black underline pa3 pointer' style={{display:'flex', justifyContent:'flex-end'}}>
                <a onClick={()=>getRoute('signin')} >Sign Out</a>
            </nav>

        )
    } else{
        return(
            <nav className='f3 link dim black underline pa3 pointer' style={{display:'flex', justifyContent:'flex-end'}}>
                <a onClick={()=>getRoute('signin')}  style={{marginRight:'20px'}}>Sign In</a>
                <a onClick={()=>getRoute('register')} >Register </a>
            </nav>
        )
    }
}
export default Navigation;

// { route === 'signin' || route === 'register'
//                 ? <nav className='f3 link dim black underline pa3 pointer' style={{display:'flex', justifyContent:'flex-end'}}>
//                     <a onClick={()=>getRoute('signin')} >Sign In</a>
//                   </nav>
//                 : <nav className='f3 link dim black underline pa3 pointer' style={{display:'flex', justifyContent:'flex-end'}}>
//                     <a onClick={()=>getRoute('signin')} >Sign Out</a>
//                   </nav>
//              }