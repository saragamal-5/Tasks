function index(req, res) {
  res.render("index.ejs", {
    title: "Home",
    pageContent: "./pages/home.ejs",
    imagePath: "assets/img/home-bg.jpg",
    heading: "Clean Blog",
    subheading: "A Blog Theme by Start Bootstrap",
  });
}

function about(req, res) {
  res.render("index.ejs", {
    title: "About",
    pageContent: "./pages/about.ejs",
    imagePath: "assets/img/about-bg.jpg",
    heading: "About Me",
    subheading: "This is what I do.",
  });
}

function samplePost(req, res) {
  res.render("index.ejs", {
    title: "Sample Post",
    pageContent: "./pages/sample-post.ejs",
    imagePath: "assets/img/post-bg.jpg",
    heading: "Man must explore, and this is exploration at its greatest",
    subheading: "Problems look mighty small from 150 miles up",
  });
}

function contact(req, res) {
  res.render("index.ejs", {
    title: "Contact",
    pageContent: "./pages/contact.ejs",
    imagePath: "assets/img/contact-bg.jpg",
    heading: "Contact Me",
    subheading: "Have questions? I have answers.",
  });
}

module.exports = {
  index,
  about,
  samplePost,
  contact,
};
