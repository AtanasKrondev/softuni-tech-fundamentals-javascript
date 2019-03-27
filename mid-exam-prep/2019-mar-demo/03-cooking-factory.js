function cookingFactory(input) {
    input.pop();
    let bestBatchIndex = -1;
    let bestBatchQuality = Number.MIN_SAFE_INTEGER;
    let bestBatchAverage = Number.MIN_SAFE_INTEGER;
    let bestBatchLength = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < input.length; i++) {
        let batch = input[i].split('#').map(Number);
        let quality = batch.reduce((a, b) => a + b);
        let length = batch.length;
        let average = quality / length;

        if (quality > bestBatchQuality) {
            bestBatchIndex = i;
            bestBatchQuality = quality;
            bestBatchAverage = average;
            bestBatchLength = length;
        }

        if (quality === bestBatchQuality) {
            if (average > bestBatchAverage) {
                bestBatchIndex = i;
                bestBatchQuality = quality;
                bestBatchAverage = average;
                bestBatchLength = length;
            }
            if (average === bestBatchAverage) {
                if (length < bestBatchLength) {
                    bestBatchIndex = i;
                    bestBatchQuality = quality;
                    bestBatchAverage = average;
                    bestBatchLength = length;
                }
            }
        }
    }

    console.log(`Best Batch quality: ${bestBatchQuality}`);
    console.log(input[bestBatchIndex].split('#').join(' '));    
}

cookingFactory(['5#4#10#-2',
    '10#5#2#3#2',
    'Bake It!']);