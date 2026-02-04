const cart = ["shoes", "pants", "kurta", "saree"];

createOrder(cart).then(orderId => {

    return proceedToPayment(orderId);
}).then(paymentInfo => {

    return showOrderSummary(paymentInfo);
}).then(paymentInfo => {

    return updateWalletBalance;
}).then(data => {

    console.log(data);
}).catch(err => {
    console.log(err);
})