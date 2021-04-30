import React, { Suspense, useEffect } from 'react';
import Loader from '../../Components/loader/Loader';
import { Redirect, Route, Switch } from 'react-router-dom';
import { ContactsRoutes } from '../../routes/ContactsRoutes';
import { HomeRoutes } from '../../routes/HomeRoutes';
import { AuthNav } from '../../routes/AuthNavRoutes';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/auth-operation';
import PrivatRoute from '../PrivateRoute';
import PublicRoute from '../PublicRoute';

function Main() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <main>
      <Suspense fallback={<Loader />}>
        <Switch>
          {HomeRoutes.map(({ path, exact, component }) => (
            <Route exact={exact} path={path} component={component} key={path} />
          ))}
          {ContactsRoutes.map(({ path, exact, component }) => (
            <PrivatRoute
              exact={exact}
              path={path}
              component={component}
              key={path}
              redirectTo="/login"
            />
          ))}
          {AuthNav.map(({ path, exact, component }) => (
            <PublicRoute
              exact={exact}
              path={path}
              component={component}
              key={path}
              redirectTo="/contacts"
              restricted
            />
          ))}
          <Redirect from="" to="/" />
        </Switch>
      </Suspense>
    </main>
  );
}

export default Main;
