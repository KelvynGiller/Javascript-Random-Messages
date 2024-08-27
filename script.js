// Fortune Cookie Phrases
const Phrases = [
  {
    type: 'initial',
    phrases: [
      'When life gives you lemons, ',
      'If at first you don\'t succeed, ',
      'Always remember that you\'re unique, ',
      'My bed is a magical place, ',
      'If you think nobody cares, ',
      'You can\'t make everyone happy, ',
      'Why be moody, '
    ]
  },
  {
    type: 'middle',
    phrases: [
      'just add vodka, ',
      'try sending yourself a bill, ',
      'when you can be a fruit salad, ',
      'try missing a few payments, ',
      'just like everyone else, ',
      'embrace your weirdness, ',
      'at a yellow submarine, '
    ]
  },
  {
    type: 'last',
    phrases: [
      'and then everything will be just fine.',
      'but it got caught in traffic.',
      'because logic is overrated.',
      'at least the bill will get some attention.',
      'but you can at least try with tacos.',
      'that\'s just how I roll.',
      'your efforts will show.'
    ]
  }
];

//New Math.random Function

const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

//Fortune Cookie Function

const fortuneCookie = () => {
  const initialPhrases = Phrases.find(p => p.type === 'initial').phrases;
  const middlePhrases = Phrases.find(p => p.type === 'middle').phrases;
  const lastPhrases = Phrases.find(p => p.type === 'last').phrases;

  return `You have opened your fortune cookie! The message is: ${getRandomElement(initialPhrases)}${getRandomElement(middlePhrases)}${getRandomElement(lastPhrases)}`;
}


// function log 
console.log(fortuneCookie())

