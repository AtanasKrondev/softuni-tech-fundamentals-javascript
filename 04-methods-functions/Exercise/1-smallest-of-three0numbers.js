function smallestOfThreeNumbers(first, second, third) {
    let smallestNumber = 0;
    if (first <= second && first < third) {
        smallestNumber = first;
    } else if (second < first && second <= third) {
        smallestNumber = second;
    } else {
        smallestNumber = third;
    }
    console.log(smallestNumber);
}

smallestOfThreeNumbers(2,5,3);