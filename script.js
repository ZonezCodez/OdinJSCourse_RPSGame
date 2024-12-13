let players = [];
let playerSign = ['X','O'];
let playerNum = ['1','2'];

function gameCreate(){
    let gameBoard = [{},{},{},
                     {},{},{}, // This is 3 lines to help visualize the game board.
                     {},{},{}];

    function update(){
        // This function will look at the gameboard divs and update the gameboard approprietly
        gameBoard.forEach(ele => {
            
        });
    }

    return {gameBoard};
}

// Function to create players requires a name to be sent then intiate called on it to work
function createPlayer(n){
    // Essentially variable that are private for each player and can only be manipulated by using the functions provided by the object.
    let name = n;
    let sign;
    let player;
    let moves = 0;

    // Functions you can call to assign player a sign/playernumber
    function initiate(){
        if(playerSign.length > 0 && this.sign === undefined){
            sign = playerSign.shift();
            player = playerNum.shift();
            players.push(this);
            console.log(players);
        }else if(playerSign.length === 0){
            console.log('Two Playes Exists Already');
        }
    }
    // Function to update player variables
    function increaseMove(){
        moves++;
    }

    function resetMoves(){
        moves = 0;
    }

    function howManyMoves(){
        return moves;
    }

    function getSign(){
        return sign;
    }

    function getName(){
        return name
    }

    return{initiate,increaseMove,resetMoves,howManyMoves,getSign,getName};
}