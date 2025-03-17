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

//While
img.onclick = () => {
  let result = "";
  let i = 0;
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

  const newUser = [];

  while (i < users.length) {
    newUser[i] = `Mr.${users[i]}` + "<br>";
    i++;
  }

  para.innerHTML = newUser;
};
