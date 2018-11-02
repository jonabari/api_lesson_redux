// Background image is NASA api pic of the day
function getImage(){

    var key = '8VGfPrXF3DyfP5agTz5qj23DxCB5pBg5BBkCWLg8'
    var url = `https://api.nasa.gov/planetary/apod?api_key=${key}`

    $.ajax({
       url: url,
       method: 'GET'
    }).then(function(response) {

       var imgURL= response.url;    
       document.body.style.backgroundImage = `url(${imgURL})`;
       document.body.style.backgroundSize = 'cover';
    });
};

// Pulling categories from opentdb api (no key required)
function getCategories(){

    var url = 'https://opentdb.com/api_category.php';

    $.ajax({
    url: url,
    method: "GET"
    }).then(function(response) {

    var data = response.trivia_categories;

    // BONUS: Sort categories alphabetically
    data.sort(function(a, b) {
        var textA = a.name.toUpperCase();
        var textB = b.name.toUpperCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
    // ------------------------------------

    for (let i = 0 ; i < data.length ; i++){
    
        var category = $('<a>');
        category.addClass('dropdown-item');
        category.attr('data-id', data[i].id);
        category.text(data[i].name);
     
        $('#categories').append(category);
        };
    });
};

// Render a quiz based on the selected category
$('#categories').on('click', '.dropdown-item', function(event){
    event.preventDefault();
    $('#questions').empty();

    var id = $(this).attr('data-id');
    var url = `https://opentdb.com/api.php?amount=5&difficulty=easy&category=${id}`;

    $.ajax({
        url: url,
        method: "GET"
        }).then(function(response) {

            var data = response.results;

            var selection = $('<h3>');
            selection.html(data[0].category);
            $('#questions').append('<br>', selection, '<br>');

            for (let i = 0 ; i < data.length ; i++){
                var question = $('<h5>');
                question.html(`#${i+1}. ${data[i].question}`);

                var answer = $('<h6>');
                answer.html(`ANSWER: ${data[i].correct_answer}`);

                $('#questions').append(question, answer, '<br>');
            };

            //BONUS: Differentiate between boolean and multiple choice type questions, and list the possible answers
    }); 
});

getImage();
getCategories();
