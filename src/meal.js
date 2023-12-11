function nameMenuItem(name) {
  return `Delicious ${name}`
}

function createMenuItem(name, price, type) {
  return {
    name,
    price,
    type
  }
}

function addIngredients(name, ingredientArray) {
  if (!ingredientArray.includes(name)) {
    ingredientArray.push(name)
  }
  return ingredientArray
}

function formatPrice(price) {
  return `$${price}`
}

function decreasePrice(price) {
  return price * 0.9
}

function createRecipe(title, ingredients, menuItemType) {
  return {
    title: title,
    ingredients: ingredients,
    type: menuItemType
  }
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}


