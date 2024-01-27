// target:
// the first one create category
// create new product based on selected category
// edit product && delete product
// save to localeStorage
// i need the class for my application :
// -> app => run application
// -> products view
// -> category view 
// -> storage 

import Storage from "./Storage.js";

const App = document.querySelector(".root")

const workstorage = new Storage(App);

Storage.newCategories()
