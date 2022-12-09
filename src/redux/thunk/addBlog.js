import { addNewBlog } from "../action/blogAction";

const addBlog = (product) => {
  return async (dispatch, getState) => {
    const res = await fetch("http://localhost:5000/blog", {
      method: "POST",
      body: JSON.stringify(product),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await res.json();
    if (result.acknowledged) {
      dispatch(
        addNewBlog({
          _id: result.insertedId,
          ...product,
        })
      );
    }
  };
};

export default addBlog;
