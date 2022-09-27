import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { BsCardImage } from "react-icons/bs";

function ImageForm({ addImage }) {
  const [source, setSource] = useState("");
  const [caption, setCaption] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newImage = { source, caption };
    addImage(newImage);
    setSource("");
    setCaption("");
  };

  const clearText = (e) => {
    setSource("");
    setCaption("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formImgUrl">
        <Form.Label>Image URL</Form.Label>
        <Form.Control
          required
          name="source"
          type="url"
          placeholder="Enter image url here"
          value={source}
          onChange={(e) => setSource(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="imgCaption">
        <Form.Label>Image Caption</Form.Label>
        <Form.Control
          required
          name="caption"
          type="text"
          placeholder="Enter image description here"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
        />
      </Form.Group>
      <Button variant="secondary" type="button" onClick={clearText}>
        Clear
      </Button>
      <Button variant="primary" type="submit">
        <BsCardImage /> Add Image
      </Button>
    </Form>
  );
}

export default ImageForm;
