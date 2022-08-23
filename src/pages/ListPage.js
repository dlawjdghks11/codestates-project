import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import folder from "../images/folder-open-solid.svg"

const Container = styled.div`
    width: 820px;
    border: 1px solid black;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-wrap: wrap;
`;

const IconContainer = styled.div`
    width: 80px;
    height: 140px;
`;

const ImageContainer = styled.img`
    width: 60px;
    height: 60px;
    border: 1px solid white;
    margin-left: 10px;
    margin-right: 10px;
`;
const AlbumNameContainer = styled.div`
    width: 80px;
    height: 80px;
    border: 1px solid white;
    text-align: center;
    font-size: 10px;
    font-weight: bold;
`;

function ListPage(){
    const [albums, setAlbums] = useState([])
    const getAlbumData = () => {
        return axios.get('https://jsonplaceholder.typicode.com/albums')
        .then(res => res.data)
    }

    useEffect(() => {
        getAlbumData()
        .then((data) => setAlbums(data))
    },[])
    console.log(albums)
    
    return (
        <div>
            <Container>
                {albums.map((image) => {
                    return (
                        <IconContainer>
                            <ImageContainer src={folder}/>
                            <AlbumNameContainer>{image.title}</AlbumNameContainer>
                        </IconContainer>
                    )
                })}
            </Container>
        </div>
    )
}

export default ListPage;