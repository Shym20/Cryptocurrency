import React, { useEffect, useState } from 'react'
import axios from "axios"
import { server } from '../main'
import {Container,HStack,Button,VStack,Text,Heading,Image,RadioGroup,Radio} from "@chakra-ui/react"
import Loader from './Loader'
import ErrorComponent from './ErrorComponent'
import CointCard from './CointCard'
import '../Components/coin.css'

function Coin() {
  const [coins,setCoins]= useState([])
  const [loading,setLoading]= useState(true)
  const [error,setError]= useState(false)
  const [page,setPage]= useState(1)
  const [currency,setCurrency]= useState("inr")
  const currencySymbol = currency==="inr"?"₹" : currency==="eur"?"€":"$"

  const changePage = (page)=>{
    setPage(page)
    setLoading(true)
  }

  const btns = new Array(132).fill(1)
  useEffect(()=>{
    const fetchCoins = async()=>{
      try {
        const {data} = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`)
        setCoins(data)
        setLoading(false)
      } catch (error) {
        setError(true)
        setLoading(false)
      }
    }
    fetchCoins()
  },[currency,page])
  if(error) return <ErrorComponent/>
  return (
    <Container maxW={"container.xl"}>
      {loading?<Loader/> :(
        <>
        <RadioGroup value={currency} onChange={setCurrency}>
         <HStack>
          <Radio value={"inr"}>INR</Radio>
          <Radio value={"usd"}>USD</Radio>
          <Radio value={"eur"}>EUR</Radio>
         </HStack>
        </RadioGroup>
        <HStack  wrap={"wrap"} justifyContent={"space-evenly"}>
          {coins.map((i)=>(
            <div className='oc'>
            <CointCard 
            key={i.id}
            id={i.id}
            name={i.name}
            price={i.current_price}
            img={i.image}
            symbol={i.symbol}
            currencySymbol={currencySymbol}
            url={i.url}/>
            </div>
          ))}

        </HStack>
        <HStack w={"full"} overflow={"auto"} p={"8"}>{
          btns.map((item,index)=>(
          <Button className='indexes' key={index}  onClick={()=>changePage(index+1)}>
             {index+1}
          </Button>
          ))
        } </HStack>
        
        </>
      )}

    </Container>
  )
}



export default Coin
