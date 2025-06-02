//this will be the login form

function LoginForm(){
  return(
    <div className = 'loginBox'>
      <h1>Login</h1>
      <input type="text" placeholder="userName"/>
      <input type="text"  placeholder="password"/>
      <p>Forgot passoword?</p>
      <button>Login</button>
      <p>Don't have an account? Register</p>
    </div>
  );
}

export default LoginForm;