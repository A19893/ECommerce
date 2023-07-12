export const BASE_IMG_URL = "http://localhost:8000/Products/";
export const getImages = (product) => {
    const data = {
        image1: (product ? (BASE_IMG_URL + product?.imgUrl[0]) : ""),
        image2: (product ? (BASE_IMG_URL + product?.imgUrl[1]) : ""),
        image3: (product ? (BASE_IMG_URL + product?.imgUrl[2]) : ""),
        image4: (product ? (BASE_IMG_URL + product?.imgUrl[3]) : ""),
    }
    return data;
}