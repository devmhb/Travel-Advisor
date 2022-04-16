import React from 'react'
import {Box,Typography,Button,Card,CardMedia,CardContent,CardActions,Chip} from "@material-ui/core"
import LocationOnIcon from "@material-ui/icons/LocationOn"
import PhoneIcon from "@material-ui/icons/Phone"
import Rating  from '@material-ui/lab/Rating'

import useStyles from "./styles"

const PlaceDetails = ({place}) => {
    const classes = useStyles();
    console.log(place);

    const websites = [
      {web : "http://hotel-ornate.dhaka-hotel.com/en/"},
      {web : "http://www.hoteltherahmania.com/"},
      {web : "https://hotel71.com.bd/"},
      {web : "http://hotel-ornate.dhaka-hotel.com/en/"},
      {web : "http://www.hoteltherahmania.com/"},
      {web : "https://hotel71.com.bd/"},
      {web : "http://hotel-ornate.dhaka-hotel.com/en/"},
      {web : "http://www.hoteltherahmania.com/"},
      {web : "https://hotel71.com.bd/"},
      {web : "http://hotel-ornate.dhaka-hotel.com/en/"},
      {web : "http://www.hoteltherahmania.com/"},
      {web : "https://hotel71.com.bd/"},
      {web : "http://hotel-ornate.dhaka-hotel.com/en/"},
      {web : "http://www.hoteltherahmania.com/"},
      {web : "https://hotel71.com.bd/"},
      {web : "http://hotel-ornate.dhaka-hotel.com/en/"},
      {web : "http://www.hoteltherahmania.com/"},
      {web : "https://hotel71.com.bd/"},
      {web : "https://hotel71.com.bd/"},
      {web : "https://hotel71.com.bd/"},
      {web : "https://hotel71.com.bd/"},
      {web : "https://hotel71.com.bd/"},
      {web : "https://hotel71.com.bd/"},
      {web : "https://hotel71.com.bd/"},
      {web : "https://hotel71.com.bd/"},
      {web : "https://hotel71.com.bd/"},
      {web : "https://hotel71.com.bd/"},
      {web : "https://hotel71.com.bd/"},
      {web : "https://hotel71.com.bd/"},
      {web : "https://hotel71.com.bd/"},
      {web : "https://hotel71.com.bd/"}
    ];
  return (
   <Card elevation= {6}>
     <CardMedia
      style={{height: 350}}
      image={place.photo ? place.photo.images.large.url :"https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"}
      title={place.name}
     />

     <CardContent>
       <Typography variant='h5' gutterBottom>{place.name}</Typography>
       <Box display="flex" justifyContent="space-between">
          <Typography variant='subtitle1'>Price</Typography>
          <Typography variant='subtitle1' gutterBottom>{place.price}</Typography>
       </Box>

       <Box display="flex" justifyContent="space-between">
          <Typography variant='subtitle1'>Ranking</Typography>
          <Typography variant='subtitle1' display='block' gutterBottom>{place.ranking}</Typography>
       </Box>
     </CardContent>
   </Card>

  )
}

export default PlaceDetails