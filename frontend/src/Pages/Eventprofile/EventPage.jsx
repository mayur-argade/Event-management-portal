import React, { useState } from "react";
import ResponsiveDrawer from "../../components/SideBar/SideBar";
import DropFileInput from "../../components/drop-file-input/DropFileInput";
import {
  Button,
  Checkbox,
  Dialog,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  TextField,
} from "@mui/material";
import "./eventpage.css";
import AddEvent from "../../components/AddEvent/AddEvent";

const EventPage = () => {
  const [About, setAbout] = useState(true);
  const [Gallery, setGallery] = useState(false);
  const [Admin, setAdmin] = useState(false);

  function AboutPage() {
    return (
      <>
        <Grid container>
          <Grid item sm={12} lg={6}>
            <p className="text-2xl pt-4">Event Title Here</p>
            <p className="text-xl pt-4">Event Description Here:8</p>
            <p className="text-xl pt-4">Start Time:</p>
            <p className="text-xl pt-4">End Time:</p>
            <p className="text-xl pt-4">Speaker:</p>
            <p className="text-xl pt-4">Purpose of the Event:</p>
            <p className="text-xl pt-4">Topics to be covered:</p>
            <p className="text-xl pt-4">Organized by:</p>
            <p className="text-xl pt-4">Topics:</p>
            <p className="text-xl pt-4">For:</p>

          </Grid>
          <Grid item sm={12} lg={6} className='sm:pt-6 lg:pt-0'>
            Attachments
            </Grid>
        </Grid>
      </>
    );
  }

  function GalleryPage() {
    return (
      <>
        <div>
          <section class="overflow-hidden text-gray-700 ">
            <div class="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
              <div class="flex flex-wrap -m-1 md:-m-2">
                <div class="flex flex-wrap w-1/3">
                  <div class="w-full p-1 md:p-2">
                    <img
                      alt="gallery"
                      class="block object-cover object-center w-full h-full rounded-lg"
                      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                    ></img>
                  </div>
                </div>
                <div class="flex flex-wrap w-1/3">
                  <div class="w-full p-1 md:p-2">
                    <img
                      alt="gallery"
                      class="block object-cover object-center w-full h-full rounded-lg"
                      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"
                    ></img>
                  </div>
                </div>
                <div class="flex flex-wrap w-1/3">
                  <div class="w-full p-1 md:p-2">
                    <img
                      alt="gallery"
                      class="block object-cover object-center w-full h-full rounded-lg"
                      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"
                    ></img>
                  </div>
                </div>
                <div class="flex flex-wrap w-1/3">
                  <div class="w-full p-1 md:p-2">
                    <img
                      alt="gallery"
                      class="block object-cover object-center w-full h-full rounded-lg"
                      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"
                    ></img>
                  </div>
                </div>
                <div class="flex flex-wrap w-1/3">
                  <div class="w-full p-1 md:p-2">
                    <img
                      alt="gallery"
                      class="block object-cover object-center w-full h-full rounded-lg"
                      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(76).webp"
                    ></img>
                  </div>
                </div>
                <div class="flex flex-wrap w-1/3">
                  <div class="w-full p-1 md:p-2">
                    <img
                      alt="gallery"
                      class="block object-cover object-center w-full h-full rounded-lg"
                      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }

  function AdminPage() {
    /*
          // You will have to fetch the current data for this page. 

      */

    const fileTypes = ["JPG", "PNG", "GIF", "PDF"];
    const [file, setFile] = useState(null);
    const handleChange = (file) => {
      setFile(file);
    };
    return (
      <>
        <div className="text-2xl pl-16">Edit Information About the Event</div>

        <div className="AddEvent">
          <AddEvent />
        </div>
      </>
    );
  }
  return (
    <Grid container>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <ResponsiveDrawer></ResponsiveDrawer>
      </Grid>
      <Grid item lg={12} style={{ height: "100vmax" }}>
        <div className="xs:ml-0 sm:ml-72 mx-5">
          <div className="container mt-10 p-5 justify-between mx-auto flex flex-wrap flex-col md:flex-row md:justify-around bg-blue-600 rounded-lg ">
            <div class="align-middle p-3 text-left">
              <p className="text-xl text-white pb-4">Event Title</p>
              <p className="text-xl text-white">Organized By: CSI Terna</p>
              <p className="text-xl text-white">30 February 2022</p>
              <p className="text-xl text-white">24:01 am</p>
            </div>
            <div className="">
              <img
                class="object-cover h-40 object-center rounded"
                alt="hero"
                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-5 py-5 xs:ml-0 sm:ml-72">
          <div className="lg:col-start-1 lg:col-end- col-start-1 col-end-13">
            <div class="tabs tabs-boxed bg-slate-200">
              <a
                className={`${
                  About
                    ? "bg-blue-500 rounded-box tab mx-5 text-black"
                    : "tab mx-5 text-black"
                }`}
                onClick={() => {
                  setAbout(true);
                  setGallery(false);
                  setAdmin(false);
                }}
              >
                About
              </a>
              <a
                className={`${
                  Gallery
                    ? "bg-blue-500 rounded-box tab mx-5 text-black"
                    : "tab mx-5 text-black"
                }`}
                onClick={() => {
                  setAbout(false);
                  setGallery(true);
                  setAdmin(false);
                }}
              >
                Gallery
              </a>
              <a
                className={`${
                  Admin
                    ? "bg-blue-500 rounded-box tab mx-5 text-black"
                    : "tab mx-5 text-black"
                }`}
                onClick={() => {
                  setAbout(false);
                  setGallery(false);
                  setAdmin(true);
                }}
              >
                Admin
              </a>
            </div>
            <div className="m-10">
              {About === true && <AboutPage></AboutPage>}
              {Gallery === true && <GalleryPage></GalleryPage>}
              {Admin === true && <AdminPage></AdminPage>}
            </div>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default EventPage;
