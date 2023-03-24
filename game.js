let gameBoard = document.querySelector("#gameBoard")

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
    return column + row
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
    gameBoard.append(row)
}


let whitePieces = [
    {
        icon: "./assets/whitePawn.png",
        initialSpot:"A2",
        pieceType: "pawn"
    },
    {
        icon: "./assets/whitePawn.png",
        initialSpot:"B2",
        pieceType: "pawn"
    },
    {
        icon: "./assets/whitePawn.png",
        initialSpot:"C2",
        pieceType: "pawn"
    },
    {
        icon: "./assets/whitePawn.png",
        initialSpot:"D2",
        pieceType: "pawn"
    },
    {
        icon: "./assets/whitePawn.png",
        initialSpot:"E2",
        pieceType: "pawn"
    },
    {
        icon: "./assets/whitePawn.png",
        initialSpot:"F2",
        pieceType: "pawn"
    },
    {
        icon: "./assets/whitePawn.png",
        initialSpot:"G2",
        pieceType: "pawn"
    },
    {
        icon: "./assets/whitePawn.png",
        initialSpot:"H2",
        pieceType: "pawn"
    },
    {
        icon: "./assets/whiteRook.png",
        initialSpot:"A1",
        pieceType: "rook"
    }
    ,
    {
        icon: "./assets/whiteKnight.png",
        initialSpot:"B1",
        pieceType: "knight"
    }
    ,
    {
        icon: "./assets/whiteBishop.png",
        initialSpot:"C1",
        pieceType: "bishop"
    }
    ,
    {
        icon: "./assets/whiteQueen.png",
        initialSpot:"D1",
        pieceType: "queen"
    }
    ,
    {
        icon: "./assets/whiteKing.png",
        initialSpot:"E1",
        pieceType: "king"
    }
    ,
    {
        icon: "./assets/whiteBishop.png",
        initialSpot:"F1",
        pieceType: "bishop"
    }
    ,
    {
        icon: "./assets/whiteKnight.png",
        initialSpot:"G1",
        pieceType: "knight"
    }
    ,
    {
        icon: "./assets/whiteRook.png",
        initialSpot:"H1",
        pieceType: "rook"
    }
]


let blackPieces = [
    {
        icon: "./assets/blackPawn.png",
        initialSpot:"A7",
        pieceType: "pawn"
    },
    {
        icon: "./assets/blackPawn.png",
        initialSpot:"B7",
        pieceType: "pawn"
    },
    {
        icon: "./assets/blackPawn.png",
        initialSpot:"C7",
        pieceType: "pawn"
    },
    {
        icon: "./assets/blackPawn.png",
        initialSpot:"D7",
        pieceType: "pawn"
    },
    {
        icon: "./assets/blackPawn.png",
        initialSpot:"E7",
        pieceType: "pawn"
    },
    {
        icon: "./assets/blackPawn.png",
        initialSpot:"F7",
        pieceType: "pawn"
    },
    {
        icon: "./assets/blackPawn.png",
        initialSpot:"G7",
        pieceType: "pawn"
    },
    {
        icon: "./assets/blackPawn.png",
        initialSpot:"H7",
        pieceType: "pawn"
    },
    {
        icon: "./assets/blackRook.png",
        initialSpot:"A8",
        pieceType: "rook"
    }
    ,
    {
        icon: "./assets/blackKnight.png",
        initialSpot:"B8",
        pieceType: "knight"
    }
    ,
    {
        icon: "./assets/blackBishop.png",
        initialSpot:"C8",
        pieceType: "bishop"
    }
    ,
    {
        icon: "./assets/blackQueen.png",
        initialSpot:"D8",
        pieceType: "queen"
    }
    ,
    {
        icon: "./assets/blackKing.png",
        initialSpot:"E8",
        pieceType: "king"
    }
    ,
    {
        icon: "./assets/blackBishop.png",
        initialSpot:"F8",
        pieceType: "bishop"
    }
    ,
    {
        icon: "./assets/blackKnight.png",
        initialSpot:"G8",
        pieceType: "knight"
    }
    ,
    {
        icon: "./assets/blackRook.png",
        initialSpot:"H8",
        pieceType: "rook"
    }
]

let allPieces = {white: whitePieces, black: blackPieces}
//console.log(allPieces.white)
let gameData = {turn: "white", boardPosition: allPieces}

let squaresObject = []

/*
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
console.log(squaresObject)*/


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

resetBoard()
console.log(squaresObject)

function checkValidMoves(piece) {

}



