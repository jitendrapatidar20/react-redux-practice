import {
  GET_POSTS,
  GET_POST,
  CREATE_POST,
  UPDATE_POST,
  DELETE_POST,
} from "./types";
import axios from "axios";

// get all posts
export const getPosts = () => async (dispatch) => {
  const result = await axios.get("http://localhost/api/php-react/posts/getPosts.php?type=1");
  // const myJSON = JSON.stringify(result.data.app_data);
  // alert(myJSON);
  dispatch({
    type: GET_POSTS,
    payload: result.data.app_data,
  });
};

// get a post
export const getPost = (id) => async (dispatch) => {
  const result = await axios.get(
    `http://localhost/api/php-react/posts/getPosts.php?type=2&post_id=${id}&user_id=1`
  );
  // const myJSON = JSON.stringify(result.data.app_data);
  // alert(myJSON);
  dispatch({
    type: GET_POST,
    payload: result.data.app_data,
  });
};

// create a post
export const createPost = (post) => async (dispatch) => {
  const result = await axios.post(
    "http://localhost/api/php-react/posts/addpost.php",
    post
  );
  //  const myJSON = JSON.stringify(result.data.app_data);
  // alert(myJSON);

  dispatch({
    type: CREATE_POST,
    payload: result.data,
  });
};

// update a post
export const updatePost = (post) => async (dispatch) => {
  const result = await axios.put(
    `http://localhost/api/php-react/posts/UpdatePost.php?id=${post.id}`,
    post
  );
  // alert(result.data);
  dispatch({
    type: UPDATE_POST,
    payload: result.data,
  });
};

// delete a post


export const deletePost = (id) => async (dispatch) => {
  const new_post = {
    id: id,
  };

  const result = await axios.post(
    `http://localhost/api/php-react/posts/deletePost.php?id=${id}`,
    new_post
  );
  // alert(result.data);
  dispatch({
    type: DELETE_POST,
    payload: id,
  });

};

// export const deletePost = (id) => async (dispatch) => {
//   await axios.post(`http://localhost/api/php-react/posts/deletePost.php?id=${id}`);
//   dispatch({
//     type: DELETE_POST,
//     payload: id,
//   });
// };
