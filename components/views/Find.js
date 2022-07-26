import html from "html-literal";

export default st => html`
  <section id="Find">
    <h1>Placeholder For Find a Gym Page</h1>
  </section>

  <h4>
    The weather in ${st.weather.city} is ${st.weather.description}. Temperature
    is ${st.weather.temp}F, and it feels like ${st.weather.feelsLike}F.
  </h4>
`;
