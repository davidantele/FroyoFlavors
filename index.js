//Upon opening the website, a visitor receives a prompt to enter a list of comma-separated froyo flavors.
//They type vanilla,vanilla,vanilla,strawberry,coffee,coffee. In the browser console, they are able to see how many of each flavor they have ordered.
//In this case, they observe that they have ordered three vanilla, two coffee, and one strawberry.
const flavors = [
  "vanilla",
  "vanilla",
  "vanilla",
  "strawberry",
  "coffee",
  "coffee",
];

let userInput = prompt(" Hello, Enter Froyo Flavors");

if (userInput !== null) {
  console.log("Hello, you have entered " + userInput + "!");
} else {
  console.log("User cancelled the prompt.");
}

const createObject = (arr) => {
  const emptyObject = {};
  for (let i = 0; i < arr.length; i++) {
    const eachFlavor = arr[i];
    const currentObjectKeys = Object.keys(emptyObject);
    if (currentObjectKeys.includes(eachFlavor)) {
      emptyObject[eachFlavor]++;
    } else {
      emptyObject[eachFlavor] = 1;
    }
  }
  console.log("You Have Ordered ...", emptyObject);
};
createObject(flavors);
