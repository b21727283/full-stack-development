import React, { useEffect, useState } from 'react'
import axios from 'axios'

function SupplierList() {


  const [Suppliers, setSuppliers] = useState([])

  useEffect(() => {

    axios.get('https://northwind.vercel.app/api/suppliers')
      .then(res => setSuppliers(res.data))

  
  }, [])
  


  return (
    <>

        <ul>

            {

                Suppliers && Suppliers.map((item, key) => {

                    return <li key={item.id}>{item.companyName}</li>
                })

            }

        </ul>
    
    
    </>
  )
}

export default SupplierList