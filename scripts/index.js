//array of meal choice objects
let meals = [
  { meal: "burgers", tagline: "the only bun for me." },
  { meal: "casserole", tagline: "casse-role with it." },
  { meal: "chilli", tagline: "feeling chilli?" },
  { meal: "curry", tagline: "tikka your fancy?" },
  { meal: "hotdogs", tagline: "hot diggity." },
  { meal: "lasagne", tagline: "pasta la vista." },
  { meal: "meatballs", tagline: "well rounded." },
  { meal: "noodles", tagline: "slurp’s up, bro." },
];

//function to generate random meal suggetion, called once on page load and if user clicks 'roll again'
function generateRandomMeal() {
  //generate random number that which falls within the meals array
  let randomNumber = Math.floor(Math.random() * (meals.length - 0) + 0);
  let mealName = meals[randomNumber].meal;
  let mealTagline = meals[randomNumber].tagline;

  //now we have the random meal, set the image as appropriate
  let reqImage = "images/" + mealName + ".webp";
  document.querySelector("img").src = reqImage;
  //display some text with the meal name and tagline
  document.querySelector(".result").innerText = mealName.toLocaleUpperCase();
  document.querySelector(".mealTagline").innerText = mealTagline;

  //and set the shopping list (w/ SL prefix) and recipe links on the card reverse
  let shoppingListLink = "shoppingLists/" + "SL" + mealName + ".html";
  document.querySelector(".shoppingList").href = shoppingListLink;
  document.querySelector(".shoppingLink").href = shoppingListLink;

  let recipeListLink = "recipes/" + mealName + ".html";
  document.querySelector(".recipeList").href = recipeListLink;
  document.querySelector(".recipeLink").href = recipeListLink;
  //transition image by scaling up
  let mealImg = document.querySelector(".growCard");
  mealImg.classList.add("grow");
  setTimeout(imgShrink, 1500);

  function imgShrink() {
    mealImg.classList.remove("grow");
  }

  //after 3secs of displaying new option, display 'don't fancy it' button
  setTimeout(buttonAppear, 3000);
}

// call generateRandomMeal on page load to generate a random meal
generateRandomMeal();

// also call generateRandomMeal if 'don't fancy it' button clicked
document.querySelector(".btn").onclick = function () {
  generateRandomMeal();
  button.classList.add("btnHide");
};

//logic for 'don't fancy it' button
let button = document.querySelector(".btn");
function buttonAppear() {
  button.classList.remove("btnHide");
}

//display the 'don't fancy it' button after 3secs
setTimeout(buttonAppear, 3000);
