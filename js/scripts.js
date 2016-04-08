function Pizza (toppings, pizzaSize, quantity) {
  this.toppings = toppings;
  this.pizzaSize = pizzaSize;
  this.quantity = quantity;
}

Pizza.prototype.calculateOrderCost = function() {
  var orderCost = 0;

  if (this.toppings === 1 || this.toppings === 2) {
    orderCost += 1;
  } else if (this.toppings === 3 || this.toppings === 4) {
    orderCost += 2;
  } else {
    orderCost += 3;
  }

  return orderCost;
}

$(document).ready(function() {
  $("form#new-order").submit(function(event) {

    event.preventDefault();

    var inputtedToppings = parseInt( $("select.new-topping").val() );
    var inputtedPizzaSize = parseInt( $("select.new-size").val() );
    var inputtedQuantity = parseInt( $("select.new-quantity").val() );

    var pizza = new Pizza(inputtedToppings, inputtedPizzaSize, inputtedQuantity);

    $("#order-total").text("$" + pizza.calculateOrderCost() );

  });
});
