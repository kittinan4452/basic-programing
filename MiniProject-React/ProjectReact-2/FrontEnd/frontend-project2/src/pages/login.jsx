import React from 'react';

function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Use FormData correctly
    const data = new FormData(event.currentTarget); // Corrected: FromData -> FormData
    const jsonData = {
      email: data.get('email'), // Changed to 'username'
      password: data.get('password'), // Changed to 'password'
    };

    fetch('http://localhost:3333/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(jsonData), // Use the jsonData created from FormData
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 'ok'){
            alert("login สำเร็จ")
            localStorage.setItem('token',data.token)
            window.location = '/home'
        }else{
            alert("error")
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="bg-sky-100 flex justify-center items-center h-screen">
      <div className="w-1/2 h-screen hidden lg:block">
        <img
          src="https://img.freepik.com/fotos-premium/imagen-fondo_910766-187.jpg?w=826"
          alt="Placeholder Image"
          className="object-cover w-full h-full"
        />
      </div>

      <div className="lg:p-36 md:p-52 sm:p-20 p-8 w-full lg:w-1/2">
        <h1 className="text-2xl font-semibold mb-4">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-600">
              Username
            </label>
            <input
              type="text"
              id="email"
              name="email"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              autoComplete="off"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-800">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              autoComplete="off"
            />
          </div>

          <div className="mb-4 flex items-center">
            <input type="checkbox" id="remember" name="remember" className="text-red-500" />
            <label htmlFor="remember" className="text-green-900 ml-2">Remember Me</label>
          </div>

          <div className="mb-6 text-blue-500">
            <a href="#" className="hover:underline">Forgot Password?</a>
          </div>

          <button type="submit" className="bg-red-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full">
            Login
          </button>
        </form>

        <div className="mt-6 text-green-500 text-center">
          <a href="#" className="hover:underline">Sign up Here</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
