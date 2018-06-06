function init() {
<<<<<<< HEAD
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-template").innerHTML)
  Handlebars.registerHelper('displayIngredient', function() {
    return this.name
   })

  function loadForm(){
    const blank = {
      name: "",
      description: "",
      ingredients: ["", "", "", "", ""],
      method: "createRecipe()"
=======
  function loadForm(){
    const blank = {

>>>>>>> 594fcd06f93693ab2d6b35edb1b2360041e46662
    }
    const template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML)
    document.getElementsByTagName("main")[0].innerHTML = template(blank)

  }
  loadForm()
 }
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function createRecipe(){
  const name = document.getElementsByName("name")[0].value
  const description = document.getElementsByName("description")[0].value
  let ingredients = []
<<<<<<< HEAD
  const ingredientsObj = document.getElementsByClassName("ingredient")
=======
  const ingredientsObj = document.getElementsByName("ingredients")
>>>>>>> 594fcd06f93693ab2d6b35edb1b2360041e46662
  for(let i = 0; i < ingredientsObj.length; i++){
    ingredients.push({name: `${ingredientsObj[i].value}`})
  }
  const recipeObj = {
<<<<<<< HEAD
    name: name,
    description: description,
    ingredients: ingredients
  }
  showRecipe(recipeObj)
}

function showRecipe(obj){
=======
    recipeName: name,
    recipeDescription: description,
    ingredientsList: ingredients
  }
  showRecipe(recipeObj)
  event.preventDefault()
}

function showRecipe(obj){
   event.preventDefault()
   Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
>>>>>>> 594fcd06f93693ab2d6b35edb1b2360041e46662
   const template = Handlebars.compile(document.getElementById("recipe-template").innerHTML)
   const html = template(obj)
   document.getElementById("main").innerHTML += html
}
<<<<<<< HEAD

function updateRecipe(){
  const name = document.getElementsByName("name")[0].value
  const description = document.getElementsByName("description")[0].value
  let ingredients = []
  const ingredientsObj = document.getElementsByClassName("ingredient")
  for(let i = 0; i < ingredientsObj.length; i++){
    ingredients.push({name: `${ingredientsObj[i].value}`})
  }
  const recipeObj = {
    name: name,
    description: description,
    ingredients: ingredients
  }
  showRecipe(recipeObj)
}

function displayEditForm(){
  const name = document.getElementById("name1").innerHTML
  const description = document.getElementById("description").innerHTML
  let ingredients = []
  const ingredientsObj = document.getElementsByClassName("ingredients")
  for(let i = 0; i < ingredientsObj.length; i++){
    ingredients.push({name: `${ingredientsObj[i].innerHTML}`})
  }
  const recipeObj = {
    name: name,
    description: description,
    ingredients: ingredients,
    method: "updateRecipe()"
  }
  const template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML)
  document.getElementsByTagName("main")[0].innerHTML = template(recipeObj)

}
=======
>>>>>>> 594fcd06f93693ab2d6b35edb1b2360041e46662
