


    // Array Destructuring

// Initial Restaurant Data
const restaurantData = {
    name: 'Banzai',
    location: '108 Wood Road',
    categories: ['Japanese', 'Sushi', 'Vegeterian'],
    mainMenu: ['Sushi', 'Ramen'],
    appetizers: ['Sushi rice', 'Tempura', 'Salad'],
    orderFood: function(appetizersIndex, mainMenuIndex){
        return [this.appetizers[appetizersIndex], this.mainMenu[mainMenuIndex]]
    }
}

/* const arr = [1, 2, 3];
// const value1 = arr[0];
// const value2 = arr[1];
// const value3 = arr[2];
// console.log(value1);

const [value1, value2] = arr;
console.log(value1, value2); */

// const [categoryOne, ,categoryThree] = restaurantData.categories;
// console.log(categoryOne, categoryThree);

const [appetizer, mainMenu] = restaurantData.orderFood(1, 1);


const nestedArray = [111, 222, [333, 444, [555, 666]]];
// const [firstEl, ,thirdEl] = nestedArray;
// const [firstNestedEl, ,thirdNestedEl] = thirdEl
// console.log(firstNestedEl, thirdNestedEl);
const [firstEl, ,[thirdEl, , [ ,fifthEl]]] = nestedArray;
console.log(firstEl, thirdEl, fifthEl);
