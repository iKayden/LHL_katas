const chooseRecipe = function (bakeryA, bakeryB, recipes) {
  const allBakeriesIng = [...bakeryA, ...bakeryB];
  let correctRecipe = "";
  for (recipe of recipes) {
    const ing = recipe.ingredients;
    const name = recipe.name;
    for (let i = 0; i < ing.length; i++) {
      let ingA = ing[i];
      let ingB = ing[i + 1];
      if (allBakeriesIng.includes(ingA) && allBakeriesIng.includes(ingB)) {
        correctRecipe = name;
      }
    }
  }
  return correctRecipe;
};

let bakeryA = ["saffron", "eggs", "tomato paste", "coconut", "custard"];
let bakeryB = ["milk", "butter", "cream cheese"];
let recipes = [
  {
    name: "Coconut Sponge Cake",
    ingredients: ["coconut", "cake base"],
  },
  {
    name: "Persian Cheesecake",
    ingredients: ["saffron", "cream cheese"],
  },
  {
    name: "Custard Surprise",
    ingredients: ["custard", "ground beef"],
  },
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ["potatoes", "bay leaf", "raisins"];
bakeryB = ["red bean", "dijon mustard", "apples"];
recipes = [
  {
    name: "Potato Ganache",
    ingredients: ["potatoes", "chocolate"],
  },
  {
    name: "Sweet Fish",
    ingredients: ["anchovies", "honey"],
  },
  {
    name: "Nima's Famous Dijon Raisins",
    ingredients: ["dijon mustard", "raisins"],
  },
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));
