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
var priceCountArr0 = [];
var priceCountArr1 = [];
var priceCountArr2 = [];

var priceCountAll = [priceCountArr0,priceCountArr1,priceCountArr2]
console.log(priceCountAll);



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
        // var priceCount = priceNumberArr[index] * parseInt(count[index].value)

        for (let j = 0; j < priceCountAll.length; j++) {
            priceCountAll[j].push(priceNumberArr[j] * parseInt(count[j].value))
            
        }

        priceCountArr0.push(priceNumberArr[0] * parseInt(count[0].value))
        priceCountArr1.push(priceNumberArr[1] * parseInt(count[1].value))
        priceCountArr2.push(priceNumberArr[2] * parseInt(count[2].value))

        var priceCount0 = priceCountArr0.pop()
        var priceCount1 = priceCountArr1.pop()
        var priceCount2 = priceCountArr2.pop()

        var subTotalNumber = priceCount0 + priceCount1 + priceCount2

        subTotal.innerHTML = '$' + subTotalNumber.toFixed(2)

        // 運費
        var shippingPrice = 24.90
        shipping.innerHTML = '$' + shippingPrice.toFixed(2)

        // 總計價格
        var totalCostNumber = parseFloat(parseFloat(subTotalNumber) + shippingPrice).toFixed(2)
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
            priceCountArr0.push(priceNumberArr[0] * parseInt(count[0].value))
            priceCountArr1.push(priceNumberArr[1] * parseInt(count[1].value))
            priceCountArr2.push(priceNumberArr[2] * parseInt(count[2].value))

            var priceCount0 = priceCountArr0.pop()
            var priceCount1 = priceCountArr1.pop()
            var priceCount2 = priceCountArr2.pop()
            
            var subTotalNumber = priceCount0 + priceCount1 + priceCount2

            subTotal.innerHTML = '$' + subTotalNumber.toFixed(2)
            // console.log(subTotal.innerHTML);
            // 運費
            var shippingPrice = 24.90
            shipping.innerHTML = '$' + shippingPrice.toFixed(2)

            // 總計價格
            var totalCostNumber = parseFloat(parseFloat(subTotalNumber.toFixed(2)) + shippingPrice).toFixed(2)
            totalCost.innerHTML = '$' + totalCostNumber

        }

        // 當數量等於0，或初始狀態
        if (amount.innerHTML == 0) {

            // 小計、運費、總計為0
            subTotal.innerHTML = '$' + subTotalNumber.toFixed(0)
            shipping.innerHTML = '$' + 0
            totalCost.innerHTML = '$' + 0
        }

    }


}

// console.log(amount.innerHTML);




