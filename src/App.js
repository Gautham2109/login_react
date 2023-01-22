import React from 'react';

import './App.css';

export default function App() {

const login = () => {
  document.getElementById("College").innerHTML = `<a href="https://www.sdmpolytechnic.in/">Click Here</a>`
}

  return (
    <body>
      <h1>Welcome</h1>

      <div className='edge'>
        
    <div className="Appin" id="College">
        
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>

        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1"/>
        </div>
       
        <button type="submit" class="btn btn-primary" onClick={login}>Login</button>
      </form>
    </div>
      </div>
    </body>
  );
}


