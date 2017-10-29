function InternetCustomer(id, name, address, credit, status, blogUrl) {
    Customer.apply(this, arguments); //donot have to pass comma seperated values
    // Customer.call(this, id, name, address, credit, status, blogUrl); Similar call

    this.blogUrl = blogUrl;
}

InternetCustomer.prototype = new Customer(); // change prototype of derived class to object of base class
InternetCustomer.prototype.constructor = InternetCustomer; // Always assign constructor of prototype of derived class to derived class

//format method --public
InternetCustomer.prototype.format = function () {
    return (Customer.prototype.format.call(this) + ',' + this.blogUrl).toUpperCase();
};