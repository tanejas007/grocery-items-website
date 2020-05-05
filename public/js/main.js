var products=[];
var cartItems=[];
var cart_n=document.getElementById('cart_n');

var shampooDIV= document.getElementById("shampooDIV");
var soapDIV= document.getElementById("soapsDIV");
var deoDIV= document.getElementById("deoDIV");
var bsDIV= document.getElementById("bsDIV");
var hrDIV= document.getElementById("hrDIV");
var cdDIV= document.getElementById("cdDIV");
var attaDIV= document.getElementById("attaDIV");
var coffeeDIV=document.getElementById("coffeeDIV");
var colgateDIV=document.getElementById("colgateDIV");
var dalDIV=document.getElementById("dalDIV");
var masalaDIV=document.getElementById("masalaDIV");
var riceDIV=document.getElementById("riceDIV");
var saltDIV=document.getElementById("saltDIV");
var teaDIV=document.getElementById("teaDIV");
var kitchenDIV=document.getElementById("kitchenDIV");
var fruitDIV= document.getElementById("fruitDIV");
var vegetablesDIV=document.getElementById("vegetablesDIV");
var milkDIV= document.getElementById("milkDIV");

var SHAMPOO=[
    {name:'Clinic Plus' ,price:75,},
    {name:'Dove' ,price:145},
    {name:'Pantenne' ,price:120},
    {name:'head and shoulder' ,price:85},
    {name:'Tresemme' ,price:245},
    {name:'BEER PRO' ,price:195},
];
var SOAP=[
    {name:'Dove' ,price:30},
    {name:'Lux' ,price:90},
    {name:'Lifebuoy' ,price:88},
    {name:'SanTooR' ,price:99},
    {name:'Pears' ,price:35},
    {name:'MediMix' ,price:45},
];
var DEO=[
    {name:'Engage',price:190},
    {name:'FoGG',price:220},
    {name:'SIGNATURE',price:190},
    {name:'Set Wet',price:185},
    {name:'FoGG Master',price:220},
    {name:'Park Avenue',price:290},
    {name:'Denver',price:240},
    {name:'Adidas',price:260},
    {name:'AXE',price:299},
];
var BS=[
    {name:'Parle-G',price:20},
    {name:'CNC',price:25},
    {name:'Club Creme',price:20},
    {name:'PUFF',price:15},
    {name:'Marie Gold',price:20},
    {name:'Good Day',price:25}
];
var CD=[
    {name:'Pepsi',price:40},
    {name:'Dew',price:40},
    {name:'Coca Cola',price:40},
    {name:'Limca',price:40},
    {name:'Red Bull',price:110},
    {name:'STING',price:35},
    {name:'Frooti',price:35},
    {name:'Sprite',price:35},
    {name:'MiRiNDA',price:40}
];
var HR=[
    {name:'Aloo Bhujia',price:48},
    {name:'Panchratna',price:95},
    {name:'Besan Bhujia',price:44},
    {name:'Navratna',price:48},
    {name:'Salted Peanut',price:48},
    {name:'Nimbu Masala',price:44}
];
var ATTA=[
    {name:'Aashirwad Atta',price:400},
    {name:'PatanJali',price:380},
    {name:'Shakti BhOG',price:270},
    {name:'Rishta',price:290},
    {name:'Fortune',price:365},
    {name:'Chakki Fresh',price:265},
];
var COFFEE=[
    {name:'BRU',price:130},
    {name:'NesCafe',price:90},
    {name:'NesCafe Gold',price:100},
];
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
var DAL=[
    {name:'MaSur Dal',price:140},
    {name:'Moong Dal',price:120},
    {name:'Moong Sabut',price:110},
    {name:'ChaNa Dal',price:80},
    {name:'White Chhole',price:120},
    {name:'RaJma',price:120},
    {name:'Black MaSur Dal',price:80},
    {name:'Black Urd',price:120},
    {name:'AarHar Dal',price:120}
];
var MASALA=[
    {name:'Coriander Powder',price:60},
    {name:'Turmeric Powder',price:60},
    {name:'Red Chilli Powder',price:75},
    {name:'Everest Garam Masala',price:78},
    {name:'Catch Garam Masala',price:74},
    {name:'Everest Chicken Masala',price:76},
    {name:'Catch Sabzi Masala',price:58},
    {name:'MDH Garam Masala',price:78},
    {name:'Kitchen King Masala',price:72},
    {name:'Sambhar Masala',price:66},
    {name:'Chunky Chat Masala',price:48},
    {name:'Chana Masala',price:68}
];
var RICE=[
    {name:'India Gate',price:85},
    {name:'Dubar',price:120},
    {name:'Fortune Rozana',price:99},
    {name:'Brown Rice',price:150},
    {name:'Uncle Bens',price:160},
    {name:'Diamond Double ChaBi',price:105}
];
var SALT=[
    {name:'Tata Salt',price:20},
    {name:'Tata Salt Lite',price:35},
    {name:'Saffola Salt Plus',price:40},
];
var TEA=[
    {name:'Tata Tea Premium',price:380},
    {name:'Taj Mahal',price:290},
    {name:'Red Label',price:250},
    {name:'Lipton Yellow Label',price:300},
    {name:'WaGh BaKri',price:210},
    {name:'Tata Agni',price:50},
];
var KITCHEN=[
    {name:'HarPic(Red+Blue)',price:208},
    {name:'Surf Excel',price:105},
    {name:'Hit Red',price:182},
    {name:'Ariel',price:220},
    {name:'DeTTol HandWash',price:99},
    {name:'NiRma Advance',price:60},
    {name:'RIN',price:120},
    {name:'Surf Excel',price:185},
    {name:'Tide',price:98},
    {name:'Wheel',price:175},
    {name:'LiZol',price:89},
    {name:'LifeBuoy HandWash',price:102},
];
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
var MILK=[
    {name:'Amul Gold' ,price:30},
    {name:'Amul Cow Milk' ,price:25},
    {name:'Amul Diamond' ,price:36},
    {name:'Amul Milk Powder' ,price:205},
    {name:'Patanjali Cow Milk' ,price:24},
    {name:'Nova Milk Powder' ,price:180}
];

function HTMLshampooProduct(con){
    let URL = `../img/shampoo/shampoo${con}.jpg`;
    let btn = `btnShampoo${con}`;
    return `
        <div class="col md-4">
            <div class="card mb-4 shadow-sm">
                <img class="card-img-top" style="height:16rem;" src="${URL}" alt="Card image cap">
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
                            <a style="color:inherit;" href="/cart">Buy</a></button>
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

function HTMLsoapProduct(con) {
    let URL = `/img/soap/soap${con}.jpg`;
    let btn = `btnSoap${con}`;
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
                <p class="card-text">${SOAP[con-1].name}</p>
                <p class="card-text">${SOAP[con-1].price}.00</p>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                        <button type="button" onclick="cart('${SOAP[con-1].name}','${SOAP[con-1].price}',
                        '${URL}','${con}','${btn}')"
                        class="btn btn-sm btn-outline-secondary">
                        <a style="color:inherit;" href="/cart">BUY</a></button>
                        <button id="${btn}" type="button" onclick="cart2('${SOAP[con-1].name}','${SOAP[con-1].price}',
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

function HTMLdeoProduct(con) {
    let URL = `/img/deo/deo${con}.jpg`;
    let btn = `btnDeo${con}`;
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
                <p class="card-text">${DEO[con-1].name}</p>
                <p class="card-text">${DEO[con-1].price}.00</p>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                        <button type="button" onclick="cart('${DEO[con-1].name}','${DEO[con-1].price}',
                        '${URL}','${con}','${btn}')"
                        class="btn btn-sm btn-outline-secondary">
                        <a style="color:inherit;" href="/cart">BUY</a></button>
                        <button id="${btn}" type="button" onclick="cart2('${DEO[con-1].name}','${DEO[con-1].price}',
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

function HTMLbsProduct(con) {
    let URL = `/img/bs/bs${con}.jpg`;
    let btn = `btnBs${con}`;
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
                <p class="card-text">${BS[con-1].name}</p>
                <p class="card-text">${BS[con-1].price}.00</p>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                        <button type="button" onclick="cart('${BS[con-1].name}','${BS[con-1].price}',
                        '${URL}','${con}','${btn}')"
                        class="btn btn-sm btn-outline-secondary">
                        <a style="color:inherit;" href="/cart">BUY</a></button>
                        <button id="${btn}" type="button" onclick="cart2('${BS[con-1].name}','${BS[con-1].price}',
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

function HTMLcdProduct(con) {
    let URL = `/img/cd/cd${con}.jpg`;
    let btn = `btnCd${con}`;
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
                <p class="card-text">${CD[con-1].name}</p>
                <p class="card-text">${CD[con-1].price}.00</p>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                        <button type="button" onclick="cart('${CD[con-1].name}','${CD[con-1].price}',
                        '${URL}','${con}','${btn}')"
                        class="btn btn-sm btn-outline-secondary">
                        <a style="color:inherit;" href="/cart">BUY</a></button>
                        <button id="${btn}" type="button" onclick="cart2('${CD[con-1].name}','${CD[con-1].price}',
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

function HTMLattaProduct(con) {
    let URL = `/img/atta/atta${con}.jpg`;
    let btn = `btnAtta${con}`;
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
                <p class="card-text">${ATTA[con-1].name}</p>
                <p class="card-text">${ATTA[con-1].price}.00</p>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                        <button type="button" onclick="cart('${ATTA[con-1].name}','${ATTA[con-1].price}',
                        '${URL}','${con}','${btn}')"
                        class="btn btn-sm btn-outline-secondary">
                        <a style="color:inherit;" href="/cart">BUY</a></button>
                        <button id="${btn}" type="button" onclick="cart2('${ATTA[con-1].name}','${ATTA[con-1].price}',
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

function HTMLcoffeeProduct(con) {
    let URL = `/img/coffee/coffee${con}.jpg`;
    let btn = `btnCoffee${con}`;
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
                <p class="card-text">${COFFEE[con-1].name}</p>
                <p class="card-text">${COFFEE[con-1].price}.00</p>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                        <button type="button" onclick="cart('${COFFEE[con-1].name}','${COFFEE[con-1].price}',
                        '${URL}','${con}','${btn}')"
                        class="btn btn-sm btn-outline-secondary">
                        <a style="color:inherit;" href="/cart">BUY</a></button>
                        <button id="${btn}" type="button" onclick="cart2('${COFFEE[con-1].name}','${COFFEE[con-1].price}',
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

function HTMLcolgateProduct(con) {
    let URL = `/img/colgate/colgate${con}.jpg`;
    let btn = `btnColgate${con}`;
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

function HTMLdalProduct(con) {
    let URL = `/img/dal/dal${con}.jpg`;
    let btn = `btnDal${con}`;
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
                <p class="card-text">${DAL[con-1].name}</p>
                <p class="card-text">${DAL[con-1].price}.00</p>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                        <button type="button" onclick="cart('${DAL[con-1].name}','${DAL[con-1].price}',
                        '${URL}','${con}','${btn}')"
                        class="btn btn-sm btn-outline-secondary">
                        <a style="color:inherit;" href="/cart">BUY</a></button>
                        <button id="${btn}" type="button" onclick="cart2('${DAL[con-1].name}','${DAL[con-1].price}',
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

function HTMLmasalaProduct(con) {
    let URL = `/img/masala/masala${con}.jpg`;
    let btn = `btnMasala${con}`;
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
                <p class="card-text">${MASALA[con-1].name}</p>
                <p class="card-text">${MASALA[con-1].price}.00</p>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                        <button type="button" onclick="cart('${MASALA[con-1].name}','${MASALA[con-1].price}',
                        '${URL}','${con}','${btn}')"
                        class="btn btn-sm btn-outline-secondary">
                        <a style="color:inherit;" href="/cart">BUY</a></button>
                        <button id="${btn}" type="button" onclick="cart2('${MASALA[con-1].name}','${MASALA[con-1].price}',
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

function HTMLriceProduct(con) {
    let URL = `/img/rice/rice${con}.jpg`;
    let btn = `btnRice${con}`;
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
                <p class="card-text">${RICE[con-1].name}</p>
                <p class="card-text">${RICE[con-1].price}.00</p>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                        <button type="button" onclick="cart('${RICE[con-1].name}','${RICE[con-1].price}',
                        '${URL}','${con}','${btn}')"
                        class="btn btn-sm btn-outline-secondary">
                        <a style="color:inherit;" href="/cart">BUY</a></button>
                        <button id="${btn}" type="button" onclick="cart2('${RICE[con-1].name}','${RICE[con-1].price}',
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

function HTMLsaltProduct(con) {
    let URL = `/img/salt/salt${con}.jpg`;
    let btn = `btnSalt${con}`;
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
                <p class="card-text">${SALT[con-1].name}</p>
                <p class="card-text">${SALT[con-1].price}.00</p>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                        <button type="button" onclick="cart('${SALT[con-1].name}','${SALT[con-1].price}',
                        '${URL}','${con}','${btn}')"
                        class="btn btn-sm btn-outline-secondary">
                        <a style="color:inherit;" href="/cart">BUY</a></button>
                        <button id="${btn}" type="button" onclick="cart2('${SALT[con-1].name}','${SALT[con-1].price}',
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

function HTMLteaProduct(con) {
    let URL = `/img/tea/tea${con}.jpg`;
    let btn = `btnTea${con}`;
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
                <p class="card-text">${TEA[con-1].name}</p>
                <p class="card-text">${TEA[con-1].price}.00</p>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                        <button type="button" onclick="cart('${TEA[con-1].name}','${TEA[con-1].price}',
                        '${URL}','${con}','${btn}')"
                        class="btn btn-sm btn-outline-secondary">
                        <a style="color:inherit;" href="/cart">BUY</a></button>
                        <button id="${btn}" type="button" onclick="cart2('${TEA[con-1].name}','${TEA[con-1].price}',
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

function HTMLkitchenProduct(con) {
    let URL = `/img/kitchen/kitchen${con}.jpg`;
    let btn = `btnKitchen${con}`;
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
                <p class="card-text">${KITCHEN[con-1].name}</p>
                <p class="card-text">${KITCHEN[con-1].price}.00</p>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                        <button type="button" onclick="cart('${KITCHEN[con-1].name}','${KITCHEN[con-1].price}',
                        '${URL}','${con}','${btn}')"
                        class="btn btn-sm btn-outline-secondary">
                        <a style="color:inherit;" href="/cart">BUY</a></button>
                        <button id="${btn}" type="button" onclick="cart2('${KITCHEN[con-1].name}','${KITCHEN[con-1].price}',
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

function HTMLfruitsProduct(con) {
    let URL = `/img/fruits/fruit${con}.jpg`;
    let btn = `btnFruit${con}`;
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

function HTMLvegetablesProduct(con) {
    let URL = `/img/vegetables/vegetables${con}.jpg`;
    let btn = `btnVegetables${con}`;
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

function HTMLmilkProduct(con) {
    let URL = `/img/milk/milk${con}.jpg`;
    let btn = `btnMilk${con}`;
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
                <p class="card-text">${MILK[con-1].name}</p>
                <p class="card-text">${MILK[con-1].price}.00</p>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                        <button type="button" onclick="cart('${MILK[con-1].name}','${MILK[con-1].price}',
                        '${URL}','${con}','${btn}')"
                        class="btn btn-sm btn-outline-secondary">
                        <a style="color:inherit;" href="/cart">BUY</a></button>
                        <button id="${btn}" type="button" onclick="cart2('${MILK[con-1].name}','${MILK[con-1].price}',
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
    for(let index = 1; index <= 3; index++){
        shampooDIV.innerHTML+=`${HTMLshampooProduct(index)}`;
    }
    for(let index = 1; index <= 3; index++){
        soapDIV.innerHTML+=`${HTMLsoapProduct(index)}`;
        deoDIV.innerHTML+=`${HTMLdeoProduct(index)}`;
        bsDIV.innerHTML+=`${HTMLbsProduct(index)}`;
        hrDIV.innerHTML+=`${HTMLhrProduct(index)}`;
        cdDIV.innerHTML+=`${HTMLcdProduct(index)}`;
        attaDIV.innerHTML+=`${HTMLattaProduct(index)}`;
        coffeeDIV.innerHTML+=`${HTMLcoffeeProduct(index)}`;
        colgateDIV.innerHTML+=`${HTMLcolgateProduct(index)}`;
        dalDIV.innerHTML+=`${HTMLdalProduct(index)}`;
        masalaDIV.innerHTML+=`${HTMLmasalaProduct(index)}`;
        riceDIV.innerHTML+=`${HTMLriceProduct(index)}`;
        saltDIV.innerHTML+=`${HTMLsaltProduct(index)}`;
        teaDIV.innerHTML+=`${HTMLteaProduct(index)}`;
        kitchenDIV.innerHTML+=`${HTMLkitchenProduct(index)}`;
        fruitDIV.innerHTML+=`${HTMLfruitsProduct(index)}`;
        vegetablesDIV.innerHTML+=`${HTMLvegetablesProduct(index)}`;
        milkDIV.innerHTML+=`${HTMLmilkProduct(index)}`;
    }
    if (localStorage.getItem("cart")==null){
    }
    else{
        products= JSON.parse(localStorage.getItem("cart"));
        cart_n.innerHTML=`[${products.length}]`;
    }
})();
