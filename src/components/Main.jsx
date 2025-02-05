import React from "react";
// import Footer from "./footer";
import {
  Wind,
  Sun,
  Moon,
  Droplets,
  WindArrowDown,
  Eye,
  Thermometer,
} from "lucide-react";

function Main() {
  return (
    <div className="font-roboto    hide-scrollbar bg-zinc-900  justify-self-center  w-full  p-4">
      <div className="bg-zinc-800 rounded-xl justify-self-center w-full  p-4">
        Todays Highlights
        <div className=" p-3 bg-zinc-900 rounded-xl justify-self-center w-full m-2">
          {" "}
          <div className="flex justify-between ">
            <p className="opacity-25 text-sm">Air Quality Index</p>
            <p className="text-xs self-center rounded-xl  bg-green-300 p-1 text-neutral-700">
              Good
            </p>
          </div>
          <div className="grid grid-cols-3 ">
            <Wind className="self-center" />

            <div className="grid-rows-2 place-items-center">
              <p className="text-gray-300">
                1.48<span className="text-gray-500 text-sm">PM25</span>
              </p>{" "}
              <p className="text-gray-300">
                1.48<span className="text-gray-500 text-sm">N02</span>
              </p>
            </div>
            <div className="grid-rows-2 place-items-end">
              <p className="text-gray-300">
                1.48<span className="text-gray-500 text-sm">S02</span>
              </p>
              <p className="text-gray-300">
                1.48<span className="text-gray-500 text-sm">O3</span>
              </p>
            </div>
          </div>
        </div>
        <div className=" p-3 bg-zinc-900 rounded-xl justify-self-center w-full">
          {" "}
          <div className="">
            <p className="opacity-25 text-sm">Sunrise & Sunset</p>
            <div className="grid grid-cols-2">
              <div className="flex">
                {" "}
                <Sun className="self-center" />
                <div className="p-3">
                  <p className="text-xs opacity-25">Sunrise</p>
                  <p>7:23 AM</p>
                </div>
              </div>
              <div className="flex">
                <Moon className="self-center" />
                <div className="p-3">
                  <p className="text-xs opacity-25">Sunset</p>
                  <p>7:23 AM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" p-3 m-2 bg-zinc-900 rounded-xl justify-self-center w-full">
          <p className="opacity-25 text-sm">Humidity</p>
          <div className="flex justify-between p-3">
            <Droplets />
            <p>65 %</p>
          </div>
        </div>
        <div className=" p-3  bg-zinc-900 rounded-xl justify-self-center w-full">
          <p className="opacity-25 text-sm">Pressure</p>
          <div className="flex justify-between p-3">
            <WindArrowDown />
            <p>1011hPa</p>
          </div>
        </div>
        <div className=" p-3 m-2 bg-zinc-900 rounded-xl justify-self-center w-full">
          <p className="opacity-25 text-sm">Visibility</p>
          <div className="flex justify-between p-3">
            <Eye />
            <p>0.6km</p>
          </div>
        </div>
        <div className=" p-3 m-2 bg-zinc-900 rounded-xl justify-self-center w-full">
          <p className="opacity-25 text-sm">Feels Like</p>
          <div className="flex justify-between p-3">
            <Thermometer />
            <p className="text-xl">
              19&deg;<sup className="text-xs">C</sup>
            </p>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default Main;
