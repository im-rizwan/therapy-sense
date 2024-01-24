import React from 'react'

const Home = () => {
  return (
    <div className="relative mt-6">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    className="peer peer mt-1 w-full border-x-0 border-t-0 border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-[#B799FF] focus:outline-none"

                  />
                  <label
                    htmlFor="password"
                    className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                  >
                    Password
                  </label>
            
                  
                </div>
  )
}

export default Home