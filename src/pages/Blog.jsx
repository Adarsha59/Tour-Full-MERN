import React, { useEffect, useState } from "react";
import axios from "axios";
import blogData from "../../public/blog.json";
import { useNavigate } from "react-router-dom";
function Blog() {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/gallery");
        setBlogData(response.data);
        console.log("Fetch data form server ", response.data);
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };

    fetchBlogData();
  }, []);
  const navigate = useNavigate();

  const handleNavigate = (data) => {
    navigate(`/blog/${data.title}`, { state: { blogData: data } });
  };

  return (
    <>
      <section id="blog" className=" dark:bg-slate-200 text-white pt-36 pb-32">
        <div className="container">
          <div className="w-full px-4">
            <div className="mx-auto mb-16 max-w-xl text-center">
              <h4 className="mb-2 text-lg font-semibold text-primary">Blog</h4>
              <h2 className="mb-4 text-3xl font-bold dark:text-black sm:text-4xl lg:text-5xl">
                Hamro-Blog
              </h2>
              <p className="text-md font-medium text-secondary md:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                quisquam perspiciatis blanditiis dolores?
              </p>
            </div>
          </div>

          <div className="flex flex-wrap">
            {blogData.map((blog) => (
              <div className="w-full px-4 lg:w-1/2 xl:w-1/3" key={blog.id}>
                <div className="mb-10 overflow-hidden rounded-xl  dark:bg-slate-200 text-white shadow-lg">
                  <img src={blog.image_link} alt="Bali" className="w-full" />
                  <div className="py-8 px-6">
                    <h3>
                      <a
                        href="dist/blog/bali.html"
                        className="mb-3 block truncate text-xl font-semibold dark:text-black hover:text-primary"
                      >
                        {blog.title}
                      </a>
                    </h3>
                    <p className="mb-6 text-base font-medium text-secondary">
                      {blog.description}
                    </p>
                    <a
                      onClick={() => handleNavigate(blog)}
                      className="rounded-full bg-primary py-3 px-4 text-sm font-medium text-white hover:opacity-80"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;
