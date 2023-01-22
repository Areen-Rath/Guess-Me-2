$(document).ready(function() {
    getTemplates();
});

function getTemplates() {
    $.ajax({
        url: "/get-template",
        type: "get",
        success: function (result) {
            fillBlanks(result);
        },
        error: function (result) {
            alert(result.responseJSON.message);
        }
    });
}

function fillBlanks(word) {
    var gameOver = false;
    $(".clickable").click(function() {
        var correctGuess = false;
        let id = $(this).attr("id");
        var life = parseInt($("life").text());
        for (var i = 0; i < word.word.length; i++) {
            if (word.word.charAt(i).toLowerCase() === id) {
                if (life > 0 && ($(".fill_blanks").eq(i).html() === "_" || $(".fill_blanks").eq(i).html() === id)) {
                    $(".fill_blanks").eq(i).html(id);
                    correctGuess = true;
                    if ($("#blanks").text() === word.word.toLowerCase()) {
                        $("#result").text("You Win!");
                        correctGuess = true;
                        gameOver = true;
                    }
                }
            }
        }
    });
}