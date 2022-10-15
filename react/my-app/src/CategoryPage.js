import React, {useState} from 'react'
import AddCategory from './AddCategory'
import { categories } from './data/categories'
import CategoryTable from  './CategoryTable'


//Parent Component
function CategoryPage() {

    const [categoryList,  setCategoryList] = useState(categories)

    const deleteItem = (id) => {

      let filtereCategories = categoryList.filter(q => q.id !== id);

      setCategoryList([...filtereCategories])
    }


    const add = (item) => {

      setCategoryList([...categories, item])
    }


  return (
    <>
    
    <h1>Category Page</h1>
    <AddCategory add={add}/>
    <CategoryTable categoryList={categoryList} deleteItem={deleteItem}></CategoryTable>


    </>
    

  )
}

export default CategoryPage