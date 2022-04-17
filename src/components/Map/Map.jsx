import React from 'react'
import GoogleMapReact from 'google-map-react'
import {Paper,Typography,typography,useMediaQuery} from "@material-ui/core" 
import  LocationOnOutlinedIcon  from '@material-ui/icons/LocationOnOutlined'
import { Rating  } from '@material-ui/lab'

import useStyles from "./styles"

const Map = ({setCoordinates,setBounds,coordinates,places,setChildClick}) => {
  const classes = useStyles();
  const isDesktop = useMediaQuery('(min-width:600px)');
  console.log(places);
 
  return (
    <div className={classes.mapContainer}>
        <GoogleMapReact
          bootstrapURLKeys={{key: 'AIzaSyC7OVtaUGqzQKAfA_tPzzqfrObaEzjnt-s'}}
          defaultCenter={coordinates}
          center={coordinates}
          defaultZoom={14}
          margin={[50,50,50,50]}
          options={''}
          onChange={(e) => {
            setCoordinates({lat:e.center.lat , lng: e.center.lng})
            setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw}) 
          }}
          onChildClick={(child) => setChildClick(child)}
        >
        {places && places.map((place,i) => ( 
          <div
          className={classes.markerContainer}
          lat= {Number(place.latitude)}
          lng = {Number(place.longitude)}
          key={i}
          >
            {
              !isDesktop ? (
                <LocationOnOutlinedIcon color='primary' fontSize='large'/>
              ) : (
                <Paper elevation={3} className={classes.paper}>
                  <Typography variant='subtitle2' className={classes.typography} gutterBottom>{place.name}</Typography>
                  <img 
                  className={classes.pointer}
                  src={place.photo ? place.photo.images.large.url :"https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"}
                  alt={place.name}
                  />
                  <Rating size='small' value={Number(place.rating)} readOnly/>
                </Paper>
              )
            }
          </div>
        ))}
        </GoogleMapReact>
    </div>
  )
}

export default Map