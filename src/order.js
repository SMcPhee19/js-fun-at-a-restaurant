function takeOrder(order, deliveryOrdersArray) {
  if (deliveryOrdersArray.length < 3) {
    deliveryOrdersArray.push(order)
  }
  return deliveryOrdersArray  
}

function refundOrder(orderNumber, orderArray) {
  orderIndex = orderArray.findIndex(order => order.orderNumber == orderNumber)
  if (orderIndex != -1) {
    orderArray.splice(orderIndex, 1)
  }
  return orderArray
}

function listItems(ordersArray) {
  itemNames = []
  ordersArray.forEach(order => {
    itemNames.push(order.item)
  });

  return itemNames.join(', ')
}

function searchOrder(orderArray, itemName) {
  orderIndex = orderArray.findIndex(order => order.item == itemName)

  if (orderIndex != -1) {
    return true
  } else {
    return false    
  }
}

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}