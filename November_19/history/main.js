window.onload = () => {
  let Views = {
    home: {
      title: "Index Page",
      url: "./views/home.html",
      content: "",
    },
    contact: {
      title: "Contact Page",
      url: "./views/contact.html",
      content: "",
    },
    portfolio: {
      title: "Portfolio Page",
      url: "./views/portfolio.html",
      content: "",
    },
    about: {
      title: "About Page",
      url: "./views/about_us.html",
      content: "",
    },
  };

  const Links = document.querySelectorAll(".menu--item");
  const titleElement = document.getElementById("title");
  const contentElement = document.getElementById("content");

  Links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();

      const url = e.target.attributes["href"].value;
      const viewData = Views[url.split(".")[0]];
      renderContent(viewData);
      history.pushState(viewData, viewData.title, url);
    });
  });

  function renderContent(state) {
    if (state) {
      document.title = state.title;
      titleElement.innerHTML = state.title;
      fetch(state.url, {
        method: "GET",
      })
        .then(res => res.text())
        .then(data => (contentElement.innerHTML = data));
    }
  }

  window.addEventListener("popstate", function(event) {
    console.log(event);
    renderContent(event.state);
  });

  renderContent(Views.home);

  history.replaceState(Views.home, Views.home.title, "");
};
