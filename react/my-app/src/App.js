import AboutPage from "./RouterSample/AboutPage";
import ContactPage from "./RouterSample/ContactPage";
import HomePage from "./RouterSample/HomePage";
import { Link, Route , Routes } from 'react-router-dom';
import CategoryPage from "./RouterSample/CategoryPage";
import CategoryDetail from "./RouterSample/CategoryDetail";
import ChildSample from "./RouterSample/ChildSample";
import GuardSample from "./RouterSample/GuardSample";
import LoginPage from "./RouterSample/LoginPage";
import LocationSample from "./RouterSample/LocationSample";
import Products from "./ContextSample/Products";
import { useContext } from "react";
import { CardContext } from "./ContextSample/CardContext";
import Card from "./ContextSample/Card";

import 'antd/dist/antd.css'; // or 'antd/dist/antd.less';

import {Layout, Menu} from "antd";
import {Content, Footer, Header} from "antd/lib/layout/layout";


import Customers from "./components/Customers";
import AddCustomer from "./components/AddCustomer";
import AddProduct from "./components/AddProduct";







function App() {

  let citiesSource = ['İzmir', 'Ankara', 'İstanbul', 'Bakü']

  const hello = () => {
    alert('Hello React Props!!')
  }


  const {card} = useContext(CardContext)

  // <ul style={{display:'flex', justifyContent: 'space-between'}}>

  //       <li><Link to='/'>Home</Link></li>
  //       <li><Link to='/contact'>Contact</Link></li>
  //       <li><Link to='/about'>About</Link></li>
  //       <li><Link to='/categories'>Categories</Link></li>
  //       <li><Link to='/guardsample'>Guard Sample</Link></li>
  //       <li><Link to='/location'>Location Sample</Link></li>
  //       <li><Link to='/products'>Products</Link></li>
  //       <li><Link to='/card'>Card</Link></li>



  //     </ul>


  const items = [
  { label: <Link to='/'>Home</Link>, key: '1' }, // remember to pass the key prop
  { label: <Link to='/customers'>Customers</Link>, key: '2' },
  { label: <Link to='/addcustomer'>Add Customer</Link>, key: '3' },
  { label: <Link to='/addproduct'>Add Product</Link>, key: '4' },
  { label: 'item 2', key: 'item-2' }, // which is required
  {
    label: 'sub menu',
    key: 'submenu',
    children: [{ label: 'item 3', key: 'submenu-item-1' }],
  },
  
];



  return (

    <> {/*boş bir düğüm (Fragment denir) ya da div de yazılabilir 

    Component isimleri büyük harfle başlamalı -> Jsx...
    
    */} 

      { /* <UserDetail name="Musti" surname="Gumusbacak" age = {18}></UserDetail> */}

      { /* <CityList cities= {citiesSource}></CityList>
      <ChildComponent merhaba={hello}/>

      <ProductDetails name={'Iphone'} stock={10} status={false}></ProductDetails> */}

      {/*<CategoryPage></CategoryPage> 
      
      <CounterSample/>

      <ArraySample/>
      <ToggleStateSample/>
      */}


      {/*<ToDoList/>*/}


      {/*<CategoryTable/>*/}

      {/*<ParentCounter/>*/}

      {/*<InputChangeSample/>*/}

      {/*<ManyRenders/>  infinite loop
      
      <SupplierList/>*/}

      
      <Layout>

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
            padding: '20px 40px',
            marginTop: 64,
          }}
        >
          <Routes>

          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/about" element={<AboutPage/>}></Route>
          <Route path="/contact" element={<ContactPage/>}></Route>
          <Route path="/categories" element={<CategoryPage/>}></Route>
          <Route path="/categories/:id" element={<CategoryDetail/>}></Route>
          <Route path="/login" element={<LoginPage/>}></Route>
          <Route path="/guardsample" element={<GuardSample>
              <ChildSample/>
            </GuardSample>}>
          </Route>

          <Route path="/location" element={<LocationSample/>}></Route>
          <Route path="/products" element={<Products/>}></Route>
          <Route path="/card" element={<Card/>}></Route>
          <Route path="/customers" element={<Customers/>}></Route>
          <Route path="/addcustomer" element={<AddCustomer/>}></Route>
          <Route path="/addproduct" element={<AddProduct/>}></Route>

          </Routes>

        </Content>



        <Footer

          style={{
          textAlign: 'center',
          }}
        >
          Ant Design ©2018 Created by Ant UED

        </Footer>

      </Layout>

      {/* <div style={{display:'flex', justifyContent: 'space-around'}}>

      <h1>Site Header</h1>
      <h1>Card Length:  {card.length}</h1>


      </div>

      

       */}

      

      

    </>
    
  );
}

export default App;
