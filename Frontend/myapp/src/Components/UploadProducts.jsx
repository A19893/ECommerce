import React from 'react'
const UploadProducts = () => {
  return (
    <>
   <form
        className="modalForm"
        method="post"
        action={`http://localhost:5000/routes/createProduct`}
        encType="multipart/form-data"
      >
        <div className="inputContainer">
          <div className="fileInput">
            <input name="prodName" type="text"/>
            <input name="prodDesc" type="text"/>
            <input name="prodPrice" type="text"/>
            <input name="prodCategory" type="text"/>
            <label htmlFor="image1">
              <img src={"jgbhjn"} alt="#" />
            </label>
            <input
              id="image1"
              type="file"
              name="image1"
              accept="image/*"
            />

            <label htmlFor="image2">
              <img src={"jgbhjn"} alt="#" />
            </label>
            <input
              id="image2"
              type="file"
              name="image2"
              accept="image/*"
            />

            <label htmlFor="image3">
              <img src={"jgbhjn"} alt="#" />
            </label>
            <input
              id="image3"
              type="file"
              name="image3"
              accept="image/*"
            />

            <label htmlFor="image4">
              <img src={"jgbhjn"} alt="#" />
            </label>
            <input
              id="image4"
              type="file"
              name="image4"
              accept="image/*"
            />
          </div>
          </div>
          <input type = "submit" />
          </form>
    </>
  )
}

export default UploadProducts