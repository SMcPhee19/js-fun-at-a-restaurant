function createRestaurant(name) {
  return {
    name,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: []
    }
  }
}

function addMenuItem(restaurant, item) {
  if (!restaurant.menus[item.type].includes(item)) {
    restaurant.menus[item.type].push(item)
  }
  return restaurant
}

function removeMenuItem(restaurant, item, type) {
  if (restaurant.menus[type].length > 0) {
    for (let i = 0; i < restaurant.menus[type].length; i++) {
      restaurant.menus[type].splice(i, 1);
      return `No one is eating our ${item} - it has been removed from the ${type} menu!`
    }
  } else {
    return `Sorry, we don't sell ${item}, try adding a new recipe!`
  }
}

function checkForFood(restaurant, foodItem) {
  if (restaurant.menus[foodItem.type].includes(foodItem)) {
    return `Yes, we're serving ${foodItem.name} today!`
  } else {
    return `Sorry, we aren't serving ${foodItem.name} today.`
  }
}

module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem,
  checkForFood
}