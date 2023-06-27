/************************************
 * DWA13.5 - High Order Functions
 * Author: Katlego Leshiba
 ************************************/

const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

/****************************************************************************************************
 * Use forEach to console log each name to the console. 
*****************************************************************************************************/
names.forEach(name => console.log(name))

/****************************************************************************************************
 * Use forEach to console log each name with a matching province (for example Ashwin (Western Cape).
 * **************************************************************************************************/
names.forEach((name, index) => console.log(`${name} (${provinces[index]})`))

/****************************************************************************************************
 * Use map loop over all province names and turn the string to all uppercase. 
 * Log the new array to the console.
 * **************************************************************************************************/
const upperCaseProvinces = provinces.map(province => province.toUpperCase())
console.log(upperCaseProvinces)

/****************************************************************************************************
 * Create a new array with map that has the amount of characters in each name. 
 * The result should be: [6, 9, 11, 5, 8, 7, 7]
 * **************************************************************************************************/
const nameLengths = names.map(name => name.length)
console.log(nameLengths)

/****************************************************************************************************
 * Using toSorted to sort all provinces alphabetically.
 * **************************************************************************************************/
const sortedProvinces = provinces.sort()
console.log(sortedProvinces)

// toSorted only works in the browser
// const sortedProvinces = provinces.toSorted()
// console.log(sortedProvinces)

/****************************************************************************************************
 * Use filter to remove all provinces that have the word Cape in them. 
 * return the amount of provinces left. The final value should be 3
 * **************************************************************************************************/
const filteredProvinces = provinces.filter(province => !province.includes('Cape'))
console.log(filteredProvinces.length)

/****************************************************************************************************
 * Create a boolean array by using map and some to determine whether a name contains an S character. 
 * The result should be [true, true, false, true, false, true, false]
 * **************************************************************************************************/
const containsSArray = names.map(name => name.split('').some(char => char === 's' || char === 'S'))
console.log(containsSArray)

/****************************************************************************************************
 * Use reduce to turn the above into an object that indicates the province of an individual. 
 * **************************************************************************************************/
const provinceObject = names.reduce((accumulator, name, index) => {
    accumulator[name] = provinces[index]
    return accumulator
}, {})
console.log(provinceObject)

/****************************************************************************************************
 * Question 9 - Below are additional exercises. 
 * However note that in all the following exercises all code should be written inside the brackets of a single console.log 
 * **************************************************************************************************/
const products = [
        { product: 'banana', price: "2" },
        { product: 'mango', price: 6 },
        { product: 'potato', price: ' ' },
        { product: 'avocado', price: "8" },
        { product: 'coffee', price: 10 },
        { product: 'tea', price: '' },
]


console.log(
        /****************************************************************************************************
         * Question 9.1 - Use forEach to console.log each product name to the console.
         * **************************************************************************************************/
        products.forEach(product => console.log(product.product)),

        /****************************************************************************************************
         * Question 9.2 - Use filter to filter out products that have a name longer than 5 characters.
         * **************************************************************************************************/
        products.filter(product => product.product.length > 5)
        ,

        /****************************************************************************************************
         * Question 9.3 - Using both filter and map. Convert all prices that are strings to numbers, and remove 
         * all products from the array that do not have prices. 
         * After this has been done then use reduce to calculate the combined price of all remaining products.
         * **************************************************************************************************/
        products.filter(product => product.price !== '' && !isNaN(product.price))
                .map(product => Number(product.price))
                .reduce((accumulator, price) => accumulator + price, 0)
        ,

        /****************************************************************************************************
         * Question 9.4 - Use reduce to concatenate all product names to create the following string: 
         * banana, mango, potato, avocado, coffee and tea.
         * **************************************************************************************************/
        products.reduce((accumulator, product) => {
                return accumulator + ', ' + product.product
        }, ''),

        /****************************************************************************************************
         * Question 9.5 - Use reduce to calculate both the highest and lowest-priced items. 
         * The names should be returned as the following string: Highest: coffee. Lowest: banana.
         * **************************************************************************************************/
        products.reduce((accumulator, product) => {
                if (accumulator.highest.price < product.price && typeof product.price == 'number') {
                        accumulator.highest = product
                }
                if (accumulator.lowest.price > product.price && typeof product.price == 'number') {
                        accumulator.lowest = product
                }
                return accumulator
        }, { highest: { price: 0 }, lowest: { price: Infinity } }),

        /****************************************************************************************************
         * Question 9.6 - Using only Object.entries and reduce recreate the object with the exact same values. 
         * However, the following object keys should be changed in the new array:
         * product should be changed to name
         * price should be changed to cost
         * **************************************************************************************************/
        Object.entries(products).reduce((accumulator, [key, value]) => {
                accumulator[key] = { name: value.product, cost: value.price }
                return accumulator
        }, {}),
        

)

