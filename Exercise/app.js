/* JavaScript DOM Exercises 01 */

/*
  Exercise 01
  -----------
  Highlight all of the words over 8 characters long in the paragraph text (with a yellow background for example)
*/
const paragraph = document.querySelector('p');
// paragraph.innerHTML = paragraph.innerText.split(' ').map((word) => {
//   if(word.length > 8){
//     return "<div style='background-color:yellow'>" +word+"</div>"
//   }
//   return word;
// })
paragraph.innerHTML = paragraph.innerText
  .split(' ')
  .map((word) => (word.length > 8) ? `<span style='background-color:yellow'>${word}</span>` : word )
  .join(' ');

/*
  Exercise 02
  -----------
  Add a link back to the source of the text after the paragraph tag.
  (http://officeipsum.com/)
*/
const link = document.createElement('a') //<a></a>
link.href = 'http://officeipsum.com/'; //<a href='http://officeipsum.com/'></a>
link.innerText = 'Hello, please click me!'
// link.innerHTML = '<b>Hello</b>, please click me!'
document.body.appendChild(link);


/*
  Exercise 03
  -----------
  Split each new sentence on to a separate line in the paragraph text.
  A sentence can be assumed to be a string of text terminated with a period (.)
*/
// const para = paragraph.innerHTML.split('.').join('.</p><p>') + '</p>'
paragraph.innerHTML = paragraph.innerHTML.split('.').join('.<br/>')



/* 
  Exercise 04
  -----------
  Count the number of words in the paragraph tag and display the count afer the heading.
  You can assume that all words are separated by one singular whitespace.
*/
const wordCount = paragraph.innerText.split(' ').length;
const wordCountDiv = document.createElement('div');
wordCountDiv.innerText = wordCount + ' words';
// document.body.insertBefore(wordCountDiv, document.querySelector('p'))
document.body.insertBefore(wordCountDiv, paragraph)

/*
  Exercise 05
  -----------
  Replace all question marks (?) with thinking faces (🤔) and exclamation marks (!) with astonished faces (😲) 
*/
// paragraph.innerHTML = paragraph.innerHTML.replaceAll("?", '🤔').replaceAll("!", '😲')
paragraph.innerHTML = paragraph.innerHTML.replace(/\?/g, '🤔').replace(/\!/g, '😲')
