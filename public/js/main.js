const API = 'https://github.com/GeekBrainsTutorial/online-store-api/tree/master/responses';

const app = new Vue({
    el: '#app',
    data: {
        userSearch: '',
    },
    methods: {
        getJson(url){
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    // console.log(error)
                    this.$refs.error.text = error;
                })
        },
        postJson(url, data){
            return fetch(url, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(result => result.json())
                .catch(error => {
                    // console.log(error)
                    this.$refs.error.text = error;
                })
        },
        putJson(url, data){
            return fetch(url, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(result => result.json())
                .catch(error => {
                    // console.log(error)
                    this.$refs.error.text = error;
                })
        },


    },
    mounted(){


    }

});



//class ProductsList{
//    constructor(container = '.products'){
//        this.container = container;
//        this.goods = [];
//        this.allProducts = [];
//        this.sumPrice();
//         this._getProducts()
//            .then(data => {
//                this.goods = [...data];
//                this.render()
//            });
//    }
//        
////    _fetchProduct(){
////        this.goods = [
////    {id: 1, title: 'Лиса', price: 800, img: 'fox'},
////    {id: 2, title: 'Леопард', price: 1000, img: 'leopard'},
////    {id: 3, title: 'Коала', price: 1500, img: 'koala'},
////    {id: 4, title: 'Медведь', price: 500, img: 'bear'},
////        ];
////    }
//    _getProducts(){
//        return fetch(`${API}/catalogData.json`)
//            .then(result => result.json())
//            .catch(error => {
//                console.log(error);
//            })
//    }
//    
//     sumPrice(){
//        return this.allProducts.reduce((accum, item) => accum += item.price, 0);
//        }
//    
//    render(){
//        const block = document.querySelector(this.container);
//        for(let product of this.goods){
//            const productObj = new ProductItem(product);
//            this.allProducts.push(productObj);
//            block.insertAdjacentHTML('beforeend',productObj.render());
//        }
//    }
//    
//   
//    }
//
//
//class ProductItem{
//    constructor(product){
//        this.title = product.title;
//        this.id = product.id;
//        this.img = product.img;
//        this.price = product.price;
//    }
//    
//    render(){
//         return `<div class="product-item" data-id="${this.id}">
//            <img src="img/${this.img}.png" alt="">
//                <h2>${this.title}</h2>
//                <p>${this.price}</p>
//                <button class="buy-btn">Купить</button>
//        
//            </div>`
//    }
//    
//}
////класс корзины
//class basket{
//    constructor(container = 'tbody'){
//        this.container = container;
//        this.goods = [];
//        this.allProducts = [];
//        this._getBasket()
//        .then(item => {
//            this.goods =[...item.contents];
//                this.render()
//            });
//    }
//        _getBasket(){
//        return fetch(`${API}/getBasket.json`)
//            .then(result => result.json())
//            .catch(error => {
//                console.log(error);
//            });
//    }
//         render(){
//        const block = document.querySelector(this.container);
//        for(let product of this.goods){
//            const productObj = new basketItem(product);
//            this.allProducts.push(productObj);
//            block.insertAdjacentHTML('afterBegin',productObj.render());
//        }
//    }
//    //добавление товара в корзину
//    goodAdd(basketGood){
//        this.goods.push(basketGood);
//    }
//}
//class basketItem{
//    constructor(product){
//        this.product = product;
//        this.title = product.title;
//        this. price = product.price;
//        this.id = product.id;
//        this.img = product.img;
//        this.quantity = product.quantity;
//        
//    }
//    render(){
//         return `
//<tr class="basket-item" data-id="${this.id}">
//            <td><img src="img/${this.img}.png" alt=""></td>
//                <td><h2>${this.title}</h2></td>
//                <td><p>${this.price}</p></td>
//                <td><p>${this.quantity}</p></td>
//</tr>
//        
//            </div>`
//    }
//    
//}
//
//
//
//let list = new ProductsList();
//let bas = new basket();






