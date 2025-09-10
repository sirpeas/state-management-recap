import { BrowserRouter, Route, Routes } from 'react-router';

import HomePage from './Home';
import AtomPage from './modules/Atom';
import ObservablePage from './modules/Observable';
import ProxyPage from './modules/Proxy';
import ReduxPage from './modules/Flux';
import SimplifiedFluxPage from './modules/SimplifiedFlux';
import StateMachinesPage from './modules/StateMachines';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/flux" element={<ReduxPage />} />
        <Route path="/simple-flux" element={<SimplifiedFluxPage />} />
        <Route path="/proxy" element={<ProxyPage />} />
        <Route path="/atom" element={<AtomPage />} />
        <Route path="/observable" element={<ObservablePage />} />
        <Route path="/state-machine" element={<StateMachinesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
