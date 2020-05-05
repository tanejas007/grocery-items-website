var products=[];
var cartItems=[];
var cart_n=document.getElementById('cart_n');

var hrDIV= document.getElementById("hrDIV");

var HR=[
    {name:'Aloo Bhujia',price:48},
    {name:'Panchratna',price:95},
    {name:'Besan Bhujia',price:44},
    {name:'Navratna',price:48},
    {name:'Salted Peanut',price:48},
    {name:'Nimbu Masala',price:44}
];

function HTMLhrProduct(con) {
    let URL = `/img/hr/hr${con}.jpg`;
    let btn = `btnHr${con}`;
    return `
    <div class="col-md-4">
        <div class="card mb-4 shadow-sm">
            <img class="card-img-top" style="height:16rem;" src="${URL}" alt="Card image cap">
            <div class="card-body">
                <i style="color:orange;" class="fa fa-star"  ></i>
                <i style="color:orange;" class="fa fa-star"  ></i>
                <i style="color:orange;" class="fa fa-star"  ></i>
                <i style="color:orange;" class="fa fa-star"  ></i>
                <i style="color:orange;" class="fa fa-star"  ></i>
                <p class="card-text">${HR[con-1].name}</p>
                <p class="card-text">${HR[con-1].price}.00</p>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                        <button type="button" onclick="cart('${HR[con-1].name}','${HR[con-1].price}',
                        '${URL}','${con}','${btn}')"
                        class="btn btn-sm btn-outline-secondary">
                        <a style="color:inherit;" href="/cart">BUY</a></button>
                        <button id="${btn}" type="button" onclick="cart2('${HR[con-1].name}','${HR[con-1].price}',
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
        position:'top',
        showConfirmButton:false,
        timer:1000
    });
    toast({
        type:'success',
        title:'Added to Shopping Cart'
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
        hrDIV.innerHTML+=`${HTMLhrProduct(index)}`;
    }

    if (localStorage.getItem("cart")==null){
    }
    else{
        products= JSON.parse(localStorage.getItem("cart"));
        cart_n.innerHTML=`[${products.length}]`;
    }
})();