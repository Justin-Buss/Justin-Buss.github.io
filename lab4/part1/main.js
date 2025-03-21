// Name: Justin Buss
// File: main.js
// Date Created: March 21, 2025
// Date last modified: March 21, 2025
// Description: The javascript for index.html

//1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}


//2. RAW TEXT STRINGS

storyText = 'It was 94 fahrenheit outside, so :insertCharacter: went for a walk. When they got to :insterLocation:, they stared in horror for a few moments, then :insertEvent:. :name: saw the whole thing, but was not surprised — :insertCharacter: weighs 300 pounds, and it was a hot day.'
//Character array
characterArray = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
//Location array
locationArray = ['the soup kitchen', 'Disneyland', 'the White House'];
//Event array
eventArray = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

//3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION
randomize.addEventListener('click', result);

function result() {
    newStory = storyText;
    //selects a random choice from the lost of arrays
    insertCharacter = randomValueFromArray(characterArray);
    insertLocation = randomValueFromArray(locationArray);
    insertEvent = randomValueFromArray(eventArray);

  //if custom name not blank, replace customName with inserted name
  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceALL('Bob', name)
  }//else name is Bob

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300/14);
    const temperature =  Math.round((94-32)/1.8);
    newStory = newStory.replaceALL('300 pounds', weight + ' stones')
    newStory = newStory.replaceALL('94 fahrenheit', temperature + ' centigrade')
  }


  newStory = newStory.replaceALL(':insertCharcter:', insertCharacter);
  newStory = newStory.replaceALL(':insertLocation:', insertLocation);
  newStory = newStory.replaceALL(':insertEvent', insertEvent);


  story.textContent = newStory;
  story.style.visibility = 'visible';
}