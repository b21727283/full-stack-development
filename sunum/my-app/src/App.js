import LoginPage from './LoginPage';
import AdminPage from './AdminPage';
import { useContext } from 'react';
import { Route, Navigate, Routes} from 'react-router-dom';
import { IsLoggedContext } from './IsLoggedContext';


function App() {
  
  const {isLogged, setIsLogged} = useContext(IsLoggedContext)


  const RequireAuth = ({ children }) => {
 
    if (!isLogged) {

      return <Navigate to="/login" replace={true}/>
    }
    return children;
 };



  return (
   <>

    <Routes>

    <Route
      path="/login"
      element={
          <LoginPage />
      }
    />

    <Route
      path="/customers"
      element={
          <RequireAuth>
            <AdminPage />
          </RequireAuth>
      }
    />

    </Routes>
    
   
   
   </>
  );
}

export default App;
