import axios from 'axios'
import React, { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { CardContext } from './CardContext'

function Products() {

  const [products, setproducts] = useState([])

  useEffect(() => {

    axios.get('https://northwind.vercel.app/api/products')
    .then(res => setproducts(res.data));
    
  }, [])

  // GLOBAL SATATE'e yani CONTEXT'e bağlanıyoruz!
  

  const {card, setcard} = useContext(CardContext)

  const addToCard = (item) => {

    // ürünü sepete ekle

    // İlk önce sepette ürün var mı yok mu diye bak


    let product = card.find(q => q.id == item.id);


    if(product){

      product.quantity =  product.quantity + 1

      setcard([...card])


    }else{

      let newCardItem = {

        id: item.id,
        name: item.name,
        unitPrice: item.unitPrice,
        quantity: 1


      }

      setcard([...card, newCardItem])


    }

    



  }
  


  return (
    <>

      <ul>

        {
          products && products.map((item,key) => {

            return <>

              <li key={key}>{item.name}</li>
              <button onClick={() => addToCard(item)}>Add to Card</button>
            
            
            </>
          })



        }




      </ul>
    
    
    </>
  )
}

export default Products