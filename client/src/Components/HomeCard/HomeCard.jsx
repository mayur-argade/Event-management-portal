// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
import { Navigate, NavLink } from 'react-router-dom';
// import { CardActionArea } from '@mui/material';
import logo from '../../assets/logo.png'


export default function HomeCard() {
  return (
    <NavLink to='/event'>
    <div class="max-w-lg mt-5 xs:ml-0 sm:ml-72 border-blue-500 border-2 bg-white rounded-xl shadow-md overflow-hidden xl:max-w-7xl md:max-w-4xl transition duration-500 ease-in-out transform hover:translate-y-5 hover:shadow-2xl">
            <div class="md:flex">
              <div class="md:shrink-0">
                <img
                  class="h-48 w-full object-fill md:h-full md:w-80"
                  src={logo}
                  alt="Man looking at item at a store"
                />
              </div>
              <div class="p-8">
                <div class="block mt-1 text-4xl leading-tight font-medium">
                  Workshop on Web Development
                </div>
                <a
                  href="#"
                  class="uppercase tracking-wide text-sm text-black font-semibold"
                >
                  Organized By:CSI Terna
                </a>
                <p class="mt-2 text-gray-500 line-clamp-4">
                  <ul>
                    <li>Speaker: Sundar Pichai .</li>
                    <li>Date:30 February 2022 </li>
                    <li>Time: 24:01 AM</li>
                    <li>Lorem Ipsum</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </NavLink>
  );
}