import React, { useState, useEffect } from "react";
import { Search, Umbrella, ArrowLeft } from "lucide-react";
import { Locate } from "lucide-react";

function Header({ change, location, handleClick, coordinate }) {
  const [searchvalue, setSearchValue] = useState("");
  const [showMyModel, setShowMyModel] = useState(false);
  const [selectitem, setSelectitem] = useState(null);

  function handlClick() {
    setShowMyModel(!showMyModel);
  }
  useEffect(() => {
    if (showMyModel) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [showMyModel]);
  function handlechange(e) {
    let value = e.target.value;

    setSearchValue(value);
  }

  function getData(key) {
    if (key === "") {
      return;
    }
    setSelectitem(coordinate[key]);
  }
  console.log(selectitem, "df jklgksdjgljsglj");

  return (
    <div className="flex  items-center justify-between pt-4 px-7 pb-3  bg-zinc-900 sticky top-0 z-40 ">
      {showMyModel && (
        <div className="fixed inset-0 h-screen bg-black bg-opacity-30 backdrop-blur-sm  ">
          <div className="flex  items-center  pt-4 px-3 pb-3   ">
            {" "}
            <ArrowLeft
              onClick={() => {
                handlClick();
              }}
            />
            <div className="flex justify-center ">
              <input
                className=" w-80 h-10  px-3  text-sm outline-hidden border-hidden"
                type="text"
                placeholder="Search city..."
                value={searchvalue}
                onChange={handlechange}
                onKeyUp={(e) => {
                  if (e.key == "Enter") {
                    change(searchvalue);
                  }
                }}
              />
            </div>
          </div>
          <hr />
          <div>
            {coordinate &&
              coordinate.map((co, id) => {
                return (
                  <div
                    key={id}
                    className="flex  justify-between cursor-pointer p-2 py-1"
                    onClick={() => {
                      getData(id);
                    }}
                  >
                    <p>{co.name} </p> <p> {co.country}</p>
                  </div>
                );
              })}
          </div>
        </div>
      )}
      <div className="flex items-center">
        <Umbrella className="fill-amber-300 size-9 pr-1" />
        <span>Weatherain</span>
      </div>
      <div className="flex gap-3">
        <div
          className="flex items-center place-content-center  rounded-full w-9 h-9 px-2 py-2 bg-zinc-800 "
          onClick={() => {
            handlClick();
          }}
        >
          <Search className="place-content-center size-4 flex " />
          <input
            className=" w-80 h-10 outline-none px-2 border-none text-sm  hidden"
            type="text"
            placeholder="Search city..."
            value={searchvalue}
            onChange={handlechange}
            onKeyUp={(e) => {
              if (e.key == "Enter") {
                change(searchvalue);
              }
            }}
          />
        </div>
        <div
          className="flex items-center rounded-full w-9 h-9 px-2 place-content-center py-2 bg-zinc-800"
          onClick={() => {
            if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition((position) => {
                const { latitude, longitude } = position.coords;
                location({ latitude, longitude });
              });
            }
          }}
        >
          <Locate className="size-4" />
          {/* <span className="px-3 text-sm">Current Location</span> */}
        </div>
      </div>
    </div>
  );
}

export default Header;
