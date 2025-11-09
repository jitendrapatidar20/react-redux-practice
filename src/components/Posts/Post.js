import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../../actions/postAction";
import { useParams } from "react-router-dom";

const Post = () => {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post.post);
  
  const { id } = useParams();
  useEffect(() => {
    loadPost();
  }, []);
  
 
  const loadPost = () => {
    dispatch(getPost(id));
  };

  if (!post) {
    return <h1>loading..</h1>;
  }

  // const myJSON = JSON.stringify(post);
  // alert(myJSON);
//   const result = Object.values(post);
// console.log(post[0].body);
  return (
    <div>
      <img
        src={`https://source.unsplash.com/collection/${post[0].id}/1920x700`}
        alt={post.title}
        className="img-fluid"
      />
      <div className="container">
        <div className="py-5">
          <h1 className="display-4 mb-3">{post[0].title}</h1>
          <p className="lead">{post[0].body}</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
