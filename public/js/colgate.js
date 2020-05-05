var products=[];
var cartItems=[];
var cart_n=document.getElementById('cart_n');

var colgateDIV=document.getElementById("colgateDIV");
var COLGATE=[
    {name:'Colgate',price:50},
    {name:'Patanjali Dant Kanti',price:75},
    {name:'Colgate Max Fresh',price:52},
    {name:'Colgate Cibaca',price:55},
    {name:'Colgate Babool',price:58},
    {name:'Colgate Sensitive',price:99},
    {name:'Colgate SENSODYNE',price:100},
    {name:'Close Up',price:48},
    {name:'Dabur Lal',price:29}
];
function HTMLcolgateProduct(con) {
    let URL = `/img/colgate/colgate${con}.jpg`;
    let btn = `btnColgate${con}`;
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
                <p class="card-text">${COLGATE[con-1].name}</p>
                <p class="card-text">${COLGATE[con-1].price}.00</p>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                        <button type="button" onclick="cart('${COLGATE[con-1].name}','${COLGATE[con-1].price}',
                        '${URL}','${con}','${btn}')"
                        class="btn btn-sm btn-outline-secondary">
                        <a style="color:inherit;" href="/cart">BUY</a></button>
                        <button id="${btn}" type="button" onclick="cart2('${COLGATE[con-1].name}','${COLGATE[con-1].price}',
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
    for(let index = 1; index <= 9; index++){
        colgateDIV.innerHTML+=`${HTMLcolgateProduct(index)}`;

    }
    if (localStorage.getItem("cart")==null){
    }
    else{
        products= JSON.parse(localStorage.getItem("cart"));
        cart_n.innerHTML=`[${products.length}]`;
    }
})();