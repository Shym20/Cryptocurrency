import React, { useEffect, useState } from 'react'
import axios from "axios"
import { server } from '../main'
import {Container,HStack,VStack,Text,Heading,Image} from "@chakra-ui/react"
import Loader from './Loader'
import ErrorComponent from './ErrorComponent'
import '../Components/coin.css'


function Exchange() {
  const [exchanges,setExchanges]= useState([])
  const [loading,setLoading]= useState(true)
  const [error,setError]= useState(false)
  useEffect(()=>{
    const fetchExchange = async()=>{
      try {
        const {data} = await axios.get(`${server}/exchanges`)
        setExchanges(data)
        setLoading(false)
      } catch (error) {
        setError(true)
        setLoading(false)
      }
    }
    fetchExchange()
  },[])
  if(error) return <ErrorComponent/>
  return (
    <Container maxW={"container.xl"}>
      {loading?<Loader/> :(
        <>
        <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
          {exchanges.map((i)=>(
            <div className='oc'>
            <ExchangeCard 
            key={i.id}
            name={i.name}
            img={i.image}
            rank={i.trust_score_rank}
            url={i.url}/>
            </div>
          ))}

        </HStack>
        
        </>
      )}

    </Container>
  )
}

const ExchangeCard = ({name,img,rank,url})=> <a href={url} target={"blank"}>
  <VStack w={"10"} shadow={"lg"} p={"8"} borderRadius={"lg"} transition={"all 0.3s"} m={"4"} css={{"&:hover":{transform:"scale(1.1)"}}}>
    <Image src={img} w={"20"} h={"20"} objectFit={"contain"} alt={"Exchange"}/>
    <Heading size={"md"} noOfLines={1}>
      {rank}</Heading> 
      <Text noOfLines={1}>{name}</Text>
  </VStack>
</a>

export default Exchange
