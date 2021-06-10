import React from 'react'

export default function Test() {
  return (
    <div class="container d-flex flex-column mx-auto mt-5 mb-5"  style={{ width: "400px"}}>
      <form>
 
  <div class="form-outline mb-4">
    <input type="email" id="form2Example1" class="form-control" />
    <label class="form-label" for="form2Example1">Email</label>
  </div>

  
  <div class="form-outline mb-4">
    <input type="password" id="form2Example2" class="form-control" />
    <label class="form-label" for="form2Example2">Password</label>
  </div>

  
  <div class="row mb-4">
    <div class="col d-flex justify-content-center">

      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="form2Example3"
          checked
          style={{backgroundColor: "#0c8599", borderColor: "#0c8599"}}
        />
        <label class="form-check-label" for="form2Example3"> Remember me </label>
      </div>
    </div>

    <div class="col">
      
      <a href="#!">Forgot password?</a>
    </div>
  </div>

  
  <button type="submit" class="btn text-white btn-block mb-4" style={{ width: "400px", backgroundColor: "#212529"}}>Sign in</button>

  
  <div class="text-center">
    <p>Not a member? <a href="#!">Register</a></p>
    <p>or sign up with:</p>
    <button type="button" class="btn text-white btn-floating mx-1" style={{backgroundColor: "#0c8599"}}>
      <i class="fab fa-facebook-f"></i>
    </button>

    <button type="button" class="btn text-white btn-floating mx-1" style={{backgroundColor: "#0c8599"}}>
      <i class="fab fa-google"></i>
    </button>

    <button type="button" class="btn text-white btn-floating mx-1" style={{backgroundColor: "#0c8599"}}>
      <i class="fab fa-twitter"></i>
    </button>

  </div>
</form>
    <div style={{height: "126px"}}>

    </div>
    </div>
  )
}
