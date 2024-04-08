import React from 'react';

const Login = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Sign in to your account
                    </h2>
                </div>
                <form className="mt-8 space-y-6" action="#" method="POST">
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="email-address" className="sr-only">
                                Email address
                            </label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                                placeholder="Email address"
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
                                autoComplete="current-password"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                                placeholder="Password"
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                            />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                Remember me
                            </label>
                        </div>

                        <div className="text-sm">
                            <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                                Forgot your password?
                            </a>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-accent-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg
                    className="h-5 w-5 text-accent-500 group-hover:text-blue-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                >
                  <path
                      fillRule="evenodd"
                      d="M10 3a1 1 0 00-.648.245l-7 5a1 1 0 000 1.51l7 5a1 1 0 001.297-1.248L4.786 9.53l6.564-4.688A1 1 0 0010 3zM3.633 9.147l6.562 4.687A1 1 0 0011 13V7a1 1 0 00-1.805-.593L3.632 9.147z"
                      clipRule="evenodd"
                  />
                  <path
                      fillRule="evenodd"
                      d="M12 3a1 1 0 01.648.245l7 5a1 1 0 010 1.51l-7 5a1 1 0 01-1.297-1.248L15.214 9.53l-6.563-4.688A1 1 0 0112 3zM4.805 7.407L11 12.593V7.407L4.805 2.22A1 1 0 003 3v10a1 1 0 001.805.593L11 7.407l5.195 5.186A1 1 0 0017 12V3a1 1 0 00-1.805-.593L11 8.593 4.805 2.407A1 1 0 004 3v4a1 1 0 00.805.993z"
                      clipRule="evenodd"
                  />
                </svg>
              </span>
                            Sign in
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
