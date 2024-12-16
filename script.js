let players = [];
let playerSign = ['X','O'];
let playerNum = ['1','2'];
let player1 = players[0];
let player2 = players[1];

let game = (function gameBoardCreate(){
    let gameBoard = ['','','',
                     '','','',
                     '','',''];
    let turnCount = 0;
    let winner = false;
    let currWinner;
    // Updates the gameboard variable it receives the new gameboard array as its value.
    function update(arr){
        // This function will look at the gameboard divs and update the gameboard approprietly
        gameBoard = arr;
    }
    // This fucntion will end the game it will reset the variables inside game as well as the player variables
    function endGame(W){
        let enddiv = document.getElementById('winnerinfo');
        enddiv.textContent = `${W.getName()} wins with the sign ${W.getSign()}!`
        setTimeout(()=> {
            //Will do this stuff after 2000 milliseconds
            resetGame();
            UI.resetUI();
        },2000);
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
                currWinner = player;
            }else if(gameBoard[0] === player.getSign() && 
            gameBoard[3] === player.getSign() && 
            gameBoard[6] === player.getSign()){
                console.log(`${player.getName()} wins with the sign ${player.getSign()}!`);
                winner = true;
                currWinner = player;
            }else if(gameBoard[0] === player.getSign() && 
            gameBoard[4] === player.getSign() && 
            gameBoard[8] === player.getSign()){
                console.log(`${player.getName()} wins with the sign ${player.getSign()}!`);
                winner = true;
                currWinner = player;
            }else if(gameBoard[1] === player.getSign() && 
            gameBoard[4] === player.getSign() && 
            gameBoard[7] === player.getSign()){
                console.log(`${player.getName()} wins with the sign ${player.getSign()}!`);
                winner = true;
                currWinner = player;
            }else if(gameBoard[2] === player.getSign() && 
            gameBoard[5] === player.getSign() && 
            gameBoard[8] === player.getSign()){
                console.log(`${player.getName()} wins with the sign ${player.getSign()}!`);
                winner = true;
                currWinner = player;
            }else if(gameBoard[2] === player.getSign() && 
            gameBoard[4] === player.getSign() && 
            gameBoard[6] === player.getSign()){
                console.log(`${player.getName()} wins with the sign ${player.getSign()}!`);
                winner = true;
                currWinner = player;
            }else if(gameBoard[3] === player.getSign() && 
            gameBoard[4] === player.getSign() && 
            gameBoard[5] === player.getSign()){
                console.log(`${player.getName()} wins with the sign ${player.getSign()}!`);
                winner = true;
                currWinner = player;
            }else if(gameBoard[6] === player.getSign() && 
            gameBoard[7] === player.getSign() && 
            gameBoard[8] === player.getSign()){
                console.log(`${player.getName()} wins with the sign ${player.getSign()}!`);
                winner = true;
                currWinner = player;
            };
        });        
        if(winner === false){
            return checkTie();
        }else if(winner === true){
            return {winner,currWinner};
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
    // This function increases the turn value by one
    function increaseTurns(){
        turnCount++;
    }
    // This function will reset the game values
    function resetGame(){
        gameBoard = ['','','',
                     '','','',
                     '','',''];
        turnCount = 0;
        winner = false;
        currWinner = '';
        // Everything below is resetting the player variables so you can setup a new game with new players if you want.
        players = [];
        playerSign = ['X','O'];
        playerNum = ['1','2'];
        player1 = players[0];
        player2 = players[1];
        return ;
    }

    function getTurnCount(){
        return turnCount;
    }

    function checkBoard(){
        return gameBoard;
    }

    return {endGame,checkWin,checkTie,update,increaseTurns,resetGame,getTurnCount,checkBoard};
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
                //console.log(players);
            }else if(playerSign.length === 0){
                console.log('Two Playes Exists Already');
            }
        }else if(s === 'O'){
            if(playerSign.length > 0 && sign === undefined){
                sign = playerSign.pop();
                player = playerNum.pop();
                players.push(this);
                //console.log(players);
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

// This function grabs the innerboard turns it into an array of each text value in order to replace our original gameboard
function ui(){
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
        uiboard.push(inTwo.textContent);
        uiboard.push(inThree.textContent);
        uiboard.push(inFour.textContent);
        uiboard.push(inFive.textContent);
        uiboard.push(inSix.textContent);
        uiboard.push(inSeven.textContent);
        uiboard.push(inEight.textContent);

        return uiboard;
    }
    // This function will add all the event listeners to the ui to allow for ui updates when you click and then game updates
    function addListeners(){
        inZero.addEventListener('click',(e)=>{
            game.increaseTurns();
            updateUi(e);
            game.update(boardFetch());
            console.log('Clicked box 0');
            console.log(game.checkWin()); 
            // Check if game.checkWin().winner returns a specific value and do stuff depending on returned value
            if(game.checkWin().winner){
                let winner = game.checkWin().currWinner;
                game.endGame(winner);
            }  
        });

        inOne.addEventListener('click',(e)=>{
            game.increaseTurns();
            updateUi(e);
            game.update(boardFetch());
            console.log('Clicked box 1');
            console.log(game.checkWin());
            // Check if game.checkWin().winner returns a specific value and do stuff depending on returned value
            if(game.checkWin().winner){
                let winner = game.checkWin().currWinner;
                game.endGame(winner);
            }   
        });

        inTwo.addEventListener('click',(e)=>{
            game.increaseTurns();
            updateUi(e);
            game.update(boardFetch());
            console.log('Clicked box 2');
            console.log(game.checkWin());  
            // Check if game.checkWin().winner returns a specific value and do stuff depending on returned value
            if(game.checkWin().winner){
                let winner = game.checkWin().currWinner;
                game.endGame(winner);
            } 
        });

        inThree.addEventListener('click',(e)=>{
            game.increaseTurns();
            updateUi(e);
            game.update(boardFetch());
            console.log('Clicked box 3');
            console.log(game.checkWin()); 
            // Check if game.checkWin().winner returns a specific value and do stuff depending on returned value
            if(game.checkWin().winner){
                let winner = game.checkWin().currWinner;
                game.endGame(winner);
            }  
        });

        inFour.addEventListener('click',(e)=>{
            game.increaseTurns();
            updateUi(e);
            game.update(boardFetch());
            console.log('Clicked box 4');
            console.log(game.checkWin());   
            // Check if game.checkWin().winner returns a specific value and do stuff depending on returned value
            if(game.checkWin().winner){
                let winner = game.checkWin().currWinner;
                game.endGame(winner);
            }
        });

        inFive.addEventListener('click',(e)=>{
            game.increaseTurns();
            updateUi(e);
            game.update(boardFetch());
            console.log('Clicked box 5');     
            console.log(game.checkWin());
            // Check if game.checkWin().winner returns a specific value and do stuff depending on returned value
            if(game.checkWin().winner){
                let winner = game.checkWin().currWinner;
                game.endGame(winner);
            }   
        });

        inSix.addEventListener('click',(e)=>{
            game.increaseTurns();
            updateUi(e);
            game.update(boardFetch());
            console.log('Clicked box 6');
            console.log(game.checkWin());   
            // Check if game.checkWin().winner returns a specific value and do stuff depending on returned value
            if(game.checkWin().winner){
                let winner = game.checkWin().currWinner;
                game.endGame(winner);
            }
        });

        inSeven.addEventListener('click',(e)=>{
            game.increaseTurns();
            updateUi(e);
            game.update(boardFetch());
            console.log('Clicked box 7');
            console.log(game.checkWin()); 
            // Check if game.checkWin().winner returns a specific value and do stuff depending on returned value
            if(game.checkWin().winner){
                let winner = game.checkWin().currWinner;
                game.endGame(winner);
            }  
        });

        inEight.addEventListener('click',(e)=>{
            game.increaseTurns();
            updateUi(e);
            game.update(boardFetch());
            console.log('Clicked box 8');
            console.log(game.checkWin()); 
            // Check if game.checkWin().winner returns a specific value and do stuff depending on returned value
            if(game.checkWin().winner){
                let winner = game.checkWin().currWinner;
                game.endGame(winner);
            }
        });
    }

    // This function will update the ui with whatever sign the player has
    function updateUi(event){
        if(game.getTurnCount() === 1 || game.getTurnCount() === 3 || game.getTurnCount() === 5 || game.getTurnCount() === 7 || game.getTurnCount() === 9){
            if(event.target.textContent === ''){
                let currS = 'X'
                event.target.textContent = currS;
                return;
            }else{
                return;
            }
        }else if(game.getTurnCount() === 2 || game.getTurnCount() === 4 || game.getTurnCount() === 6 || game.getTurnCount() === 8 || game.getTurnCount() === 10){
            if(event.target.textContent === ''){
                let currS = 'O'
                event.target.textContent = currS;
                return;
            }else{
                return;
            }
        }else{
            return;
        }
    }
    // This function will handle resetting the ui
    function resetUI(){
        // Resets the gameBoard of X and O and then will delay 1000 milliseconds and swap the gameboard out for the forms to make new characters.
        inZero.textContent = '';
        inOne.textContent = '';
        inTwo.textContent = '';
        inThree.textContent = '';
        inFour.textContent = '';
        inFive.textContent = '';
        inSix.textContent = '';
        inSeven.textContent = '';
        inEight.textContent = '';
    }

    return{boardFetch,addListeners,resetUI};
};

let mason = createPlayer('Mason');
mason.initiate();
let computer = createPlayer('Computer');
computer.initiate();
let UI = ui();
UI.addListeners();