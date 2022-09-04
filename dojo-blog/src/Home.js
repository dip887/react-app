import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const {
    data: blogs,
    isLoading,
    error,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {error && <div> {error} </div>}
      {isLoading && <div> Loading going on ... </div>}
      {blogs && <BlogList property={blogs} title="All blogs!" />}
    </div>
  );
};

export default Home;

// useEffect function run at every render but using [] empty array  dependency , useeffect func. fire initially but thereafter it don't change w.r.t state update
// it re-render the components whenever state is update

/* if i use parenthesis with func. it automatically invokes for that we use anonymous func. if we pass any parameter */
//   const handleClickAgain = (name, e) => {
//     console.log("hello " + name, e);
//   };
/* <buttononClick={(e) => handleClickAgain("sonu", e)}>Click me Again</button> */

/* <BlogList
        property={blogs.filter((blog) => blog.author === "dipanshu")}
        title="Dipanshu blogs!"
      /> */

//   const handleDelete = (id) => {
//     const newBlogs = blogs.filter((blog) => blog.id !== id);
//     setBlogs(newBlogs);
//   };
