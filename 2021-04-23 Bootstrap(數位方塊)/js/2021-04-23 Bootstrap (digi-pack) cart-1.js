// 計算區域
var minus = document.querySelectorAll('.minus')
var plus = document.querySelectorAll('.plus')
var count = document.querySelectorAll('#count')
// 顯示區域
var amount = document.querySelector('.amount')
var subTotal = document.querySelector('.subtotal')
var shipping = document.querySelector('.shipping')
var totalCost = document.querySelector('.totalcost')
// console.log(count.length);
for (let index = 0; index < count.length; index++) {

    var countValue = count[index].value

    plus[index].onclick = function () {
        countValue++
        console.log(count[index].value)

        // amount.innerHTML = '$' + 
    }

    minus[index].onclick = function(){
        countValue--
        if (countValue <= 0) {
            countValue = 0
        }

    }

}





