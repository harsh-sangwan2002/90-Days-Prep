const cart = ["shoes", "pants", "kurta"]

/* 
    1. Create Order 
    2. Proceed To Payment
    3. Show Summary
    4. Update wallet
*/

// Callback hell -> One callback inside another callback
// It starts to grow horizontally instead of vertically
// Giving the control to the api and no idea about behind the scenes
api.createOrder(cart, function () {

    api.proceedToPayment(function () {

        api.showSummary(function () {

            api.updateWallet();
        });
    });
})

// 2 very big issues with callbacks -> Callback Hell, Inversion Of Control