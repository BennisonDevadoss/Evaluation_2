# Evaluation_2

#### 1: Prime Number

#### Algorithm: 

step1: First, create a empty array to store the prime number. 

step2: Inside the function, logic is made. 

step3: First I check whether prime or not

step 4: If the number is prime I store the prime number to the an empty array. 

step 5: First I check the every number's remainder without one and that number, but i check the numebr is get remainder when check remainder. 

#### Psudocode
```
"use strict";
SET prime1 = [];
SET l = 0;
SET m = 0;
INIT k, i, j;
FUNCTION prime(number) {
    FOR (i = 2; i <= number; i++) {
        k = 2;
        FOR (j = k; j <= i; j++) {

            IF (i % j === 0) {
                IF (i === 2) {
                    prime1[m] = i;
                    PRIMEprime1[m]
                    BREAK
                ENDIF
                l++
                BREAK
            ENDIF

            IF (j === i - 1) {
                IF (i % j != 0) {
                    m++
                    prime1[m] = i
                    console.log(prime1[m])
                    break
                ENDIF
            ENDIF
        FOREND
        ++k
    FOREND
ENDFUNCTION
prime(200)\
```

####  2: Common Number: 

#### Algorithm: 

step 1: First, two array is created. and these arrays have some comman value. 

step 2: a and b is an array name. First the b array's all element is checked by a array's each elements. 

step 3: And that time, if the array a and array b value is same, the comman value is saved in another array. 

### Psudocode: 
```
"use strict";
SET a = [1, 2, 3, 4, 5, 10, 22, 33, 11]
SET b = [3, 2, 5, 6, 7, 12, 10, 33]
SET c = []
SET k = 0
FOR (let i = 0; i < a.length; i++) 
    FOR (let j = 0; j < b.length; j++) 
        IF (a[i] === b[j]) 
            c[k] = b[j]
            k+:
        }
    }
}
PRINT c
```

#### 3: Explain about function Anatomy, Anonymous function and Assigning function to a variable with an example?

#### Function Anotomy: 

function name is called function anotomy. 

when we declare a function before the function name we have to write the function keyword then only the javascript accept the particular block is an function. 

#### Anonymous Function

Some function have without name these functions are called am anonymous function.

We can't call the anonymous function without name. 

So the anonymous function is initialized to a variable. then only the anonymous function can be called. 

#### Assigining function to a variable. 

Initialize a function to an variable this is called assigining function to a variable. 

#### 4:Safeguarding FUnction. 

#### Algorithm: 

step 1: Create a empty variable and an anonymous function. and initialize that anonymous function to an variable. 

step 2: The anonymous function is passed to the another named function.

step 3: And inside the named function the anonymous function is checked the anonymous function is function or not. 

step 3: if the anonymous function is an function then obly the function is called. 

stpe 4: instead of function an array is passed to the funcion and then the array is called now the program will give the error the array is not a function so array is not called. 

stpe 5: Because the parameter is checked, the condition is true then only the the function is called. 

#### Psudocode: 
```
"use strict";
SET array = [];

SET f = FUNCTION () { console.log("Hi I am in Function Block") };
FUNCTION Fun(func) {
    IF (typeof func === "function"
        func()
    ENDIF
ENDFUNCTION
Fun(f)
```

When we pass an anonymous function to an function, so inside the function we have to check the function type. because we have to check the name is function is not a function. 

In this way we can prevent the error. 

Normally, without check the parameter function type inside the function if the argument function is not a function tyep then we can face an error. 

so to prevent this error first we have to check the parameter function is a function or not a function.

In this way we can prevent throwing error. 

#### 5: this Keyword.

step 1: Through the this keyword we can identify the global property. 

step 2: if you put the this keyword into the global console, now the program will print the global properties. 

step 3: if you print the this inside the object, now this "this", print that objects properties and method. 

#### Psudocode: 
```
PRINT this
SET object = { a: 1, b: 2, c: 3, fun: () => { console.log(this) } };
object.fun();
SET object1 = { a: 1, b: 2, func: function () { console.log(this) } };
object1.func();
```
#### 6: this.js

#### Algorithm 

step 1: Inside the function, if the this is return and that this is return the global property. 

step 2: Inside the class, call the this keyword this keyword is print the property of that class. 

step 3: Inside the class we have to declare a property with this keyword. 

step 4: through this "this" keyword the property can be called to print the property values. 

#### Psudocode. 
```
FUNCTION This()
  RETURN this; 
ENDFUNCTION
This()
SET a = 10
FUNCTION fun() {
    INIT a = 5;
    PRINT global.a
}
fun()
PRINT fun() === global
class Person {
    constructor(name) {
        this.name = name
    }
    greet() {
        PRINT 'Hi! My name is ' + this.name
    }
}
SET john = new Person('John Doe');
SET bennison = new Person("Bennison Devadoss");
john.greet();
bennison.greet(); 
```

#### 7: Map() Reduce(), Filter(). 

#### Algorithm

Array.map()

step 1: map is an function through this function an array, an object value can be modified. and this modified value can be stored in another variable. 

step 2: First I take an array object. and I created the newarray. 

step 3: Through the map function i can modify the object array. and the modified value is stored in the another array called newarray. 

#### Psudocode:
```
const array = [{ id: 1, name: "Karthik" }, { id: 2, name: "Manoj" }, { id: 3, name: "Sabarish" }];

SET newArray = [];
SET upper = FUNCTION (value) 
    newArray.push(value.name.toUpperCase())
    ENDFUNCTION
array.map(upper)
PRINT newArray
```

Array.reduce()

#### Algorithm 

step 1: Created an array arr with some value. 

step 2: reduce is an array method it is used to give the single value. 

step 3: Array reduce method takes a call back function as an arguments. 

step 4: In this program I simplify the array with multiply each value one by one. 

#### Psudocode
```
SET arr = [1, 2, 3, 4, 5];
SET fun = FUNCTION (a, b) {
    return a * b;
ENDFUNCTION
let total = arr.reduce(fun)
PRINT total
```

Array.filter()

#### Algorithm 

step 1: Through the array. filter method(), what value you want. 

step 2: I wrote a condition inside the function, and pass that function to the reduce method. 

step 3: And the function takes the each arguments one by one and the if the value passed the function condition. 

step 4: That value will be stored in another variable or array. 

#### Psudocode
```
SET arr2 = [1, 2, 3, 4, 5, 6, 7, 19, 20, 40, 50];
SET fun1 = FUNCTION(a) 
    RETURN a > 10
ENDFUNCTION
SET newArr = arr2.filter(fun1);
PRINT newArr
```

#### 8: Count Zero. 

#### Algorithm 

step 1: First, create variable and store a number. 

step 2: In this program I count the zeros between this number. 

step 3: And I run the for loop one to that number. 

step 4: And I mod first number this condition will take the last number in the number digit. And i stored the last digite to the variable named last_digit. 

step 5: And i check the variable last_digit if the last digit is zero I create the variale count if the condition is true count is increase to zero. 

#### Psudocode.
```
"use strict";
SET start = 1;
SET end = 200;
SET count = 0;
SET last_number, i, j;
FOR i = start; i <= end 
    SET j = i
    SET length = j.toString().length;
    FOR let k = 1; k <= length
        last_number = j % 10
        IF last_number == 0 
            count += 1
        ENDIF
        j = Math.floor(j / 10);
    ENDFOR
ENDFOR
PRINT count 
```

#### 9. Missing Number. 

#### Algorithm 

step 1: First I create an array variable and put some value to that variable. in this program I have to find that missing number between the array index o to array index n - 1

step 2: First I check the zero th and first index different, if the difference is one i did not add the number between the zeroth and first index. 

step 3: If the two number's difference is greaterthen zero. I find the missing number.

#### Psudocode. 
```
"use strict";
SET a = [2, 5, 7, 10, 13];
SET b = [];
SET k = 0;
FOR let i = 0; i < a.length - 1
    IF a[i + 1] - a[i] == 1

        CONTINUE
    ENDIF
    ELSE
        b[k] = a[i] + 1;
    ENDELSE
        WHILE (a[i + 1] - b[k] != 1) 
            b[k + 1] = b[k] + 1;
            ++k
        ENDWHILE
    ++k;
ENDFOR
PRINT b
```

#### 10: Find date-of-birth

#### Algorithm 

step 1: Create an anonymous function initialize this function to an varable. 

step 2: And this function takes an parameter called bornYear. 

step 3: To this paramater I passed the my born year. 

step 4: Fist I find the date with date function and store that value into the variable name called date. 

step 5: In the date I get the current year.

step 6: And I minus the bornyear from presentyear. 

step 7: finally, I store the output in another variable. 

#### Psudocode
```
'use strict'
SET age = FUNCTION (BornYear) {
    SET date = new Date();
    SET presentyear = date.getFullYear();
    PRINT presentyear
    SET Year = presentyear - BornYear;
    PRINT Year
ENDFUNCTION
age(2000); 
```

#### 11: Call by value & call by reference. 

#### Algorithm to call by value.

step 1: Call by value means a variable value is copied to another variable. 

step 2: If you change the copied variable value, and the copied variable value only changed. 

step 3: I have variable named a and it hold the value 100. 

step 4: I copied that value to another variable called b. 

step 5: Now I changed the  variable b value to 500. 

step 6:And I check the variable name a and this variable name a value didnot modified. this is called call by value. 

#### Psudocode.
```
SET a = 100;
INIT b;
SET b = a;
PRINT b
PRINT b = b + 1;
PRINT b
PRINT a
```

#### Algorithm to call by reference. 

step 1: Arrays and objects, function these are non primitive data type. 

step 2: This means these are immutable. 

step 3: First I created an array named a and stored some value into that array. 

step 4: And I create an another array called b. and copy the array a to array b. 

step 5: And I changed the some index value in array b. 

step 6: Finally, I print the two array a and b. now we can see the changes in array a. 

step 7: array a value is automatically modified this is called call by reference. 

#### Psudocode. 
```
SET array = [1, 2, 3, 4, 5];
SET duplicate = array
duplicate[0] = 500
PRINT duplicate
PRINT array
```

#### 12. Arity.js. 

#### Algorithm 

step 1: Counting function parameter is called Arity

step 2: In the first function I don't pass an argument to that function. 

step 3: And find that function parameter length inside that function by .length function. 

step 4: This first function will give the output zero becaue the first function don't have an parameter. 

step 5: And the next function will give the output one. becaues this program takes the one parameters. 

#### Psudocode. 
```
FUNCTION zero() {
    PRINT "Parameter is counted"
ENDFUNCTION
FUNCTION one(A) {
    PRINT A
ENDFUNCTION
FUNCTION two(A, B) 
    PRINT A, B)
ENDFUNCTION
FUNCTION three(A, B, C)
    PRINT A, B, C
ENDFUNCTION
PRINT one.length
PRINT two.length
PRINT three.length
```

#### 13: Currying.js

#### Algorithm 

step 1: A function return another function is called currying. 

step 2: First I created a function currying and this function takes an paramater called a. 

step 3: And this function Currying return the another function two which taks an parameter called b. 

step 4: And the function b return an function called three which takes an arguments. 

step 5: And the function three return the another function which multiply the three parameters. and this function will print the output. 

#### Psudocode
```
FUNCTION Currying(a) 
    RETURN FUNCTION two(b) 
        RETURN  FUNCTION three(c)
            PRINT a * b * c
        ENDFUNCTION
    ENDFUNCTION
ENDFUNCTION
Currying(2)(2)(2)
```

































