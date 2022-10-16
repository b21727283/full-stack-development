import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, Route , Routes, useNavigate } from 'react-router-dom';

function CategoryPage() {

    const [categories, setcategories] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
      axios.get('https://northwind.vercel.app/api/categories')
      .then(res => setcategories(res.data))
    }, [])

    const goToDetail = (id) => {

        navigate('/categories/' + id)

    }
    
  return (
    <>

        <ul>

            {
                categories && categories.map((item, key) => {

                    return <><li key={key}><Link to={'/categories/' + item.id}>{item.name}</Link></li>

                    <button onClick={()=> goToDetail(item.id)}>Go to Detail</button>

                    </>

                })
            }



        </ul>
    
    
    
    </>
  )
}

export default CategoryPage