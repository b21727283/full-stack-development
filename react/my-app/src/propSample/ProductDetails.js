import React from 'react'
import {PropTypes} from 'prop-types'

function ProductDetails({name, unitPrice, stock, status, calc}) {
  return (
    <>

    <h3>Name: {name}</h3>
    <div>
    <span>Price: {unitPrice}</span>
    </div>
    <div><span>Stock: {stock}</span></div>
    <div><span>Status: {status.toString()}</span></div>

    <div>

      <button onClick={() => calc()}>Denemeee</button>
    </div>
    
    
    
    </>
  )
}

ProductDetails.defaultProps = {

    unitPrice: 5000,
    calc: () => {
      return console.log('Calc Tax')
    }
}

ProductDetails.propTypes = {

    name: PropTypes.string.isRequired,
    unitPrice: PropTypes.number,
    stock: PropTypes.number.isRequired,
    status: PropTypes.bool,
    calc: PropTypes.func



}

export default ProductDetails