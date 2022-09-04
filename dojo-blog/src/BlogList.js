import { Link } from "react-router-dom";

const BlogList = ({ property, title }) => {
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {property.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2> {blog.title}</h2>
            <p> Written by {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;

// props are more reusing, globally use data declare in home instead of declaring again here
