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
    <div className="  hide-scrollbar bg-zinc-900 px-3 h-screen overflow-y-scroll   ">
      <div className="bg-zinc-800   rounded-xl justify-self-center w-full    p-4">
        <p className="text-sm/10">Now</p>
        <div className="grid grid-cols-2 place-content-center">
          <p className="text-5xl self-center">
            {roundOff(data?.currentWeather?.main?.temp)}&deg;
            <sup className="text-xl">C</sup>
          </p>
          <img
            className=" size-20 "
            src={
              iconType[
                data ? data?.currentWeather?.weather[0]?.icon : "no image"
              ]
            }
            alt=""
          />
          {/* <Moon className="fill-white size-14 pl-3" /> */}
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
      <div className="bg-zinc-800  rounded-xl justify-self-center w-full  flex flex-col p-4">
        {data.forecast &&
          data.forecast.list
            .filter((_, index) => index % 7 == 0)
            .map((cast, id) => {
              return (
                <div className="flex justify-between" key={id}>
                  {" "}
                  <img
                    className=" size-20 "
                    src={iconType[cast ? cast.weather[0]?.icon : "no image"]}
                    alt=""
                  />
                  <p>{getCurrentForecastDate(cast.dt_txt)}</p>
                  <p>{getCurrentForecastWeekday(cast.dt_txt)}</p>
                </div>
              );
            })}
      </div>
    </div>
  );
}

export default SideNav;
