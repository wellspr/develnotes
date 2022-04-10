import { blogsApi } from "../api";
import { appBrandName, appDescription, blogID } from "../config";
import PageTemplate from "../components/PageTemplate"

const Home = (props) => {

  const head = { title: "Home" };

  const blogName = props.blog.blogName || appBrandName();
  const blogDescription = props.blog.blogDescription || appDescription(); 

  const renderHomePage = () => {
    return (
      <div className="d-flex flex-column justify-content-center align-items-center flex-grow-1">

          <h1>{ blogName }</h1>

          <p>{ blogDescription }</p>

      </div>
    );
  };

  return <PageTemplate head={head} >
    { renderHomePage() }
  </PageTemplate>
}

export const getStaticProps = async () => {
  const request = await blogsApi.get(`/blog/${blogID}`);
  const blog = request.data.items[0];

  if (blog) {
    return { 
      props: {
        blog: {
          blogName: blog.blogName || "",
          blogDescription: blog.blogDescription || ""
        }
      } 
    };
  }
};

export default Home;
