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
  //Normal
  // function add(a, b) {
  //   return a + b;
  // }
  //REST parameter
  // function add(...args) {
  //   let total = 0;
  //   // for (val of args) {
  //   //   total = total + val;
  //   // }
  //   args.forEach((value) => {
  //     total += value;
  //   });

  //   return total;
  // }
  //para.textContent = add(1, 10, 10, 1);

  const userObject = {
    firstName: "John",
    lastName: "Kanty",
    age: 27,
    getFullName: function () {
      return this.firstName + " " + this.lastName;
    },
    fav: {
      music: ["hipHop", "ballad"],
      sports: ["tennis", "basketball"],
    },
  };

  // function globalObject() {
  //   return this;
  // }

  //To copy object
  //const newUserObject = Object.assign({}, userObject);
  //DeepClone
  const newUserObject = {
    ...userObject,
    fav: {
      ...userObject.fav,
      music: [...userObject.fav.music],
      sports: [...userObject.fav.sports],
    },
  };
  //Change first name of new object
  newUserObject.firstName = "PHYO PHYO";
  newUserObject.fav.music.push("R&B");
  console.log(newUserObject);
  console.log(userObject);

  const cities = ["Yangon", "Mandalay", "Monywa"];

  //const newCitites = cities.slice();
  const newCities = [...cities];
  newCities[0] = "PyinOoLwin";
  para.innerHTML = newCities;
};
