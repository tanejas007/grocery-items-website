var products=[];
var cartItems=[];
var cart_n=document.getElementById('cart_n');
var fruitDIV= document.getElementById("fruitDIV");
var FRUIT=[
    {name:'Anar' ,price:120},
    {name:'Banana' ,price:70},
    {name:'Apple' ,price:140},
    {name:'Orange' ,price:60},
    {name:'Strawberry' ,price:150},
    {name:'Mango' ,price:100},
    {name:'WaterMelon' ,price:70},
    {name:'Papaya' ,price:50},
    {name:'Chiku' ,price:80},
];

function HTMLfruitsProduct(con) {
    let URL = `/img/fruits/fruit${con}.jpg`;
    let btn = `btnFruit${con}`;
    return `
            <div class="col-md-4">
                <div class="card mb-4 shadow-sm">
                    <img class="card-img-top" style="height:16rem; width:16rem; align-items:center;" src="${URL}" alt="Card image cap">
                    <div class="card-body">
                    <i style="color:orange;" class="fa fa-star"  ></i>
                    <i style="color:orange;" class="fa fa-star"  ></i>
                    <i style="color:orange;" class="fa fa-star"  ></i>
                    <i style="color:orange;" class="fa fa-star"  ></i>
                    <i style="color:orange;" class="fa fa-star"  ></i>
                    <p class="card-text">${FRUIT[con-1].name}</p>
                    <p class="card-text">${FRUIT[con-1].price}.00</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" onclick="cart('${FRUIT[con-1].name}','${FRUIT[con-1].price}',
                            '${URL}','${con}','${btn}')"
                            class="btn btn-sm btn-outline-secondary">
                            <a style="color:inherit;" href="/cart">BUY</a></button>
                            <button id="${btn}" type="button" onclick="cart2('${FRUIT[con-1].name}','${FRUIT[con-1].price}',
                            '${URL}','${con}','${btn}')"
                            class="btn btn-sm btn-outline-secondary"><a style="color:inherit;" href="/cart">
                            Add to Cart</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
}

function animation(){
    const toast=swal.mixin({
        toast:true,
        position:'top-end',
        showConfirmButton:false,
        timer:1000
    });
    toast({
        type:'success',
        title:'Added to shopping cart'
    });
}

function cart(name,price,url,con,btncart){
    var item={
        name:name,
        price:price,
        url:url
    }
    cartItems.push(item);
    let storage= JSON.parse(localStorage.getItem("cart"));
    if(storage==null){
        products.push(item);
        localStorage.setItem("cart",JSON.stringify(products));
    }
    else{
        products= JSON.parse(localStorage.getItem("cart"));
        products.push(item);
        localStorage.setItem("cart",JSON.stringify(products));
    }
    products= JSON.parse(localStorage.getItem("cart"));
    cart_n.innerHTML= `[${products.length}]`;
    document.getElementById(btncart).style.display="none";
    animation();
}
function cart2(name,price,url,con,btncart){
    var item={
        name:name,
        price:price,
        url:url
    }
    cartItems.push(item);
    let storage= JSON.parse(localStorage.getItem("cart"));
    if(storage==null){
        products.push(item);
        localStorage.setItem("cart",JSON.stringify(products));
    }
    else{
        products= JSON.parse(localStorage.getItem("cart"));
        products.push(item);
        localStorage.setItem("cart",JSON.stringify(products));
    }
    products= JSON.parse(localStorage.getItem("cart"));
    cart_n.innerHTML= `[${products.length}]`;
    document.getElementById(btncart).style.display="none";
}

function render(){


}

(()=>{
    for(let index = 1; index <= 9; index++){
        fruitDIV.innerHTML+=`${HTMLfruitsProduct(index)}`;

    }
    if (localStorage.getItem("cart")==null){
    }
    else{
        products= JSON.parse(localStorage.getItem("cart"));
        cart_n.innerHTML=`[${products.length}]`;
    }
})();