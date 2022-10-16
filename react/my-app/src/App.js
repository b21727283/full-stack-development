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





function App() {

  let citiesSource = ['İzmir', 'Ankara', 'İstanbul', 'Bakü']

  const hello = () => {
    alert('Hello React Props!!')
  }



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

      <h1>Site Header</h1>

      <ul style={{display:'flex', justifyContent: 'space-between'}}>

        <li><Link to='/'>Home</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/categories'>Categories</Link></li>
        <li><Link to='/guardsample'>Guard Sample</Link></li>
        <li><Link to='/location'>Location Sample</Link></li>



      </ul>

      

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


      </Routes>

      <h1>Site Footer</h1>

      


      

      

    </>
    
  );
}

export default App;
