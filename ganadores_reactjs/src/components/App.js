import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from './Layout';
import Como from '../pages/Como';
import Premios from '../pages/Premios';
import Ganadores from '../pages/Ganadores';
import Terminos from '../pages/Terminos';


function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Como} />
          <Route exact path="/premios" component={Premios} />
          <Route exact path="/ganadores" component={Ganadores} />
          <Route exact path="/terminos" component={Terminos} />
          
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
