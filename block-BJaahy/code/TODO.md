# More about class

- Create a class named `Square` which accepts one parameter `side` and will set two property `width` and `height` to the value of `side`.

```js
class Square {
   constructor(side){
    this.side = side;
   }
   set Width(value) {
     this.side = value;
   }
   set Height(value) {
     this.side = value;
   }
}
```

- Add a method name `description` that will alert a message saying `The square is ${width} x ${height}`

```js
class Square {
   constructor(side){
    this.side = side;
   }
   set Width(value) {
     this.side = value;
   }
   set Height(value) {
     this.side = value;
   }
   description(width,height) {
     alert(`The square is ${width} x ${height}`);
   }
}
```


- Create a method inside the class named `calcArea` that will return the area of the square.

```js
class Square {
   constructor(side){
    this.side = side;
   }
//    set Width(value) {
//      this.side = value;
//    }
//    set Height(value) {
//      this.side = value;
//    }
//    description(width,height) {
//      alert(`The square is ${width} x ${height}`);
//    }
   calcArea(side){
     return side * side;
   }
}
```

- Create a `area` getter method using which we can get the area of the square.

```js
class Square {
   constructor(side){
    this.side = side;
   }
   set Width(value) {
     this.side = value;
   }
   set Height(value) {
     this.side = value;
   }
   description() {
     alert(`The square is ${this.width} x ${this.height}`);
   }
   calcArea(side){
     let area = this.side * this.side;
     return area;
   }
   getArea(){
       return this.
   }
}

```

- Create a `area` setter method that will accept the area of the square. Based on the value of area it will set the value of `width` and `height`. If the passed value is not the area of the square alert say `Not a valid input`

- Create a static method named `isEqual` which accepts two `square` object with `width` and `height` property. If the area of both square is same it will return `true` or `false`.

- Create another property named `numberOfTimes` that will hold the value of number of times the area property is accessed from the object. The values will initialize to `0`. The area property can't be accessed more than 4 times. If it crosses 4 times alert message `Upper Limit Reached`

- Create two instance of the `Square` class

```js

let square = Square(23);
let square = Square(13);

```

- Check the `area` getter method on both square. Check the `area` property on one square more than 4 times.

- Check the `isEqual` method and pass the two instance you created above.

## User Class

- Create a `User` class that accepts `firstName` and `lastName` property
```js

class user {
  constructor(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
```

- Create a getter method named `fullName` that will return the full name of the person.

```js

class User {
  constructor(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get fullName(){
    return `${this.firstName} ${this.lastName}`;
  }
}
let user = new User('vinee', 'kumar');
```

- Create a `fullName` setter method that will accept full name parameter of the person. It will update the `firstName` and `lastName` based on the input. Say if the user passed `Arya Stark` it will update the `firstName` to `Arya` and `lastName` to `Stark`. It will also change one condition if the length of the name passed is less than 5 characters it will alert a message saying `Full name should be more than 5 characters`

```js

class User {
  constructor(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
  }
  set fullName(fullName){
    if(value.length < 5){
     alert(`Full name should be more than 5 characters`);
     return;
    }
    this.fullName = fullName;
  }
};

let user = new User('vinee', 'kumar');
```

- Create a method named `nameContains` which will accept string and will return `true` or `false` based on if the name of the user contains the text that passed by user.


- Create two instance of the `User` class

```js
let user = new User('vinee', 'kumar');
let user = new User('vijay', 'kumar');
```

- Check by using the `fullName` setter method with name bigger than 5 characters.

- Check by using the `fullName` setter method with name less than 5 characters.

- Check the `fullName` using getter

- Check the `nameContains` method
