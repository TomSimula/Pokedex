import { Redirect } from 'expo-router';
import React from 'react';
import { appRoutes } from '~src/rooting/routes.config';


export default () => {
  return <Redirect href={appRoutes.pokedex.root} />;
};
