import './styles.scss'

type CarsProp = {
  id: string,
  picturePath: string,
  brand: string,
  model: string,
  pricePerDay: number,
  pricePerKm: number,
  availability: { 
    maxDuration: number,
    maxDistance: number 
  },
}

export function CardsList(props: CarsProp ) {

  const rentPriceDays =props.pricePerDay * props.availability.maxDuration
  const rentPriceDistance = props.pricePerKm * props.availability.maxDistance
  const totalRentPrice = rentPriceDays + rentPriceDistance
  
  return (
    <div id="container" >
      <div className="card" key={props.id}>
        <div className="cardImg">
          <img src="#" alt="" />
        </div>
        <div className="cardTitle">
          <p>Model: <span>{props.model}</span></p>
          
          <p>Brand: <span>{props.brand}</span></p>
        </div>

        <div className="cardAvailability">
          <div className="cardAvailabilityInfos">
            <strong>Max Distance: <span>{props.availability.maxDistance}</span></strong>
            <strong>Max Duration:  <span>{props.availability.maxDuration}</span></strong>
          </div>
        </div>

        <div className="cardPrices">
          <div className="totalPrice">
            <strong>Total price:  <span>R$ {totalRentPrice.toFixed(2).replace(".", ",")}</span></strong>
          </div>
        </div>
        
      </div>
    </div>
  )
}