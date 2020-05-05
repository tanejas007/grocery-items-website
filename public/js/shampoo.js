var products=[];
var cartItems=[];
var cart_n=document.getElementById('cart_n');


var shampooDIV= document.getElementById("shampooDIV");
var SHAMPOO=[
    {name:'Clinic Plus' ,price:75,},
    {name:'Dove' ,price:145},
    {name:'Pantenne' ,price:120},
    {name:'head and shoulder' ,price:85},
    {name:'Tresemme' ,price:245},
    {name:'BEER PRO' ,price:195},
];

function HTMLshampooProduct(con){
    let URL = `../img/shampoo/shampoo${con}.jpg`;
    let btn = `btnShampoo${con}`;
    return `
        <div class="col md-4">
            <div  class="card mb-4 shadow-sm">
                <img class="card-img-top" style="height:16rem; width:16rem; align-items:center;" src="${URL}" alt="Card image cap">
                <div class="card-body">
                    <i style="color:orange;" class="fa fa-star"  ></i>
                    <i style="color:orange;" class="fa fa-star"  ></i>
                    <i style="color:orange;" class="fa fa-star"  ></i>
                    <i style="color:orange;" class="fa fa-star"  ></i>
                    <i style="color:orange;" class="fa fa-star"  ></i>
                    <p class="card-text">${SHAMPOO[con-1].name}</p>
                    <p class="card-text">${SHAMPOO[con-1].price}.00</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" onclick="cart2('${SHAMPOO[con-1].name}','${SHAMPOO[con-1].price}',
                            '${URL}','${con}','${btn}')"
                            class="btn btn-sm btn-outline-secondary">
                            <a style="color:inherit;" href="/cart">BUY</a></button>
                            <button type="button" id="${btn}" onclick="cart('${SHAMPOO[con-1].name}','${SHAMPOO[con-1].price}',
                            '${URL}','${con}','${btn}')"
                            class="btn btn-sm btn-outline-secondary"  >
                            Add to Cart
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
    for(let index = 1; index <= 6; index++){
        shampooDIV.innerHTML+=`${HTMLshampooProduct(index)}`;
    }
    if (localStorage.getItem("cart")==null){
    }
    else{
        products= JSON.parse(localStorage.getItem("cart"));
        cart_n.innerHTML=`[${products.length}]`;
    }
})();