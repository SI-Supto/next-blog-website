"use client";
import { useSession } from "next-auth/react";
import SigninBtn from "./SigninBtn";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import axios from "axios";
import toast from "react-hot-toast";
import Image from "next/image";
import { TiDelete } from "react-icons/ti";

const DashboardDetail = () => {
  const { mode } = useContext(ThemeContext);
  const { data } = useSession();

  const [blogPost, setBlogPost] = useState([]);

  const getUserPost = async () => {
    const res = await axios.get("/api/getUserBlogs");
    setBlogPost(res.data.posts);
  };

  useEffect(() => {
    getUserPost();
  }, []);
  console.log(blogPost);

  if (!data?.user?.email) {
    return (
      <>
        <div className="flex flex-col justify-center h-[90vh] items-center gap-5">
          <p>please sign in first</p>
          <SigninBtn />
        </div>
      </>
    );
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        title: e.target[0].value,
        description: e.target[1].value,
        image: e.target[2].value,
        content: e.target[3].value,
      };
      await axios.post("/api/postBlog", data);
      toast.success("blog has been posted");
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeletePost=async (id)=>{
    try {
      await axios.delete(`/api/deleteBlogs/${id}`)
      getUserPost();
      toast.success('post deleted successfully')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div
      className={`flex ${
        mode === "dark" ? "bg-black text-white" : "bg-white text-black"
      }  justify-center md:flex-row flex-col md:gap-[30px] gap-[100px] px-3 py-3 md:px-9 lg:px-12 md:py-6 `}
    >
      <form onSubmit={handleSubmit} className="flex-1 flex gap-4 flex-col mt-7">
        <h1 className="text-2xl font-bold text-center">Add new post</h1>
        <input
          type="text"
          name=""
          id=""
          required
          className={`bg-transparent ring-1 ${
            mode === "dark" ? "ring-white" : "ring-black"
          } py-1 px-1`}
          placeholder="title"
        />
        <input
          type="text"
          name=""
          id=""
          required
          className={`bg-transparent ring-1 ${
            mode === "dark" ? "ring-white" : "ring-black"
          } py-1 px-1`}
          placeholder="description"
        />
        <input
          type="text"
          name=""
          id=""
          required
          className={`bg-transparent ring-1 ${
            mode === "dark" ? "ring-white" : "ring-black"
          } py-1 px-1`}
          placeholder="Image url"
        />
        <textarea
          placeholder="Content"
          className={`bg-transparent p-3 ring-1 ${
            mode === "dark" ? "ring-white" : "ring-black"
          }`}
          required
          cols="30"
          rows="10"
        ></textarea>
        <div>
          <input
            type="submit"
            value="submit"
            className="px-2 py-2 bg-white text-black shadow-lg shadow-black-500/50"
          />
        </div>
      </form>
      <div className="flex-1">
        <div className="flex flex-col gap-3">
          {blogPost.map((data) => (
            <div key={data.id} className="w-full h-[100px] flex">
              <div className="relative w-[200px] h-[100px]">
                <Image
                  src={data?.image}
                  alt="blog-img"
                  className="object-cover"
                  fill
                  priority
                />
              </div>
              <div>
                <div className="px-2">{data?.title.slice(0, 40)}...</div>
                <div className="px-2">
                  <TiDelete size={26} color="red" onClick={()=>{handleDeletePost(data.id)}}/>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardDetail;
