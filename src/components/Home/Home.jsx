import React, { useContext, Fragment } from 'react';

import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import classes from './Home.module.css';
import AuthContext from '../../store/auth-context';

import UsersPage from '../../pages/UsersPage';

const Home = (props) => {
  const authCtx = useContext(AuthContext);

  return (
    <Fragment>
      <Card className={classes.home}>
        <h1>Welcome back!</h1>
        <Button onClick={authCtx.onLogout}>Logout</Button>
      </Card>
      <UsersPage />
    </Fragment>
  );
};

export default Home;
