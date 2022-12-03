/** @format */

import { Link } from "react-router-dom";
import { useState } from "react";

const InputForm = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    let formData = new FormData()
    formData.append('file', image.data)
    const response = await fetch('http://localhost:5000/image', {
      method: 'POST',
      body: formData,
    })
    if (response) setStatus(response.statusText)
    alert(inputs);
  };

  const [image, setImage] = useState({ preview: '', data: '' })
  const [image2, setImage2] = useState({ preview: '', data: '' })
  const [status, setStatus] = useState('')
   

  const handleFileChange = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    }
    setImage(img)
  }

  const handleFileChange2 = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    }
    setImage2(img)
  }

  return (
    <form className="form_info" onSubmit={handleSubmit}>
      <label>
        Enter your name:
        <input
          type='text'
          name='username'
          value={inputs.username || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        Enter your age:
        <input
          type='text'
          name='age'
          value={inputs.age || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        Enter your Email:
        <input
          type='text'
          name='age'
          value={inputs.age || ""}
          onChange={handleChange}
        />
      </label>
      {/* //for image  */}
      {image.preview && <img src={image.preview} width='100' height='100' />}
        <input type='file' name='file' onChange={handleFileChange}></input>
      {image2.preview && <img src={image2.preview} width='100' height='100' />}
        <input type='file' name='file' onChange={handleFileChange2}></input>
      {status && <h4>{status}</h4>}
      <input className="btnSubmit" type='submit' />
    </form>
  );
};

export default InputForm;
