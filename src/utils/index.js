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

export const aqiText = {
  1: {
    level: "Good",
    message:
      "Air quality is considered satisfactory, and air pollution poses little or no risk",
  },
  2: {
    level: "Fair",
    message:
      "Air quality is acceptable; however, for some pollutants there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution.",
  },
  3: {
    level: "Moderate",
    message:
      "Members of sensitive groups may experience health effects the general public is not likely to be affected",
  },
  4: {
    level: "Poor",
    message:
      "Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects",
  },
  5: {
    level: "Very Poor",
    message:
      "Health warnings of emergency conditions. the entire population is more likely to be affected. ",
  },
};
export function msToTime(date, timezone) {
  const date1 = new Date((date + timezone) * 1000);
  const hours = date1.getUTCHours();
  const minutes = date1.getUTCMinutes();
  const formattedMinutes = minutes.toString().padStart(2, "0");

  const period = hours >= 12 ? "PM" : "AM";
  return `${hours % 12 || 12}:${formattedMinutes} ${period}`;
}

export function mToKm(meter) {
  return meter / 1000;
}

export function dt_TextToTime(text) {
  if (!text) {
    return;
  }
  let hours = text.split(" ")[1].split(":")[0];
  const period = hours >= 12 ? "PM" : "AM";
  if (hours == 0) {
    hours = 12;
  } else if (hours > 12) {
    hours = hours - 12;
  }

  return `${hours} ${period}`;
}

export function msToKmh(ms) {
  return Math.round(ms * 3.6);
}
