import React from 'react'
import { Link } from 'react-router-dom'
import {Container,HStack,VStack,Text,Heading,Image} from "@chakra-ui/react"

    const CointCard = ({name,img,symbol,price,id,currencySymbol="Rs"})=> <Link to={`/coin/${id}`}>
  <VStack w={"10"} shadow={"lg"} p={"8"} border-radius={"lg"} transition={"all 0.3s"} m={"4"} css={{"&:hover":{transform:"scale(1.1)"}}}>
    <Image src={img} w={"20"} h={"20"} objectFit={"contain"} alt={"Exchange"}/>
    <Heading size={"md"} noOfLines={1}>
      {symbol}</Heading> 
      <Text noOfLines={1}>{name}</Text>
      <Text noOfLines={1}>{price? `${currencySymbol}${price}`:"NA"}</Text>
  </VStack>
</Link>



export default CointCard
