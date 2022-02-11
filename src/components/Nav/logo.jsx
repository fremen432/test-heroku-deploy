import React, { Component } from 'react';

class Logo extends Component {
    render() {
        return (
            <>
                <a href="/" className="px-2 flex items-center flex-shrink-0">
                  {/* <img
                    className="block w-auto h-8 lg:block"
                    src="../../assets/images/logo1.svg"
                    alt="Company Logo"
                  /> */}
                  <img
                    className=" w-auto h-8 lg:block"
                    src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
                    alt="Company Logo"
                  />
                </a>
            </>
        )
    }
}

export default Logo;
