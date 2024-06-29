"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const portfolioData = [
  {
    title: "Gadget Hub",
    type: "Ecommerce",
    description:
      "A full-stack e-commerce application where you can create and login to your account then select one or more products to add to the cart or wishlist and place order. You can serach and filter products. Check live demo for more.",
    image: "/assets/images/ecommerce.png",
    url: "https://gadget-hub-store.vercel.app/",
    github: "https://github.com/mmh-masud-03/ecommerce",
    tech: ["NextJS", "Redux Toolkit", "MongoDB", "Tailwind CSS"],
  },
  {
    title: "ConvoSphere",
    type: "Realtime Chat",

    description:
      "A realtime chat application where you can create and login to your account then select one or more contacts to start a chat. You will always see the last message first and send any image or text. Check live demo for more.",
    image: "/assets/images/convosphere.png",
    url: "https://next-chat-convosphere.vercel.app/",
    github: "https://github.com/mmh-masud-03/next-chat",
    tech: ["PusherJS", "Next-Auth", "Cloudinary"],
  },
  {
    title: "JSON Timeline",
    type: "JSON Placholder API",

    description:
      "This is the timeline of posts from jsonplaceholder API. You can see the posts, comments, and users. The posts are sorted in descending order and the comments are sorted by post id.",
    image: "/assets/images/json-timeline.png",
    url: "https://json-timeline.vercel.app/",
    github: "https://github.com/mmh-masud-03/json-timeline",
    tech: ["Next.js", "Tailwind", "JSONPlaceholder"],
  },
  {
    title: "MERN Todo App",
    type: "CRUD",

    description:
      "A simple todo app built with React, Express and MongoDB following MVC pattern where you can add, delete, and mark as complete or incomplete your tasks then filter them by all, active, and completed.",
    image: "/assets/images/todo-full.png",
    url: "#",
    github: "https://github.com/mmh-masud-03/todo-next",
    tech: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Blog Site",
    type: "Blog",

    description:
      "A personal blog site built with React.js. You can navigate between the routes easily. The components are reusable. The blog posts are written in jsx and rendered dynamically.",
    image: "/assets/images/blog-react.png",
    url: "#",
    github: "https://github.com/mmh-masud-03/Blog_React",
    tech: ["React.js", "Markdown", "CSS"],
  },
  {
    title: "Resort Site",
    type: "Frontend",

    description:
      "I made the clone of a resort site using HTML, CSS, and JavaScript.",
    image: "/assets/images/sarah-body.png",
    url: "#",
    github: "https://github.com/mmh-masud-03/Sarah-Resort",
    tech: ["Next.js", "Stripe", "Tailwind CSS"],
  },
];

function ProjectCards() {
  return (
    <div className="container mx-auto py-10 px-6">
      <Swiper
        modules={[Navigation, Scrollbar, Pagination, A11y]}
        spaceBetween={30}
        slidesPerView={2}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
        }}
      >
        {portfolioData.map((data, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center h-[100vh]">
              <Image
                className="rounded-t-lg"
                src={data.image}
                alt={data.title}
                width={500}
                height={300}
              />
              <h3 className="text-2xl font-semibold mt-4">{data.title}</h3>
              <p className="mt-2 text-gray-600">{data.description}</p>
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                {data.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-200 text-gray-800 text-sm font-medium px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex gap-4">
                {data.url && (
                  <a
                    href={data.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600 transition"
                  >
                    Live Demo
                  </a>
                )}
                <a
                  href={data.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 text-white px-4 py-2 rounded shadow hover:bg-gray-900 transition"
                >
                  GitHub
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ProjectCards;
