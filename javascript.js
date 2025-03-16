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
  // while (i < users.length) {
  //   result += `${i + 1}.` + users[i] + "<br>";
  //   i++;
  // }

  do {
    result += `${i + 1}.` + users[i] + "<br>";
    i++;
  } while (i < users.length);

  para.innerHTML = result;
};
