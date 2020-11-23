import React from 'react'


const Stock  = props => {

  const handleClick = () => {
    if (props.addToPortfolio) {
      props.addToPortfolio(props.stock)
    } else {
      props.removeFromPortfolio(props.stock.id)
    }
  }

  return (
    <div>

    <div className="card" onClick={handleClick}>
      <div className="card-body">
        <h5 className="card-title">{
            props.stock.name
          }</h5>
        <p className="card-text">{
            props.stock.price
          }</p>
      </div>
    </div>


  </div>
  )

}

export default Stock
