import React from "react";
import { Moon } from "lucide-react";
import { Calendar } from "lucide-react";
import { MapPin } from "lucide-react";
import {
  iconType,
  getCurrentDate,
  roundOff,
  getCurrentForecastDate,
  getCurrentForecastWeekday,
} from "../utils";

function SideNav({ location, data }) {
  console.log(getCurrentDate());
  return (
    <div className="  hide-scrollbar bg-zinc-900 md:h-[calc(100vh-108px)] md:overflow-y-scroll lg:h-[calc(100vh-108px)] overflow-y-scroll  p-4 md:p-2">
      <div className="bg-zinc-800  rounded-xl justify-self-center w-full    p-4">
        <p className="text-sm/10">Now</p>
        <div className="grid grid-cols-2 place-content-center">
          <p className="text-5xl lg:text-6xl self-center">
            {roundOff(data?.currentWeather?.main?.temp)}&deg;
            <sup className="text-xl lg:text-2xl ">C</sup>
          </p>
          <div className="w-30 h-30 overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={
                iconType[
                  data ? data?.currentWeather?.weather[0]?.icon : "no image"
                ]
              }
              alt="Weather Icon"
            />
          </div>
        </div>
        <p className="text-xs py-3 text-white-400">
          {data ? data?.currentWeather?.weather[0]?.description : ""}
        </p>
        <hr />
        <div className=" flex text-xs py-2">
          <Calendar className="size-4 " />
          <p className="pl-1 opacity-25 ">{getCurrentDate()}</p>
        </div>
        <div className="flex text-xs">
          <MapPin className="size-4" />
          <p className="pl-1 opacity-25 ">
            {" "}
            {data ? data?.currentWeather?.name : ""},{" "}
            {data ? data?.currentWeather?.sys?.country : ""}
          </p>
        </div>
      </div>
      <p className="p-2 pl-0">5 Days Forecast</p>
      <div className="bg-zinc-800  rounded-xl justify-self-center w-full  flex flex-col p-4 md:p-2 md:pr-3">
        {data.forecast &&
          data.forecast.list
            .filter((_, index) => index % 8 == 0)
            .map((cast, id) => {
              return (
                <div className="grid grid-cols-3 " key={id}>
                  {" "}
                  <div className="flex">
                    <div className="w-20 h-20 overflow-hidden">
                      <img
                        className="w-full h-full object-cover"
                        src="http://openweathermap.org/img/wn/04n@2x.png"
                        alt="Weather Icon"
                      />
                    </div>

                    <p className="self-center lg:text-lg">
                      {roundOff(cast.main?.temp)}&deg;
                    </p>
                  </div>
                  <div className="opacity-25 place-items-center self-center">
                    {" "}
                    <p className="text-base md:text-sm">
                      {getCurrentForecastDate(cast.dt_txt)}
                    </p>
                  </div>
                  <div className="  opacity-25 place-items-end self-center">
                    <p className="md:text-sm">
                      {getCurrentForecastWeekday(cast.dt_txt)}
                    </p>
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
}

export default SideNav;
