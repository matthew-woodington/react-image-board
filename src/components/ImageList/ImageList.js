import Card from "react-bootstrap/Card";

function ImageList({ images }) {
  const imageItems = images.map(({ source, caption }) => (
    <li className="image-card">
      <Card className="card">
        <Card.Img className="card-image" variant="top" src={source} />
        <Card.Body>
          <Card.Text>{caption}</Card.Text>
        </Card.Body>
      </Card>
    </li>
  ));
  return <ul className="image-list">{imageItems}</ul>;
}

export default ImageList;
