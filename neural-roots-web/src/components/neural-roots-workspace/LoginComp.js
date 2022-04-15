import React, { useContext } from "react";
import {Form,Button} from 'react-bootstrap';
import AuthContext from "../../context/AuthContext";

const LoginComp = () => {
  let {loginUser} = useContext(AuthContext)
  let {user } = useContext(AuthContext)
  console.log('Inside loginComp', user)

    return(
      <div>
      <form onSubmit={loginUser}>
          <input type="text" name="username" placeholder="Enter Username" />
          <input type="password" name="password" placeholder="Enter Password" />
          <input type="submit"/>
      </form>
      </div>
      );
};

export default LoginComp

