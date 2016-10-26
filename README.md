# Amazon-Bamazon :family:

### Overview
***
Created during Week 12 of Rutgers Coding Bootcamp. In this activity, created an Amazon-like storefront with the **MySQL** and **Node.js**.
### What Each JavaScript Does
***
1. `BamazonCustomer.js`  [(See code here)] (https://github.com/avani19/Amazon-Bamazon/blob/master/BamazonCustomer.js)

  * Prints all the products in the store in the form of Table. [View image] (https://github.com/avani19/Amazon-Bamazon/blob/master/Screenshots/Screen%20Shot-1.png).
  * The products table containe each of the following columns:
  
    * ItemID (unique id for each product)
    * ProductName (Name of product)
    * DepartmentName
    * Price (cost to customer)
    * StockQuantity (how much of the product is available in stores)
  * prompt users with message "which product they would like to purchase by ID number". [See image] (https://github.com/avani19/Amazon-Bamazon/blob/master/Screenshots/Screen%20Shot-2.png).
  * After that again prompt users with anothore message "how many units of the product they would like to buy".
    * Once the customer has placed the order, If there is a sufficient amount of the product in stock to meet the customer's request.
      * If it is  it will return the total amount of price for that purchase. [See Image] (https://github.com/avani19/Amazon-Bamazon/blob/master/Screenshots/Screen%20Shot-3.png)
      * If it is not sufficient, it will tell the user that there isn't enough of the product.
 * If the purchase goes through, it prompt users with message "Would you like to buy another item".
    * If answer is not it will display thank you message. [See Image] (https://github.com/avani19/Amazon-Bamazon/blob/master/Screenshots/Screen%20Shot-4.png).
    * If answer is yes it will prints all the products again. [See image] (https://github.com/avani19/Amazon-Bamazon/blob/master/Screenshots/Screen%20Shot-7.png).
* At the end if purchase goes through, it will updates the stock quantity to reflect the purchase. [See Image] (https://github.com/avani19/Amazon-Bamazon/blob/master/Screenshots/Screen%20Shot-5.png).

## Built With

* MySQLWorkbench
* Sublime Text - Text Editor
* Terminal/Gitbash

## Node Packages Used

* npm mysql (https://www.npmjs.com/package/mysql)
* npm inquirer (https://www.npmjs.com/package/inquirer)
* npm easy-table (https://www.npmjs.com/package/easy-table)
* npm colors (https://www.npmjs.com/package/colors)

## Author
**Avani Ghetia**
