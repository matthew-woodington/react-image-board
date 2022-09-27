import Card from "react-bootstrap/Card";

function ImageList({ images }) {
  const imageItems = images.map(({ source, caption }) => (
    <li>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={source} />
        <Card.Body>
          <Card.Text>{caption}</Card.Text>
        </Card.Body>
      </Card>
    </li>
  ));
  return <ul>{imageItems}</ul>;
}

export default ImageList;
