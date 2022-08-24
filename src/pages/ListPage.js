import styled from "styled-components";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
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

const IconContainer = styled.button`
    width: 80px;
    height: 140px;
    border: 0;
    outline: 0;
    background-color: white;
    &:focus {
        border: 2px solid deepskyblue;
    }
`;

const ImageContainer = styled.img`
    width: 60px;
    height: 60px;
    margin-left: auto;
    margin-right: auto;
`;
const AlbumNameContainer = styled.div`
    width: 70px;
    height: 80px;
    text-align: center;
    font-size: 10px;
    font-weight: bold;
    margin-left: auto;
    margin-right: auto;
`;

function ListPage(){
    const [albums, setAlbums] = useState([])
    const navigate = useNavigate();
    const getAlbumData = async () => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/albums');
        return res.data;
    }

    useEffect(() => {
        getAlbumData()
        .then((data) => setAlbums(data))
    },[])
    
    return (
        <div>
            <Container>
                {albums.map((album) => {
                    const data = {
                        id: album.id,
                        userId: album.userId,
                        title: album.title
                    }
                    /** 더블클릭시 상세페이지로 이동 */
                    const onDbClickImg = (e) => {
                        const id = e
                        navigate(`/photos/${data.id}`);
                        console.log(data)
                    }
                    return (
                        <IconContainer key={album.id} onDoubleClick={onDbClickImg}>
                            <ImageContainer src={folder}/>
                            <AlbumNameContainer>{album.title}</AlbumNameContainer>
                        </IconContainer>
                    )
                })}
            </Container>
        </div>
    )
}

export default ListPage;
