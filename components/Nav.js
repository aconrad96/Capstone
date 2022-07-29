import html from "html-literal";
export default links => html`
  <nav class="shiftNav">
    <div class="shiftNav2">
      <i class="fa-solid fa-dumbbell"></i>
      <ul class="hidden--mobile nav-links">
        ${links
          .map(
            link =>
              `<li><a href="/${link.title}" title ="${link.title}" data-navigo>${link.text}</a></li>`
          )
          .join("")}
      </ul>
    </div>
  </nav>
`;
//<img class="logo" src="../../assets/fitness-logo.png" />
