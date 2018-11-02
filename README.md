# Quiz Master
This is an API lesson exercise made using Javascript and CSS libraries (jQuery and Bootstrap, respectively), along with AJAX calls to the NASA and opentdb APIs.

The goal of the exercise is to dynamically render short five question quizes based on a selected category. To accomplish this, we call the opentdb API twice: first to render the available categories in a dropdown menu, then to create a quiz using the category id from the selected category.

## NASA API
In order to call the NASA API, you'll need to get a key from their [official site](https://api.nasa.gov). This example specifically calls the NASA picture of the day, which we will be using as a background for the Quiz Master application. The goal is to teach students how to make a basic AJAX call that requires basic authentication with a unique key.

## opentdb
The opentdb API does not require a key and simply returns a JSON object within the specified parameters. You will need to make two separate calls:

 * To get the categories, use https://opentdb.com/api_category.php
 * To review the parameters that you'll need to generate a URL that can render the quiz, go to: https://opentdb.com/api_config.php.