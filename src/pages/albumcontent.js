import styled from "styled-components";
import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import ImageViewer from "react-simple-image-viewer";

const AlbumContent = () => {
	const [content, setContent] = useState([]);
	const [currentImage, setCurrentImage] = useState(0);
	const [isViewerOpen, setIsViewerOpen] = useState(false);

	const requestdata = async () => {
		try {
			const imagedata = await axios.get(
				"https://jsonplaceholder.typicode.com/photos?albumId=2"
			);
			return imagedata;
		} catch (err) {}
	};
	const getdata = requestdata();
	useEffect(() => {
		getdata.then(data => {
			setContent(data.data);
		});
	}, []);

	const openImageViewer = useCallback(index => {
		setCurrentImage(index);
		setIsViewerOpen(true);
	}, []);

	const closeImageViewer = () => {
		setCurrentImage(0);
		setIsViewerOpen(false);
	};

	return (
		<Container>
			{content.map((el, index) => {
				return (
					<ContentContainer key={index}>
						<img
							src={el.thumbnailUrl}
							key={index}
							onClick={() => openImageViewer(index)}
							alt=""
						/>
						<span>{el.title}</span>
					</ContentContainer>
				);
			})}
			{isViewerOpen && (
				<ImageViewer
					src={content.map(el => el.url)}
					currentIndex={currentImage}
					disableScroll={false}
					closeOnClickOutside={true}
					onClose={closeImageViewer}
					backgroundStyle={{
						backgroundColor: "rgba(0,0,0,0.9)",
					}}
				/>
			)}
		</Container>
	);
};

export default AlbumContent;

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
`;

const ContentContainer = styled.div`
	width: 8vw;
	height: 10vh;
	display: flex;
	flex-direction: column;
	padding: 1rem;
`;
