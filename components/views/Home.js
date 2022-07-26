import html from "html-literal";
import sign from "../../assets/karsten-winegeart-0Wra5YYVQJE-unsplash.jpeg";
import create from "../../assets/Workout app image 1.jpeg";
import find from "../../assets/humphrey-muleba-LOA2mTj1vhc-unsplash.jpg";

export default () => html`
  <section>
    <img class="top-img" src="${sign}" />
    <img class="mid-img" src="${create}" />
    <img class="bot-img" src="${find}" />
  </section>
`;
