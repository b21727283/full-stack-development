
import CategoryPage from "./CategoryPage";
import ChildComponent from "./propSample/ChildComponent";
import CityList from "./propSample/CityList";
import ProductDetails from "./propSample/ProductDetails";
import UserDetail from "./propSample/UserDetail";
import CounterSample from "./state/CounterSample";
import ArraySample from "./state/ArraySample";
import ToggleStateSample from "./state/ToggleStateSample"
import ToDoList from "./state/ToDoList";
import CategoryTable from "./state/CategoryTable";
import ParentCounter from "./state/ParentCounter";


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

      <ParentCounter/>


      

      

    </>
    
  );
}

export default App;