let players = [];
let playerSign = ['X','O'];
let playerNum = ['1','2'];

let game = (function gameBoardCreate(){
    let gameBoard = ['','','',
                     '','','',
                     '','',''];
    
    let winner = false;

    function update(gameBoardDom){
        // This function will look at the gameboard divs and update the gameboard approprietly
        gameBoard.forEach(ele => {
            
        });
    }
    // returns true if is a win or 'Tie Game' if is a tie or 'No Tie' if it isnt a win or a tie.
    function checkWin(){
        // This function will be called after every move to see if their is any winners or a tie
        players.forEach(player => {
            if(gameBoard[0] === player.getSign() && 
            gameBoard[1] === player.getSign() && 
            gameBoard[2] === player.getSign()){
                console.log(`${player.getName()} wins with the sign ${player.getSign()}!`);
                winner = true;
            }else if(gameBoard[0] === player.getSign() && 
            gameBoard[3] === player.getSign() && 
            gameBoard[6] === player.getSign()){
                console.log(`${player.getName()} wins with the sign ${player.getSign()}!`);
                winner = true;
            }else if(gameBoard[0] === player.getSign() && 
            gameBoard[4] === player.getSign() && 
            gameBoard[8] === player.getSign()){
                console.log(`${player.getName()} wins with the sign ${player.getSign()}!`);
                winner = true;
            }else if(gameBoard[1] === player.getSign() && 
            gameBoard[4] === player.getSign() && 
            gameBoard[7] === player.getSign()){
                console.log(`${player.getName()} wins with the sign ${player.getSign()}!`);
                winner = true;
            }else if(gameBoard[2] === player.getSign() && 
            gameBoard[5] === player.getSign() && 
            gameBoard[8] === player.getSign()){
                console.log(`${player.getName()} wins with the sign ${player.getSign()}!`);
                winner = true;
            }else if(gameBoard[2] === player.getSign() && 
            gameBoard[4] === player.getSign() && 
            gameBoard[6] === player.getSign()){
                console.log(`${player.getName()} wins with the sign ${player.getSign()}!`);
                winner = true;
            }else if(gameBoard[3] === player.getSign() && 
            gameBoard[4] === player.getSign() && 
            gameBoard[5] === player.getSign()){
                console.log(`${player.getName()} wins with the sign ${player.getSign()}!`);
                winner = true;
            }else if(gameBoard[6] === player.getSign() && 
            gameBoard[7] === player.getSign() && 
            gameBoard[8] === player.getSign()){
                console.log(`${player.getName()} wins with the sign ${player.getSign()}!`);
                winner = true;
            };
        });        
        if(winner === false){
            return checkTie();
        }else if(winner === true){
            return true;
        }
    }

    function checkTie(){
        // Check if any cell is empty
        for(let tile = 0; tile < 9;tile++){
            if(gameBoard[tile] === ''){
                return 'No Tie';
            };
        };
        return 'Tie Game';
    };

    return {checkWin,checkTie,update};
})();

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
function playGame(){

}

// This function grabs the innerboard turns it into an array of each text value in order to replace our original gameboard
let UI = (function ui(){
    let uiboard;
    let inZero = document.getElementById('zero');
    let inOne = document.getElementById('one');
    let inTwo = document.getElementById('two');
    let inThree = document.getElementById('three');
    let inFour = document.getElementById('four');
    let inFive = document.getElementById('five');
    let inSix = document.getElementById('six');
    let inSeven = document.getElementById('seven');
    let inEight = document.getElementById('eight');

    //This function will update the uiboard after making it a fresh array it returns that array
    function boardFetch(){
        uiboard = [];
        uiboard.push(inZero.textContent);
        uiboard.push(inOne.textContent);

        return uiboard;
    }

    return{boardFetch};
})();

let player1 = createPlayer('Mason','O');
let player2 = createPlayer('Computer');
player1.initiate();
player2.initiate();
console.log(game.checkWin())
UI.boardFetch();
