import React from "react";
import { Moon } from "lucide-react";
import { Calendar } from "lucide-react";
import { MapPin } from "lucide-react";

function SideNav({ location }) {
  return (
    <div className=" scrollbar-hidden  hide-scrollbar bg-zinc-900 px-3">
      <div className="bg-zinc-800  rounded-xl justify-self-center w-full  p-4">
        <p className="text-sm/10">Now</p>
        <div className="grid grid-cols-2 ">
          <p className="text-5xl">
            19&deg;<sup className="text-xl">C</sup>
          </p>
          <Moon className="fill-white size-14 pl-3" />
        </div>
        <p className="text-xs py-3 text-white-400">Clear Sky</p>
        <hr />
        <div className=" flex text-xs py-2">
          <Calendar className="size-4 " />
          <p className="pl-1 opacity-25 ">Thursday 2, Mar</p>
        </div>
        <div className="flex text-xs">
          <MapPin className="size-4" />
          <p className="pl-1 opacity-25 ">Chandpur BD</p>
        </div>
      </div>
      <p className="p-2 pl-0">5 Days Forecast</p>
      <div className="bg-zinc-800  rounded-xl justify-self-center w-full grid grid-cols-3 p-4">
        <div>
          <div className="flex">
            <Moon className="fill-white size-6 " />
            <p> 25</p>
          </div>
          <div className="flex">
            <Moon className="fill-white size-6 " />
            <p> 25</p>
          </div>
          <div className="flex">
            <Moon className="fill-white size-6 " />
            <p> 25</p>
          </div>
          <div className="flex">
            <Moon className="fill-white size-6 " />
            <p> 25</p>
          </div>
          <div className="flex">
            <Moon className="fill-white size-6 " />
            <p> 25</p>
          </div>
          <div className="flex">
            <Moon className="fill-white size-6 " />
            <p> 25</p>
          </div>
        </div>

        <div className="place-items-center">
          <p className="opacity-25 ">17 Feb</p>
          <p>17 Feb</p>
          <p>17 Feb</p>
          <p>17 Feb</p>
          <p>17 Feb</p>
          <p>17 Feb</p>
        </div>
        <div className="place-items-end">
          <p className="opacity-25 ">friday</p>
          <p>friday</p>
          <p>friday</p>
          <p>friday</p>
          <p>friday</p>
          <p>friday</p>
        </div>
      </div>
    </div>
  );
}

export default SideNav;
