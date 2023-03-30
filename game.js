let gameBoard = document.querySelector("#gameBoard")
let whiteCaptured = document.querySelector("#whiteCaptured")//area for white captured pieces, need to refer to this to append the piece icons to it when they get captured
let blackCaptured = document.querySelector("#blackCaptured")//area for black captured pieces






function resetCurrentPiece () {
    currentSelectedPiece = {piece:null, pieceObject:null, validMovesArray:[]}
}


function squareIdMap (id) {
    let row = 9 - id[0]
    let columnTransform = ["A","B","C","D","E","F","G","H"]
    let column = columnTransform[id[1]-1]
    return column + row
}


//finds the numerical coordinates, given a square name e.g. D6 is 4,6
function squareNameToCoords (squareName) {
    let y = parseInt(squareName.substring(1,2))
    let xLetter = squareName.substring(0,1)
    let columnTransform = ["A","B","C","D","E","F","G","H"]
    let x = columnTransform.indexOf(xLetter) + 1
    return [x,y]
}
//console.log(squareNameToCoords ("A2"))


//finds the square name, given the numerical coordinates e.g. [4,6] is D6
function squareCoordsToName (squareCoords) {
    let row = squareCoords[1]
    let columnTransform = ["A","B","C","D","E","F","G","H"]
    let column = columnTransform[squareCoords[0]-1]
    let returnValue
    if ( squareCoords[0] >= 1 && squareCoords[0] <= 8 && squareCoords[1] >= 1 && squareCoords[1] <= 8 ) {
        returnValue = column + row
    } else {
        returnValue = "invalid"
    }
    return returnValue
}


//recolors the board , which is necessary every move, 
//because to make a move you click a piece and the valid moves 
//for that piece change the colors of the squares it can move to, 
//need to change it back after the move is complete
function recolorBoard() {
    for (let i=1; i<=8; i++) {
        for (let j=1; j<=8; j++) {
            let square = document.querySelector(`#${squareIdMap([i,j])}`)
            if (i%2 === 0 && j%2 === 0) {
                square.style.backgroundColor = "white"
            } else if (i%2 != 0 && j%2 === 0) {
                square.style.backgroundColor = "#00000050"
            } else if (i%2 === 0 && j%2 != 0) {
                square.style.backgroundColor = "#00000050"
            } else if (i%2 != 0 && j%2 != 0){
                square.style.backgroundColor = "white"
            }
        }
    }
}










//The squares object, which gets declared once the code actually starts, 
//is an 8 element array of 8 element arrays. Each element of the array is an object 
//which represents the square in question. It stores data like what piece is 
//occupiying the square and what color, or whether it is occupied at all. 
//This is necessary for searching for valid moves, 
//because a piece can't go past another except knights which ignore this
//This function only needs to run once, but you could run it more often. 
//Originally I thought about having it run every single move in order to 
//remap the squares object to which pieces were there, 
//but I opted to handle the modification of the squares object in the movePiece function, 
//rather than moving and then remapping. If this were to be done more theoretically, 
//i.e. you keep the game data in the computer ether in some type of structured way, 
//then you wanted to simply have it render every time someone made a move, 
//this might be a function you add a lot to and have it re-render every move, but that was not how I set it up.
//you could also run this more often in order to change the pieceOccupyingSquare, 
//because that actually doesn't get changed later in the code, 
//because there is no need to do so that I have found just yet. 
//Would be cleaner to adjust that, though I found it unnecessary at this point
function mapPiecesToSquaresObject() {
    allPieces.white.forEach((piece) => {
        squaresObject[piece.currentCoord[0]-1][piece.currentCoord[1]-1].occupied = 'white'
        squaresObject[piece.currentCoord[0]-1][piece.currentCoord[1]-1].pieceOccupyingSquare = piece.pieceId
    })
    allPieces.black.forEach((piece) => {
        squaresObject[piece.currentCoord[0]-1][piece.currentCoord[1]-1].occupied = 'black'
        squaresObject[piece.currentCoord[0]-1][piece.currentCoord[1]-1].pieceOccupyingSquare = piece.pieceId
    })
    //console.log(squaresObject)
}



//resets the board, currently doesn't have the recolorBoard() function 
//called inside of it, but I might need to put it inside there at some point
function resetBoard (gameData) {
    function resetPieceArrays() {
        gameData.boardPosition.white = [
            {
                icon: "./assets/whitePawn.png",
                initialSpot:"A2",
                pieceType: "pawn",
                pieceId: "queensRookPawnWhite"
            },
            {
                icon: "./assets/whitePawn.png",
                initialSpot:"B2",
                pieceType: "pawn",
                pieceId: "queensKnightPawnWhite"
            },
            {
                icon: "./assets/whitePawn.png",
                initialSpot:"C2",
                pieceType: "pawn",
                pieceId: "queensBishopPawnWhite"
            },
            {
                icon: "./assets/whitePawn.png",
                initialSpot:"D2",
                pieceType: "pawn",
                pieceId: "queensPawnWhite"
            },
            {
                icon: "./assets/whitePawn.png",
                initialSpot:"E2",
                pieceType: "pawn",
                pieceId: "kingsPawnWhite"
            },
            {
                icon: "./assets/whitePawn.png",
                initialSpot:"F2",
                pieceType: "pawn",
                pieceId: "kingsBishopPawnWhite"
            },
            {
                icon: "./assets/whitePawn.png",
                initialSpot:"G2",
                pieceType: "pawn",
                pieceId: "kingsKnightPawnWhite"
            },
            {
                icon: "./assets/whitePawn.png",
                initialSpot:"H2",
                pieceType: "pawn",
                pieceId: "kingsRookPawnWhite"
            },
            {
                icon: "./assets/whiteRook.png",
                initialSpot:"A1",
                pieceType: "rook",
                pieceId: "queensRookWhite"
            }
            ,
            {
                icon: "./assets/whiteKnight.png",
                initialSpot:"B1",
                pieceType: "knight",
                pieceId: "queensKnightWhite"
            }
            ,
            {
                icon: "./assets/whiteBishop.png",
                initialSpot:"C1",
                pieceType: "bishop",
                pieceId: "queensBishopWhite"
            }
            ,
            {
                icon: "./assets/whiteQueen.png",
                initialSpot:"D1",
                pieceType: "queen",
                pieceId: "queenWhite"
            }
            ,
            {
                icon: "./assets/whiteKing.png",
                initialSpot:"E1",
                pieceType: "king",
                pieceId: "kingWhite"
            }
            ,
            {
                icon: "./assets/whiteBishop.png",
                initialSpot:"F1",
                pieceType: "bishop",
                pieceId: "kingsBishopWhite"
            }
            ,
            {
                icon: "./assets/whiteKnight.png",
                initialSpot:"G1",
                pieceType: "knight",
                pieceId: "kingsKnightWhite"
            }
            ,
            {
                icon: "./assets/whiteRook.png",
                initialSpot:"H1",
                pieceType: "rook",
                pieceId: "kingsRookWhite"
            }
        ]
        gameData.boardPosition.black = [
            {
                icon: "./assets/blackPawn.png",
                initialSpot:"A7",
                pieceType: "pawn",
                pieceId: "queensRookPawnBlack"
            },
            {
                icon: "./assets/blackPawn.png",
                initialSpot:"B7",
                pieceType: "pawn",
                pieceId: "queensKnightPawnBlack"
            },
            {
                icon: "./assets/blackPawn.png",
                initialSpot:"C7",
                pieceType: "pawn",
                pieceId: "queensBishopPawnBlack"
            },
            {
                icon: "./assets/blackPawn.png",
                initialSpot:"D7",
                pieceType: "pawn",
                pieceId: "queensPawnBlack"
            },
            {
                icon: "./assets/blackPawn.png",
                initialSpot:"E7",
                pieceType: "pawn",
                pieceId: "kingsPawnBlack"
            },
            {
                icon: "./assets/blackPawn.png",
                initialSpot:"F7",
                pieceType: "pawn",
                pieceId: "kingsBishopPawnBlack"
            },
            {
                icon: "./assets/blackPawn.png",
                initialSpot:"G7",
                pieceType: "pawn",
                pieceId: "kingsKnightPawnBlack"
            },
            {
                icon: "./assets/blackPawn.png",
                initialSpot:"H7",
                pieceType: "pawn",
                pieceId: "kingsRookPawnBlack"
            },
            {
                icon: "./assets/blackRook.png",
                initialSpot:"A8",
                pieceType: "rook",
                pieceId: "queensRookBlack"
            }
            ,
            {
                icon: "./assets/blackKnight.png",
                initialSpot:"B8",
                pieceType: "knight",
                pieceId: "queensKnightBlack"
            }
            ,
            {
                icon: "./assets/blackBishop.png",
                initialSpot:"C8",
                pieceType: "bishop",
                pieceId: "queensBishopBlack"
            }
            ,
            {
                icon: "./assets/blackQueen.png",
                initialSpot:"D8",
                pieceType: "queen",
                pieceId: "queenBlack"
            }
            ,
            {
                icon: "./assets/blackKing.png",
                initialSpot:"E8",
                pieceType: "king",
                pieceId: "kingBlack"
            }
            ,
            {
                icon: "./assets/blackBishop.png",
                initialSpot:"F8",
                pieceType: "bishop",
                pieceId: "kingsBishopBlack"
            }
            ,
            {
                icon: "./assets/blackKnight.png",
                initialSpot:"G8",
                pieceType: "knight",
                pieceId: "kingsKnightBlack"
            }
            ,
            {
                icon: "./assets/blackRook.png",
                initialSpot:"H8",
                pieceType: "rook",
                pieceId: "kingsRookBlack"
            }
        ]
    }

    function resetPieces (piece) {
        let pieceObject = document.querySelector(`#${piece.pieceId}`)
        if (pieceObject === null) {
            pieceObject = document.createElement("img")
            pieceObject.src = piece.icon
            pieceObject.style.height = "5.625vw"
            pieceObject.style.width = "5.625vw"
            pieceObject.id = `${piece.pieceId}`
        }
        let location = document.querySelector(`#${piece.initialSpot}`)
        location.append(pieceObject)
        piece.currentSpot = piece.initialSpot
        piece.moveCount = 0
        piece.currentCoord = squareNameToCoords(piece.currentSpot)
        piece.captured = false
    }

    resetPieceArrays()
    gameData.boardPosition.white.forEach((piece) => {
        resetPieces(piece)
        piece.color = "white"
        })
    gameData.boardPosition.black.forEach((piece) => {
        resetPieces(piece)
        piece.color = "black"
        })
    for (let column=1; column<=8; column++) {
        squaresObject.push([])
        for (let row=1; row<=8; row++) {
            /*squaresObject[column-1].push([])
            squaresObject[column-1][row-1].push(
                {
                    squareName: squareCoordsToName([column,row]),
                    squareCoords: [column,row],
                    occupied: "unoccupied"
                })*/
            squaresObject[column-1].push({
                squareName: squareCoordsToName([column,row]),
                squareCoords: [column,row],
                occupied: "unoccupied"
            })
        }
    }
    mapPiecesToSquaresObject()
    recolorBoard()
    //adds the event listeners to the pieces which is all that is now required to make the game go
    populateValidMoves(gameData)
}

//some moves would normally be legal, but are not because they open your king up for check. 
//This function takes a game state (either the current game state or a new game state after a move is made), 
//and checks whether check is present. This is needed when validating potential moves, 
//because you cannot move a piece if it will cause your king to be in check, 
//so otherwise legal moves need to be removed from the validMovesArray
//and it is also important for the victory condition, because not only do you need to have no valid moves, 
//you need to also be in check to be in checkmate
function checkForCheck(gameState){
    let currentTurn = gameState.turn
    let check = false
    if (currentTurn === "white") {
        let kingSquare = gameState.boardPosition.white.find((piece) => piece.pieceId === 'kingWhite').currentSpot
        gameState.boardPosition.black.forEach((piece) => {
            //console.log(checkValidMovesForCheck(piece))
            let validMovesArray = checkMovesAnyPiece(piece, gameState)
            if(validMovesArray.indexOf(kingSquare) != -1) {
                check = true
            }
        })
    }
    else if (currentTurn === "black") {
        let kingSquare = gameState.boardPosition.black.find((piece) => piece.pieceId === 'kingBlack').currentSpot
        gameState.boardPosition.white.forEach((piece) => {
            //console.log(checkValidMovesForCheck(piece))
            let validMovesArray = checkMovesAnyPiece(piece, gameState)
            if(validMovesArray.indexOf(kingSquare) != -1) {
                check = true
            }
        })
    }
return check  
}




//this function just checks the valid moves for a piece with respect to the mvoes allowed by that piece type only, 
//not whether it is a legal move for sure, i.e. it doesn't check whether it opens the player moving up for check
function checkMovesAnyPiece(piece, gameState = gameData, checkingCastle = false) {
    let validMovesArray = []
    let newCoords = []
    let collision = false
    //let newGameState = gameData
    if(piece.captured === false) {
        switch(piece.pieceType) {
            case ("pawn"):
                //capturing
                if (piece.color === "white") {
                    newCoords = [piece.currentCoord[0] - 1, piece.currentCoord[1] + 1]
                    if (newCoords[0] >= 1 && newCoords[0] <=8 && newCoords[1] >= 1 && newCoords[1] <=8 &&
                        gameState.squaresObject[newCoords[0]-1][newCoords[1]-1].occupied === "black") {
                        validMovesArray.push(squareCoordsToName(newCoords))
                    }
                    newCoords = [piece.currentCoord[0] + 1, piece.currentCoord[1] + 1]
                    if (newCoords[0] >= 1 && newCoords[0] <=8 && newCoords[1] >= 1 && newCoords[1] <=8 &&
                        gameState.squaresObject[newCoords[0]-1][newCoords[1]-1].occupied === "black") {
                        validMovesArray.push(squareCoordsToName(newCoords))
                    }
                }
                if (piece.color === "black") {
                    newCoords = [piece.currentCoord[0] - 1, piece.currentCoord[1] - 1]
                    if (newCoords[0] >= 1 && newCoords[0] <=8 && newCoords[1] >= 1 && newCoords[1] <=8 &&
                        gameState.squaresObject[newCoords[0]-1][newCoords[1]-1].occupied === "white") {
                        validMovesArray.push(squareCoordsToName(newCoords))
                    }
                    newCoords = [piece.currentCoord[0] + 1, piece.currentCoord[1] - 1]
                    if (newCoords[0] >= 1 && newCoords[0] <=8 && newCoords[1] >= 1 && newCoords[1] <=8 &&
                        gameState.squaresObject[newCoords[0]-1][newCoords[1]-1].occupied === "white") {
                        validMovesArray.push(squareCoordsToName(newCoords))
                    }
                }
                //first move option to move one or two
                if (piece.moveCount === 0) {
                    collision = false
                    for(let squaresMoved = 1; squaresMoved <= 2; squaresMoved++) {
                        newCoords = []
                        if (piece.color === "white") {
                            newCoords = [piece.currentCoord[0], piece.currentCoord[1] + squaresMoved]
                        } else if (piece.color === "black") {
                            newCoords = [piece.currentCoord[0], piece.currentCoord[1] - squaresMoved]
                        }
                        if (newCoords[0] >= 1 && newCoords[0] <=8 && newCoords[1] >= 1 && newCoords[1] <=8 && collision === false &&
                            gameState.squaresObject[newCoords[0]-1][newCoords[1]-1].occupied === "unoccupied") {
                            validMovesArray.push(squareCoordsToName(newCoords))
                        }
                        if(gameState.squaresObject[newCoords[0]-1][newCoords[1]-1].occupied != "unoccupied"){
                            collision = true
                        }
                    }
                }
                //subsequent moves only 1 forward
                if (piece.moveCount != 0) {
                    if (piece.color === "white") {
                        newCoords = [piece.currentCoord[0], piece.currentCoord[1] + 1]
                    } else if (piece.color === "black") {
                        newCoords = [piece.currentCoord[0], piece.currentCoord[1] - 1]
                    }
                    if (newCoords[0] >= 1 && newCoords[0] <=8 && newCoords[1] >= 1 && newCoords[1] <=8 &&
                        gameState.squaresObject[newCoords[0]-1][newCoords[1]-1].occupied === "unoccupied") {
                        validMovesArray.push(squareCoordsToName(newCoords))
                    }
                }
            break
            case ("knight"):
                newCoords = [piece.currentCoord[0] + 2, piece.currentCoord[1] + 1]
                if(newCoords[0] >= 1 && newCoords[0] <=8 && newCoords[1] >= 1 && newCoords[1] <=8 &&
                    gameState.squaresObject[newCoords[0]-1][newCoords[1]-1].occupied != piece.color) {
                    validMovesArray.push(squareCoordsToName(newCoords))
                }
                newCoords = [piece.currentCoord[0] + 1, piece.currentCoord[1] + 2]
                if(newCoords[0] >= 1 && newCoords[0] <=8 && newCoords[1] >= 1 && newCoords[1] <=8 &&
                    gameState.squaresObject[newCoords[0]-1][newCoords[1]-1].occupied != piece.color) {
                    validMovesArray.push(squareCoordsToName(newCoords))
                }
                newCoords = [piece.currentCoord[0] + 2, piece.currentCoord[1] - 1]
                if(newCoords[0] >= 1 && newCoords[0] <=8 && newCoords[1] >= 1 && newCoords[1] <=8 &&
                    gameState.squaresObject[newCoords[0]-1][newCoords[1]-1].occupied != piece.color) {
                    validMovesArray.push(squareCoordsToName(newCoords))
                }
                newCoords = [piece.currentCoord[0] + 1, piece.currentCoord[1] - 2]
                if(newCoords[0] >= 1 && newCoords[0] <=8 && newCoords[1] >= 1 && newCoords[1] <=8 &&
                    gameState.squaresObject[newCoords[0]-1][newCoords[1]-1].occupied != piece.color) {
                    validMovesArray.push(squareCoordsToName(newCoords))
                }
                newCoords = [piece.currentCoord[0] - 2, piece.currentCoord[1] + 1]
                if(newCoords[0] >= 1 && newCoords[0] <=8 && newCoords[1] >= 1 && newCoords[1] <=8 &&
                    gameState.squaresObject[newCoords[0]-1][newCoords[1]-1].occupied != piece.color) {
                    validMovesArray.push(squareCoordsToName(newCoords))
                }
                newCoords = [piece.currentCoord[0] - 1, piece.currentCoord[1] + 2]
                if(newCoords[0] >= 1 && newCoords[0] <=8 && newCoords[1] >= 1 && newCoords[1] <=8 &&
                    gameState.squaresObject[newCoords[0]-1][newCoords[1]-1].occupied != piece.color) {
                    validMovesArray.push(squareCoordsToName(newCoords))
                }
                newCoords = [piece.currentCoord[0] - 2, piece.currentCoord[1] - 1]
                if(newCoords[0] >= 1 && newCoords[0] <=8 && newCoords[1] >= 1 && newCoords[1] <=8 &&
                    gameState.squaresObject[newCoords[0]-1][newCoords[1]-1].occupied != piece.color) {
                    validMovesArray.push(squareCoordsToName(newCoords))
                }
                newCoords = [piece.currentCoord[0] - 1, piece.currentCoord[1] - 2]
                if(newCoords[0] >= 1 && newCoords[0] <=8 && newCoords[1] >= 1 && newCoords[1] <=8 &&
                    gameState.squaresObject[newCoords[0]-1][newCoords[1]-1].occupied != piece.color) {
                    validMovesArray.push(squareCoordsToName(newCoords))
                }
            break
            case ("bishop"):
                //Northwest
                collision = false
                for (let squaresMoved=1; squaresMoved<=8; squaresMoved++) {
                    newCoords = [piece.currentCoord[0] - squaresMoved, piece.currentCoord[1] + squaresMoved]
                    if (newCoords[0] >= 1 && newCoords[0] <=8 && newCoords[1] >= 1 && newCoords[1] <=8 && collision === false &&
                        gameState.squaresObject[newCoords[0]-1][newCoords[1]-1].occupied != piece.color) {
                        validMovesArray.push(squareCoordsToName(newCoords))
                    }
                    if (newCoords[0] >= 1 && newCoords[0] <=8 && newCoords[1] >= 1 && newCoords[1] <=8 &&
                        gameState.squaresObject[newCoords[0]-1][newCoords[1]-1].occupied != "unoccupied") {
                        collision = true
                    } 
                }
                //Northeast
                collision = false
                for (let squaresMoved=1; squaresMoved<=8; squaresMoved++) {
                    newCoords = [piece.currentCoord[0] + squaresMoved, piece.currentCoord[1] + squaresMoved]
                    if (newCoords[0] >= 1 && newCoords[0] <=8 && newCoords[1] >= 1 && newCoords[1] <=8 && collision === false &&
                        gameState.squaresObject[newCoords[0]-1][newCoords[1]-1].occupied != piece.color) {
                        validMovesArray.push(squareCoordsToName(newCoords))
                    }
                    if (newCoords[0] >= 1 && newCoords[0] <=8 && newCoords[1] >= 1 && newCoords[1] <=8 &&
                        gameState.squaresObject[newCoords[0]-1][newCoords[1]-1].occupied != "unoccupied") {
                        collision = true
                    }
                }
                //Southeast
                collision = false
                for (let squaresMoved=1; squaresMoved<=8; squaresMoved++) {
                    newCoords = [piece.currentCoord[0] + squaresMoved, piece.currentCoord[1] - squaresMoved]
                    if (newCoords[0] >= 1 && newCoords[0] <=8 && newCoords[1] >= 1 && newCoords[1] <=8 && collision === false &&
                        gameState.squaresObject[newCoords[0]-1][newCoords[1]-1].occupied != piece.color) {
                        validMovesArray.push(squareCoordsToName(newCoords))
                    }
                    if (newCoords[0] >= 1 && newCoords[0] <=8 && newCoords[1] >= 1 && newCoords[1] <=8 &&
                        gameState.squaresObject[newCoords[0]-1][newCoords[1]-1].occupied != "unoccupied") {
                        collision = true
                    }
                }
                //Southwest
                collision = false
                for (let squaresMoved=1; squaresMoved<=8; squaresMoved++) {
                    newCoords = [piece.currentCoord[0] - squaresMoved, piece.currentCoord[1] - squaresMoved]
                    if (newCoords[0] >= 1 && newCoords[0] <=8 && newCoords[1] >= 1 && newCoords[1] <=8 && collision === false &&
                        gameState.squaresObject[newCoords[0]-1][newCoords[1]-1].occupied != piece.color) {
                        validMovesArray.push(squareCoordsToName(newCoords))
                    }
                    if (newCoords[0] >= 1 && newCoords[0] <=8 && newCoords[1] >= 1 && newCoords[1] <=8 &&
                        gameState.squaresObject[newCoords[0]-1][newCoords[1]-1].occupied != "unoccupied") {
                        collision = true
                    }
                }    
            break
            case ("rook"):
                //North
                collision = false
                for (let squaresMoved=1; squaresMoved<=8; squaresMoved++) {
                    newCoords = [piece.currentCoord[0], piece.currentCoord[1] + squaresMoved]
                    if (newCoords[0] >= 1 && newCoords[0] <=8 && newCoords[1] >= 1 && newCoords[1] <=8 && collision === false &&
                        gameState.squaresObject[newCoords[0]-1][newCoords[1]-1].occupied != piece.color) {
                        validMovesArray.push(squareCoordsToName(newCoords))
                    }
                    if (newCoords[0] >= 1 && newCoords[0] <=8 && newCoords[1] >= 1 && newCoords[1] <=8 &&
                        gameState.squaresObject[newCoords[0]-1][newCoords[1]-1].occupied != "unoccupied") {
                        collision = true
                    }
                }
                //South
                collision = false
                for (let squaresMoved=1; squaresMoved<=8; squaresMoved++) {
                    newCoords = [piece.currentCoord[0], piece.currentCoord[1] - squaresMoved]
                    if (newCoords[0] >= 1 && newCoords[0] <=8 && newCoords[1] >= 1 && newCoords[1] <=8 && collision === false &&
                        gameState.squaresObject[newCoords[0]-1][newCoords[1]-1].occupied != piece.color) {
                        validMovesArray.push(squareCoordsToName(newCoords))
                    }
                    if (newCoords[0] >= 1 && newCoords[0] <=8 && newCoords[1] >= 1 && newCoords[1] <=8 &&
                        gameState.squaresObject[newCoords[0]-1][newCoords[1]-1].occupied != "unoccupied") {
                        collision = true
                    }
                }
                //East
                collision = false
                for (let squaresMoved=1; squaresMoved<=8; squaresMoved++) {
                    newCoords = [piece.currentCoord[0] + squaresMoved, piece.currentCoord[1]]
                    if (newCoords[0] >= 1 && newCoords[0] <=8 && newCoords[1] >= 1 && newCoords[1] <=8 && collision === false &&
                        gameState.squaresObject[newCoords[0]-1][newCoords[1]-1].occupied != piece.color) {
                        validMovesArray.push(squareCoordsToName(newCoords))
                    }
                    if (newCoords[0] >= 1 && newCoords[0] <=8 && newCoords[1] >= 1 && newCoords[1] <=8 &&
                        gameState.squaresObject[newCoords[0]-1][newCoords[1]-1].occupied != "unoccupied") {
                        collision = true
                    }
                }
                //West
                collision = false
                for (let squaresMoved=1; squaresMoved<=8; squaresMoved++) {
                    newCoords = [piece.currentCoord[0] - squaresMoved, piece.currentCoord[1]]
                    if (newCoords[0] >= 1 && newCoords[0] <=8 && newCoords[1] >= 1 && newCoords[1] <=8 && collision === false &&
                        gameState.squaresObject[newCoords[0]-1][newCoords[1]-1].occupied != piece.color) {
                        validMovesArray.push(squareCoordsToName(newCoords))
                    }
                    if (newCoords[0] >= 1 && newCoords[0] <=8 && newCoords[1] >= 1 && newCoords[1] <=8 &&
                        gameState.squaresObject[newCoords[0]-1][newCoords[1]-1].occupied != "unoccupied") {
                        collision = true
                    }
                }
            break
            case ("queen"):
                //North
                collision = false
                for (let squaresMoved=1; squaresMoved<=8; squaresMoved++) {
                    newCoords = [piece.currentCoord[0], piece.currentCoord[1] + squaresMoved]
                    if (newCoords[0] >= 1 && newCoords[0] <=8 && newCoords[1] >= 1 && newCoords[1] <=8 && collision === false &&
                        gameState.squaresObject[newCoords[0]-1][newCoords[1]-1].occupied != piece.color) {
                        validMovesArray.push(squareCoordsToName(newCoords))
                    }
                    if (newCoords[0] >= 1 && newCoords[0] <=8 && newCoords[1] >= 1 && newCoords[1] <=8 &&
                        gameState.squaresObject[newCoords[0]-1][newCoords[1]-1].occupied != "unoccupied") {
                        collision = true
                    }
                }
                //South
                collision = false
                for (let squaresMoved=1; squaresMoved<=8; squaresMoved++) {
                    newCoords = [piece.currentCoord[0], piece.currentCoord[1] - squaresMoved]
                    if (newCoords[0] >= 1 && newCoords[0] <=8 && newCoords[1] >= 1 && newCoords[1] <=8 && collision === false &&
                        gameState.squaresObject[newCoords[0]-1][newCoords[1]-1].occupied != piece.color) {
                        validMovesArray.push(squareCoordsToName(newCoords))
                    }
                    if (newCoords[0] >= 1 && newCoords[0] <=8 && newCoords[1] >= 1 && newCoords[1] <=8 &&
                        gameState.squaresObject[newCoords[0]-1][newCoords[1]-1].occupied != "unoccupied") {
                        collision = true
                    }
                }
                //East
                collision = false
                for (let squaresMoved=1; squaresMoved<=8; squaresMoved++) {
                    newCoords = [piece.currentCoord[0] + squaresMoved, piece.currentCoord[1]]
                    if (newCoords[0] >= 1 && newCoords[0] <=8 && newCoords[1] >= 1 && newCoords[1] <=8 && collision === false &&
                        gameState.squaresObject[newCoords[0]-1][newCoords[1]-1].occupied != piece.color) {
                        validMovesArray.push(squareCoordsToName(newCoords))
                    }
                    if (newCoords[0] >= 1 && newCoords[0] <=8 && newCoords[1] >= 1 && newCoords[1] <=8 &&
                        gameState.squaresObject[newCoords[0]-1][newCoords[1]-1].occupied != "unoccupied") {
                        collision = true
                    }
                }
                //West
                collision = false
                for (let squaresMoved=1; squaresMoved<=8; squaresMoved++) {
                    newCoords = [piece.currentCoord[0] - squaresMoved, piece.currentCoord[1]]
                    if (newCoords[0] >= 1 && newCoords[0] <=8 && newCoords[1] >= 1 && newCoords[1] <=8 && collision === false &&
                        gameState.squaresObject[newCoords[0]-1][newCoords[1]-1].occupied != piece.color) {
                        validMovesArray.push(squareCoordsToName(newCoords))
                    }
                    if (newCoords[0] >= 1 && newCoords[0] <=8 && newCoords[1] >= 1 && newCoords[1] <=8 &&
                        gameState.squaresObject[newCoords[0]-1][newCoords[1]-1].occupied != "unoccupied") {
                        collision = true
                    }
                }
                //Northwest
                collision = false
                for (let squaresMoved=1; squaresMoved<=8; squaresMoved++) {
                    newCoords = [piece.currentCoord[0] - squaresMoved, piece.currentCoord[1] + squaresMoved]
                    if (newCoords[0] >= 1 && newCoords[0] <=8 && newCoords[1] >= 1 && newCoords[1] <=8 && collision === false &&
                        gameState.squaresObject[newCoords[0]-1][newCoords[1]-1].occupied != piece.color) {
                        validMovesArray.push(squareCoordsToName(newCoords))
                    }
                    if (newCoords[0] >= 1 && newCoords[0] <=8 && newCoords[1] >= 1 && newCoords[1] <=8 &&
                        gameState.squaresObject[newCoords[0]-1][newCoords[1]-1].occupied != "unoccupied") {
                        collision = true
                    }
                }
                //Northeast
                collision = false
                for (let squaresMoved=1; squaresMoved<=8; squaresMoved++) {
                    newCoords = [piece.currentCoord[0] + squaresMoved, piece.currentCoord[1] + squaresMoved]
                    if (newCoords[0] >= 1 && newCoords[0] <=8 && newCoords[1] >= 1 && newCoords[1] <=8 && collision === false &&
                        gameState.squaresObject[newCoords[0]-1][newCoords[1]-1].occupied != piece.color) {
                        validMovesArray.push(squareCoordsToName(newCoords))
                    }
                    if (newCoords[0] >= 1 && newCoords[0] <=8 && newCoords[1] >= 1 && newCoords[1] <=8 &&
                        gameState.squaresObject[newCoords[0]-1][newCoords[1]-1].occupied != "unoccupied") {
                        collision = true
                    }
                }
                //Southeast
                collision = false
                for (let squaresMoved=1; squaresMoved<=8; squaresMoved++) {
                    newCoords = [piece.currentCoord[0] + squaresMoved, piece.currentCoord[1] - squaresMoved]
                    if (newCoords[0] >= 1 && newCoords[0] <=8 && newCoords[1] >= 1 && newCoords[1] <=8 && collision === false &&
                        gameState.squaresObject[newCoords[0]-1][newCoords[1]-1].occupied != piece.color) {
                        validMovesArray.push(squareCoordsToName(newCoords))
                    }
                    if (newCoords[0] >= 1 && newCoords[0] <=8 && newCoords[1] >= 1 && newCoords[1] <=8 &&
                        gameState.squaresObject[newCoords[0]-1][newCoords[1]-1].occupied != "unoccupied") {
                        collision = true
                    }
                }
                //Southwest
                collision = false
                for (let squaresMoved=1; squaresMoved<=8; squaresMoved++) {
                    newCoords = [piece.currentCoord[0] - squaresMoved, piece.currentCoord[1] - squaresMoved]
                    if (newCoords[0] >= 1 && newCoords[0] <=8 && newCoords[1] >= 1 && newCoords[1] <=8 && collision === false &&
                        gameState.squaresObject[newCoords[0]-1][newCoords[1]-1].occupied != piece.color) {
                        validMovesArray.push(squareCoordsToName(newCoords))
                    }
                    if (newCoords[0] >= 1 && newCoords[0] <=8 && newCoords[1] >= 1 && newCoords[1] <=8 &&
                        gameState.squaresObject[newCoords[0]-1][newCoords[1]-1].occupied != "unoccupied") {
                        collision = true
                    }
                }
            break
            case ("king"):
                //Northwest
                newCoords = [piece.currentCoord[0] - 1, piece.currentCoord[1] + 1]
                if (newCoords[0] >= 1 && newCoords[0] <=8 && newCoords[1] >= 1 && newCoords[1] <=8 && collision === false &&
                    gameState.squaresObject[newCoords[0]-1][newCoords[1]-1].occupied != piece.color) {
                    validMovesArray.push(squareCoordsToName(newCoords))
                }
                //North
                newCoords = [piece.currentCoord[0], piece.currentCoord[1] + 1]
                if (newCoords[0] >= 1 && newCoords[0] <=8 && newCoords[1] >= 1 && newCoords[1] <=8 && collision === false &&
                    gameState.squaresObject[newCoords[0]-1][newCoords[1]-1].occupied != piece.color) {
                    validMovesArray.push(squareCoordsToName(newCoords))
                }
                //Northeast
                newCoords = [piece.currentCoord[0] + 1, piece.currentCoord[1] + 1]
                if (newCoords[0] >= 1 && newCoords[0] <=8 && newCoords[1] >= 1 && newCoords[1] <=8 && collision === false &&
                    gameState.squaresObject[newCoords[0]-1][newCoords[1]-1].occupied != piece.color) {
                    validMovesArray.push(squareCoordsToName(newCoords))
                }
                //East
                newCoords = [piece.currentCoord[0] + 1, piece.currentCoord[1]]
                if (newCoords[0] >= 1 && newCoords[0] <=8 && newCoords[1] >= 1 && newCoords[1] <=8 && collision === false &&
                    gameState.squaresObject[newCoords[0]-1][newCoords[1]-1].occupied != piece.color) {
                    validMovesArray.push(squareCoordsToName(newCoords))
                }
                //Southeast
                newCoords = [piece.currentCoord[0] + 1, piece.currentCoord[1] - 1]
                if (newCoords[0] >= 1 && newCoords[0] <=8 && newCoords[1] >= 1 && newCoords[1] <=8 && collision === false &&
                    gameState.squaresObject[newCoords[0]-1][newCoords[1]-1].occupied != piece.color) {
                    validMovesArray.push(squareCoordsToName(newCoords))
                }
                //South
                newCoords = [piece.currentCoord[0], piece.currentCoord[1] - 1]
                if (newCoords[0] >= 1 && newCoords[0] <=8 && newCoords[1] >= 1 && newCoords[1] <=8 && collision === false &&
                    gameState.squaresObject[newCoords[0]-1][newCoords[1]-1].occupied != piece.color) {
                    validMovesArray.push(squareCoordsToName(newCoords))
                }
                //Southwest
                newCoords = [piece.currentCoord[0] - 1, piece.currentCoord[1] - 1]
                if (newCoords[0] >= 1 && newCoords[0] <=8 && newCoords[1] >= 1 && newCoords[1] <=8 && collision === false &&
                    gameState.squaresObject[newCoords[0]-1][newCoords[1]-1].occupied != piece.color) {
                    validMovesArray.push(squareCoordsToName(newCoords))
                }
                //West
                newCoords = [piece.currentCoord[0] - 1, piece.currentCoord[1]]
                if (newCoords[0] >= 1 && newCoords[0] <=8 && newCoords[1] >= 1 && newCoords[1] <=8 && collision === false &&
                    gameState.squaresObject[newCoords[0]-1][newCoords[1]-1].occupied != piece.color) {
                    validMovesArray.push(squareCoordsToName(newCoords))
                }
                //castling
                if (piece.color === 'white' && piece.moveCount === 0 && checkingCastle === false) {
                    let threatenedSquares = []
                    gameState.boardPosition.black.forEach((blackPiece) => {
                        let threatenedSquaresForPiece = checkMovesAnyPiece(blackPiece, gameState, true)
                        threatenedSquares.push(...threatenedSquaresForPiece)
                    })
                    if (threatenedSquares.indexOf((threatenedSquare) => threatenedSquare === 'E1') === -1 &&
                        threatenedSquares.indexOf((threatenedSquare) => threatenedSquare === 'F1') === -1 &&
                        threatenedSquares.indexOf((threatenedSquare) => threatenedSquare === 'G1') === -1 &&
                        gameState.squaresObject[5][0].occupied === 'unoccupied' &&
                        gameState.squaresObject[6][0].occupied === 'unoccupied'
                        ) {
                            validMovesArray.push('G1')
                    }
                    if (threatenedSquares.indexOf((threatenedSquare) => threatenedSquare === 'E1') === -1 &&
                        threatenedSquares.indexOf((threatenedSquare) => threatenedSquare === 'D1') === -1 &&
                        threatenedSquares.indexOf((threatenedSquare) => threatenedSquare === 'C1') === -1 &&
                        gameState.squaresObject[3][0].occupied === 'unoccupied' &&
                        gameState.squaresObject[2][0].occupied === 'unoccupied'
                        ) {
                            validMovesArray.push('C1')
                    }
                }
                if (piece.color === 'black' && piece.moveCount === 0 && checkingCastle === false) {
                    let threatenedSquares = []
                    gameState.boardPosition.white.forEach((whitePiece) => {
                        let threatenedSquaresForPiece = checkMovesAnyPiece(whitePiece, gameState, true)
                        threatenedSquares.push(...threatenedSquaresForPiece)
                    })
                    if (threatenedSquares.indexOf((threatenedSquare) => threatenedSquare === 'E8') === -1 &&
                        threatenedSquares.indexOf((threatenedSquare) => threatenedSquare === 'F8') === -1 &&
                        threatenedSquares.indexOf((threatenedSquare) => threatenedSquare === 'G8') === -1 &&
                        gameState.squaresObject[5][7].occupied === 'unoccupied' &&
                        gameState.squaresObject[6][7].occupied === 'unoccupied'
                        ) {
                            validMovesArray.push('G8')
                    }
                    if (threatenedSquares.indexOf((threatenedSquare) => threatenedSquare === 'E8') === -1 &&
                        threatenedSquares.indexOf((threatenedSquare) => threatenedSquare === 'D8') === -1 &&
                        threatenedSquares.indexOf((threatenedSquare) => threatenedSquare === 'C8') === -1 &&
                        gameState.squaresObject[3][7].occupied === 'unoccupied' &&
                        gameState.squaresObject[2][7].occupied === 'unoccupied'
                        ) {
                            validMovesArray.push('C8')
                    }
                }
            break
        }
    }
    
    
    return validMovesArray
}


//populates what the board would look like once a move is completed, 
//then it checks that it doesn't cause check for the player making the move, 
//because that would make it invalid, and it keeps it from being
//returned to the previous function so as to not allow the move
function checkValidMovesForCheck(piece) {
    //this is the only way to make a hard copy of an object, 
    //can't just say let newGameState = gameData because it will 
    //refer to the actual gameData object and modify it, 
    //when we only want to create a copy of it to look at the game status 
    //after the move in question in order to check for legality
    let newGameState = JSON.parse(JSON.stringify(gameData))
    let validMovesArray = []
    let possibleValidMovesArray = []
    possibleValidMovesArray = checkMovesAnyPiece(piece)
    possibleValidMovesArray.forEach((possibleValidMove) => {
        let newCoords = squareNameToCoords(possibleValidMove)
        if (piece.color === "white") {
            let newPiece = newGameState.boardPosition.white.find((searchingPiece) => searchingPiece.pieceId === piece.pieceId)
            newPiece.currentSpot = squareCoordsToName(newCoords)
            newGameState.squaresObject[newPiece.currentCoord[0]-1][newPiece.currentCoord[1]-1].occupied = 'unoccupied' //before setting the new coordinates, set the old square to unoccupied
            newPiece.currentCoord = newCoords
            newPiece.moveCount++
            newGameState.moveCounter++
            //capturing
            if (newGameState.squaresObject[newPiece.currentCoord[0]-1][newPiece.currentCoord[1]-1].occupied != 'unoccupied') {
                    let endingSquarePiece = document.querySelector(`#${gameData.squaresObject[newPiece.currentCoord[0]-1][newPiece.currentCoord[1]-1].pieceOccupyingSquare}`)
                        newGameState.boardPosition.black.forEach((blackPiece) => {
                            if (endingSquarePiece.id === blackPiece.pieceId) {
                                blackPiece.captured = true
                                blackPiece.currentSpot = 'off board'
                                blackPiece.currentCoord = 'n/a'
                            }
                        })
                    
                }
            newGameState.squaresObject[newPiece.currentCoord[0]-1][newPiece.currentCoord[1]-1].occupied = newPiece.color
            newGameState.squaresObject[newPiece.currentCoord[0]-1][newPiece.currentCoord[1]-1].pieceOccupyingSquare = newPiece.pieceId
        }
        if (piece.color === "black") {
            let newPiece = newGameState.boardPosition.black.find((searchingPiece) => searchingPiece.pieceId === piece.pieceId)
            newPiece.currentSpot = squareCoordsToName(newCoords)
            newGameState.squaresObject[newPiece.currentCoord[0]-1][newPiece.currentCoord[1]-1].occupied = 'unoccupied'
            newPiece.currentCoord = newCoords
            newPiece.moveCount++
            newGameState.moveCounter++
            //capturing
            if (newGameState.squaresObject[newPiece.currentCoord[0]-1][newPiece.currentCoord[1]-1].occupied != 'unoccupied') {
                    let endingSquarePiece = document.querySelector(`#${gameData.squaresObject[newPiece.currentCoord[0]-1][newPiece.currentCoord[1]-1].pieceOccupyingSquare}`)
                    newGameState.boardPosition.white.forEach((whitePiece) => {
                        if (endingSquarePiece.id === whitePiece.pieceId) {
                            whitePiece.captured = true
                            whitePiece.currentSpot = 'off board'
                            whitePiece.currentCoord = 'n/a'
                        }
                    })
                    
                }
            newGameState.squaresObject[newPiece.currentCoord[0]-1][newPiece.currentCoord[1]-1].occupied = newPiece.color
            newGameState.squaresObject[newPiece.currentCoord[0]-1][newPiece.currentCoord[1]-1].pieceOccupyingSquare = newPiece.pieceId
        }
        if (checkForCheck(newGameState) === false) {
            validMovesArray.push(possibleValidMove)
        }
    })
    return validMovesArray
}

//this calls the other functions in order to get the real valid moves for a piece, 
//taking into account whether it causes your king to be in check
function checkValidMoves(piece) {
    let validMovesArray = []
    if (gameData.turn === piece.color) {
        validMovesArray = checkValidMovesForCheck(piece)
    }
    return validMovesArray
}


//simple function just switches the turn property of the gameData, 
//might not have needed a whole function for it to be honest
function switchTurns(currentMoverColor) {
    if (currentMoverColor === "white") {
        gameData.turn = "black"
    }
    else if (currentMoverColor === "black") {
        gameData.turn = "white"
    }

    console.log(gameData.turn,"to move")
}


//This is checking whether checkmate is present. The player whose turn it is must have no valid moves, and also be in check
function checkForCheckmate (gameState) {
    let validMoveCount = 0
    let victor = ''
    if(gameState.turn === "white") {
        gameState.boardPosition.white.forEach((piece) => {
            let validMovesArray = checkValidMoves(piece)
            validMoveCount += validMovesArray.length
            victor = "Black"
        })
    }
    if(gameState.turn === "black") {
        gameState.boardPosition.black.forEach((piece) => {
            let validMovesArray = checkValidMoves(piece)
            validMoveCount += validMovesArray.length
            victor = "White"
        })
    }
    let check = checkForCheck(gameState)
    if(check === true && validMoveCount === 0) {
        console.log(`${victor} wins, congratulations!`)
    }
}



//does everything required to move a piece, incrementing move count in the game state, 
//and for the piece in question, modifying the squares object to have the right squares 
//occupied by the right color. Moving a captured piece to the captured piece area, 
//recoloring the squares to remove the coloring of the valid move squares after the move is complete,
//r3esetting which piece is the currently selected piece, and finally, checking for checkmate
function movePiece(piece, pieceObject, endingSquare) {
    //castling special move rook piece too
    if (piece.pieceType === 'king' && piece.moveCount === 0 && ['G1','C1','G8','C8'].find((element) => element === endingSquare.id) != -1) {
        if (endingSquare.id === 'G1') {
            let rook = gameData.boardPosition.white.find((searchPiece) => searchPiece.pieceId === 'kingsRookWhite')
            let rookObject = document.querySelector('#kingsRookWhite')
            let rookEndingSquare = document.querySelector('#F1')
            movePiece(rook, rookObject, rookEndingSquare)
            switchTurns(gameData.turn)//invoking move piece above causes the turn to switch, so we give an extra switch here to switch back for the king to move
        }
        if (endingSquare.id === 'C1') {
            let rook = gameData.boardPosition.white.find((searchPiece) => searchPiece.pieceId === 'queensRookWhite')
            let rookObject = document.querySelector('#queensRookWhite')
            let rookEndingSquare = document.querySelector('#D1')
            movePiece(rook, rookObject, rookEndingSquare)
            switchTurns(gameData.turn)
        }
        if (endingSquare.id === 'G8') {
            let rook = gameData.boardPosition.black.find((searchPiece) => searchPiece.pieceId === 'kingsRookBlack')
            let rookObject = document.querySelector('#kingsRookBlack')
            let rookEndingSquare = document.querySelector('#F8')
            movePiece(rook, rookObject, rookEndingSquare)
            switchTurns(gameData.turn)
        }
        if (endingSquare.id === 'C8') {
            let rook = gameData.boardPosition.black.find((searchPiece) => searchPiece.pieceId === 'queensRookBlack')
            let rookObject = document.querySelector('#queensRookBlack')
            let rookEndingSquare = document.querySelector('#D8')
            movePiece(rook, rookObject, rookEndingSquare)
            switchTurns(gameData.turn)
        }
    }



    let oldSpot = squareNameToCoords(piece.currentSpot)
    gameData.squaresObject[oldSpot[0]-1][oldSpot[1]-1].occupied = 'unoccupied'
    piece.currentSpot = endingSquare.id
    piece.currentCoord = squareNameToCoords(endingSquare.id)
    piece.moveCount++
    gameData.moveCounter++
    //capturing
    if (gameData.squaresObject[piece.currentCoord[0]-1][piece.currentCoord[1]-1].occupied != 'unoccupied') {
        let endingSquarePiece = document.querySelector(`#${gameData.squaresObject[piece.currentCoord[0]-1][piece.currentCoord[1]-1].pieceOccupyingSquare}`)
        if (piece.color === "white") {
            blackCaptured.append(endingSquarePiece)
            gameData.boardPosition.black.forEach((blackPiece) => {
                if (endingSquarePiece.id === blackPiece.pieceId) {
                    blackPiece.captured = true
                    blackPiece.currentSpot = 'off board'
                    blackPiece.currentCoord = 'n/a'
                }
            })
        } else if (piece.color === "black") {
            whiteCaptured.append(endingSquarePiece)
            gameData.boardPosition.white.forEach((whitePiece) => {
                if (endingSquarePiece.id === whitePiece.pieceId) {
                    whitePiece.captured = true
                    whitePiece.currentSpot = 'off board'
                    whitePiece.currentCoord = 'n/a'
                }
            })
        }
        //endingSquarePiece.remove()
    }
    endingSquare.append(pieceObject)
    console.log(endingSquare.id,endingSquare.id.substring(1,1))
    //check for pawn promotion
    if(piece.pieceType === 'pawn' && (endingSquare.id.substring(1,2) === '8' || endingSquare.id.substring(1,2) === '1')) {
        let pieceChangedTo = ''
        while (['queen', 'bishop', 'knight', 'rook'].indexOf(pieceChangedTo) === -1 ) {
            pieceChangedTo = prompt("You advanced a pawn all the way to the end! \nYou may promote it to whichever piece you like! \nWhat would you like? \nValid Values: queen, bishop, knight, rook", "queen")
        }
        piece.pieceType = pieceChangedTo
        if(piece.color === 'white'){
            switch (pieceChangedTo) {
                case ("queen") :
                    pieceObject.src = "./assets/whiteQueen.png"
                break
                case ("rook") :
                    pieceObject.src = "./assets/whiteRook.png"
                break
                case ("bishop") :
                    pieceObject.src = "./assets/whiteBishop.png"
                break
                case ("knight") :
                    pieceObject.src = "./assets/whiteKnight.png"
                break
            }
        }
        if(piece.color === 'black'){
            switch (pieceChangedTo) {
                case ("queen") :
                    pieceObject.src = "./assets/blackQueen.png"
                break
                case ("rook") :
                    pieceObject.src = "./assets/blackRook.png"
                break
                case ("bishop") :
                    pieceObject.src = "./assets/blackBishop.png"
                break
                case ("knight") :
                    pieceObject.src = "./assets/blackKnight.png"
                break
            }
        }
        
    }

    //console.log(`running switchTurns(${gameData.turn})`)
    gameData.squaresObject[piece.currentCoord[0]-1][piece.currentCoord[1]-1].occupied = piece.color
    gameData.squaresObject[piece.currentCoord[0]-1][piece.currentCoord[1]-1].pieceOccupyingSquare = piece.pieceId
    recolorBoard()
    switchTurns(gameData.turn)
    resetCurrentPiece()
    checkForCheckmate(gameData)
    //populateValidMoves(gameData)
    //return "moveComplete"
}


//this gets the fully valid moves and does the square coloration 
//to make it apparent to the user which squares the selected piece can move to
function displayValidMoves (piece, pieceObject ) {
    let validMovesArray = checkValidMoves(piece)
    currentSelectedPiece = {piece,pieceObject, validMovesArray}
    document.querySelector(`#${piece.currentSpot}`).style.backgroundColor = "green"
    if(validMovesArray.length >= 1){
        validMovesArray.forEach((validMoveSquare) => {
            document.querySelector(`#${validMoveSquare}`).style.backgroundColor = "yellow"
        })
    }
}

//does what needs to happen when a piece is clicked on. 
//This function is the function of an event listener that gets added to all the piece objects
function onGamePieceSelect(event) {
    if(currentSelectedPiece.piece === null) {
        //piece objects always exist in divs representing the squares, 
        //if there is not a piece already selected, 
        //we don't want the click to propagate up to the div representing the square, 
        //because then it would trigger the square click event.
        //If a piece is already selected, we want the event to propagate up 
        //to the div square, so that the square click is triggered. 
        //This comes up when capturing. If we didn't let it propagate up to 
        //the square div when a piece about to be captured is clicked, 
        //then we couldn't capture any pieces, since you would try to click on a square 
        //to capture a piece, but the click only registers as a click on the piece, 
        //never the square, so the square click never happens and the intended move never happens, 
        //as movePiece only happens on the square click 
        event.stopPropagation()
        recolorBoard()
        let eventTarget = event.currentTarget
        //console.log(eventTarget)
        let eventTargetId = eventTarget.id
        let pieces = gameData.turn === "white" ? gameData.boardPosition.white : gameData.boardPosition.black
        pieces.forEach((piece) => {
            if(eventTargetId === piece.pieceId) {
                displayValidMoves(piece,eventTarget)
            }
        })
    }
    else if(event.currentTarget.id === currentSelectedPiece.piece.pieceId) {
        //if you click on a piece that is already the selected piece, it unselects
        event.stopPropagation()
        recolorBoard()
        resetCurrentPiece()
    } 
}


//tells what happens when you click a square. 
//I.e. nothing happens unless a piece is currently selected. 
//But if a piece is selected, then it checks whether the square 
//clicked on is a valid move for that piece and if it is, 
//then it executes the movePiece function to that square
function onSquareClick (event) {
    let square = event.currentTarget
    let {piece,pieceObject,validMovesArray} = currentSelectedPiece || {}
    let squareId = square.id
    if(piece && pieceObject && validMovesArray.length > 0 && validMovesArray.indexOf(squareId) != -1) {
        movePiece(piece, pieceObject, square)
    }
}






//loops through all the pieces and adds the click event listener to the html element that is that piece's icon
function populateValidMoves (gameData) {
    let pieces = [...gameData.boardPosition.white,...gameData.boardPosition.black]
    pieces.forEach((piece) => {
        let pieceObject = document.querySelector(`#${piece.pieceId}`)
        pieceObject.setAttribute('listener','true')
        pieceObject.addEventListener('click', onGamePieceSelect)
    })
}
















//CODE EXECUTION BEGINS HERE



//creates divs for the squares on the board
for (let i=1; i<=8; i++) {
    let row = document.createElement("div")
    row.style.display = "flex"
    for (let j=1; j<=8; j++) {
        let square = document.createElement("div")
        square.style.height = "5.625vw"
        square.style.width = "5.625vw"
        square.style.outlineColor = "black"//needs to be an outline so as to not add to the thickness of the gameboard element these sit in
        square.style.outlineStyle = "solid"
        square.style.outlineWidth = "1px"
        square.style.padding = "0"
        square.style.margin = "0"
        square.style.outlineOffset = "-1px"
        square.style.textAlign = "center"
        square.id = squareIdMap([i,j])
        square.addEventListener('click', onSquareClick)
        row.append(square)
    }
    gameBoard.append(row)
}

let resetButton = document.querySelector('#resetButton').addEventListener('click', () => { resetBoard (gameData)})


//recolorBoard()



//squares object gets actually populated in the resetBoard -> mapPiecesToSquaresObject function, just gets declared here as an empty array
let squaresObject = []




//initialize this as no piece currently selected
let currentSelectedPiece = {piece:null, pieceObject:null, validMovesArray:[]}



//could make a piece class, but it was unnecessary, 
//might eventually be a cleaner look, 
//for now a piece is just an object with a few key value pairs, 
//and the whitePieces is an array of those piece objects
//The key value pairs get set inside the resetPieceArrays function, which runs inside the resetBoard function
let whitePieces = []
let blackPieces = []
let allPieces = {white: whitePieces, black: blackPieces}




//store all the game data in an object. Once I build this functionality, 
//you could theoretically save your game by saving this object either locally or remotely. 
//Still need to build a way to load a game given this object, 
//but this object stores all of the data necessary to do that. 
//Also eventually want to list out the move notation and make that prinatable, probably will store that in this object as well
let gameData = {turn: "white", moveCounter: 0, boardPosition: allPieces, squaresObject: squaresObject}

//reset the board to initially set up the game
resetBoard(gameData)


//adds the event listeners to the pieces which is all that is now required to make the game go
//populateValidMoves(gameData)


