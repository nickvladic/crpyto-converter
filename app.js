// display currencyDiv
const selectableTextArea = document.querySelector(".selectable-text-area");
const currencenyDiv = document.querySelector("#currency-price");
const randomNumberText = document.querySelector("#random-number-text")

selectableTextArea.addEventListener("mouseup", fromMouseUp);

function fromMouseUp(event) {
    setTimeout(() => {
        const selectedText = window.getSelection().toString().trim();
    //console.log(selectedText)
    if(selectedText.length) {
       
        const x = event.pageX;
        const y = event.pageY;
        // change the posistion of the div here
        currencenyDiv.style.left = `${x - 20}px`;
        currencenyDiv.style.top = `${y - 50}px`;
        currencenyDiv.style.display = "block";
        currencenyDiv.classList.add("btnEntrance");
    }
    }, 0);
}

document.addEventListener("mousedown", documentMouseDown);

function documentMouseDown(event) {
    if(event.target.id!=="currency-price" && getComputedStyle(currencenyDiv).display==="block") { 
      currencenyDiv.style.display = "none";
      currencenyDiv.classList.remove("btnEntrance");
      window.getSelection().empty();
    } 
  }
  
  
//getting datafrom api



    //USD - EUR Euro(€)


let responseEur = fetch('https://min-api.cryptocompare.com/data/price?fsym=USD&tsyms=EUR')
        .then(res => res.json())
        .then(async function eurGet(data) {
            return responseEur = data.EUR;
            
        })
        function responseToEur() {
            const selectedText = window.getSelection().toString().trim();
            if(selectedText.includes('$')) {
                return currencenyDiv.innerHTML = (responseEur * parseInt(selectedText)).toFixed(2) + " €"; 
            } else{
                return currencenyDiv.innerHTML = '$ sing necessary';
            }
           
        }
        document.addEventListener("mouseup", responseToEur)

    //USD - GBP  Pound(£)
let responseGbp = fetch('https://min-api.cryptocompare.com/data/price?fsym=USD&tsyms=GBP')
    .then(res => res.json())
    .then(function eurGet(data) {
        return responseGbp = data.GBP;
    })
    function responseToGbp() {
        const selectedText = window.getSelection().toString().trim();
        if(selectedText.includes('$')) {
            return currencenyDiv.innerHTML = (responseGbp * parseInt(selectedText)).toFixed(2) + " £";
        } else{
            return currencenyDiv.innerHTML = '$ sing necessary';
        }
        
    }
    //document.addEventListener("mouseup", responseToGbp)

    //USD - JPY Japanese yen(¥)
let responseJpy = fetch('https://min-api.cryptocompare.com/data/price?fsym=USD&tsyms=JPY')
    .then(res => res.json())
    .then(function eurGet(data) {
        return responseJpy = data.JPY;
    })
    function responseToJpy() {
        const selectedText = window.getSelection().toString().trim();
        if(selectedText.includes('$')) {
            return currencenyDiv.innerHTML = (responseJpy * parseInt(selectedText)).toFixed(2) + " ¥";
        } else{
            return currencenyDiv.innerHTML = '$ sing necessary';
        }
          
    }
    //document.addEventListener("mouseup", responseToJpy)
    
    //USD - BTC Bitcoin
let responseBtc = fetch('https://min-api.cryptocompare.com/data/price?fsym=USD&tsyms=BTC')
    .then(res => res.json())
    .then(function eurGet(data) {
        return responseBtc = data.BTC;
    })
    function responseToBtc() {
        const selectedText = window.getSelection().toString().trim();
        if(selectedText.includes('$')) {
            return currencenyDiv.innerHTML = (responseBtc * parseInt(selectedText)).toFixed(8) + " Bitcoin";
        } else{
            return currencenyDiv.innerHTML = '$ sing necessary';
        }
        
    }
    //document.addEventListener("mouseup", responseToBtc)

    //USD - ETH Ether
let responseEth = fetch('https://min-api.cryptocompare.com/data/price?fsym=USD&tsyms=ETH')
    .then(res => res.json())
    .then(function eurGet(data) {
        return responseEth = data.ETH;
    })
    function responseToEth() {
        const selectedText = window.getSelection().toString().trim();
        if(selectedText.includes('$')) {
            return currencenyDiv.innerHTML = (responseEth * parseInt(selectedText)).toFixed(5) + " Ether";
        } else{
            return currencenyDiv.innerHTML = '$ sing necessary';
        }
       
    }
    //document.addEventListener("mouseup", responseToEth)

    //USD - XRP XRP
let responseXrp = fetch('https://min-api.cryptocompare.com/data/price?fsym=USD&tsyms=XRP')
    .then(res => res.json())
    .then(function eurGet(data) {
        return responseXrp = data.XRP;
    })
    function responseToXrp() {
        const selectedText = window.getSelection().toString().trim();
        if(selectedText.includes('$')) {
            return currencenyDiv.innerHTML = (responseXrp * parseInt(selectedText)).toFixed(3) + " XRP";
        } else{
            return currencenyDiv.innerHTML = '$ sing necessary';
        }
        
     
    }
    //document.addEventListener("mouseup", responseToXrp)

    //USD - ADA  Cardano
let responseAda = fetch('https://min-api.cryptocompare.com/data/price?fsym=USD&tsyms=ADA')
    .then(res => res.json())
    .then(function eurGet(data) {
        return responseAda = data.ADA;
    })
    function responseToAda() {
        const selectedText = window.getSelection().toString().trim();
        if(selectedText.includes('$')) {
            return currencenyDiv.innerHTML = (responseAda * parseInt(selectedText)).toFixed(3) + " Cardano";
        } else{
            return currencenyDiv.innerHTML = '$ sing necessary';
        }
        
       
    }
    //document.addEventListener("mouseup", responseToAda)

    //USD - XLM Stellar
let responseXlm = fetch('https://min-api.cryptocompare.com/data/price?fsym=USD&tsyms=XLM')
    .then(res => res.json())
    .then(function eurGet(data) {
        return responseXlm = data.XLM;
    })
    function responseToXlm() {
        const selectedText = window.getSelection().toString().trim();
        if(selectedText.includes('$')) {
            return currencenyDiv.innerHTML = (responseXlm * parseInt(selectedText)).toFixed(2) + " Stellar";
        } else{
            return currencenyDiv.innerHTML = '$ sing necessary';
        }
        
    }
    //document.addEventListener("mouseup", responseToXlm)



let selectCrypto = document.querySelector('#select-crypto')
function selectEventListener() {
    if(selectCrypto.value == "euro") {
        document.addEventListener("mouseup", responseToEur);
    } else if (selectCrypto.value == "pound") {
        document.addEventListener("mouseup", responseToGbp);
    } else if (selectCrypto.value == "yen") {
        document.addEventListener("mouseup", responseToJpy);
    } else if (selectCrypto.value == "bitcoin") {
        document.addEventListener("mouseup", responseToBtc);
    } else if (selectCrypto.value == "ether") {
        document.addEventListener("mouseup", responseToEth);
    } else if (selectCrypto.value == "XRP") {
        document.addEventListener("mouseup", responseToXrp);
    } else if (selectCrypto.value == "cardano") {
        document.addEventListener("mouseup", responseToAda);
    } else if (selectCrypto.value == "stellar") {
        document.addEventListener("mouseup", responseToXlm);
    }
}

// random number generator
let getRadomNumber = function(start, range) {
    let getRandom = Math.floor((Math.random() * range) + start);
    while(getRandom > range) {
        getRandom = Math.floor((Math.random() * range) + start);
    }
    return getRandom;
}
/* console.log(getRadomNumber(100,1000)); */


let r = document.createElement('p');
r.innerHTML = getRadomNumber(100,1000);
randomNumberText.appendChild(r);







                
            




                
 







    

