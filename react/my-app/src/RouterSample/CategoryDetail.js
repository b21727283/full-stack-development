import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


// dışarıdan id bilgisine ihtiyaç var

function CategoryDetail() {

    const [detail, setdetail] = useState({})

    let {id, subid} = useParams(); // path üzerindeki parametleri çekiyoruz

    useEffect(() => {
      axios.get(`https://northwind.vercel.app/api/categories/${id}`)
        .then(res => setdetail(res.data))
    }, [])
    


  return (
    <>

    <h3>Id: {detail.id}</h3>
    <h3>Name: {detail.name}</h3>
    <h3>Description: {detail.description}</h3>
    
    
    </>
  )
}

export default CategoryDetail