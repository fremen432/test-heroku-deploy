import React, { Component } from 'react';

import Auth from '../../utils/auth'

class NavEl extends Component {

  logout(event) {
    event.preventDefault();
    Auth.logout();
    window.location.href="/"
  };

  adminRoutes = { name: 'Admin', ref: 'admin', }
  
  navRoutes = [
    { name: 'Home',             ref: '/', },
    { name: 'Products',         ref: 'products', },
    { name: 'About',            ref: 'about', },
    { name: 'Contact',          ref: 'contact', },
    // { name: 'Admin',            ref: 'admin', },
    { name: 'Cart',             ref: 'cart', },
    { name: 'Order History',    ref: 'orderHistory', },
    // { name: 'Order Summary',    ref: 'orderSummary', },
  ]

  loggedOutNavElements =  [
    { name: 'Log In',   ref: 'login', },
    { name: 'Sign Up',  ref: 'signup', },
  ]
  loggedInNavElements =  [
    { name: 'Log Out',  ref: '/', onClick: this.logout}
  ]
  basicClasses = ` nav-el inline-flex  items-center px-2  pt-1 text-sm  font-medium  border-b-2`
  nonFocusedClasses = ` text-gray-500 border-transparent hover:border-gray-300 hover:text-gray-700`
  focusedClasses = ` text-gray-900 border-indigo-500 `

  render() {
    return (
      <>
        <div className="hidden lg:px-2 lg:flex ">
          <>
            {
              this.navRoutes.map( el => 
                <a  
                  href={ el.ref } 
                  key={ el.name } 
                  onClick={ el.onClick } 
                  className={ this.basicClasses + this.nonFocusedClasses } 
                >{ el.name }</a>
              )
            }
          </>
          {Auth.loggedIn() ? (
            <>
              {
                this.loggedInNavElements.map( el => 
                  <a  
                    href={ el.ref } 
                    key={ el.name } 
                    onClick={ el.onClick } 
                    className={ this.basicClasses + this.nonFocusedClasses } 
                  >{ el.name }</a>
                )
              }
            </>
          ) : (
            <>
              {
                this.loggedOutNavElements.map( el => 
                  <a  
                    href={ el.ref } 
                    key={ el.name } 
                    onClick={ el.onClick } 
                    className={ this.basicClasses + this.nonFocusedClasses } 
                  >{ el.name }</a>
                )
              }
            </>
          )}
        </div>

      </>
    )
  }
}

export default NavEl;