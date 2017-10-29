//Similar to Class Customer
function Customer(id, name, address, credit, status){  //Similar to Constructor in a class
    this.id = id;
    this.name = name;
    this.address = address;
    this.credit = credit;
    this.status = status;
}

// public method format
Customer.prototype.format = function () {
    return this.id + ',' + this.name +
        ',' + this.address + ',' +
        this.status + ',' + this.credit;
};

