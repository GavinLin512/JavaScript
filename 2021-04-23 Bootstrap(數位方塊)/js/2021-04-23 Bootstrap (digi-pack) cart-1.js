// 計算區域
var minus = document.querySelectorAll('.minus')
var plus = document.querySelectorAll('.plus')
var count = document.querySelectorAll('#count')
// 顯示區域
var amount = document.querySelector('.amount')
var subTotal = document.querySelector('.subtotal')
var shipping = document.querySelector('.shipping')
var totalCost = document.querySelector('.totalcost')
// 商品單價
var priceArr = document.querySelectorAll('.price')

var priceNumberArr = [];
var priceCountArr = [];




// for迴圈，對應不同的商品
for (let index = 0; index < count.length; index++) {
// console.log(priceArr[index].dataset.price);

    // 取得price的data
    priceNumberArr.push(parseFloat(priceArr[index].dataset.price)) 
    // var priceNumber = parseFloat(price).toFixed(2)
    // console.log(amount.innerHTML);
    // console.log(priceNumberArr[index]);

    
    // 數量增加
    plus[index].onclick = function () {
        // input跟數量顯示增加
        parseInt(count[index].value++)
        amount.innerHTML++
        
        // 小計價格
        var priceCount = priceNumberArr[index] * parseInt(count[index].value)
        
        // priceCountArr.push(priceCount)

        subTotal.innerHTML = '$' + priceCount.toFixed(2)
        console.log(priceCount);
        // 運費
        var shippingPrice = 24.90
        shipping.innerHTML = '$' + shippingPrice.toFixed(2)
        
        // 總計價格
        var totalCostNumber = parseFloat(parseFloat(priceCount.toFixed(2)) + shippingPrice).toFixed(2)
        totalCost.innerHTML = '$' + totalCostNumber

        
        

        // console.log(typeof parseFloat(priceCount.toFixed(2)))
    }

    // 數量減少
    minus[index].onclick = function () {

        // 當數量不等於0的時候
        if (count[index].value != 0) {

            // input跟數量顯示減少
            parseInt(count[index].value--)
            amount.innerHTML--

            // 小計價格
            var priceCount = priceNumberArr[index] * amount.innerHTML
            subTotal.innerHTML = '$' + priceCount.toFixed(2)

            // 運費
            var shippingPrice = 24.90
            shipping.innerHTML = '$' + shippingPrice.toFixed(2)

            // 總計價格
            var totalCostNumber = parseFloat(parseFloat(priceCount.toFixed(2)) + shippingPrice).toFixed(2)
            totalCost.innerHTML = '$' + totalCostNumber
            
        }

        // 當數量等於0，或初始狀態
        if (amount.innerHTML == 0) {
            
            // 小計、運費、總計為0
            subTotal.innerHTML = '$' + priceCount.toFixed(0)
            shipping.innerHTML = '$' + 0
            totalCost.innerHTML = '$' + 0
        }

    }


}

// console.log(amount.innerHTML);




