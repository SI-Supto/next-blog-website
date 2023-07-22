"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";

const BlogData = ({ id }) => {
  console.log(id);

  const [data, setData] = useState({});

  const getBlog = async (id) => {
    try {
      const res = await axios.post(`/api/getBlogData`,{id:id});
      return setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getBlog(id);

     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div className="flex md:flex-row flex-col-reverse gap-[50px] mt-9">
        <div className="flex-1 flex gap-2 flex-col px-3">
          <div>
            <p className="py-2 uppercase text-sm">title:</p>
            <p className="text-2xl md:text-3xl font-bold">{data?.title}</p>
          </div>
          <div>
            <p className="py-2 uppercase text-sm">description:</p>
            <p className="leading-relaxed ">{data?.description}</p>
          </div>
        </div>
        <div className="flex-1">
          <div className="relative w-full h-[300px] md:h-[400px] pr-3">
           {data?.image &&
            <Image
            className="object-cover"
            src={data?.image}
            fill
            priority
            alt="blog-img"
          />
           }
          </div>
        </div>
      </div>
      <div className="px-3 py-7 tracking-wider leading-relaxed">
        {data?.content}
      </div>
    </div>
  );
};

export default BlogData;
