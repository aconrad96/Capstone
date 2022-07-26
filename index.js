import { Header, Nav, Main, Footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const router = new Navigo("/");

function render(state = store.Home) {
  document.querySelector("#root").innerHTML = `
    ${Header(state)}
    ${Nav(store.Links)}
    ${Main(state)}
    ${Footer()}
  `;
  router.updatePageLinks();
  afterRender();
}

function afterRender() {
  document.querySelector(".fa-dumbbell").addEventListener("click", () => {
    document.querySelector("nav > ul").classList.toggle("hidden--mobile");
  });
}

router.hooks({
  before: (done, params) => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Find";

    switch (view) {
      case "Find": {
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&q=st%20louis`
          )
          .then(response => {
            const kelvinToFahrenheit = kelvinTemp =>
              Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);

            store.Find.weather = {};
            store.Find.weather.city = response.data.name;
            store.Find.weather.temp = kelvinToFahrenheit(
              response.data.main.temp
            );
            store.Find.weather.feelsLike = kelvinToFahrenheit(
              response.data.main.feels_like
            );
            store.Find.weather.description = response.data.weather[0].main;
            done();
          })
          .catch(err => console.log(err));
        break;
      }
      default: {
        done();
      }
    }
  }
});

router
  .on({
    "/": () => render(),
    ":view": params => {
      let view = capitalize(params.data.view);
      render(store[view]);
    }
  })
  .resolve();
