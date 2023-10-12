import React from "react";
import { Link } from "react-router-dom";
import Chip from "../../../common/Chip";
import "./styles.css";

const BlogItem = ({
  blog: {
    description,
    title,
    createdAt,
    authorName,
    authorAvatar,
    cover,
    category,
    id,
  },
}) => {
  function stripHtmlTags(arr) {
    return arr.map((description) => {
      return description.replace(/<\/?[^>]+(>|$)/g, "");
    });
  }

  const strippedDescription = stripHtmlTags(description);
  return (
    <div className="blogItem-wrap">
      <Link className="blogItem-link" to={`/blog/${id}`}>
        <img className="blogItem-cover" src={cover} alt="cover" />
        <Chip label={category} />
        <h3>{title}</h3>
        <p
          className="blogItem-desc"
          // dangerouslySetInnerHTML={{ __html: description }}
        >
          {strippedDescription}
        </p>
        {/* ➝ */}
      </Link>
      <footer>
        <div className="blogItem-author">
          <Link to={"/portfolio"}>
            <img src={authorAvatar} alt="avatar" />
          </Link>
          <div className="date-desc">
            <p>{authorName}</p>
            <p>{createdAt}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BlogItem;
