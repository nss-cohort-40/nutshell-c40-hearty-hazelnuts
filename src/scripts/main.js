import "./tasks_main.js";
import userEvents from "./userEvents.js";
import "./users.js";
import "./messages.js";
import users from "./users.js";

const loggedUserId = sessionStorage.getItem("loggedUser");
console.log(loggedUserId);
if (loggedUserId === null) {
  userEvents.welcome();
} else {
  const dashboardContainer = document.getElementById("dashboard");
}
