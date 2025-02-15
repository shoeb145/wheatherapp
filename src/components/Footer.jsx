import { Cloud, MousePointer2 } from "lucide-react";
import { dt_TextToTime, iconType, roundOff, msToKmh } from "../utils";

function Footer({ data }) {
  return (
    <div className="dark:bg-zinc-900     p-2">
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
                  className="flex flex-col rounded-2xl m-2 bg-gray-300 min-w-25 lg:min-w-30 min-h-40 dark:bg-zinc-800  justify-center items-center"
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
        {data.forecast &&
          data.forecast.list
            .filter((_, index) => {
              return index >= 1 && index <= 8;
            })
            .map((cast, id) => {
              return (
                <div
                  key={id}
                  className="flex flex-col rounded-2xl m-2 min-w-25 lg:min-w-30 min-h-40 bg-gray-300 dark:bg-zinc-800  justify-center items-center"
                >
                  <p className="p-2">{dt_TextToTime(cast?.dt_txt)}</p>
                  <MousePointer2
                    style={{ transform: `rotate(${cast?.wind?.deg}deg)` }}
                    className={`rotate-${cast?.wind?.deg} dark:text-amber-200 dark:fill-amber-200 m-4 `}
                  />

                  <p className="p-2">
                    {msToKmh(cast.wind?.speed)}
                    km/h
                  </p>
                </div>
              );
            })}
      </div>
      <footer className="flex justify-center items-center py-4   text-gray-300">
        <p className="mr-2">Connect with me:</p>
        <a
          href="https://www.linkedin.com/in/shoeb-choudhary-935105207/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-blue-400 hover:text-blue-500 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.286c-.966 0-1.5-.678-1.5-1.428s.534-1.428 1.5-1.428c.966 0 1.5.678 1.5 1.428s-.534 1.428-1.5 1.428zm13.5 11.286h-3v-5.569c0-1.452-.963-2.431-2.25-2.431-1.231 0-1.75.869-1.75 2.263v5.737h-3v-10h3v1.561c.828-1.264 2.074-1.886 3.5-1.886 2.407 0 4 1.571 4 4.907v5.418z" />
          </svg>
          <span>LinkedIn</span>
        </a>
      </footer>
    </div>
  );
}
export default Footer;
