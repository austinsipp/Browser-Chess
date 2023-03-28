let gameBoard = document.querySelector("#gameBoard")
let whiteCaptured = document.querySelector("#whiteCaptured")
let blackCaptured = document.querySelector("#blackCaptured")


let whitePieces = [
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


let blackPieces = [
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




function resetCurrentPiece () {
    currentSelectedPiece = {piece:null, pieceObject:null, validMovesArray:[]}
}


function squareIdMap (id) {
    let row = 9 - id[0]
    let columnTransform = ["A","B","C","D","E","F","G","H"]
    let column = columnTransform[id[1]-1]
    return column + row
}

function squareNameToCoords (squareName) {
    let y = parseInt(squareName.substring(1,2))
    let xLetter = squareName.substring(0,1)
    let columnTransform = ["A","B","C","D","E","F","G","H"]
    let x = columnTransform.indexOf(xLetter) + 1
    return [x,y]
}
//console.log(squareNameToCoords ("A2"))

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
            /*if(typeof square.onclick == "function") {
                square.removeEventListener('click', 'click', function squareEventListener(e)  {
                    movePiece(piece, pieceObject, validMoveSquare, e)
                    pieceObject.removeEventListener('click', function pieceEventListener() {
                        displayValidMoves(piece, pieceObject)
                    })
                })
             }*/
            
        }
    }
}

for (let i=1; i<=8; i++) {
    let row = document.createElement("div")
    row.style.display = "flex"
    for (let j=1; j<=8; j++) {
        let square = document.createElement("div")
        square.style.height = "5.625vw"
        square.style.width = "5.625vw"
        square.style.outlineColor = "black"
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
recolorBoard()









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




function resetBoard () {
    function resetPieces (piece) {
        let pieceObject = document.createElement("img")
        pieceObject.src = piece.icon
        pieceObject.style.height = "5.625vw"
        pieceObject.style.width = "5.625vw"
        pieceObject.id = `${piece.pieceId}`
        let location = document.querySelector(`#${piece.initialSpot}`)
        location.append(pieceObject)
        piece.currentSpot = piece.initialSpot
        piece.moveCount = 0
        piece.currentCoord = squareNameToCoords(piece.currentSpot)
        piece.captured = false
    }

    whitePieces.forEach((piece) => {
        resetPieces(piece)
        piece.color = "white"
        })
    blackPieces.forEach((piece) => {
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
}

function checkForCheck(gameState){
    let currentTurn = gameState.turn
    let check = false
    if (currentTurn === "white") {
        let kingSquare = gameState.boardPosition.white.find((piece) => piece.pieceId === 'kingWhite').currentSpot
        gameState.boardPosition.black.forEach((piece) => {
            //console.log(checkValidMovesForCheck(piece))
            let validMovesArray = checkMovesAnyPiece(piece)
            if(validMovesArray.indexOf(kingSquare) != -1) {
                check = true
            }
        })
    }
    else if (currentTurn === "black") {
        let kingSquare = gameState.boardPosition.black.find((piece) => piece.pieceId === 'kingBlack').currentSpot
        gameState.boardPosition.white.forEach((piece) => {
            //console.log(checkValidMovesForCheck(piece))
            let validMovesArray = checkMovesAnyPiece(piece)
            if(validMovesArray.indexOf(kingSquare) != -1) {
                check = true
            }
        })
    }
return check  
}





function checkMovesAnyPiece(piece, checkingCastle = false) {
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
                        gameData.squaresObject[newCoords[0]-1][newCoords[1]-1].occupied === "black") {
                        validMovesArray.push(squareCoordsToName(newCoords))
                    }
                    newCoords = [piece.currentCoord[0] + 1, piece.currentCoord[1] + 1]
                    if (newCoords[0] >= 1 && newCoords[0] <=8 && newCoords[1] >= 1 && newCoords[1] <=8 &&
                        gameData.squaresObject[newCoords[0]-1][newCoords[1]-1].occupied === "black") {
                        validMovesArray.push(squareCoordsToName(newCoords))
                    }
                }
                if (piece.color === "black") {
                    newCoords = [piece.currentCoord[0] - 1, piece.currentCoord[1] - 1]
                    if (newCoords[0] >= 1 && newCoords[0] <=8 && newCoords[1] >= 1 && newCoords[1] <=8 &&
                        gameData.squaresObject[newCoords[0]-1][newCoords[1]-1].occupied === "white") {
                        validMovesArray.push(squareCoordsToName(newCoords))
                    }
                    newCoords = [piece.currentCoord[0] + 1, piece.currentCoord[1] - 1]
                    if (newCoords[0] >= 1 && newCoords[0] <=8 && newCoords[1] >= 1 && newCoords[1] <=8 &&
                        gameData.squaresObject[newCoords[0]-1][newCoords[1]-1].occupied === "white") {
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
                            gameData.squaresObject[newCoords[0]-1][newCoords[1]-1].occupied === "unoccupied") {
                            validMovesArray.push(squareCoordsToName(newCoords))
                        }
                        if(gameData.squaresObject[newCoords[0]-1][newCoords[1]-1].occupied != "unoccupied"){
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
                        gameData.squaresObject[newCoords[0]-1][newCoords[1]-1].occupied === "unoccupied") {
                        validMovesArray.push(squareCoordsToName(newCoords))
                    }
                }
            break
            case ("knight"):
                newCoords = [piece.currentCoord[0] + 2, piece.currentCoord[1] + 1]
                if(newCoords[0] >= 1 && newCoords[0] <=8 && newCoords[1] >= 1 && newCoords[1] <=8 &&
                    gameData.squaresObject[newCoords[0]-1][newCoords[1]-1].occupied != piece.color) {
                    validMovesArray.push(squareCoordsToName(newCoords))
                }
                newCoords = [piece.currentCoord[0] + 1, piece.currentCoord[1] + 2]
                if(newCoords[0] >= 1 && newCoords[0] <=8 && newCoords[1] >= 1 && newCoords[1] <=8 &&
                    gameData.squaresObject[newCoords[0]-1][newCoords[1]-1].occupied != piece.color) {
                    validMovesArray.push(squareCoordsToName(newCoords))
                }
                newCoords = [piece.currentCoord[0] + 2, piece.currentCoord[1] - 1]
                if(newCoords[0] >= 1 && newCoords[0] <=8 && newCoords[1] >= 1 && newCoords[1] <=8 &&
                    gameData.squaresObject[newCoords[0]-1][newCoords[1]-1].occupied != piece.color) {
                    validMovesArray.push(squareCoordsToName(newCoords))
                }
                newCoords = [piece.currentCoord[0] + 1, piece.currentCoord[1] - 2]
                if(newCoords[0] >= 1 && newCoords[0] <=8 && newCoords[1] >= 1 && newCoords[1] <=8 &&
                    gameData.squaresObject[newCoords[0]-1][newCoords[1]-1].occupied != piece.color) {
                    validMovesArray.push(squareCoordsToName(newCoords))
                }
                newCoords = [piece.currentCoord[0] - 2, piece.currentCoord[1] + 1]
                if(newCoords[0] >= 1 && newCoords[0] <=8 && newCoords[1] >= 1 && newCoords[1] <=8 &&
                    gameData.squaresObject[newCoords[0]-1][newCoords[1]-1].occupied != piece.color) {
                    validMovesArray.push(squareCoordsToName(newCoords))
                }
                newCoords = [piece.currentCoord[0] - 1, piece.currentCoord[1] + 2]
                if(newCoords[0] >= 1 && newCoords[0] <=8 && newCoords[1] >= 1 && newCoords[1] <=8 &&
                    gameData.squaresObject[newCoords[0]-1][newCoords[1]-1].occupied != piece.color) {
                    validMovesArray.push(squareCoordsToName(newCoords))
                }
                newCoords = [piece.currentCoord[0] - 2, piece.currentCoord[1] - 1]
                if(newCoords[0] >= 1 && newCoords[0] <=8 && newCoords[1] >= 1 && newCoords[1] <=8 &&
                    gameData.squaresObject[newCoords[0]-1][newCoords[1]-1].occupied != piece.color) {
                    validMovesArray.push(squareCoordsToName(newCoords))
                }
                newCoords = [piece.currentCoord[0] - 1, piece.currentCoord[1] - 2]
                if(newCoords[0] >= 1 && newCoords[0] <=8 && newCoords[1] >= 1 && newCoords[1] <=8 &&
                    gameData.squaresObject[newCoords[0]-1][newCoords[1]-1].occupied != piece.color) {
                    validMovesArray.push(squareCoordsToName(newCoords))
                }
            break
            case ("bishop"):
                //Northwest
                collision = false
                for (let squaresMoved=1; squaresMoved<=8; squaresMoved++) {
                    newCoords = [piece.currentCoord[0] - squaresMoved, piece.currentCoord[1] + squaresMoved]
                    if (newCoords[0] >= 1 && newCoords[0] <=8 && newCoords[1] >= 1 && newCoords[1] <=8 && collision === false &&
                        gameData.squaresObject[newCoords[0]-1][newCoords[1]-1].occupied != piece.color) {
                        validMovesArray.push(squareCoordsToName(newCoords))
                    }
                    if (newCoords[0] >= 1 && newCoords[0] <=8 && newCoords[1] >= 1 && newCoords[1] <=8 &&
                        gameData.squaresObject[newCoords[0]-1][newCoords[1]-1].occupied != "unoccupied") {
                        collision = true
                    } 
                }
                //Northeast
                collision = false
                for (let squaresMoved=1; squaresMoved<=8; squaresMoved++) {
                    newCoords = [piece.currentCoord[0] + squaresMoved, piece.currentCoord[1] + squaresMoved]
                    if (newCoords[0] >= 1 && newCoords[0] <=8 && newCoords[1] >= 1 && newCoords[1] <=8 && collision === false &&
                        gameData.squaresObject[newCoords[0]-1][newCoords[1]-1].occupied != piece.color) {
                        validMovesArray.push(squareCoordsToName(newCoords))
                    }
                    if (newCoords[0] >= 1 && newCoords[0] <=8 && newCoords[1] >= 1 && newCoords[1] <=8 &&
                        gameData.squaresObject[newCoords[0]-1][newCoords[1]-1].occupied != "unoccupied") {
                        collision = true
                    }
                }
                //Southeast
                collision = false
                for (let squaresMoved=1; squaresMoved<=8; squaresMoved++) {
                    newCoords = [piece.currentCoord[0] + squaresMoved, piece.currentCoord[1] - squaresMoved]
                    if (newCoords[0] >= 1 && newCoords[0] <=8 && newCoords[1] >= 1 && newCoords[1] <=8 && collision === false &&
                        gameData.squaresObject[newCoords[0]-1][newCoords[1]-1].occupied != piece.color) {
                        validMovesArray.push(squareCoordsToName(newCoords))
                    }
                    if (newCoords[0] >= 1 && newCoords[0] <=8 && newCoords[1] >= 1 && newCoords[1] <=8 &&
                        gameData.squaresObject[newCoords[0]-1][newCoords[1]-1].occupied != "unoccupied") {
                        collision = true
                    }
                }
                //Southwest
                collision = false
                for (let squaresMoved=1; squaresMoved<=8; squaresMoved++) {
                    newCoords = [piece.currentCoord[0] - squaresMoved, piece.currentCoord[1] - squaresMoved]
                    if (newCoords[0] >= 1 && newCoords[0] <=8 && newCoords[1] >= 1 && newCoords[1] <=8 && collision === false &&
                        gameData.squaresObject[newCoords[0]-1][newCoords[1]-1].occupied != piece.color) {
                        validMovesArray.push(squareCoordsToName(newCoords))
                    }
                    if (newCoords[0] >= 1 && newCoords[0] <=8 && newCoords[1] >= 1 && newCoords[1] <=8 &&
                        gameData.squaresObject[newCoords[0]-1][newCoords[1]-1].occupied != "unoccupied") {
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
                        gameData.squaresObject[newCoords[0]-1][newCoords[1]-1].occupied != piece.color) {
                        validMovesArray.push(squareCoordsToName(newCoords))
                    }
                    if (newCoords[0] >= 1 && newCoords[0] <=8 && newCoords[1] >= 1 && newCoords[1] <=8 &&
                        gameData.squaresObject[newCoords[0]-1][newCoords[1]-1].occupied != "unoccupied") {
                        collision = true
                    }
                }
                //South
                collision = false
                for (let squaresMoved=1; squaresMoved<=8; squaresMoved++) {
                    newCoords = [piece.currentCoord[0], piece.currentCoord[1] - squaresMoved]
                    if (newCoords[0] >= 1 && newCoords[0] <=8 && newCoords[1] >= 1 && newCoords[1] <=8 && collision === false &&
                        gameData.squaresObject[newCoords[0]-1][newCoords[1]-1].occupied != piece.color) {
                        validMovesArray.push(squareCoordsToName(newCoords))
                    }
                    if (newCoords[0] >= 1 && newCoords[0] <=8 && newCoords[1] >= 1 && newCoords[1] <=8 &&
                        gameData.squaresObject[newCoords[0]-1][newCoords[1]-1].occupied != "unoccupied") {
                        collision = true
                    }
                }
                //East
                collision = false
                for (let squaresMoved=1; squaresMoved<=8; squaresMoved++) {
                    newCoords = [piece.currentCoord[0] + squaresMoved, piece.currentCoord[1]]
                    if (newCoords[0] >= 1 && newCoords[0] <=8 && newCoords[1] >= 1 && newCoords[1] <=8 && collision === false &&
                        gameData.squaresObject[newCoords[0]-1][newCoords[1]-1].occupied != piece.color) {
                        validMovesArray.push(squareCoordsToName(newCoords))
                    }
                    if (newCoords[0] >= 1 && newCoords[0] <=8 && newCoords[1] >= 1 && newCoords[1] <=8 &&
                        gameData.squaresObject[newCoords[0]-1][newCoords[1]-1].occupied != "unoccupied") {
                        collision = true
                    }
                }
                //West
                collision = false
                for (let squaresMoved=1; squaresMoved<=8; squaresMoved++) {
                    newCoords = [piece.currentCoord[0] - squaresMoved, piece.currentCoord[1]]
                    if (newCoords[0] >= 1 && newCoords[0] <=8 && newCoords[1] >= 1 && newCoords[1] <=8 && collision === false &&
                        gameData.squaresObject[newCoords[0]-1][newCoords[1]-1].occupied != piece.color) {
                        validMovesArray.push(squareCoordsToName(newCoords))
                    }
                    if (newCoords[0] >= 1 && newCoords[0] <=8 && newCoords[1] >= 1 && newCoords[1] <=8 &&
                        gameData.squaresObject[newCoords[0]-1][newCoords[1]-1].occupied != "unoccupied") {
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
                        gameData.squaresObject[newCoords[0]-1][newCoords[1]-1].occupied != piece.color) {
                        validMovesArray.push(squareCoordsToName(newCoords))
                    }
                    if (newCoords[0] >= 1 && newCoords[0] <=8 && newCoords[1] >= 1 && newCoords[1] <=8 &&
                        gameData.squaresObject[newCoords[0]-1][newCoords[1]-1].occupied != "unoccupied") {
                        collision = true
                    }
                }
                //South
                collision = false
                for (let squaresMoved=1; squaresMoved<=8; squaresMoved++) {
                    newCoords = [piece.currentCoord[0], piece.currentCoord[1] - squaresMoved]
                    if (newCoords[0] >= 1 && newCoords[0] <=8 && newCoords[1] >= 1 && newCoords[1] <=8 && collision === false &&
                        gameData.squaresObject[newCoords[0]-1][newCoords[1]-1].occupied != piece.color) {
                        validMovesArray.push(squareCoordsToName(newCoords))
                    }
                    if (newCoords[0] >= 1 && newCoords[0] <=8 && newCoords[1] >= 1 && newCoords[1] <=8 &&
                        gameData.squaresObject[newCoords[0]-1][newCoords[1]-1].occupied != "unoccupied") {
                        collision = true
                    }
                }
                //East
                collision = false
                for (let squaresMoved=1; squaresMoved<=8; squaresMoved++) {
                    newCoords = [piece.currentCoord[0] + squaresMoved, piece.currentCoord[1]]
                    if (newCoords[0] >= 1 && newCoords[0] <=8 && newCoords[1] >= 1 && newCoords[1] <=8 && collision === false &&
                        gameData.squaresObject[newCoords[0]-1][newCoords[1]-1].occupied != piece.color) {
                        validMovesArray.push(squareCoordsToName(newCoords))
                    }
                    if (newCoords[0] >= 1 && newCoords[0] <=8 && newCoords[1] >= 1 && newCoords[1] <=8 &&
                        gameData.squaresObject[newCoords[0]-1][newCoords[1]-1].occupied != "unoccupied") {
                        collision = true
                    }
                }
                //West
                collision = false
                for (let squaresMoved=1; squaresMoved<=8; squaresMoved++) {
                    newCoords = [piece.currentCoord[0] - squaresMoved, piece.currentCoord[1]]
                    if (newCoords[0] >= 1 && newCoords[0] <=8 && newCoords[1] >= 1 && newCoords[1] <=8 && collision === false &&
                        gameData.squaresObject[newCoords[0]-1][newCoords[1]-1].occupied != piece.color) {
                        validMovesArray.push(squareCoordsToName(newCoords))
                    }
                    if (newCoords[0] >= 1 && newCoords[0] <=8 && newCoords[1] >= 1 && newCoords[1] <=8 &&
                        gameData.squaresObject[newCoords[0]-1][newCoords[1]-1].occupied != "unoccupied") {
                        collision = true
                    }
                }
                //Northwest
                collision = false
                for (let squaresMoved=1; squaresMoved<=8; squaresMoved++) {
                    newCoords = [piece.currentCoord[0] - squaresMoved, piece.currentCoord[1] + squaresMoved]
                    if (newCoords[0] >= 1 && newCoords[0] <=8 && newCoords[1] >= 1 && newCoords[1] <=8 && collision === false &&
                        gameData.squaresObject[newCoords[0]-1][newCoords[1]-1].occupied != piece.color) {
                        validMovesArray.push(squareCoordsToName(newCoords))
                    }
                    if (newCoords[0] >= 1 && newCoords[0] <=8 && newCoords[1] >= 1 && newCoords[1] <=8 &&
                        gameData.squaresObject[newCoords[0]-1][newCoords[1]-1].occupied != "unoccupied") {
                        collision = true
                    }
                }
                //Northeast
                collision = false
                for (let squaresMoved=1; squaresMoved<=8; squaresMoved++) {
                    newCoords = [piece.currentCoord[0] + squaresMoved, piece.currentCoord[1] + squaresMoved]
                    if (newCoords[0] >= 1 && newCoords[0] <=8 && newCoords[1] >= 1 && newCoords[1] <=8 && collision === false &&
                        gameData.squaresObject[newCoords[0]-1][newCoords[1]-1].occupied != piece.color) {
                        validMovesArray.push(squareCoordsToName(newCoords))
                    }
                    if (newCoords[0] >= 1 && newCoords[0] <=8 && newCoords[1] >= 1 && newCoords[1] <=8 &&
                        gameData.squaresObject[newCoords[0]-1][newCoords[1]-1].occupied != "unoccupied") {
                        collision = true
                    }
                }
                //Southeast
                collision = false
                for (let squaresMoved=1; squaresMoved<=8; squaresMoved++) {
                    newCoords = [piece.currentCoord[0] + squaresMoved, piece.currentCoord[1] - squaresMoved]
                    if (newCoords[0] >= 1 && newCoords[0] <=8 && newCoords[1] >= 1 && newCoords[1] <=8 && collision === false &&
                        gameData.squaresObject[newCoords[0]-1][newCoords[1]-1].occupied != piece.color) {
                        validMovesArray.push(squareCoordsToName(newCoords))
                    }
                    if (newCoords[0] >= 1 && newCoords[0] <=8 && newCoords[1] >= 1 && newCoords[1] <=8 &&
                        gameData.squaresObject[newCoords[0]-1][newCoords[1]-1].occupied != "unoccupied") {
                        collision = true
                    }
                }
                //Southwest
                collision = false
                for (let squaresMoved=1; squaresMoved<=8; squaresMoved++) {
                    newCoords = [piece.currentCoord[0] - squaresMoved, piece.currentCoord[1] - squaresMoved]
                    if (newCoords[0] >= 1 && newCoords[0] <=8 && newCoords[1] >= 1 && newCoords[1] <=8 && collision === false &&
                        gameData.squaresObject[newCoords[0]-1][newCoords[1]-1].occupied != piece.color) {
                        validMovesArray.push(squareCoordsToName(newCoords))
                    }
                    if (newCoords[0] >= 1 && newCoords[0] <=8 && newCoords[1] >= 1 && newCoords[1] <=8 &&
                        gameData.squaresObject[newCoords[0]-1][newCoords[1]-1].occupied != "unoccupied") {
                        collision = true
                    }
                }
            break
            case ("king"):
                //Northwest
                newCoords = [piece.currentCoord[0] - 1, piece.currentCoord[1] + 1]
                if (newCoords[0] >= 1 && newCoords[0] <=8 && newCoords[1] >= 1 && newCoords[1] <=8 && collision === false &&
                    gameData.squaresObject[newCoords[0]-1][newCoords[1]-1].occupied != piece.color) {
                    validMovesArray.push(squareCoordsToName(newCoords))
                }
                //North
                newCoords = [piece.currentCoord[0], piece.currentCoord[1] + 1]
                if (newCoords[0] >= 1 && newCoords[0] <=8 && newCoords[1] >= 1 && newCoords[1] <=8 && collision === false &&
                    gameData.squaresObject[newCoords[0]-1][newCoords[1]-1].occupied != piece.color) {
                    validMovesArray.push(squareCoordsToName(newCoords))
                }
                //Northeast
                newCoords = [piece.currentCoord[0] + 1, piece.currentCoord[1] + 1]
                if (newCoords[0] >= 1 && newCoords[0] <=8 && newCoords[1] >= 1 && newCoords[1] <=8 && collision === false &&
                    gameData.squaresObject[newCoords[0]-1][newCoords[1]-1].occupied != piece.color) {
                    validMovesArray.push(squareCoordsToName(newCoords))
                }
                //East
                newCoords = [piece.currentCoord[0] + 1, piece.currentCoord[1]]
                if (newCoords[0] >= 1 && newCoords[0] <=8 && newCoords[1] >= 1 && newCoords[1] <=8 && collision === false &&
                    gameData.squaresObject[newCoords[0]-1][newCoords[1]-1].occupied != piece.color) {
                    validMovesArray.push(squareCoordsToName(newCoords))
                }
                //Southeast
                newCoords = [piece.currentCoord[0] + 1, piece.currentCoord[1] - 1]
                if (newCoords[0] >= 1 && newCoords[0] <=8 && newCoords[1] >= 1 && newCoords[1] <=8 && collision === false &&
                    gameData.squaresObject[newCoords[0]-1][newCoords[1]-1].occupied != piece.color) {
                    validMovesArray.push(squareCoordsToName(newCoords))
                }
                //South
                newCoords = [piece.currentCoord[0], piece.currentCoord[1] - 1]
                if (newCoords[0] >= 1 && newCoords[0] <=8 && newCoords[1] >= 1 && newCoords[1] <=8 && collision === false &&
                    gameData.squaresObject[newCoords[0]-1][newCoords[1]-1].occupied != piece.color) {
                    validMovesArray.push(squareCoordsToName(newCoords))
                }
                //Southwest
                newCoords = [piece.currentCoord[0] - 1, piece.currentCoord[1] - 1]
                if (newCoords[0] >= 1 && newCoords[0] <=8 && newCoords[1] >= 1 && newCoords[1] <=8 && collision === false &&
                    gameData.squaresObject[newCoords[0]-1][newCoords[1]-1].occupied != piece.color) {
                    validMovesArray.push(squareCoordsToName(newCoords))
                }
                //West
                newCoords = [piece.currentCoord[0] - 1, piece.currentCoord[1]]
                if (newCoords[0] >= 1 && newCoords[0] <=8 && newCoords[1] >= 1 && newCoords[1] <=8 && collision === false &&
                    gameData.squaresObject[newCoords[0]-1][newCoords[1]-1].occupied != piece.color) {
                    validMovesArray.push(squareCoordsToName(newCoords))
                }
                //castling
                if (piece.color === 'white' && piece.moveCount === 0 && checkingCastle === false) {
                    let threatenedSquares = []
                    gameData.boardPosition.black.forEach((blackPiece) => {
                        let threatenedSquaresForPiece = checkMovesAnyPiece(blackPiece, true)
                        threatenedSquares.push(...threatenedSquaresForPiece)
                    })
                    if (threatenedSquares.indexOf((threatenedSquare) => threatenedSquare === 'E1') === -1 &&
                        threatenedSquares.indexOf((threatenedSquare) => threatenedSquare === 'F1') === -1 &&
                        threatenedSquares.indexOf((threatenedSquare) => threatenedSquare === 'G1') === -1 &&
                        gameData.squaresObject[5][0].occupied === 'unoccupied' &&
                        gameData.squaresObject[6][0].occupied === 'unoccupied'
                        ) {
                            validMovesArray.push('G1')
                    }
                    if (threatenedSquares.indexOf((threatenedSquare) => threatenedSquare === 'E1') === -1 &&
                        threatenedSquares.indexOf((threatenedSquare) => threatenedSquare === 'D1') === -1 &&
                        threatenedSquares.indexOf((threatenedSquare) => threatenedSquare === 'C1') === -1 &&
                        gameData.squaresObject[3][0].occupied === 'unoccupied' &&
                        gameData.squaresObject[2][0].occupied === 'unoccupied'
                        ) {
                            validMovesArray.push('C1')
                    }
                }
                if (piece.color === 'black' && piece.moveCount === 0 && checkingCastle === false) {
                    let threatenedSquares = []
                    gameData.boardPosition.white.forEach((whitePiece) => {
                        let threatenedSquaresForPiece = checkMovesAnyPiece(whitePiece, true)
                        threatenedSquares.push(...threatenedSquaresForPiece)
                    })
                    if (threatenedSquares.indexOf((threatenedSquare) => threatenedSquare === 'E8') === -1 &&
                        threatenedSquares.indexOf((threatenedSquare) => threatenedSquare === 'F8') === -1 &&
                        threatenedSquares.indexOf((threatenedSquare) => threatenedSquare === 'G8') === -1 &&
                        gameData.squaresObject[5][7].occupied === 'unoccupied' &&
                        gameData.squaresObject[6][7].occupied === 'unoccupied'
                        ) {
                            validMovesArray.push('G8')
                    }
                    if (threatenedSquares.indexOf((threatenedSquare) => threatenedSquare === 'E8') === -1 &&
                        threatenedSquares.indexOf((threatenedSquare) => threatenedSquare === 'D8') === -1 &&
                        threatenedSquares.indexOf((threatenedSquare) => threatenedSquare === 'C8') === -1 &&
                        gameData.squaresObject[3][7].occupied === 'unoccupied' &&
                        gameData.squaresObject[2][7].occupied === 'unoccupied'
                        ) {
                            validMovesArray.push('C8')
                    }
                }
            break
        }
    }
    
    
    return validMovesArray
}

function checkValidMovesForCheck(piece) {
    let newGameState = JSON.parse(JSON.stringify(gameData))
    let validMovesArray = []
    let possibleValidMovesArray = []
    possibleValidMovesArray = checkMovesAnyPiece(piece)
    possibleValidMovesArray.forEach((possibleValidMove) => {
        let newCoords = squareNameToCoords(possibleValidMove)
        if (piece.color === "white") {
            let newPiece = newGameState.boardPosition.white.find((searchingPiece) => searchingPiece.pieceId === piece.pieceId)
            newPiece.currentSpot = squareCoordsToName(newCoords)
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


function checkValidMoves(piece) {
    let validMovesArray = []
    if (gameData.turn === piece.color) {
        validMovesArray = checkValidMovesForCheck(piece)
    }
    return validMovesArray
}

function switchTurns(currentMoverColor) {
    if (currentMoverColor === "white") {
        gameData.turn = "black"
    }
    else if (currentMoverColor === "black") {
        gameData.turn = "white"
    }

    console.log(gameData.turn,"to move")
}

function checkForCheckmate (gameState) {
    let validMoveCount = 0
    let victor = ''
    if(gameState.turn === "white") {
        gameState.boardPosition.white.forEach((piece) => {
            let validMovesArray = checkValidMoves(piece)
            validMoveCount +- validMovesArray.length
            victor = "Black"
        })
    }
    if(gameState.turn === "black") {
        gameState.boardPosition.black.forEach((piece) => {
            let validMovesArray = checkValidMoves(piece)
            validMoveCount +- validMovesArray.length
            victor = "White"
        })
    }
    let check = checkForCheck(gameState)
    if(check === true && validMoveCount === 0) {
        console.log(`${victor} wins, congratulations!`)
    }
}


function movePiece(piece, pieceObject, endingSquare) {
    console.log(piece,endingSquare)
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


function onGamePieceSelect(event) {
    if(currentSelectedPiece.piece === null) {
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
        event.stopPropagation()
        recolorBoard()
        resetCurrentPiece()
    } 
}

function onSquareClick (event) {
    let square = event.currentTarget
    let {piece,pieceObject,validMovesArray} = currentSelectedPiece || {}
    let squareId = square.id
    if(piece && pieceObject && validMovesArray.length > 0 && validMovesArray.indexOf(squareId) != -1) {
        movePiece(piece, pieceObject, square)
    }
}







function populateValidMoves (gameData) {
    let pieces = [...gameData.boardPosition.white,...gameData.boardPosition.black]
    pieces.forEach((piece) => {
        let pieceObject = document.querySelector(`#${piece.pieceId}`)
        pieceObject.setAttribute('listener','true')
        pieceObject.addEventListener('click', onGamePieceSelect)
    })
}







let squaresObject = []
let allPieces = {white: whitePieces, black: blackPieces}
let currentSelectedPiece = {piece:null, pieceObject:null, validMovesArray:[]}

resetBoard()

let gameData = {turn: "white", moveCounter: 0, boardPosition: allPieces, squaresObject: squaresObject}



console.log(checkForCheck(gameData))
populateValidMoves(gameData)
//console.log(squaresObject)
//console.log(whitePieces)

//console.log(whitePieces[2])
//console.log(checkValidMoves(whitePieces[2]))
/*function playGame() {
    for (let i = 0; i<=10; i++) {
        if (gameData.moveCounter === i) {
             populateValidMoves(gameData)
        }
    }
}*/
/*
function playGame() {
    while (true) {
        populateValidMoves
    }
}*/

//playGame()


