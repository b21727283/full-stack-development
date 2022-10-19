import LoginPage from './LoginPage';
import { useContext } from 'react';
import { BrowserRouter, Navigate, useRoutes} from 'react-router-dom';
import { IsLoggedContext } from './IsLoggedContext';

import Customers from './Customers';
import CustomerDetail from './CustomerDetail';
import AddCustomer from './AddCustomer';
import UpdateCustomer from './UpdateCustomer';

import { Link, Route , Routes } from 'react-router-dom';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less';

import {Layout, Menu} from "antd";
import {Content, Footer, Header} from "antd/lib/layout/layout";


function App() {
  
  const {isLogged, setIsLogged} = useContext(IsLoggedContext)


  const RequireAuth = ({ children }) => {
 
    if (!isLogged) {

      return <Navigate to="/login" replace={true}/>
    }
    return children;
 };

 const logIn = <LoginPage />;
 const customersPage = <Customers />;

 const routes = [

  {
    path: '/',
    children: [
      // The index route defines what should be displayed
      // on the default route i.e. '/'
      { index: true, element: isLogged ? customersPage : logIn},
      { path: '/login', element: logIn }
    ],
  },
 
  {

    path: "/customers",
    element: 
          <RequireAuth>
            <Customers />
          </RequireAuth>,
          children: [
            
            
          ]
  },
  {

    path: "/addcustomers",
    element: 
          <RequireAuth>
            <AddCustomer />
          </RequireAuth>
  },
  { path: "/customers/detail/:id",
    element: 
          <RequireAuth>
            <CustomerDetail />
          </RequireAuth>},
  { path: "/customers/update/:id",
    element: 
          <RequireAuth>
            <UpdateCustomer />
          </RequireAuth>
}


  
  ];

  const items = [
    
    { label: <Link to='/customers'>Customers</Link>, key: '1' },
    { label: <Link to='/addcustomers'>Add Customer</Link>, key: '2' },
    
  ];


  return (


  <Layout
  style={{alignItems: 'center'}}>

    <Header
    style={{
      position: 'fixed',
      zIndex: 1,
      width: '100%',
    }}>


    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={['1']}
      items={items}
    />



    </Header>

    <Content
      className="site-layout"
      style={{
        marginTop: '10vh',
        height: '100vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '10vh',
        

        


      }}
    >

    {useRoutes(routes)}
      

    </Content>



    <Footer

      style={{
      textAlign: 'center',
      }}
    >
      Techcareer Full Stack Development Bootcamp

    </Footer>

  </Layout>

  );
}

export default App;
