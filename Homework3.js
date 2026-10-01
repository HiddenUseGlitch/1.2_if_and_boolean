const bonusBalance = 5000;
const monthlyPurchases = 2;
const standartRate = 10;
const increasedRate = 20;
const frequentPurchaseBonus = 5;
const finalPercent = 0;


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