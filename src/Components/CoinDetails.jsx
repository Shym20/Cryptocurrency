import React, { useEffect } from 'react'
import {Container,Box,RadioGroup,Radio,HStack,VStack, Text,Image} from "@chakra-ui/react"
import { useState } from 'react'
import Loader from './Loader'
import {useParams} from "react-router-dom"
import  axios  from "axios"
import { server } from '../main'
import ErrorComponent from './ErrorComponent'
function CoinDetails() {

  const [coins,setCoins]= useState([])
  const [loading,setLoading]= useState(true)
  const [error,setError]= useState(false)
  const [currency,setCurrency]= useState("inr")

  const params = useParams()

  useEffect(()=>{
    const fetchCoin = async()=>{
      try {
        const {data} = await axios.get(`${server}/coins/${params.id}`)
        setCoin(data)
        setLoading(false)
      } catch (error) {
        setError(true)
        setLoading(false)
      }
    }
    fetchCoin()
  },[params.id])

  if(error) return <ErrorComponent/>

  return <Container maxW={"container.xl"}>
    {
      loading?<Loader/>:(
        <>
        <Box width={"full"} borderWidth={1}>
          adas
        </Box>
        

        <RadioGroup value={currency} onChange={setCurrency}>
         <HStack>
          <Radio value={"inr"}>INR</Radio>
          <Radio value={"usd"}>USD</Radio>
          <Radio value={"eur"}>EUR</Radio>
         </HStack>
        </RadioGroup>
        
        <VStack spacing={"4"} p={"16"} alignItems={"flex-start"}>
          <Text fontSize={"small"} alignSelf={"center"} opacity={0.7}>
            Last Updated on {Date().split("G")[0]}
          </Text>
          <Image src={coin.image.large} w={"16"} h={"16"} objectFit={"contain"}/>
        </VStack>
        </>
      )
    }

  </Container>
}

export default CoinDetails
