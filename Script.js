function sumTotal() {
  var id = document.getElementById("ID").value;
  var total = parseInt(document.getElementById("Total").value);
  var price;
  switch (id) {
    case "001":
      price = 10000;
      break;
    case "002":
      price = 20000;
      break;
    case "003":
      price = 30000;
    default:
      alert("Invalid items ID");
      return;
  }

  var total = price * total;
  alert("Total Price" + total);
  var money = parseFloat(prompt("Input money: "));

  if (isNaN(money)) {
    alert("Invalid credit");
    return;
  }

  if (money < total) {
    alert("Invalid amount");
    return;
  }

  var change = money - total;

  alert("Your change " + change);
}
