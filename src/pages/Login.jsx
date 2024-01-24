import React from "react";
import { TailSpin } from "react-loader-spinner";
import { Link } from "react-router-dom";


const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  // const [hidden, setHidden] = React.useState("hidden");
  const [spinner,setSpinner] = React.useState("hidden");
  const [login, setLogin] = React.useState("block");
  const [validEmail,setValidEmail] = React.useState("hidden");
  const [validPassword,setValidPassword] = React.useState("hidden");
  const handleOAuth = () => {
    console.log("This is OAuth");
  }
  function isValidEmail(email) {
    // Define the regular expression pattern for a valid email address
    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Use the test method to check if the email matches the pattern
    return pattern.test(email);
}
function isValidPassword(password) {
  return password.length>0?true:false;
}


  const handleClick = (e) => {
    e.preventDefault();
    if(!isValidEmail(email)){
      setValidEmail("block");
      return;
    }
    else{
      setValidEmail("hidden");
    }
    if(!isValidPassword(password)){
      setValidPassword("block");
      return;
    }
    else{
      setValidPassword("hidden");
    }
    setSpinner("block");
    setLogin("hidden");
    console.log("clicked");

  }
  return (
    <div className="w-full h-[100svh] background-animate bg-gradient-to-r from-[#9a88d9] via-[#8493CD] to-indigo-400">
      <div className="flex w-full h-[100svh] justify-center items-center px-5">
        <div className="mx-auto w-full max-w-md bg-[#fff] px-6 pt-10 pb-8 shadow-2xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10 rounded-2xl">
          <div className="w-full">
            <div className="text-center">
              <Link to={"/ts"}>
               <h1 className="text-3xl font-semibold text-[#9a88d9]">
                Therapy Sense
              </h1>
              </Link>
             
              <p className="mt-2 text-gray-500">Login</p>
            </div>
            <div className="mt-5">
              <form action="" onSubmit={(e)=>{handleClick(e)}}>
                <div className="relative mt-6">
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email Address"
                    className="peer mt-1 w-full border-b-2 border-x-0 border-t-0 border-gray-300 px-0 py-1 placeholder:text-transparent  focus:border-[#B799FF] focus:outline-none focus:ring-0"
                    autocomplete="NA"
                    onChange={(e)=>{setEmail(e.target.value)}} 
                  />
                  <label
                    htmlFor="email"
                    className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                  >
                    Email 
                  </label>
                    <div className={`${validEmail} text-sm text-red-500`}>
                      Enter a valid email address
                    </div>
                </div>
                <div className="relative mt-6">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    className="peer peer mt-1 w-full border-x-0 border-t-0 border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-[#B799FF] focus:outline-none focus:ring-0"
                    onChange={(e)=>{setPassword(e.target.value)}}
                  />
                  <label
                    htmlFor="password"
                    className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                  >
                    Password
                  </label>
            
                    <div className={`${validPassword} text-sm text-red-500`}>
                      Please enter the correct credentials
                    </div>
                </div>
                <div className="my-6 flex flex-col space-y-5">
                  <button
                    type="submit"
                    className="w-full rounded-md bg-[#9a88d9] px-3 py-4 text-white focus:bg-[#9a88d9] focus:outline-none"
                  >
                    <div className={`${login} text-lg`}>Login</div>
                    <div className={`flex justify-center ${spinner}`}>
                    <TailSpin
                    height={15}
                    width={15}
                    color="#ffff"
                    radius={1}
                    
                    />
                    </div>
                  </button>
                  <div className="w-full h-[2px] flex items-center justify-around ">
                    <div className=" bg-gray-200 w-[44%] h-full"></div>
                    <div className="text-gray-400">Or</div>
                    <div className="bg-gray-200 w-[44%] h-full"></div>


                  </div>
                  <button
                    type="button"
                    className="w-full rounded-md bg-[#fefcfc] px-3 py-4  focus:outline-none shadow-lg "
                    onClick={()=>{handleOAuth()}}
                  >
                    <div className={` flex justify-center items-center space-x-3`}>
                      <div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" preserveAspectRatio="xMidYMid" viewBox="0 0 256 262" id="google"><path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"></path><path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"></path><path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"></path><path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"></path></svg>
                      </div>
                      <div className="">
                          Login with Google
                      </div>
                    </div>
                    
                  </button>
                </div>
                {/* <div className={`flex justify-center text-xs mb-1 text-red-600 ${hidden}`}> <p>Oops! You may have entered incorrect credentials.</p></div> */}
                <p className="text-center text-sm text-gray-500">
                  Don&#x27;t have an account yet?
                  <Link
                    to={"/signup"}
                    className="font-semibold text-[#9a88d9] hover:underline focus:text-[#9a88d9] focus:outline-none ml-1"
                  >
                    Sign up
                  </Link>
                  .
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
