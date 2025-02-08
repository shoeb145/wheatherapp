export const iconType = {
  "01d": "https://openweathermap.org/img/wn/01d@2x.png",
  "02d": "http://openweathermap.org/img/wn/02d@2x.png",
  "03d": "http://openweathermap.org/img/wn/03d@2x.png",
  "04d": "http://openweathermap.org/img/wn/04d@2x.png",
  "09d": "http://openweathermap.org/img/wn/09d@2x.png",

  "10d": "http://openweathermap.org/img/wn/10d@2x.png",
  "11d": "http://openweathermap.org/img/wn/11d@2x.png",

  "13d": "http://openweathermap.org/img/wn/13d@2x.png",
  "50d": "http://openweathermap.org/img/wn/50d@2x.png",
  "01n": "http://openweathermap.org/img/wn/01n@2x.png",
  "02n": "http://openweathermap.org/img/wn/02n@2x.png",
  "03n": "http://openweathermap.org/img/wn/03n@2x.png",
  "04n": "http://openweathermap.org/img/wn/04n@2x.png",
  "09n": "http://openweathermap.org/img/wn/09n@2x.png",
  "10n": "http://openweathermap.org/img/wn/10n@2x.png",
  "11n": "http://openweathermap.org/img/wn/11n@2x.png",
  "13n": "http://openweathermap.org/img/wn/13n@2x.png",
  "50n": "http://openweathermap.org/img/wn/50n@2x.png",
};

export function getCurrentDate() {
  const currentDate = new Date();
  const option = {
    weekday: "short",
    day: "2-digit",
    month: "short",
  };
  return currentDate.toLocaleDateString("en-GB", option);
}
export function getCurrentForecastDate(value) {
  const currentDate = new Date(value);
  const option = {
    day: "2-digit",
    month: "short",
  };
  return currentDate.toLocaleDateString("en-GB", option);
}
export function getCurrentForecastWeekday(value) {
  const currentDate = new Date(value);
  const option = {
    weekday: "long",
  };
  return currentDate.toLocaleDateString("en-GB", option);
}
export function roundOff(value) {
  let tempFraction = value;

  if (!tempFraction) {
    return;
  }

  return Math.round(tempFraction);
}
