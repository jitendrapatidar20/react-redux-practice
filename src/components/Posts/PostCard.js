import React from "react";
import { deletePost } from "../../actions/postAction";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit,faTrash} from '@fortawesome/free-solid-svg-icons'

import EllipsisText from "react-ellipsis-text";
const PostCard = ({ postItem }) => {
  const dispatch = useDispatch();
  return (
    <div className="col-lg-3 col-md-6 mb-4">
      <div className="card custom-card">
        <img
          src={`https://source.unsplash.com/collection/${postItem.id}/1600x900`}
          alt={postItem.title}
          className="card-img-top"
        />
        <Link
          to={`/updatePost/${postItem.id}`}
          className="btn btn-danger btn-edit"
        >
        <FontAwesomeIcon icon={faEdit} />
        </Link>
        <button
          className="btn btn-danger btn-delete"
          onClick={() => dispatch(deletePost(postItem.id))}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
        <div className="card-body">
          <h6 className="text-secondary"> <EllipsisText text={postItem.title} length={"50"} /></h6>
         
         
          <EllipsisText text={postItem.body} length={"100"} />
          <br/>
          <h6 className="text-secondary">Post Date : {postItem.post_date}</h6>
        </div>
        <div className="card-footer">
          <Link to={`/post/${postItem.id}`} className="btn btn-primary">
            <span className="mb-1"> read more</span>
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default PostCard;
