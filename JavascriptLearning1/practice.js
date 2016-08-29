/**
 * Created by shriya on 8/9/2016.
 */

var User = function () {}

User.prototype.userId = 'default userId';
User.prototype.printUserId = function () {
    console.log( 'UserId = ' + this.userId );
}

var Person = function () {}
Person.prototype.name = 'defaultName';
Person.prototype.printName = function () {
    console.log( 'Name = ' + this.name );
}

var Employee = function ( name, userId, salary ) {
    User.call( this );
    Person.call( this );
    this.name = name;
    this.salary = salary;
    this.userId = userId;
}

Employee.prototype = Object.create( User.prototype );
Employee.prototye.
Employee.constructor = Employee;

 employee1 = new Employee( 'Jayesh', 125000 );

 employee1.printName();

