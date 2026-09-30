let sumOfPurchases = 3000;
let bonusBalance = 5000;
let monthlyPurchases = 2;
let standartRate = 10;
let increasedRate = 20;
let frequentPurchaseBonus = 5;
let finalPercent = 0;


if (bonusBalance > 5000) {

    if (monthlyPurchases >=2) {

        finalPercent =  increasedRate + frequentPurchaseBonus;
        console.log(`Процент от покупки: ${finalPercent}`);
    } else {
        finalPercent =  increasedRate;
        console.log(`Процент от покупки: ${finalPercent}`);
    }

} else {

    if (monthlyPurchases >= 2) {
    finalPercent = standartRate + frequentPurchaseBonus;
    console.log(`Процент от покупки: ${finalPercent}`);
    } else {
        finalPercent =  standartRate;
        console.log(`Процент от покупки: ${finalPercent}`);
    }
}