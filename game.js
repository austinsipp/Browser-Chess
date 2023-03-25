let gameBoard = document.querySelector("#gameBoard")


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
        row.append(square)
    }
    gameBoard.append(row)
}
recolorBoard()



let allPieces = {white: whitePieces, black: blackPieces}

let gameData = {turn: "white", boardPosition: allPieces}

let squaresObject = []


function mapPiecesToSquaresObject() {
    allPieces.white.forEach((piece) => {
        squaresObject[piece.currentCoord[0]-1][piece.currentCoord[1]-1].occupied = 'white'
    })
    allPieces.black.forEach((piece) => {
        squaresObject[piece.currentCoord[0]-1][piece.currentCoord[1]-1].occupied = 'black'
    })
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
            squaresObject[column-1].push([])
            squaresObject[column-1][row-1].push(
                {
                    squareName: squareCoordsToName([row,column]),
                    squareCoords: [row,column],
                    occupied: "unoccupied"
                })
        }
    }
    mapPiecesToSquaresObject()
}


function checkValidMoves(piece) {
    let validMovesArray = []
    if (gameData.turn === piece.color) {
        switch(piece.pieceType) {
            case ("pawn"):
                let validMoveCounter = 0
                //capturing
                if (piece.color === "white") {
                    let newCoords = [piece.currentCoord[0] - 1, piece.currentCoord[1] + 1]
                    if (newCoords[0] >= 1 && newCoords[0] <=8 && newCoords[1] >= 1 && newCoords[1] <=8 &&
                        squaresObject[newCoords[0]-1][newCoords[1]-1][0].occupied === "black") {
                        validMovesArray.push(squareCoordsToName(newCoords))
                        validMoveCounter++
                    }
                    newCoords = [piece.currentCoord[0] + 1, piece.currentCoord[1] + 1]
                    if (newCoords[0] >= 1 && newCoords[0] <=8 && newCoords[1] >= 1 && newCoords[1] <=8 &&
                        squaresObject[newCoords[0]-1][newCoords[1]-1][0].occupied === "black") {
                        validMovesArray.push(squareCoordsToName(newCoords))
                        validMoveCounter++
                    }
                }
                if (piece.color === "black") {
                    let newCoords = [piece.currentCoord[0] - 1, piece.currentCoord[1] - 1]
                    console.log("checking",newCoords)
                    if (newCoords[0] >= 1 && newCoords[0] <=8 && newCoords[1] >= 1 && newCoords[1] <=8 &&
                        squaresObject[newCoords[0]-1][newCoords[1]-1][0].occupied === "white") {
                        validMovesArray.push(squareCoordsToName(newCoords))
                        validMoveCounter++
                    }
                    newCoords = [piece.currentCoord[0] + 1, piece.currentCoord[1] - 1]
                    console.log("checking",newCoords)
                    if (newCoords[0] >= 1 && newCoords[0] <=8 && newCoords[1] >= 1 && newCoords[1] <=8 &&
                        squaresObject[newCoords[0]-1][newCoords[1]-1][0].occupied === "white") {
                        validMovesArray.push(squareCoordsToName(newCoords))
                        validMoveCounter++
                    }
                }
                //first move option to move one or two
                if (piece.moveCount === 0) {
                    for(let squaresMoved = 1; squaresMoved <= 2; squaresMoved++) {
                        let newCoords = []
                        if (piece.color === "white") {
                            newCoords = [piece.currentCoord[0], piece.currentCoord[1] + squaresMoved]
                            console.log("checking",newCoords)
                        } else if (piece.color === "black") {
                            newCoords = [piece.currentCoord[0], piece.currentCoord[1] - squaresMoved]
                            console.log("checking",newCoords)
                        }
                        if (newCoords[0] >= 1 && newCoords[0] <=8 && newCoords[1] >= 1 && newCoords[1] <=8 &&
                            squaresObject[newCoords[0]-1][newCoords[1]-1][0].occupied === "unoccupied") {
                            validMovesArray.push(squareCoordsToName(newCoords))
                            validMoveCounter++
                        }
                    }
                }
                //subsequent moves only 1 forward
                if (piece.moveCount != 0) {
                    let newCoords = []
                    if (piece.color === "white") {
                        newCoords = [piece.currentCoord[0], piece.currentCoord[1] + 1]
                        console.log("checking",newCoords)
                    } else if (piece.color === "black") {
                        newCoords = [piece.currentCoord[0], piece.currentCoord[1] - 1]
                        console.log("checking",newCoords)
                    }
                    if (newCoords[0] >= 1 && newCoords[0] <=8 && newCoords[1] >= 1 && newCoords[1] <=8 &&
                        squaresObject[newCoords[0]-1][newCoords[1]-1][0].occupied === "unoccupied") {
                        validMovesArray.push(squareCoordsToName(newCoords))
                        validMoveCounter++
                    }
                }
            break
            case ("knight"):
    
            break
            case ("bishop"):
    
            break
            case ("rook"):
    
            break
            case ("queen"):
    
            break
            case ("king"):
    
            break
        }
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

function movePiece(piece, pieceObject, endingSquare, event) {
    event.currentTarget.append(pieceObject)
    piece.currentSpot = endingSquare
    piece.currentCoord = squareNameToCoords(endingSquare)
    piece.moveCount++
    //console.log(`running switchTurns(${gameData.turn})`)
    switchTurns(gameData.turn)
    //console.log(gameData)
    recolorBoard()
    populateValidMoves(gameData)
}

function displayValidMoves (piece, pieceObject ) {
    let validMovesArray = checkValidMoves(piece)
    console.log(validMovesArray)
    if(validMovesArray.length >= 1){
        document.querySelector(`#${piece.currentSpot}`).style.backgroundColor = "green"
        validMovesArray.forEach((validMoveSquare) => {
            document.querySelector(`#${validMoveSquare}`).style.backgroundColor = "yellow"
            document.querySelector(`#${validMoveSquare}`).addEventListener('click', function squareEventListener(e)  {
                movePiece(piece, pieceObject, validMoveSquare, e)
                pieceObject.removeEventListener('click', function pieceEventListener() {
                    displayValidMoves(piece, pieceObject)
                })
            })
        })
    }
}


function populateValidMoves (gameData) {
    if (gameData.turn === "white") {
        gameData.boardPosition.white.forEach((piece) => {
            let pieceObject = document.querySelector(`#${piece.pieceId}`)
            pieceObject.addEventListener('click', function pieceEventListener() {
                displayValidMoves(piece, pieceObject)
            })
        })
    } 
    else if (gameData.turn === "black") {
        gameData.boardPosition.black.forEach((piece) => {
            let pieceObject = document.querySelector(`#${piece.pieceId}`)
            pieceObject.addEventListener('click', function pieceEventListener() {
                displayValidMoves(piece, pieceObject)
            })
        })
    }
}








resetBoard()
//console.log(squaresObject)
//console.log(whitePieces)

//console.log(whitePieces[2])
//console.log(checkValidMoves(whitePieces[2]))

populateValidMoves(gameData)


