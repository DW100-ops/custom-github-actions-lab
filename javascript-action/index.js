const fs = require("fs");

const name = process.env.INPUT_STUDENT_NAME || "Student";
const message = `Hello ${name}! Welcome to GitHub Actions.`;

console.log("================================");
console.log("CUSTOM JAVASCRIPT ACTION");
console.log("================================");
console.log(message);

fs.appendFileSync(
  process.env.GITHUB_OUTPUT,
  `welcome-message=${message}\n`
);
