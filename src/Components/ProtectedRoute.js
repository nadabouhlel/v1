import React from "react";
import { Route, Redirect } from "react-router-dom";
import auth from "./auth";

export const ProtectedRoute = ({
  component: Component,    //we passed component as a prop and the rest of the props will be distructured in rest ...rest
  ...rest
}) => {
  return (     //protected route return a route with the component that is passed
    <Route      //in our case it is applayout as a render prop
      {...rest}
      render={props => {
        if (auth.isAuthenticated()) {    //check if user is authenticated
          return <Component {...props} />;   //if yes return component
        } else {                                 
          return (
            <Redirect   //if not redirect user to / landingpage 
              to={{
                pathname: "/",
                state: {
                  from: props.location
                }
              }}
            />
          );
        }
      }}
    />
  );
};