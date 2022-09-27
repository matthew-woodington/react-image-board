import { useState } from 'react';
import ImageForm from "../ImageForm/ImageForm";
import ImageList from "../ImageList/ImageList";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { BiTrip } from 'react-icons/bi';


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
    { source: "https://images.unsplash.com/photo-1663601896596-ee0f9daac04c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80", caption: "Karnak Temples, Karnak, Luxor, Egypt" },
    { source: "https://images.unsplash.com/photo-1656425300959-1b2b332dc55e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80", caption: "Es Vedrà, Spain" },
    { source: "https://images.unsplash.com/photo-1547532182-bf296f6be875?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2428&q=80", caption: "Martin's Beach, Halfmoon Bay, USA" },
    { source: "https://images.unsplash.com/photo-1662752384818-3d51ef2e6a71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80", caption: "Torri del Benaco, VR, Italy" },
  ];

function ImageBoard() {

    const [images, setImages] = useState(INITIAL_IMAGES);

    const addImage = (newImage) => {
        setImages([...images, newImage]);
    }

    return (
        <div>
            
            <Navbar className='nav'>
                <Container fluid>
                    <Navbar.Brand className='logo'><BiTrip className='icon'/>Travel Image Board</Navbar.Brand>
                </Container>
            </Navbar>
            <Container fluid className='form'>
                <ImageForm addImage={addImage}/>
            </Container>
            <Container className="image-container" fluid>
                <ImageList images={images}/>
            </Container>
        </div>
    )
}

export default ImageBoard;