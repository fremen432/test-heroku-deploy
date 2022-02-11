import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutation';

import Auth from '../utils/auth';

import { LockClosedIcon } from '@heroicons/react/solid'

const formInputStyles = `appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`
const formSubmitBtnStyles = `group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`


const SignUp = () => {

  // keeps track of when the username, email and password is updated
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
    // role: '',
  });

  // this comes from @apollo/client node module
  const [addUser, { error }] = useMutation(ADD_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    // whenever the event is changed, we're taking the 'name' property from the input in the form and it's corresponding value.
    const { name, value } = event.target;
    // once we've 'targeted' the property that's been changed, we update the form state with the new value
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // ---- SUBMIT FORM ----
  const handleFormSubmit = async (event) => {
    
    event.preventDefault();
    // console.log("this works");

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });
      // console.log(data);
      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }

  };

  return (
    <>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">

        <div className="max-w-md w-full space-y-8">
            <h4 className="card-header">Sign Up</h4>   

            {/* Logo */}
          <div>
            {/* <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            /> */}
          </div>

          {/* New Signup form */}
          <form className=" rounded-md shadow-sm space-y-px mt-8 space-y-6" action="#" onSubmit={handleFormSubmit} >  
              <input
                className={formInputStyles}
                placeholder="Your username"
                name="username"
                type="username"
                id="username"
                value={formState.username}
                onChange={handleChange}
              />
              <input
                className={formInputStyles}
                placeholder="Your email"
                name="email"
                type="email"
                id="email"
                value={formState.email}
                onChange={handleChange}
              />
              <input
                className={formInputStyles} 
                placeholder="******"
                name="password"
                type="password"
                id="password"
                value={formState.password}
                onChange={handleChange}
              />
              {/* <input
                className={formInputStyles} 
                placeholder="Your role (1 or 2)"
                name="role"
                type="role"
                id="role"
                value={formState.role}
                onChange={handleChange}
              /> */}
              <button className={formSubmitBtnStyles} type="submit">
                Submit
              </button>
          </form>

            {/* Old input form */}
          <form className="mt-8 space-y-6 hidden" action="#" onSubmit={handleFormSubmit} >
            <input type="hidden" name="remember" defaultValue="true"/>
            {/* Input fields */}
            <div className="rounded-md shadow-sm -space-y-px">

              <div>
                <label htmlFor="username" className="sr-only">
                  Username
                </label>

                <input
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm rounded-t-md"
                  placeholder="Username"
                  name="username"
                  type="username"
                  id="username"
                  value={formState.username}
                  onChange={handleChange}
                  // autoComplete="username"
                  required
                />
              </div>
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm rounded-t-md"
                  id="email-address"
                  name="email"
                  type="email"
                  // autoComplete="email"
                  required
                  placeholder="Email address"
                  value={formState.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  // autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm rounded-b-md"
                  placeholder="Password"
                  value={formState.password}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* 'Remember Me' & 'Forgot your password?' */}
            <div className="flex items-center justify-between">
              {/* <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="/" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Forgot your password?
                </a>
              </div> */}
            </div>

            {/* Submit button */}
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                </span>
                Submit
              </button>
            </div>

          </form>

        </div>

      </div>
    </>
  )
}

export default SignUp;