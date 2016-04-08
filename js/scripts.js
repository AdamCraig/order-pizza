function Pizza (toppings, pizzaSize, quantity) {
  this.toppings = toppings;
  this.pizzaSize = pizzaSize;
  this.quantity = quantity;
}

Pizza.prototype.calculateOrderCost = function(toppings) {
  var orderCost = 0;

  // checks size and adds charge accordingly
  if (this.pizzaSize === 1) {
    orderCost += 1;
  } else if (this.pizzaSize === 2) {
    orderCost += 2;
  } else if (this.pizzaSize === 3) {
    orderCost += 3;
  } else if (this.pizzaSize === 4) {
    orderCost += 4;
  } else if (this.pizzaSize === 5){
    orderCost += 5;
  } else {
    orderCost += 0;
  }

  // iterates through checkboxes and adds 2 for each topping checked
  for (i = 1; i <= toppings; i++) {
    if ($("#chkBox" + i).is(":checked")) {
      orderCost += 2;
    } else {
      orderCost += 0;
    }
  }

  // checks quantity and multiplies price accordingly
  if (this.quantity === 1) {
    orderCost *= 1;
  } else if (this.quantity === 2) {
    orderCost *= 3;
  } else if (this.quantity === 3) {
    orderCost *= 300;
  } else if (this.quantity === 4){
    orderCost *= 300000;
  } else {
    orderCost *= 1;
  }

  return orderCost;
}

Pizza.prototype.showOrder = function() {
  $("#show-order h5").empty();
  if (this.toppings === 1) {
    $("#show-order h5").append(" * Placeholder * ");
  }
  if (this.toppings === 2) {
    $("#show-order h5").append(" * Placeholder * ");
  }
  if (this.toppings === 3) {
    $("#show-order h5").append(" * Placeholder * ");
  }
  if (this.toppings === 4) {
  $("#show-order h5").append(" * Placeholder * ");
  }
  if (this.toppings === 5) {
  $("#show-order h5").append(" * Placeholder * ");
  }
} // Start here

$(document).ready(function() {
  $("form#new-order").submit(function(event) {

    event.preventDefault();

    var inputtedToppings = $(".toppingsCheck").length;
    var inputtedPizzaSize = parseInt( $("select.new-size").val() );
    var inputtedQuantity = parseInt( $("select.new-quantity").val() );

    var pizza = new Pizza(inputtedToppings, inputtedPizzaSize, inputtedQuantity);

    $("#order-total").text(pizza.calculateOrderCost(inputtedToppings) + " Glorps");

    pizza.showOrder();
  });
});
