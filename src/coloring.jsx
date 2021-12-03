const date = new Date();
const currentTime = date.getHours();

let greetingx, colorx;

if (currentTime < 12) {
  greetingx = "Good Morning";
  colorx = "red";
} else if (currentTime < 18) {
  greetingx = "Good Afternoon";
  colorx = "green";
} else {
  greetingx = "Good Night";
  colorx = "blue";
}

export { greetingx, colorx };
