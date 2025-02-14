import { Cloud, MousePointer2 } from "lucide-react";
import { dt_TextToTime, iconType, roundOff, msToKmh } from "../utils";

function Footer({ data }) {
  return (
    <div className="bg-zinc-900     p-2">
      <p className="p-1">Today at</p>
      <div className="flex  overflow-x-auto scroll-smooth hide-scrollbar ">
        {data.forecast &&
          data.forecast.list
            .filter((_, index) => {
              return index >= 1 && index <= 8;
            })
            .map((cast, id) => {
              return (
                <div
                  key={id}
                  className="flex flex-col rounded-2xl m-2 min-w-25 lg:min-w-30 min-h-40 bg-zinc-800  justify-center items-center"
                >
                  <p>{dt_TextToTime(cast?.dt_txt)}</p>
                  <img
                    className=" size-20 "
                    src={iconType[cast ? cast.weather[0]?.icon : "no image"]}
                    alt=""
                  />

                  <p>{roundOff(cast.main?.temp)}&deg; </p>
                </div>
              );
            })}
      </div>

      <div className="flex  overflow-x-auto scroll-smooth hide-scrollbar  ">
        {/* <div className="flex flex-col rounded-2xl m-2 min-w-20  min-h-28 bg-zinc-800  justify-center items-center">
          <p>3pm</p>
          <MousePointer2 className="rotate-30 text-amber-200 fill-amber-200 " />
          <p>0km/h</p>
        </div> */}
        {data.forecast &&
          data.forecast.list
            .filter((_, index) => {
              return index >= 1 && index <= 8;
            })
            .map((cast, id) => {
              return (
                <div
                  key={id}
                  className="flex flex-col rounded-2xl m-2 min-w-25 lg:min-w-30 min-h-40 bg-zinc-800  justify-center items-center"
                >
                  <p className="p-2">{dt_TextToTime(cast?.dt_txt)}</p>
                  <MousePointer2
                    style={{ transform: `rotate(${cast?.wind?.deg}deg)` }}
                    className={`rotate-${cast?.wind?.deg} text-amber-200 fill-amber-200 m-4 `}
                  />

                  <p className="p-2">
                    {msToKmh(cast.wind?.speed)}
                    km/h
                  </p>
                </div>
              );
            })}
      </div>
    </div>
  );
}
export default Footer;
