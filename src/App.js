import React, {useState,useEffect} from 'react'
import {CssBaseline,Grid} from "@material-ui/core"

import {getPlacesData} from "./api"
import Header from './components/Header/Header'
import List from './components/List/List'
import Map from './components/Map/Map'
// import PlaceDetails from './components/PlaceDetails/PlaceDetails'

const App = () => {

  const [places, setPlaces] = useState([])
  const [coordinates, setCoordinates] = useState({})
  const [bounds, setBounds] = useState({})
  const [childClick, setChildClick] = useState(null)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({coords: {latitude,longitude}}) => {
      setCoordinates({lat:latitude, lng:longitude})
    })
  },[])

  useEffect(() => {
    console.log(bounds);
    getPlacesData(bounds.sw , bounds.ne)
    .then((data) => {
      console.log(data)
       setPlaces(data)
    })
  },[bounds,coordinates])
console.log(places);
  return (
    <>
    <CssBaseline/>
    <Header/>
    <Grid container spacing={3} style={{width: '100%'}} >
      <Grid item xs={12} md={4}>
          <List 
          places={places}
          childClick={childClick}
          />
      </Grid>
      <Grid item xs={12} md={8}>
          <Map 
          setCoordinates={setCoordinates}
          setBounds= {setBounds}
          coordinates= {coordinates}
          places={places}
          setChildClick={setChildClick}
          />
      </Grid>
    </Grid>
    </>
  )
}
export default App  
