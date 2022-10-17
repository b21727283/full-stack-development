import { element } from 'prop-types'
import React from 'react'
import { useContext } from 'react'
import { CardContext } from './CardContext'

function Card() {

  const {card, setcard} = useContext(CardContext)


  const emptyCard = () =>{

    setcard([])
  }

  const removeProduct = (id) => {

    let cardItems = card.filter(q => q.id != id)

    setcard([...cardItems])


  }

  // Create our number formatter.
  var formatter = new Intl.NumberFormat('tr-TR', {
    style: 'currency',
    currency: 'TRY',

    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

  const totalPriceCal = () =>{
    let total = 0;


    card.forEach(element => {

      total = total + (element.quantity * element.unitPrice);
    })


    return formatter.format(total)



  }

  

  return (
    <>

    <h1>Total Price: {totalPriceCal()}</h1>


    <button onClick={() => emptyCard()}>Empty Card</button>

    {

      card && card.map((item, key) => {

        return  <div style={{display: 'flex'}}>

              <li>

              {item.name} / {item.unitPrice.toFixed(2)} * {item.quantity} = {(item.quantity * item.unitPrice).toFixed(2)}


              <button onClick={() => removeProduct(item.id)}>Remove Product</button>


              </li>

        </ div>
        
        
        
      })

      
    }
    
      
    
    
    </>
  )
}

export default Card