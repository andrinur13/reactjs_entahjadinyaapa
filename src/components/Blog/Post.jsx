import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Post = (props) => {
  return (
    <div className="col-lg-6 row mx-auto p-4">
      <div className="card mb-3 shadow">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img
              src="https://placeimg.com/240/240/arch"
              className="card-img"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title text-truncate"> {props.data.title} </h5>
              <p
                className="card-text text-truncate"
                style={{ WebkitLineClamp: "2", textOverflow: "ellipsis" }}
              >
                {props.data.body}
              </p>
              <button className="btn btn-danger" onClick={() => props.remove(props.data.id)}>Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
