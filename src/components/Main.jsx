import React from "react";
import Footer from "./footer";
import { roundOff } from "../utils";
import { aqiText, msToTime, mToKm } from "../utils";
import {
  Wind,
  Sun,
  Moon,
  Droplets,
  WindArrowDown,
  Eye,
  Thermometer,
} from "lucide-react";

function Main({ data }) {
  return (
    <div className="font-roboto lg:h-[calc(100vh-80px)] .hide-scrollbar lg:overflow-y-scroll   lg:hide-scrollbar bg-zinc-900 col-span-3 justify-self-center  w-full  p-4">
      <div className="bg-zinc-800 rounded-xl justify-self-center w-full p-4">
        Todays Highlights
        <div className=" p-3 bg-zinc-900 rounded-xl justify-self-center w-full m-2">
          <div className="flex justify-between ">
            <p className="opacity-25 text-sm">Air Quality Index</p>
            <p
              className={`text-xs self-center rounded-xl aqi-${data?.pollution?.list[0]?.main?.aqi}  p-1 `}
              title={aqiText[data?.pollution?.list[0]?.main?.aqi]?.message}
            >
              {aqiText[data?.pollution?.list[0]?.main?.aqi]?.level}
            </p>
          </div>
          <div className="grid grid-cols-3 ">
            <Wind className="self-center" />

            <div className="grid-rows-2 place-items-center">
              <p className="text-gray-300">
                {roundOff(data?.pollution?.list[0]?.components?.pm2_5)}
                <span className="text-gray-500 text-sm">PM25</span>
              </p>{" "}
              <p className="text-gray-300">
                {data?.pollution?.list[0]?.components?.no2}
                <span className="text-gray-500 text-sm">N02</span>
              </p>
            </div>
            <div className="grid-rows-2 place-items-end">
              <p className="text-gray-300">
                {data?.pollution?.list[0]?.components?.so2}
                <span className="text-gray-500 text-sm">S02</span>
              </p>
              <p className="text-gray-300">
                {data?.pollution?.list[0]?.components?.o3}
                <span className="text-gray-500 text-sm">O3</span>
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
                  <p>
                    {msToTime(
                      data?.currentWeather?.sys?.sunrise,
                      data?.currentWeather?.timezone
                    )}
                  </p>
                </div>
              </div>
              <div className="flex">
                <Moon className="self-center" />
                <div className="p-3">
                  <p className="text-xs opacity-25">Sunset</p>
                  <p>
                    {msToTime(
                      data?.currentWeather?.sys?.sunset,
                      data?.currentWeather?.timezone
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" p-3 m-2 bg-zinc-900 rounded-xl justify-self-center w-full">
          <p className="opacity-25 text-sm">Humidity</p>
          <div className="flex justify-between p-3">
            <Droplets />
            <p>{data?.currentWeather?.main?.humidity}%</p>
          </div>
        </div>
        <div className=" p-3  bg-zinc-900 rounded-xl justify-self-center w-full">
          <p className="opacity-25 text-sm">Pressure</p>
          <div className="flex justify-between p-3">
            <WindArrowDown />
            <p>{data?.currentWeather?.main?.pressure}hPa</p>
          </div>
        </div>
        <div className=" p-3 m-2 bg-zinc-900 rounded-xl justify-self-center w-full">
          <p className="opacity-25 text-sm">Visibility</p>
          <div className="flex justify-between p-3">
            <Eye />
            <p>{mToKm(data?.currentWeather?.visibility)}Km</p>
          </div>
        </div>
        <div className=" p-3 m-2 bg-zinc-900 rounded-xl justify-self-center w-full">
          <p className="opacity-25 text-sm">Feels Like</p>
          <div className="flex justify-between p-3">
            <Thermometer />
            <p className="text-xl">
              {roundOff(data?.currentWeather?.main?.feels_like)}&deg;
              <sup className="text-xs">C</sup>
            </p>
          </div>
        </div>
      </div>
      <Footer data={data} />
    </div>
  );
}

export default Main;
