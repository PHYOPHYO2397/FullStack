const img = document.getElementById("image");
var para = document.getElementById("text");
const users = ["John", "Mary", "Henry"];

//For Each
/*
img.onclick = () => {
  let result = "";
  users.forEach((value, index) => {
    result += ` ${index + 1}.` + value + "<br>";
  });
  para.innerHTML = result;
};
*/
function greet(userName = "Kanty") {
  return "Hello" + userName;
}
//While
img.onclick = () => {
  let result = "";
  // let i = 0;
  //While
  // while (i < users.length) {
  //   result += `${i + 1}.` + users[i] + "<br>";
  //   i++;
  // }
  //DoWhile
  // do {
  //   result += `${i + 1}.` + users[i] + "<br>";
  //   i++;
  // } while (i < users.length);

  // const newUser = [];

  // while (i < users.length) {
  //   newUser[i] = "Mr." + users[i] + "<br>";

  //   i++;
  // }
  //Map
  //const newUser = users.map((userItem) => "Mr" + userItem );

  // const Morning = function (name) {
  //   return "Good Morning" + name;
  // };

  // const Morning = (name) => {
  //   return "Good Morning" + name;
  // };
  const Morning = (name) => "Good Morning" + name;
  para.textContent = Morning("Yuki");
};
