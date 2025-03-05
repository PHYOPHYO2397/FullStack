//image
const img = document.getElementById("image");
console.log(img);
//p tag
const paragraph = document.getElementById("text");
//

/*
img.onclick = () => {

  let result;
  const day = new Date().getDay();
  //If Else
  //   if (day == 0) {
  //     result = "Sunday";
  //   } else if (day == 1) {
  //     result = "Monday";
  //   } else if (day == 2) {
  //     result = "Tuesday";
  //   } else if (day == 3) {
  //     result = "Wednesday";
  //   } else {
  //     result = "Other Days";
  //   }

   //Swirch
  switch (day) {
    case 0:
      result = "Sunday";
      break;

    case 1:
      result = "Monday";
      break;
    case 2:
      result = "Tuesday";
      break;

    case 3:
      result = "Wednesday";
      break;

    default:
      result = "Other Days";
  }

  paragraph.textContent = "Hello " + result;
};
*/
const users = ["John", "Mary", "Andy"]; //0,1,2
let result = "";

img.onclick = () => {
  for (let i = 0; i < users.length; i++) {
    //result += i + 1 + "." + users[i] + "<br>";
    result += `${i + 1}.${users[i]}<br>`;
  }
  paragraph.innerHTML = result;
};
