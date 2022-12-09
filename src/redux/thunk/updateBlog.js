import { updateBlog } from "../action/blogAction";

const updateBlogData = (data, id) => {
  return async (dispatch) => {
    const res = await fetch(`http://localhost:5000/blog/${id}`, {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await res.json();

    if (result.modifiedCount) {
      dispatch(updateBlog({ editData: data, id: id }));
    }
    console.log(result);
  };
};

export default updateBlogData;
