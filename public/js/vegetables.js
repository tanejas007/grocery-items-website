var products=[];
var cartItems=[];
var cart_n=document.getElementById('cart_n');
var vegetablesDIV=document.getElementById("vegetablesDIV");
var VEGETABLES=[
    {name:'Potato' ,price:40},
    {name:'Cabbage' ,price:50},
    {name:'Onion' ,price:60},
    {name:'Carrot' ,price:60},
    {name:'Peas' ,price:120},
    {name:'Tomato' ,price:60},
    {name:'Lemon' ,price:140},
    {name:'Hari Mirch' ,price:120},
    {name:'Kerala' ,price:60},
    {name:'Lady-Finger' ,price:80},
    {name:'Tori' ,price:50},
    {name:'Aadrak' ,price:100},
    {name:'LaSan' ,price:200},
    {name:'Hari - Dhaniya' ,price:20},
    {name:'Cabbage(Patta-Ghobi)' ,price:40}
];

function HTMLvegetablesProduct(con) {
    let URL = `/img/vegetables/vegetables${con}.jpg`;
    let btn = `btnVegetables${con}`;
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
                <p class="card-text">${VEGETABLES[con-1].name}</p>
                <p class="card-text">${VEGETABLES[con-1].price}.00</p>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                        <button type="button" onclick="cart('${VEGETABLES[con-1].name}','${VEGETABLES[con-1].price}',
                        '${URL}','${con}','${btn}')"
                        class="btn btn-sm btn-outline-secondary">
                        <a style="color:inherit;" href="/cart">BUY</a></button>
                        <button id="${btn}" type="button" onclick="cart2('${VEGETABLES[con-1].name}','${VEGETABLES[con-1].price}',
                        '${URL}','${con}','${btn}')"
                        class="btn btn-sm btn-outline-secondary">Add to Cart
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
    for(let index = 1; index <= 15; index++){
        vegetablesDIV.innerHTML+=`${HTMLvegetablesProduct(index)}`;

    }
    if (localStorage.getItem("cart")==null){
    }
    else{
        products= JSON.parse(localStorage.getItem("cart"));
        cart_n.innerHTML=`[${products.length}]`;
    }
})();