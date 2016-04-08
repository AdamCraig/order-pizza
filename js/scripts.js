function Pizza (toppings, pizzaSize, quantity) {
  this.toppings = toppings;
  this.pizzaSize = pizzaSize;
  this.quantity = quantity;
}

Pizza.prototype.calculateOrderCost = function() {
  var orderCost = 0;
  return orderCost;
}

$(document).ready(function() {
  $("form#new-order").submit(function(event) {

    event.preventDefault();

    var inputtedToppings = parseInt( $("select.new-movie").val() );
    var inputtedPizzaSize = parseInt( $("select.new-size").val() );
    var inputtedQuantity = parseInt( $("select.new-quantity").val() );
  });
});
