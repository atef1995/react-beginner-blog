import React from "react";
import { Link } from "react-router-dom";
import Chip from "../../../common/Chip";
import { Helmet } from "react-helmet";
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

  const jsonLD = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    image: cover,
    author: {
      "@type": "Person",
      name: authorName,
    },
    datePublished: createdAt,
    description: strippedDescription,
  };

  return (
    <div className="blogItem-wrap">
      <Helmet>
        <meta charSet="utf-8" />
        <script type="application/ld+json">{JSON.stringify(jsonLD)}</script>
        <title>{title}</title>
        <meta name="description" content={strippedDescription} />
        <Link to={`/blog/${id}`} />
      </Helmet>
      <Link className="blogItem-link" to={`/blog/${id}`}>
        <img
          className="blogItem-cover"
          src={cover}
          alt={`cover for ${title}`}
        />
        <Chip label={category} />
        <h3>{title}</h3>
        <p className="blogItem-desc">{strippedDescription}</p>➝
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
