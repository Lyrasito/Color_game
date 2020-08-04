const boxes = {
    _colorClick: {
        clicked: false
    },
    _colorClick1: {
        clicked: false
    },
    _colorClick2: {
        clicked: false
    },
    _colorClick3: {
        clicked: false
    },
    get colorClick () {
        return this._colorClick;
    },
    set colorClick (data) {
        this._colorClick = data;
    },
    get colorClick1 () {
        return this._colorClick1;
    },
    set colorClick1 (data) {
        this._colorClick1 = data;
    },
    get colorClick2 () {
        return this._colorClick2;
    },
    set colorClick2 (data) {
        this._colorClick2 = data;
    },
    get colorClick3 () {
        return this._colorClick3;
    },
    set colorClick3 (data) {
        this._colorClick3 = data;
    }
};

boxes.colorClick = document.getElementById('click-color');
boxes.colorClick1 = document.getElementById('click-color1');
boxes.colorClick2 = document.getElementById('click-color2');
boxes.colorClick3 = document.getElementById('click-color3');
const startButton = document.getElementById('start');

const colors = ['red', 'yellow', 'green', 'blue']


function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

shuffle(colors);

const counter = document.getElementById('counter');

const redCounter = document.getElementById('redcounter');
let redCounterInc = 0;
const yellowCounter = document.getElementById('yellowcounter');
let yellowCounterInc = 0;
const greenCounter = document.getElementById('greencounter');
let greenCounterInc = 0;
const blueCounter = document.getElementById('bluecounter');
let blueCounterInc = 0;


boxes.colorClick.onclick = () => {
    boxes.colorClick.style.backgroundColor = colors[0];
    if (colors[0] === 'red') {
        boxes.colorClick.innerHTML = "<h3>It's red!</h3>";
        boxes.colorClick.clicked = true;
        if (boxes.colorClick1.clicked && boxes.colorClick2.clicked || boxes.colorClick1.clicked && boxes.colorClick3.clicked || boxes.colorClick2.clicked && boxes.colorClick3.clicked) {
            redCounterInc += 1;
        } else if (boxes.colorClick2.clicked || boxes.colorClick1.clicked || boxes.colorClick3.clicked) {
            redCounterInc += 2;
        } else if (!boxes.colorClick1.clicked && !boxes.colorClick2.clicked && !boxes.colorClick3.clicked) {
            redCounterInc += 3;
        };
    } else if (colors[0] === 'yellow') {
        boxes.colorClick.innerHTML = "<h3>It's yellow!</h3>";
        boxes.colorClick.clicked = true;
        if (boxes.colorClick1.clicked && boxes.colorClick2.clicked || boxes.colorClick1.clicked && boxes.colorClick3.clicked || boxes.colorClick2.clicked && boxes.colorClick3.clicked) {
            yellowCounterInc += 1;
        } else if (boxes.colorClick2.clicked || boxes.colorClick1.clicked || boxes.colorClick3.clicked) {
            yellowCounterInc += 2;
        } else if (!boxes.colorClick1.clicked && !boxes.colorClick2.clicked && !boxes.colorClick3.clicked) {
            yellowCounterInc += 3;
        };
    } else if (colors[0] === 'green') {
        boxes.colorClick.innerHTML = "<h3>It's green!</h3>";
        boxes.colorClick.clicked = true;
        if (boxes.colorClick1.clicked && boxes.colorClick2.clicked || boxes.colorClick1.clicked && boxes.colorClick3.clicked || boxes.colorClick2.clicked && boxes.colorClick3.clicked) {
            greenCounterInc += 1;
        } else if (boxes.colorClick2.clicked || boxes.colorClick1.clicked || boxes.colorClick3.clicked) {
            greenCounterInc += 2;
        } else if (!boxes.colorClick1.clicked && !boxes.colorClick2.clicked && !boxes.colorClick3.clicked) {
            greenCounterInc += 3;
        };
    } else if (colors[0] === 'blue') {
        boxes.colorClick.innerHTML = "<h3>It's blue!</h3>";
        boxes.colorClick.clicked = true;
        if (boxes.colorClick1.clicked && boxes.colorClick2.clicked || boxes.colorClick1.clicked && boxes.colorClick3.clicked || boxes.colorClick2.clicked && boxes.colorClick3.clicked) {
            blueCounterInc += 1;
        } else if (boxes.colorClick2.clicked || boxes.colorClick1.clicked || boxes.colorClick3.clicked) {
            blueCounterInc += 2;
        } else if (!boxes.colorClick1.clicked && !boxes.colorClick2.clicked && !boxes.colorClick3.clicked) {
            blueCounterInc += 3;
        };
    }
    redCounter.innerHTML = redCounterInc;
    yellowCounter.innerHTML = yellowCounterInc;
    greenCounter.innerHTML = greenCounterInc;
    blueCounter.innerHTML = blueCounterInc;
}



boxes.colorClick1.onclick = () => {
    boxes.colorClick1.style.backgroundColor = colors[1];
    if (colors[1] === 'red') {
        boxes.colorClick1.innerHTML = "<h3>It's red!</h3>";
        boxes.colorClick1.clicked = true;
        if (boxes.colorClick.clicked && boxes.colorClick2.clicked || boxes.colorClick.clicked && boxes.colorClick3.clicked || boxes.colorClick2.clicked && boxes.colorClick3.clicked) {
            redCounterInc += 1;
        } else if (boxes.colorClick2.clicked || boxes.colorClick.clicked || boxes.colorClick3.clicked) {
            redCounterInc += 2;
        } else if (!boxes.colorClick.clicked && !boxes.colorClick2.clicked && !boxes.colorClick3.clicked) {
            redCounterInc += 3;
        };
    } else if (colors[1] === 'yellow') {
        boxes.colorClick1.innerHTML = "<h3>It's yellow!</h3>";
        boxes.colorClick1.clicked = true;
        if (boxes.colorClick.clicked && boxes.colorClick2.clicked || boxes.colorClick.clicked && boxes.colorClick3.clicked || boxes.colorClick2.clicked && boxes.colorClick3.clicked) {
            yellowCounterInc += 1;
        } else if (boxes.colorClick2.clicked || boxes.colorClick.clicked || boxes.colorClick3.clicked) {
            yellowCounterInc += 2;
        } else if (!boxes.colorClick.clicked && !boxes.colorClick2.clicked && !boxes.colorClick3.clicked) {
            yellowCounterInc += 3;
        };
    } else if (colors[1] === 'green') {
        boxes.colorClick1.innerHTML = "<h3>It's green!</h3>";
        boxes.colorClick1.clicked = true;
        if (boxes.colorClick.clicked && boxes.colorClick2.clicked || boxes.colorClick.clicked && boxes.colorClick3.clicked || boxes.colorClick2.clicked && boxes.colorClick3.clicked) {
            greenCounterInc += 1;
        } else if (boxes.colorClick2.clicked || boxes.colorClick.clicked || boxes.colorClick3.clicked) {
            greenCounterInc += 2;
        } else if (!boxes.colorClick.clicked && !boxes.colorClick2.clicked && !boxes.colorClick3.clicked) {
            greenCounterInc += 3;
        };
    } else if (colors[1] === 'blue') {
        boxes.colorClick1.innerHTML = "<h3>It's blue!</h3>";
        boxes.colorClick1.clicked = true;
        if (boxes.colorClick.clicked && boxes.colorClick2.clicked || boxes.colorClick.clicked && boxes.colorClick3.clicked || boxes.colorClick2.clicked && boxes.colorClick3.clicked) {
            blueCounterInc += 1;
        } else if (boxes.colorClick2.clicked || boxes.colorClick.clicked || boxes.colorClick3.clicked) {
            blueCounterInc += 2;
        } else if (!boxes.colorClick.clicked && !boxes.colorClick2.clicked && !boxes.colorClick3.clicked) {
            blueCounterInc += 3;
        };
    }
    redCounter.innerHTML = redCounterInc;
    yellowCounter.innerHTML = yellowCounterInc;
    greenCounter.innerHTML = greenCounterInc;
    blueCounter.innerHTML = blueCounterInc;
}
boxes.colorClick2.onclick = () => {
    boxes.colorClick2.style.backgroundColor = colors[2];
    if (colors[2] === 'red') {
        boxes.colorClick2.innerHTML = "<h3>It's red!</h3>";
        boxes.colorClick2.clicked = true;
        if (boxes.colorClick.clicked && boxes.colorClick1.clicked || boxes.colorClick.clicked && boxes.colorClick3.clicked || boxes.colorClick1.clicked && boxes.colorClick3.clicked) {
            redCounterInc += 1;
        } else if (boxes.colorClick1.clicked || boxes.colorClick.clicked || boxes.colorClick3.clicked) {
            redCounterInc += 2;
        } else if (!boxes.colorClick.clicked && !boxes.colorClick1.clicked && !boxes.colorClick3.clicked) {
            redCounterInc += 3;
        };
    } else if (colors[2] === 'yellow') {
        boxes.colorClick2.innerHTML = "<h3>It's yellow!</h3>";
        boxes.colorClick2.clicked = true;
        if (boxes.colorClick.clicked && boxes.colorClick1.clicked || boxes.colorClick.clicked && boxes.colorClick3.clicked || boxes.colorClick1.clicked && boxes.colorClick3.clicked) {
            yellowCounterInc += 1;
        } else if (boxes.colorClick1.clicked || boxes.colorClick.clicked || boxes.colorClick3.clicked) {
            yellowCounterInc += 2;
        } else if (!boxes.colorClick.clicked && !boxes.colorClick1.clicked && !boxes.colorClick3.clicked) {
            yellowCounterInc += 3;
        };
    } else if (colors[2] === 'green') {
        boxes.colorClick2.innerHTML = "<h3>It's green!</h3>";
        boxes.colorClick2.clicked = true;
        if (boxes.colorClick.clicked && boxes.colorClick1.clicked || boxes.colorClick.clicked && boxes.colorClick3.clicked || boxes.colorClick1.clicked && boxes.colorClick3.clicked) {
            greenCounterInc += 1;
        } else if (boxes.colorClick1.clicked || boxes.colorClick.clicked || boxes.colorClick3.clicked) {
            greenCounterInc += 2;
        } else if (!boxes.colorClick.clicked && !boxes.colorClick1.clicked && !boxes.colorClick3.clicked) {
            greenCounterInc += 3;
        };
    } else if (colors[2] === 'blue') {
        boxes.colorClick2.innerHTML = "<h3>It's blue!</h3>";
        boxes.colorClick2.clicked = true;
        if (boxes.colorClick.clicked && boxes.colorClick1.clicked || boxes.colorClick.clicked && boxes.colorClick3.clicked || boxes.colorClick1.clicked && boxes.colorClick3.clicked) {
            blueCounterInc += 1;
        } else if (boxes.colorClick1.clicked || boxes.colorClick.clicked || boxes.colorClick3.clicked) {
            blueCounterInc += 2;
        } else if (!boxes.colorClick.clicked && !boxes.colorClick1.clicked && !boxes.colorClick3.clicked) {
            blueCounterInc += 3;
        };
    }
    redCounter.innerHTML = redCounterInc;
    yellowCounter.innerHTML = yellowCounterInc;
    greenCounter.innerHTML = greenCounterInc;
    blueCounter.innerHTML = blueCounterInc;
}
boxes.colorClick3.onclick = () => {
    boxes.colorClick3.style.backgroundColor = colors[3];
    if (colors[3] === 'red') {
        boxes.colorClick3.innerHTML = "<h3>It's red!</h3>";
        boxes.colorClick3.clicked = true;
        if (boxes.colorClick.clicked && boxes.colorClick1.clicked || boxes.colorClick.clicked && boxes.colorClick2.clicked || boxes.colorClick1.clicked && boxes.colorClick2.clicked) {
            redCounterInc += 1;
        } else if (boxes.colorClick1.clicked || boxes.colorClick.clicked || boxes.colorClick2.clicked) {
            redCounterInc += 2;
        } else if (!boxes.colorClick.clicked && !boxes.colorClick1.clicked && !boxes.colorClick2.clicked) {
            redCounterInc += 3;
        };
    } else if (colors[3] === 'yellow') {
        boxes.colorClick3.innerHTML = "<h3>It's yellow!</h3>";
        boxes.colorClick3.clicked = true;
        if (boxes.colorClick.clicked && boxes.colorClick1.clicked || boxes.colorClick.clicked && boxes.colorClick2.clicked || boxes.colorClick1.clicked && boxes.colorClick2.clicked) {
            yellowCounterInc += 1;
        } else if (boxes.colorClick1.clicked || boxes.colorClick.clicked || boxes.colorClick2.clicked) {
            yellowCounterInc += 2;
        } else if (!boxes.colorClick.clicked && !boxes.colorClick1.clicked && !boxes.colorClick2.clicked) {
            yellowCounterInc += 3;
        };
    } else if (colors[3] === 'green') {
        boxes.colorClick3.innerHTML = "<h3>It's green!</h3>";
        boxes.colorClick3.clicked = true;
        if (boxes.colorClick.clicked && boxes.colorClick1.clicked || boxes.colorClick.clicked && boxes.colorClick2.clicked || boxes.colorClick1.clicked && boxes.colorClick2.clicked) {
            greenCounterInc += 1;
        } else if (boxes.colorClick1.clicked || boxes.colorClick.clicked || boxes.colorClick2.clicked) {
            greenCounterInc += 2;
        } else if (!boxes.colorClick.clicked && !boxes.colorClick1.clicked && !boxes.colorClick2.clicked) {
            greenCounterInc += 3;
        };
    } else if (colors[3] === 'blue') {
        boxes.colorClick3.innerHTML = "<h3>It's blue!</h3>";
        boxes.colorClick3.clicked = true;
        if (boxes.colorClick.clicked && boxes.colorClick1.clicked || boxes.colorClick.clicked && boxes.colorClick2.clicked || boxes.colorClick1.clicked && boxes.colorClick2.clicked) {
            blueCounterInc += 1;
        } else if (boxes.colorClick1.clicked || boxes.colorClick.clicked || boxes.colorClick2.clicked) {
            blueCounterInc += 2;
        } else if (!boxes.colorClick.clicked && !boxes.colorClick1.clicked && !boxes.colorClick2.clicked) {
            blueCounterInc += 3;
        };
    }
    redCounter.innerHTML = redCounterInc;
    yellowCounter.innerHTML = yellowCounterInc;
    greenCounter.innerHTML = greenCounterInc;
    blueCounter.innerHTML = blueCounterInc;
}



startButton.onmouseover = () => {
    startButton.style.backgroundColor = "white";
    startButton.style.color = "blue";
}
startButton.onmousedown = () => {
    startButton.style.backgroundColor = "blue";
    startButton.style.color = "white";
}
startButton.onmouseout = () => {
    startButton.style.backgroundColor = "blue";
    startButton.style.color = "white";
}
startButton.onmouseup = () => {
    startButton.style.backgroundColor = "white";
    startButton.style.color = "blue";
}

startButton.onclick = () => {
    if (!boxes.colorClick.clicked || !boxes.colorClick1.clicked || !boxes.colorClick2.clicked || !boxes.colorClick3.clicked) {
        throw Error (startButton.innerHTML = 'Click all boxes');
    } else {
    const resetText = "<h3>Click to change the color</h3>";
    boxes.colorClick.style.backgroundColor = 'white';
    boxes.colorClick.innerHTML = resetText;
    boxes.colorClick.clicked = false;
    boxes.colorClick1.style.backgroundColor = 'white';
    boxes.colorClick1.innerHTML = resetText;
    boxes.colorClick1.clicked = false;
    boxes.colorClick2.style.backgroundColor = 'white';
    boxes.colorClick2.innerHTML = resetText;
    boxes.colorClick2.clicked = false;
    boxes.colorClick3.style.backgroundColor = 'white';
    boxes.colorClick3.innerHTML = resetText;
    boxes.colorClick3.clicked = false;
    shuffle(colors);
    startButton.innerHTML = 'Press to restart';
    }
}