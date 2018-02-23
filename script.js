var red = document.getElementById('redCircle');
var black = document.getElementById('blackCircle')

// Need to add functionality for 2nd player.

let board = [
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0]
]

var columns = document.querySelectorAll('.column');

// Need alternating colored discs on click

handleClick = function(event) {
    let column = event.target.id
    console.log('handleClick');
    // columns.textContent = red;
    // columns.appendChild(columns);
    for(let y = board.length-1; y === 0; y--) {
       


    }

}
for(var i = 0; i < columns.length; i++) {
    columns[i].addEventListener('click', handleClick)
    
}

const edgeX = board[0].length - 2;
const edgeY = board.length - 2;

// Need event listener to add 1 to the 6th y axis and then iterate
// up the y axis by 1 each time the column is clicked.

// Need to edit or possibly redo win conditions.  Need to add win conditions for second player.
// current win conditions will only work for one player
// Need alerts added to win conditions.

for(let y = 0; y < board.length; y++) {

    for(let x = 0; x < edgeX; x++) {
        let cell = board[y][x];

        if(cell != 0) {
            
            if(cell === board[y][x+1] && cell === board[y][x+2] && cell === board[y][x+3]) {
                alert('Player Wins')
            }
        }
    }
}

for(let y = 0; y < edgeY; y++) {

    for(let x = 0; x < board[0].length; x++) {
        cell = board[y][x];

        if(cell != 0) {

            if(cell === board[y+1][x] && cell === board[y+2][x] && cell === board[y+3][x]){
                alert('Player Wins')
            }
        }
    }
}

for(let y = 0; y < edgeY; y++){

    for(let x = 0; x < edgeX; x++) {
        cell = board[y][x];

        if(cell != 0) {

            if(cell === board[y+1][x+1] && cell === board[y+2][x+2] && cell === board[y+3][x+3]) {
                alert('Player Wins')

            }
        }

    }
}

for(let y = 2; y < board.length; y++) {

    for(let x = 0; x < edgeX; x++) {
        cell = board[y][x];

        if(cell != 0) {

            if(cell === board[y-1][x+1] && cell === board[y-2][x+2] && cell === board[y-3][x+3]) {
                alert('Player Wins')
            }
        }
    }
}