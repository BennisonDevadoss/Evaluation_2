'use strict'

const age = function (BornYear) {
    let date = new Date();
    let presentyear = date.getFullYear();  //getFullyear function is used to take a year from date. 
    console.log(presentyear); 
    let Year = presentyear - BornYear;
    console.log(Year);
};

age(2000);