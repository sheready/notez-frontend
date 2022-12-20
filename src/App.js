import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Header from './components/Header';
import NotesListPage from './pages/NotesListPage';


function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={
            <>
            <Header/>
            <NotesListPage/>
            </>
          }/>
      </Routes>

    </Router>

  );
}

export default App;
