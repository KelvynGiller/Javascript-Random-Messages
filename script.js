// Array of phrase objects categorized by type
const Phrases = [
  // Initial phrases
  {
    type: 'initial',
    phrases: [
      'Why so serious, ',
      'Be yourself, ',
      'Take a risk, ',
      'Keep it simple, ',
      'Life\'s a joke, ',
      'Stay focused, ',
      'Be curious, ',
      'Smile more, ',
      'Dream big, ',
      'Stay weird, ',
      'Keep going, '
    ]
  },
  // Middle phrases
  {
    type: 'middle',
    phrases: [
      'and enjoy the ride, ',
      'and laugh more, ',
      'but stay humble, ',
      'you might win, ',
      'and see what happens, ',
      'just roll with it, ',
      'and stay on track, ',
      'find answers, ',
      'it suits you, ',
      'reach for the stars, ',
      'it\'s your power, ',
      'and don\'t stop, '
    ]
  },
  // Last phrases
  {
    type: 'last',
    phrases: [
      'it\'ll all be fine.',
      'because why not?',
      'it\'s worth it.',
      'or at least learn.',
      'life is an experiment.',
      'because it\'s fun.',
      'success will follow.',
      'you\'ll discover more.',
      'good vibes only.',
      'it\'s possible.',
      'weird is good.',
      'great things await.'
    ]
  }
];

// Function to get a random element from an array
const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Function to generate a complete fortune cookie message 
const fortuneCookie = () => {
  // Extract phrases based on their type
  const initialPhrases = Phrases.find(p => p.type === 'initial').phrases;
  const middlePhrases = Phrases.find(p => p.type === 'middle').phrases;
  const lastPhrases = Phrases.find(p => p.type === 'last').phrases;

  // Check if arrays are not empty
  if (initialPhrases.length === 0 || middlePhrases.length === 0 || lastPhrases.length === 0) {
    return 'Error: One or more arrays are empty. Please check your data.';
  }

  // Generate the fortune cookie message if arrays are valid
  return `You have opened your fortune cookie! The message is: ${getRandomElement(initialPhrases)}${getRandomElement(middlePhrases)}${getRandomElement(lastPhrases)}`;
}

// Log the generated message to the console
console.log(fortuneCookie());
