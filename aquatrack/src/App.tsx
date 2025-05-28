import { HashRouter as Router,Routes, Route } from "react-router-dom";
import Home from './pages/Home.tsx';
import Tables from './pages/Tables.tsx';
import Graphs from './pages/Graphs.tsx';
import Layout from './Layout.tsx';

function App(){
  return(
    <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element = {<Home/>}/>
          <Route path="/tables" element = {<Tables/>}/>
          <Route path="/graphs" element = {<Graphs/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;