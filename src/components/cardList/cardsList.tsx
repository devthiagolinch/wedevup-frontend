import './styles.scss'

type CarsProp = {
  id: string,
  picturePath: string,
  brand: string,
  model: string,
  pricePerDay: number,
  pricePerKm: number,
  availability: { 
    maxDuration: string,
    maxDistance: string 
  }
}

export function CardsList(props: CarsProp ) {
    return (
      <div id="container" >
       <div className="card" key={props.id}>
              <div className="cardImg">
                `pictures/${props.id}.jpg`
              </div>
              <div className="cardTitle">
                <p>Model: <span>{props.model}</span></p>
                
                <p>Brand: <span>{props.brand}</span></p>
              </div>

              <div className="cardPrices">
                <div className="pricePerDay">
                <strong>Price p/ day:  <span>{props.pricePerDay}</span></strong>
                </div>
                
                <div className="pricePerKm">
                  <strong>Price p/ km: <span>{props.pricePerKm}</span></strong>
                </div>
              </div>

              <div className="cardAvailability">
                <div className="cardAvailabilityInfos">
                  <strong>Max Duration:  <span>{props.availability.maxDuration}</span></strong>
            
                  <strong>Max Distance: <span>{props.availability.maxDistance}</span></strong>
                </div>
              </div>
            </div>
    </div>
  )
}