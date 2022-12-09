import { updateBlog } from "../action/blogAction";

const updateBlogData = (data, id) => {
  return async (dispatch) => {
    const res = await fetch(`https://redux-backend-production.up.railway.app/blog/${id}`, {
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
