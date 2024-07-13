// Write a function that checks if two given strings are anagrams of each other.

function areAnagrams(str1, str2) {
    // Normalize the strings: remove non-alphabet characters and convert to lowercase
    const normalizeString = (str) => str.replace('').toLowerCase().split('').sort().join('');

    return normalizeString(str1) === normalizeString(str2);
  }
  
  console.log(areAnagrams('listen', 'silent')); // true
  console.log(areAnagrams('hello', 'world')); // false
