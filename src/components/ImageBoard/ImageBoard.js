import { useState } from 'react';
import ImageForm from "../ImageForm/ImageForm";
import ImageList from "../ImageList/ImageList";
import Nav from "react-bootstrap/Nav";

const INITIAL_IMAGES = [
    {
      source:
        "https://images.unsplash.com/photo-1616555846456-6d53b92669a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2533&q=80",
      caption: "Grand Anse Beach, Grenada",
    },
    {
      source:
        "https://images.unsplash.com/photo-1542480530-7a1c43daace4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      caption: "Ubon Ratchathani, Thailand",
    },
  ];

function ImageBoard() {

    const [images, setImages] = useState(INITIAL_IMAGES);

    const addImage = (newImage) => {
        setImages([...images, newImage]);
    }

    return (
        <div>
            <Nav>
                <Nav.Item>
                <Nav.Link href="/home">Active</Nav.Link>
                </Nav.Item>
            </Nav>
            <ImageForm addImage={addImage}/>
            <ImageList images={images}/>
        </div>
    )
}

export default ImageBoard;