function themeReducer(state = "LIGHT", action) {
  switch (action.dispatch) {
    case "UPDATE_THEME":
      const root = document.querySelector(":root");
      if (action.data == "LIGHT") {
        root.style.setProperty("--background-colour", "#f2f2f2");
        root.style.setProperty("--background-font-colour", "#000000");

        root.style.setProperty("--primary-background", "#ffffff");
        root.style.setProperty("--primary-font-colour", "#666666");

        root.style.setProperty("--secondary-background", "#0e7346");
        root.style.setProperty("--secondary-font-colour", " #ffffff");

        root.style.setProperty("--border-colour", "#d6d8e0");
      } else {
        root.style.setProperty("--background-colour", "#000000");
        root.style.setProperty("--background-font-colour", "#e3e3e3");

        root.style.setProperty("--primary-background", "#000000");
        root.style.setProperty("--primary-font-colour", "#666666");

        root.style.setProperty("--secondary-background", "#1e222d");
        root.style.setProperty("--secondary-font-colour", "#898C95");

        root.style.setProperty("--border-colour", "#434651");
      }
      return action.data;
    default:
      return state;
  }
}

export default themeReducer;
