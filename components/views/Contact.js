import html from "html-literal";
export default () => html`
  <section id="contact">
    <h2>Contact Us</h2>
    <form action="" method="POST">
      <label for="name">Name:</label>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Enter Your Full Name"
        required
      />

      <label for="email">Email:</label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Enter Your Email Address"
        required
      />
    </form>
  </section>
`;
