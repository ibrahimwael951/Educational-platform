import Image from "next/image";
import { FaCalendarAlt, FaComments } from "react-icons/fa";

const PopularPosts = () => {
const posts = [
    {
      id: 1,
      image: "/home/post1.png",
      date: "14 June 2023",
      comments: "06",
      text: "Velit esse cillum dolore eu fugiat nulla pariatur. ",
    },
    {
      id: 2,
      image: "/home/post2.png",
      date: "21 April 2024",
      comments: "06",
      text: "Velit esse cillum dolore eu fugiat nulla pariatur. ",
    },
    {
      id: 3,
      image: "/home/post3.png",
      date: "14 June 2023",
      comments: "06",
      text: "Velit esse cillum dolore eu fugiat nulla pariatur. ",
    },
  ];

  return (
    <section className="container mx-auto py-10 px-4">
    
      <p className="bg-[#E9E2FF] text-[#704FE6] px-4 py-2 font-medium inline-block uppercase rounded-lg">
        Blog Post
      </p>

      <div className="flex justify-between items-center mt-4">
        <h1 className="text-neutral-800 dark:text-white">Most Popular Post.</h1>
        <a
          href="#"
          className="p-3 rounded-xl bg-purple-500 mt-6 inline-block hover:bg-purple-700 text-white duration-150"
        >
          All Blog Posts →
        </a>
      </div>


      <div className="grid max-[600px]:grid-cols-1 max-[769px]:grid-cols-1 max-[4000px]:grid-cols-3 gap-6 mt-8 jusify-center items-center m-[30px]">
        {posts.map((post) => (
          <div
            key={post.id}
            className=" rounded-xl overflow-hidden shadow-md m-[10px]"
            style={{ backgroundImage: "url('/home/postsBg.png')" }}
          >
            <Image
              src={post.image}
              alt="Blog post"
              width={400}
              height={200}
              className="h-60 object-cover"
            />
            <div className="p-6">

              <div className="flex items-center gap-4 text-[#4D5756] text-sm mb-4">
                <div className="flex items-center gap-2">
                  <FaCalendarAlt className="text-[#704FE6]" />
                  <p className="text-neutral-800 dark:text-slate-400">{post.date}</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaComments className="text-[#704FE6]" />
                  <p className="text-neutral-800 dark:text-slate-400">Comment ({post.comments})</p>
                </div>
              </div>


              <p className="text-sm font-semibold text-neutral-800 dark:text-white">{post.text}</p>

              <a
                href="#"
                className="p-3 rounded-xl bg-purple-500 mt-6 inline-block hover:bg-purple-700 text-white duration-150"
              >
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularPosts;
