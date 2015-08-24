/**
 * Created by lalo on 20/08/15.
 */

function fill_array() {

    //we create the array:
    var board = new Array(5);
    for (var i = 0; i < 5; i++) {
        board[i] = new Array(5);
    }

    //fill the entire array with: "*"
    for (var a = 0; a < 5; a++) {
        for (var b = 0; b < 5; b++) {
            board[a][b] = "*";
        }
    }

    var size = 3;
    //choose the random positions for the boats
    board[Math.floor(Math.random() * size)][Math.floor(Math.random() * size)] = "boat_1";
    board[Math.floor(Math.random() * size)][Math.floor(Math.random() * size)] = "boat_2";
    board[Math.floor(Math.random() * size)][Math.floor(Math.random() * size)] = "boat_3";

    return board;
}

function draw_the_board(board) {
    var string = "<table>";
    for (var row = 0; row < 5; row++) {
        string += "<tr>";
        for (var col = 0; col < 5; col++) {
            string += "<td>" + board[row][col] + "</td>";
        }
        string += "</tr>";
    }
    string += "</table>";

    var html_board = document.getElementById("board");
    html_board.innerHTML = string;
}

function refresh_score(current_score, new_score) {
    if (new_score > 1) {
        current_score.innerHTML = "X";
    } else {
        current_score.innerHTML = new_score;
    }
}

function play() {

    var board = fill_array();
    draw_the_board(board);

    var score_boat_1 = 0, score_boat_2 = 0, score_boat_3 = 0;
    var current_score_1 = document.getElementById("score_of_boat_1"),
        current_score_2 = document.getElementById("score_of_boat_2"),
        current_score_3 = document.getElementById("score_of_boat_3");

    var div_hits = document.getElementById("hits");

    var x, y, hits = 0;

    while (true) {
        x = prompt("Deme la posición en x", 0);
        y = prompt("Deme la posición en y", 0);

        if (isNaN(x) && isNaN(y)) {
            break;
        }

        hits++;
        div_hits.innerHTML = hits;

        if (board[x][y] == "boat_1") {
            score_boat_1++;
            refresh_score(current_score_1, score_boat_1);
        } else if (board[x][y] == "boat_2") {
            score_boat_2++;
            refresh_score(current_score_2, score_boat_2);

        } else if (board[x][y] == "boat_3") {
            score_boat_3++;
            refresh_score(current_score_3, score_boat_3);
        }
        if (score_boat_1 > 1 && score_boat_2 > 1 && score_boat_3 > 1) {
            break;
        }
    }
}