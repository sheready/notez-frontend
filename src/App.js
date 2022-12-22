import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Header from './components/Header';
import NotesListPage from './pages/NotesListPage';
import NotePage from './pages/NotePage';

function App() {


  return (
    <Router>
      <Header/>
      <Routes>
        
        <Route path="/" exact element={
          <>
         
          <NotesListPage/>
          </>
        }/>
        <Route path="/note/:id" element={<NotePage/>} />
      </Routes>



    </Router>

  );
}

export default App;
