import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home } from "./pages/Home";
import { NotFoundPoke } from "./pages/NotFoundPoke";
import { Pokemon } from "./pages/Pokemon";

import { Context } from "./contexts/usePokemon";

function App() {
  return (
    <BrowserRouter>
      <Context>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/notfound" exact component={NotFoundPoke} />
          <Route path="/pokemon/:id" exact component={Pokemon} />
        </Switch>
      </Context>
    </BrowserRouter>
  );
}

export default App;
