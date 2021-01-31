// 01 kilometer to meter

function kilometerToMeter(km) {
    meter = km * 1000;
        return meter;
}


// 02 budget calculator

function budgetCalculator([watch, mobile, laptop]) {
    watchCost = 50 * watch;
    mobileCost = 100 * mobile;
    laptopCost = 500 * laptop;
    totalCost = watchCost + mobileCost + laptopCost;
        return totalCost;
}

// 03 hotelCost

function hotelCost(Day) {
    var hotelBill = 0;
      if (Day <= 10) {
        hotelBill = stayDay * 100;
        return hotelBill;
    } else if (Day <= 20) {
        first10days = 10 * 100;
        remaining = Day - 10;
        secondBill = 80 * remaining;
        hotelBill = first10days + secondBill;
        return hotelBill;
    } else {
        first10days = 10 * 100;
        secondBill = 10 * 80;
        remainingDay = Day - 20;
        thirdBill = remainingDay * 50;
        hotelBill = first10days + secondBill + thirdBill;
        return hotelBill;
    }
}

// 04 megaFriend

function megaFriend(str) {
    var wordLength = 0;
    var biggestWord;
    for (var i = 0; i < str.length; i++) {
        if (str[i].length > wordLength) {
             wordLength = str[i].length;
            biggestWord = str[i];
        }
    }
    return biggestWord;
}