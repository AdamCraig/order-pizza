function Pizza (toppings, pizzaSize, quantity, toppingName) {
  this.toppings = toppings;
  this.pizzaSize = pizzaSize;
  this.quantity = quantity;
  this.toppingName = toppingName;
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

Pizza.prototype.showOrder = function(toppings, toppingName, sizeName) {
  $("#show-order h3").empty();

    for (i = 1; i <= toppings; i++) {
    if ($("#chkBox" + i).is(":checked")) {
      toppingName = $("#chkBox" + i).val();
      $("#show-order h3").append(" + " + toppingName);
    }
  }
}

$(document).ready(function() {
  $("form#new-order").submit(function(event) {

    event.preventDefault();
    var inputtedToppings = $(".toppingsCheck").length;
    var inputtedToppingName = $(".toppingsCheck:checked").val();
    var inputtedPizzaSize = parseInt( $("select.new-size").val() );
    var inputtedPizzaSizeName = $(".new-size :selected").text();

    var inputtedQuantity = parseInt( $("select.new-quantity").val() );

    var pizza = new Pizza(inputtedToppings, inputtedPizzaSize, inputtedQuantity, inputtedToppingName);

    $("#order-total").text(pizza.calculateOrderCost(inputtedToppings) + " Schmeckles!");
    $("#show-order h5").text(inputtedPizzaSizeName);

    pizza.showOrder(inputtedToppings, inputtedToppingName);

    $("#box2").fadeIn().delay(10).fadeOut().delay(10).fadeIn().delay(10).fadeOut().delay(10).fadeIn().delay(10).fadeOut().delay(10).fadeIn();
  });
});
