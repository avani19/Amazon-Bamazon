var mysql = require('mysql');
var inquirer = require('inquirer');
var connection = mysql.createConnection({
    host: "127.0.0.1",
    port: 3306,
    user: "root", //Your username
    password: "", //Your password
    database: "Bamazon"
})
connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
});
// Function Start
function start() {
    // Display all the products 
    connection.query('SELECT * FROM Products', function(err, result) {
        if (err) throw err;
        console.log('<----------Welcome To the Bamazon! What would you like to buy?---------->');
        // Make it look good 
        for (var i = 0; i < result.length; i++) {
            console.log("ID: " + result[i].ItemID + " | " + "Product: " + result[i].ProductName + " | " + "Department: " + result[i].DepartmentName + " | " + "Price: " + "$" + result[i].Price + " | " + "Quantity: " + result[i].StockQuantity);
        }
        // ask for a product they want to buy
        inquirer.prompt([{
            name: "getId",
            type: "input",
            message: "What is the ID of the product you would like to buy?",
            // validate the value if it is empty don't move to the next prompt
            validate: function(value) {
                if (isNaN(value) == false && parseInt(value) <= result.length && parseInt(value) > 0) {
                    return true;
                } else {
                    return false;
                }
            }
        }, {
            name: "qty",
            type: "input",
            message: "How many units of the product you would like to buy?",
            validate: function(value) {
                if (isNaN(value) == false) {
                    return true;
                } else {
                    return false;
                }
            }
        }]).then(function(pick) {
// store total value as a variable
            var grandTotal = ((result[(pick.getId) - 1].Price) * parseInt(pick.qty)).toFixed(2);

            if (result[(pick.getId) - 1].StockQuantity >= parseInt(pick.qty)) {
                //after purchase, updates quantity in Products
                connection.query("UPDATE Products SET ? WHERE ?", [
                    { StockQuantity: (result[(pick.getId) - 1].StockQuantity - parseInt(pick.qty)) },
                    { ItemID: pick.getId }
                ], function(err, result) {
                    if (err) throw err;
                    console.log("Success! Your total is $" + grandTotal + ". Your item(s) will be shipped to you in 3-5 business days.");
                });
            } else {
                console.log("Sorry! Insufficient quantity!");
            }
            // askAgain();
        });
    });
}

function askAgain() {
    inquirer.prompt([{
        name: "more",
        type: "confirm",
        message: "Would you like to buy another item?"
    }]).then(function(pick) {
        if (pick.more) {
            start();
        } else {
            console.log("Thank you for Shopping with us. See you soon!");
        }
    });
}
start();
