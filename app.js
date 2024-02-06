
const arrOne = ['You', 'Your'];
const arrTwo = ['are'];
const arrThree = ['beautiful', 'lost'];
const arrFour = ['car', 'dream'];
const arrFive = ['will become true', 'is coming'];

function generateMessage() {
    const arrOneRandomizer = Math.floor(Math.random() * arrOne.length);

    if (arrOneRandomizer === 0) {
        const arrThreeRandomizer = Math.floor(Math.random() * arrThree.length);

        console.log(`${arrOne[arrOneRandomizer]} ${arrTwo} ${arrThree[arrThreeRandomizer]}`);

    } else {
        const arrFourRandomizer = Math.floor(Math.random() * arrFour.length);

        const arrFiveRandomizer = Math.floor(Math.random() * arrFive.length);

        console.log(`${arrOne[arrOneRandomizer]} ${arrFour[arrFourRandomizer]} ${arrFive[arrFiveRandomizer]}`);
    }
}

generateMessage();