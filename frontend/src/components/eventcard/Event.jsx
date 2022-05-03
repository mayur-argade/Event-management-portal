import React from "react";
import internet from '../../assets/1.png'

const Event  = ({post}) => {
  return (
    <div>
      <div class="max-w-md mt-5 mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-3xl transition duration-500 ease-in-out transform hover:translate-y-5 hover:shadow-2xl">
        <div class="md:flex">
          <div class="md:shrink-0">
            <img
              class="h-48 w-full object-fill md:h-full md:w-80"
              src={internet}
              alt="Man looking at item at a store"
            />
          </div>
          <div class="p-8">
            <div class="block mt-1 text-xl leading-tight font-medium  text-indigo-700  hover:underline">
              {post.title}
            </div>
            <a
              href="#"
              class="uppercase tracking-wide text-sm text-black font-semibold"
            >
              {post.startDate}
            </a>
            <p class="mt-2 text-gray-500">
              {post.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
