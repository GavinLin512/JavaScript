// 計算區域
var minus = document.querySelectorAll('.minus')
var plus = document.querySelectorAll('.plus')
var count = document.querySelectorAll('#count')
// 顯示區域
var amount = document.querySelector('.amount')
var subTotal = document.querySelector('.subtotal')
var shipping = document.querySelector('.shipping')
var totalCost = document.querySelector('.totalcost')
var priceArr = document.querySelectorAll('.price')
// console.log(priceArr);
for (let index = 0; index < count.length; index++) {

    var price = priceArr[index].innerHTML
    var priceNumber = parseFloat(price).toFixed(2)
    // console.log(amount.innerHTML);
    plus[index].onclick = function () {
        parseInt(count[index].value++)
        amount.innerHTML++

        priceCount = priceNumber * amount.innerHTML
        subTotal.innerHTML = '$' + priceCount.toFixed(2)
        var totalCostNumber = parseFloat(parseFloat(shipping.innerHTML) + parseFloat(priceCount.toFixed(2))).toFixed(2)
        totalCost.innerHTML = '$' + totalCostNumber
        
        console.log(typeof parseFloat(priceCount.toFixed(2)))
    }


    minus[index].onclick = function () {

        if (count[index].value != 0) {
            parseInt(count[index].value--)
            amount.innerHTML--

            var priceCount = priceNumber * amount.innerHTML
            subTotal.innerHTML = '$' + priceCount.toFixed(2)
            var totalCostNumber = parseFloat(parseFloat(shipping.innerHTML) + parseFloat(priceCount.toFixed(2))).toFixed(2)
            totalCost.innerHTML = '$' + totalCostNumber
        }


    }



}
// console.log(amount.innerHTML);




