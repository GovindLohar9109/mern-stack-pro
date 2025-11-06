
import './App.css';
import AddUser from './Components/AddUser.jsx';
import GetAllUsers from './Components/AllUsers.jsx';
import Home from './Components/Home.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/add-user" element={<AddUser />} />
      <Route path="/get-users" element={<GetAllUsers />} />
    
    </Routes>
  );
}
 
export default App;
