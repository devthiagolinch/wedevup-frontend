import { useEffect, useState } from "react";
import { CardsList } from "../../components/cardList/cardsList";
import { api } from "../../services/api";

import './styles.scss';

type Cars = {
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

export function  Index() {
  const [distanceSearch, setDistanceSearch] = useState('');
  const [durationSearch, setDurationSearch] = useState('');
  // const [search, setSearch] = useState<Cars[]>([]);
  const [cars, setCars] = useState<Cars[]>([])

  useEffect(() => {
    api.get('/cars.json').then(({data}) => {
      setCars(data)});
  },[])

  const resultFiltered = cars.filter(c => 
    c.availability.maxDistance.toString().startsWith(distanceSearch) &&
    c.availability.maxDuration.toString().startsWith(durationSearch)
  );

  return (
    <div className="indexPage">
      <div id="menu-container">
        <div className="search">
          <form>
            <input 
              type="text" 
              className="distanceInput" 
              placeholder="Enter the distance:"
              value={distanceSearch}
              onChange={(event) => setDistanceSearch(event.target.value)}
            />
            <input 
              type="text" 
              className="durationInput" 
              placeholder="Enter the duration:"
              value={durationSearch}
              onChange={(event) => setDurationSearch(event.target.value)}
            />
          </form>
        </div>
      </div>

      <div className="mainContent">
        <div className="cardList">
        {
          resultFiltered.map(car => {
            return (
              <CardsList 
                key={car.id}
                id={car.id} 
                picturePath={car.picturePath} 
                brand={car.brand} 
                model={car.model} 
                pricePerDay={car.pricePerDay} 
                pricePerKm={car.pricePerKm} 
                availability={{
                  maxDuration: car.availability.maxDuration,
                  maxDistance: car.availability.maxDistance
                }}          
              />
            )
          })
        }
        </div>
      </div>
    </div>
  )
}