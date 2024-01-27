// api Products =>
const products = [
    {
        name : "View js" ,
        category : "frontend" , 
        createdAt : "2024-01-27T13:26:06.404Z" ,
        id : 1
    },
    {
        name : "html css" , 
        category : "frontend" ,
        createdAt : "2024-01-27T13:26:53.580Z" , 
        id : 2
    },
    {
        name : "node js" , 
        category : "backend" ,
        createdAt : "2024-01-27T13:27:56.090Z" , 
        id : 3
    },
    {
        name : "react js" , 
        category : "frontend" , 
        createdAt : "2024-01-27T13:28:05.035Z" , 
        id : 4
    },
]

const categories = [
    {
        name : "frontend",
        detail : "this category used for front site" ,
        createdAt : "2024-01-27T14:21:21.982Z" ,
        id : 1
    },
    {
        name : "backend" ,
        detail : "this category used for back site" ,
        createdAt : "2024-01-27T14:22:13.994Z" ,
        id : 2
    },
    {
        name : "ios" ,
        detail : "this is operating system",
        createdAt : "2024-01-27T14:23:22.759Z" ,
        id : 3
    }
]

export default class Storage{
    constructor(root){
       this.root = root;
    }

    static getAllcategories(){
        const savedCategories = JSON.parse(localStorage.getItem("all-categoires"));
        const sortedCategories = savedCategories.sort((a , b) => {
            new Date(a.createdAt) > new Date(b.createdAt) ? -1 : 1 ;
        })
        return sortedCategories;
    }

    
    static saveCategory(categorieToSave){
        const savedCategories = Storage.getAllcategories();
        const existedItems = savedCategories.find((elem) => elem.id == categorieToSave.id);
        if(existedItems){
            existedItems.title = categorieToSave.title;
            existedItems.detailt = categorieToSave.detail;
        }
        else{
            categorieToSave.id = new Date().getTime();
            categorieToSave.createdAt = new Date().toISOString();
            savedCategories.push(categorieToSave);
        }
        localStorage.setItem("categories" , JSON.stringify(saveCategory));
    }
    
    static getAllproducts(){
        const savedProducts = JSON.parse(localStorage.getItem("all-products"));
        return savedProducts.sort((a , b) => {
            new Date(a.createdAt) > new Date(b.createdAt) ? -1 : 1 ;
        })
    }

    static saveProducts(productToSave){
        const savedProducts = Storage.getAllproducts();
        const existedItems = savedProducts.find((elem) => elem.id == productToSave.id);
        if(existedItems){
            existedItems.title = productToSave.title;
            existedItems.detailt = productToSave.detail;
            existedItems.category = productToSave.category;
        }
        else{
            productToSave.id = new Date().getTime();
            productToSave.createdAt = new Date().toISOString();
            savedProducts.push(productToSave);
        }
        localStorage.setItem("products" , JSON.stringify(savedProducts))
    }
}