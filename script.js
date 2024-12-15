let players = [];
let playerSign = ['X','O'];
let playerNum = ['1','2'];

function gameBoardCreate(){
    let gameBoard = [[],[],[],
                     [],[],[],
                     [],[],[]];

    function update(gameBoardDom){
        // This function will look at the gameboard divs and update the gameboard approprietly
        gameBoard.forEach(ele => {
            
        });
    }

    function checkWin(boardObj){
        // This function will be called after every move to see if their is any winners or a tie
        players.forEach(player => {
            if(gameBoard[0] === player.getSign() && 
            gameBoard[1] === player.getSign() && 
            gameBoard[2] === player.getSign()){
                console.log(player.getName(),player.getSign());
            }else if(gameBoard[0] === player.getSign() && 
            gameBoard[3] === player.getSign() && 
            gameBoard[6] === player.getSign()){
                console.log(player.getName(),player.getSign());
            }else if(gameBoard[0] === player.getSign() && 
            gameBoard[4] === player.getSign() && 
            gameBoard[8] === player.getSign()){
                console.log(player.getName(),player.getSign());
            }else if(gameBoard[1] === player.getSign() && 
            gameBoard[4] === player.getSign() && 
            gameBoard[7] === player.getSign()){
                console.log(player.getName(),player.getSign());
            }else if(gameBoard[2] === player.getSign() && 
            gameBoard[5] === player.getSign() && 
            gameBoard[8] === player.getSign()){
                console.log(player.getName(),player.getSign());
            }else if(gameBoard[2] === player.getSign() && 
            gameBoard[4] === player.getSign() && 
            gameBoard[6] === player.getSign()){
                console.log(player.getName(),player.getSign());
            }else if(gameBoard[3] === player.getSign() && 
            gameBoard[4] === player.getSign() && 
            gameBoard[5] === player.getSign()){
                console.log(player.getName(),player.getSign());
            }else if(gameBoard[6] === player.getSign() && 
            gameBoard[7] === player.getSign() && 
            gameBoard[8] === player.getSign()){
                console.log(player.getName(),player.getSign());
            };
        });        
    }

    return {gameBoard};
}

// Function to create players requires a name to be sent then intiate called on it to work
function createPlayer(n,s){
    // Essentially variable that are private for each player and can only be manipulated by using the functions provided by the object.
    let name = n;
    let sign;
    let player;
    let moves = 0;

    // Functions you can call to assign player a sign/playernumber
    function initiate(){
        if(s === 'X'){
            if(playerSign.length > 0 && sign === undefined){
                sign = playerSign.shift();
                player = playerNum.shift();
                players.push(this);
                console.log(players);
            }else if(playerSign.length === 0){
                console.log('Two Playes Exists Already');
            }
        }else if(s === 'O'){
            if(playerSign.length > 0 && sign === undefined){
                sign = playerSign.pop();
                player = playerNum.pop();
                players.push(this);
                console.log(players);
            }else if(playerSign.length === 0){
                console.log('Two Playes Exists Already');
            }
        }else if(s === undefined){
            if(playerSign.length > 0 && sign === undefined){
                sign = playerSign.shift();
                player = playerNum.shift();
                players.push(this);
                console.log(players);
            }else if(playerSign.length === 0){
                console.log('Two Playes Exists Already');
            }
        }else{
            return 'Please enter X or O!'
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

// Function that handles game logic
function playGame(parray,currBoard){

}