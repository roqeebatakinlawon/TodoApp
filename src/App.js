import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from './pages/Home';
import TodoDetails from './components/TodoDetails';
import NotFound from './pages/NotFound';
import ErrorBoundary from './components/ErrorBoundary';
import "./App.css"

function App() {
  return (
 <div className='' style={{width: '100%'}}>

<Navbar />
 
      <Routes>
        
       <Route
        path="/"
        element={
      
            <Home />
        
        }
      />
        <Route path="/todos/:id" element={<TodoDetails />} />
        <Route path="*" element={<NotFound />} />
        <Route path='/error-boundary' element={<ErrorBoundary />} />
      </Routes>
    
      </div>
  );
}

export default App;
