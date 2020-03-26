
function verifyPieces(p){
    let piece = p.toLowerCase(p)
    let moves = '';
    switch(piece){
        case 'king':
            moves = 'horizontally, vertically and diagonally';
        break;
        case 'queen':
            moves = 'straight line horizontally, vertically or diagonally';
        break;
        case 'bishop':
            moves = 'only diagonally';
        break;
        case 'knight':
            moves = 'two squares horizontally and one square vertically';
        break;
        case 'rook':
            moves = 'one square';
        break;
        default:
            moves = 'Piece Name not Valid'
    }
    console.log(piece +' -> ' + moves)
}

let p = prompt("Type a name of a Chess Piece")
window.onload = verifyPieces(p)
