import styled from "styled-components";
import React, { useState, useEffect } from "react";
import axios from 'axios'
import { useParams } from "react-router-dom";

const AlbumContent = () => {
  let params = useParams()
  const [content, setContent] = useState([])
  const requestdata = async () => {
    try{
    const imagedata = await axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${params.id}`)
    return imagedata
    }
    catch (err) {}
  }
  const getdata = requestdata()
  useEffect(() => {
    getdata.then((data) => {
      setContent(data.data)
    })
  }, []);


  return(
    <Container>
      {content.slice(0).map((el) => {
        return(
          <ContentContainer key={el.id} >
            <img src={el.thumbnailUrl} />
            <span>{el.title}</span>
          </ContentContainer>
        )
      })}
    </Container>
  );
}

export default AlbumContent


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;

`

const ContentContainer = styled.div`
  width: 8vw;
  height: 10vh;
  display: flex;
  flex-direction: column;
  padding: 1rem;

`