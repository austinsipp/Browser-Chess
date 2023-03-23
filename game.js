let gameBoard = document.querySelector("#gameBoard")

function squareIdMap (id) {
    let row = 9 - id[0]
    let columnTransform = ["A","B","C","D","E","F","G","H"]
    let column = columnTransform[id[1]-1]
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
        currentSpot:"A2"
    },
    {
        icon: "./assets/whitePawn.png",
        initialSpot:"B2",
        currentSpot:"B2"
    },
    {
        icon: "./assets/whitePawn.png",
        initialSpot:"C2",
        currentSpot:"C2"
    },
    {
        icon: "./assets/whitePawn.png",
        initialSpot:"D2",
        currentSpot:"D2"
    },
    {
        icon: "./assets/whitePawn.png",
        initialSpot:"E2",
        currentSpot:"E2"
    },
    {
        icon: "./assets/whitePawn.png",
        initialSpot:"F2",
        currentSpot:"F2"
    },
    {
        icon: "./assets/whitePawn.png",
        initialSpot:"G2",
        currentSpot:"G2"
    },
    {
        icon: "./assets/whitePawn.png",
        initialSpot:"H2",
        currentSpot:"H2"
    },
    {
        icon: "./assets/whiteRook.png",
        initialSpot:"A1",
        currentSpot:"A1"
    }
    ,
    {
        icon: "./assets/whiteKnight.png",
        initialSpot:"B1",
        currentSpot:"B1"
    }
    ,
    {
        icon: "./assets/whiteBishop.png",
        initialSpot:"C1",
        currentSpot:"C1"
    }
    ,
    {
        icon: "./assets/whiteQueen.png",
        initialSpot:"D1",
        currentSpot:"D1"
    }
    ,
    {
        icon: "./assets/whiteKing.png",
        initialSpot:"E1",
        currentSpot:"E1"
    }
    ,
    {
        icon: "./assets/whiteBishop.png",
        initialSpot:"F1",
        currentSpot:"F1"
    }
    ,
    {
        icon: "./assets/whiteKnight.png",
        initialSpot:"G1",
        currentSpot:"G1"
    }
    ,
    {
        icon: "./assets/whiteRook.png",
        initialSpot:"H1",
        currentSpot:"H1"
    }
]


let blackPieces = [
    {
        icon: "./assets/blackPawn.png",
        initialSpot:"A7",
        currentSpot:"A7"
    },
    {
        icon: "./assets/blackPawn.png",
        initialSpot:"B7",
        currentSpot:"B7"
    },
    {
        icon: "./assets/blackPawn.png",
        initialSpot:"C7",
        currentSpot:"C7"
    },
    {
        icon: "./assets/blackPawn.png",
        initialSpot:"D7",
        currentSpot:"D7"
    },
    {
        icon: "./assets/blackPawn.png",
        initialSpot:"E7",
        currentSpot:"E7"
    },
    {
        icon: "./assets/blackPawn.png",
        initialSpot:"F7",
        currentSpot:"F7"
    },
    {
        icon: "./assets/blackPawn.png",
        initialSpot:"G7",
        currentSpot:"G7"
    },
    {
        icon: "./assets/blackPawn.png",
        initialSpot:"H7",
        currentSpot:"H7"
    },
    {
        icon: "./assets/blackRook.png",
        initialSpot:"A8",
        currentSpot:"A8"
    }
    ,
    {
        icon: "./assets/blackKnight.png",
        initialSpot:"B8",
        currentSpot:"B8"
    }
    ,
    {
        icon: "./assets/blackBishop.png",
        initialSpot:"C8",
        currentSpot:"C8"
    }
    ,
    {
        icon: "./assets/blackQueen.png",
        initialSpot:"D8",
        currentSpot:"D8"
    }
    ,
    {
        icon: "./assets/blackKing.png",
        initialSpot:"E8",
        currentSpot:"E8"
    }
    ,
    {
        icon: "./assets/blackBishop.png",
        initialSpot:"F8",
        currentSpot:"F8"
    }
    ,
    {
        icon: "./assets/blackKnight.png",
        initialSpot:"G8",
        currentSpot:"G8"
    }
    ,
    {
        icon: "./assets/blackRook.png",
        initialSpot:"H8",
        currentSpot:"H8"
    }
]



function resetBoard () {
    whitePieces.forEach((piece) => {
        let pieceObject = document.createElement("img")
        pieceObject.src = piece.icon
        pieceObject.style.height = "5.625vw"
        pieceObject.style.width = "5.625vw"
        let location = document.querySelector(`#${piece.initialSpot}`)
        location.append(pieceObject)
        })
    blackPieces.forEach((piece) => {
        let pieceObject = document.createElement("img")
        pieceObject.src = piece.icon
        pieceObject.style.height = "5.625vw"
        pieceObject.style.width = "5.625vw"
        let location = document.querySelector(`#${piece.initialSpot}`)
        location.append(pieceObject)
        })
}

resetBoard()

