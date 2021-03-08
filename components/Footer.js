import React from "react";
import {Card, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import { Text } from 'react'

const Footer = () => {
  return (

<Card>
  <Card.Header as ='table'  > 
  
  <tr>
  <th>   <h1 style={{textAlign: 'left' }}> KESEGARAN.COMPFEST </h1> </th>
  <th> <h1 style={{textAlign: 'right'}}> © 2021 HADDAD </h1> </th>

  </tr> 
   </Card.Header>
  
</Card>


  );
}

export default Footer 