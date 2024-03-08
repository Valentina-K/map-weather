export const ConvertFromUnixTimestamp = (timeSpan) => {
  const origin = new Date(timeSpan * 1000);
  return origin;
};
export const getDate = (date) => date.toLocaleDateString();

export const getTime = (date) =>
  date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

export const getDayWeek = (date) => {
  let options = { weekday: "long" };
  return new Intl.DateTimeFormat("en-US", options).format(date);
};

/* 
main: 
feels_like: 0.68

humidity: 39 %
pressure: 1026 гПа

temp: 4.83
temp_max: 4.83
temp_min: 4.83

wind: 
deg: 133
gust: 10.99 m/s
speed: 5.99 m/s

weather[0]:
description: "overcast clouds"
icon: "04d"
id: 804
main: "Clouds"

visibility: 10000 m

clouds: 
all: 100 %

dt: 1708948800
dt_txt: "2024-02-26 12:00:00"

"city": {
        "id": 703014,
        "name": "Lipovaya Rosheha",
        "coord": {
            "lat": 49.9614,
            "lon": 36.1562
        },
        "country": "UA",
        "population": 0,
        "timezone": 7200,
        "sunrise": 1708921593,
        "sunset": 1708960236
 */
