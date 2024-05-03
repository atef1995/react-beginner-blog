import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { blogList } from "../../config/data";
import Chip from "../../components/common/Chip";
import EmptyList from "../../components/common/EmptyList";
import "./styles.css";
import { Link } from "react-router-dom";
import Footer from "../../components/Home/Footer";
import ShareButtons from "../../components/common/ShareButtons";

// i need to add a share button to share the blog on social media
const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    let blog = blogList.find((blog) => blog.id === id);
    if (blog) {
      setBlog(blog);
    }
  }, [id]);

  return (
    <>
      <Link className="blog-goBack" to="/">
        <span> &#8592;</span> <span>Go Back</span>
      </Link>
      {blog ? (
        <div className="blog-wrap">
          {/* dropdown of share on different platforms */}
          <header>
            <p className="blog-date">Published {blog.createdAt}</p>
            <ShareButtons />
            <h1>{blog.title}</h1>
            <div className="blog-subCategory">
              {blog.subCategory.map((category, i) => (
                <div key={i}>
                  <Chip label={category} />
                </div>
              ))}
            </div>
          </header>
          <section className="img-section">
            <img className="cover-img" src={blog.cover} alt="cover" />
            {blog.description.map((paragraph, index) => (
              <div
                key={index}
                className="blog-desc"
                dangerouslySetInnerHTML={{ __html: paragraph }}
              ></div>
            ))}
          </section>
          <br />
          {blog.images.length > 0 && (
            <div>
              {blog.images.map((image, index) => (
                <div key={index} className="blog-desc">
                  <img className="article-img" src={image.src} alt={index} />
                  <p>
                    <b>
                      <h6 className="img-caption">{image.caption}</h6>
                    </b>
                  </p>
                  <br></br>
                  <div
                    dangerouslySetInnerHTML={{ __html: image.description }}
                  ></div>
                  <div className="code-div">
                    {image.code ? (
                      <pre className="code">
                        <code>{image.code}</code>
                      </pre>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          )}

          {
            <div>
              {blog.codeSnippet?.map((snippet, index) => {
                if (snippet.description === "") {
                  return null; // Skip rendering if description is empty
                } else {
                  return (
                    <div key={index}>
                      <br />
                      <pre>
                        <code>{snippet.code}</code>
                      </pre>
                      <br />
                      <p>{snippet.description}</p>
                    </div>
                  );
                }
              })}
            </div>
          }

          <div className="footer">
            <Footer />
          </div>
        </div>
      ) : (
        <EmptyList />
      )}
    </>
  );
};

export default Blog;
