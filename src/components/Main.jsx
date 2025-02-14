import React from "react";
import Footer from "./Footer";
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
    <div className=" hide-scrollbar font-roboto lg:h-[calc(100vh-108px)] md:h-[calc(100vh-108px)] lg:overflow-y-scroll md:overflow-y-scroll   md:hide-scrollbar  lg:hide-scrollbar bg-zinc-900 md:col-span-2 lg:col-span-3 justify-self-center  w-full md:p-2  p-4">
      <div className="bg-zinc-800 rounded-xl justify-self-center w-full p-4">
        Todays Highlights
        <div className="lg:flex">
          <div className=" p-3 bg-zinc-900 rounded-xl justify-self-center w-full lg:h-52 m-2 lg:ml-0">
            <div className="flex justify-between p-1 ">
              <p className="opacity-25 text-sm lg:text-lg">Air Quality Index</p>
              <p
                className={`text-xs lg:text-sm self-center rounded-xl aqi-${data?.pollution?.list[0]?.main?.aqi}  p-1 `}
                title={aqiText[data?.pollution?.list[0]?.main?.aqi]?.message}
              >
                {aqiText[data?.pollution?.list[0]?.main?.aqi]?.level}
              </p>
            </div>
            <div className="grid grid-cols-3 p-1 lg:h-40 ">
              <Wind className="self-center lg:size-18" />

              <div className="grid-rows-2 place-items-start">
                <p className="text-gray-300 lg:text-4xl lg:flex lg:flex-col  lg:p-1 lg:place-items-start">
                  {roundOff(data?.pollution?.list[0]?.components?.pm2_5)}
                  <span className="text-gray-500 text-sm lg:text-xl">PM25</span>
                </p>{" "}
                <p className="text-gray-300 lg:text-2xl lg:flex lg:flex-col  lg:p-1 lg:place-items-start">
                  {data?.pollution?.list[0]?.components?.no2}
                  <span className="text-gray-500 text-sm lg:text-lg">N02</span>
                </p>
              </div>
              <div className="grid-rows-2 place-items-start ">
                <p className="text-gray-300 lg:text-4xl lg:flex lg:flex-col lg:p-1 lg:place-items-start">
                  {data?.pollution?.list[0]?.components?.so2}
                  <span className="text-gray-500 text-sm lg:text-xl">S02</span>
                </p>
                <p className="text-gray-300 lg:text-4xl lg:flex lg:flex-col  lg:p-1 lg:place-items-start">
                  {data?.pollution?.list[0]?.components?.o3}
                  <span className="text-gray-500 text-sm lg:text-xl">O3</span>
                </p>
              </div>
            </div>
          </div>
          <div className=" p-3 bg-zinc-900 rounded-xl justify-self-center w-full lg:m-2 lg:h-52 lg:mr-0">
            <div className="">
              <p className="opacity-25 text-sm p-1 lg:text-lg">
                Sunrise & Sunset
              </p>
              <div className="grid grid-cols-2">
                <div className="flex  ">
                  {" "}
                  <Sun className="self-center lg:size-15" />
                  <div className="p-3 lg:self-center">
                    <p className="text-lg opacity-25">Sunrise</p>
                    <p className="lg:text-4xl">
                      {msToTime(
                        data?.currentWeather?.sys?.sunrise,
                        data?.currentWeather?.timezone
                      )}
                    </p>
                  </div>
                </div>
                <div className="flex lg:h-40">
                  <Moon className="self-center lg:size-15" />
                  <div className="p-3  lg:self-center">
                    <p className="text-lg opacity-25">Sunset</p>
                    <p className="lg:text-4xl">
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
        </div>
        <div className="lg:flex">
          <div className=" p-3 lg:ml-0 m-2 bg-zinc-900 rounded-xl justify-self-center w-full lg:h-40">
            <p className="opacity-25 text-sm p-1 lg:text-lg ">Humidity</p>
            <div className="flex justify-between lg:h-25 p-3 lg:p-0">
              <Droplets className="lg:size-13 lg:self-center" />
              <p className="lg:text-2xl lg:self-center">
                {data?.currentWeather?.main?.humidity}%
              </p>
            </div>
          </div>
          <div className="lg:m-2 p-3  bg-zinc-900 rounded-xl justify-self-center w-full lg:h-40">
            <p className="opacity-25 text-sm p-1 lg:text-lg ">Pressure</p>
            <div className="flex justify-between lg:p-0 p-3  lg:h-25">
              <WindArrowDown className="lg:size-13 lg:self-center" />
              <p className="lg:text-2xl lg:self-center">
                {data?.currentWeather?.main?.pressure}hPa
              </p>
            </div>
          </div>
          <div className=" p-3 m-2 bg-zinc-900 rounded-xl justify-self-center w-full lg:h-40">
            <p className="opacity-25 text-sm p-1 lg:text-lg ">Visibility</p>
            <div className="flex justify-between lg:p-0 p-3  lg:h-25">
              <Eye className="lg:size-13 lg:self-center" />
              <p className="lg:text-2xl lg:self-center">
                {mToKm(data?.currentWeather?.visibility)}Km
              </p>
            </div>
          </div>
          <div className=" p-3 m-2 lg:mr-0 bg-zinc-900 rounded-xl justify-self-center w-full lg:h-40">
            <p className="opacity-25 text-sm lg:text-lg p-1">Feels Like</p>
            <div className="flex justify-between lg:p-0 p-3  lg:h-25">
              <Thermometer className="lg:size-13 lg:self-center" />
              <p className="lg:text-2xl lg:self-center">
                {roundOff(data?.currentWeather?.main?.feels_like)}&deg;
                <sup className="text-xs">C</sup>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer data={data} />
    </div>
  );
}

export default Main;
