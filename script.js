// var piecesToCheck = [columns[x].children[y + 1], columns[x].children[y + 2], columns[x][y + 3]];
// var allAlike = piecesToCheck.every(function(piece)) {
//     return piece === cell;

// }
var columns = document.querySelectorAll('.column');
var currentPlayer = "red";

// Need alternating colored discs on click

handleClick = function (event) {



    let column = event.currentTarget;
    if (column.childElementCount === 6) {
        return;
    }


    let button = document.createElement('div');
    button.classList.add('circle', currentPlayer);
    
    column.appendChild(button);
    // button.id = 'row' + (column.childElementCount - 1) + '-' + currentPlayer;
    button.id = `row${column.childElementCount - 1}-${currentPlayer}`; // template string, and string interpolation

    if (currentPlayer === 'red') {
        currentPlayer = 'black'
    } else if (currentPlayer === 'black') {
        currentPlayer = 'red'
    }

    checkRules();

}

for (let i = 0; i < columns.length; i++) {
    columns[i].addEventListener('click', handleClick)
}



// Need event listener to add 1 to the 6th y axis and then iterate
// up the y axis by 1 each time the column is clicked.

// Need to edit or possibly redo win conditions.  Need to add win conditions for second player.
// current win conditions will only work for one player
// Need alerts added to win conditions.

function findWinner(cell, yList, xList) {
    var piecesToCheck = [
        columns[yList[0]] ? (columns[yList[0]].children[xList[0]] || null) : null,
        columns[yList[1]] ? (columns[yList[1]].children[xList[1]] || null) : null,
        columns[yList[2]] ? (columns[yList[2]].children[xList[2]] || null) : null
    ];
    // console.log(piecesToCheck)
    
    const allAlike = piecesToCheck.every(function (nextCell) {
        if (nextCell) {
            // deconstructing the ID to get the player ('red' or 'black')
            const thisCellPlayer = cell.id.split('-')[1];
            const nextCellPlayer = nextCell.id.split('-')[1];
            return nextCellPlayer == thisCellPlayer;
        }
    })
    
    if (allAlike) {
        const winningPlayer = cell.id.split('-')[1];
        return winningPlayer;
    } else {
        return false;
    }
}

function checkRules() {



    // check horizontal win
    for (let y = 0; y < columns.length; y++) {

        for (let x = 0; x < columns[y].children.length; x++) {
            let cell = columns[y].children[x];

            const winner = findWinner(cell, [x, x, x], [y + 1, y + 2, y + 3])

            if (winner) {
                alert(winner + ' wins vertically')
            }

        }
    }


    diagonalUp:
        for (let y = 0; y < columns.length; y++) {

            for (let x = 0; x < columns[y].children.length; x++) {
                let cell = columns[y].children[x];

                const winner = findWinner(cell, [y + 1, y + 2, y + 3], [x, x, x]);

                if (winner) {
                    alert(winner + ' wins horizontally')
                }
            }
        }


    for (let y = 0; y < columns.length; y++) {

        for (let x = 0; x < columns[y].children.length; x++) {
            let cell = columns[y].children[x];

            const winner = findWinner(cell, [y + 1, y + 2, y + 3], [x + 1, x + 2, x + 3])

            if (winner) {
                alert(winner + ' wins by diagonal right')
            }

        }


    }


    for (let y = 2; y < columns.length; y++) {

        for (let x = 0; x < columns[y].children.length; x++) {
            let cell = columns[y].children[x];

            const winner = findWinner(cell, [y - 1, y - 2, y - 3], [x + 1, x + 2, x + 3]);

            if (winner) {
                alert(winner + ' wins by diagonal left')
            }

        }
    }
}