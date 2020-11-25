// function that builds a grid in the "container"
function createGrid(x) {
    for (var rows = 0; rows < x; rows++) {
          $("#container").append("<div class='grid'></div>");

    };
    $(".grid").width(100);
    $(".grid").height(100);
};

// function that clears the grid
function clearGrid(){
    $(".grid").remove();
};

// function that prompts the user to select the number of boxes in a new grid
// the function then also creates that new grid
function refreshGrid(){
    var z = prompt("How many boxes per side?");
    clearGrid();
    createGrid(z);
};



// create a 16x16 grid when the page loads
// creates a hover effect that changes the color of a square to black when the mouse passes over it, leaving a (pixel) trail through the grid
// allows the click of a button to prompt the user to create a new grid
$(document).ready(function() {
    createGrid(2);

    $(".grid").mouseover(function() {
        $(this).css("background-color", "black");
        });

    $(".newGrid").click(function() {
        refreshGrid();

        $(".grid").mouseover(function() {
        $(this).css("background-color", "black");
        });
    });
});
