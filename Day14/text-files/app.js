// Import the promise-based file system API
import { readFile } from "node:fs/promises";

// Create dynamic file path
const filePath = process.argv[2];
const searchWord = process.argv[3]?.toLowerCase();

if (!filePath) {
  console.error("Please provide a file path.");
  process.exit(1);
}

// Create an object to store words count
const wordsCount = {};

// Read the file content
const fileContent = await readFile('filePath', "utf-8");

// Split and filter the file content
const filteredArray = fileContent
  .toLowerCase()
  .split(/[\W+]/)
  .filter((word) => word);

// Count the frequency of each word
filteredArray.forEach((word) => {
  if (word in wordsCount) {
    wordsCount[word] += 1;
  } else {
    wordsCount[word] = 1;
  }
});

// Print the count of searchWord if present,
// otherwise print the frequency of all words
if (searchWord in wordsCount) {
  console.log(`${searchWord} count is: ${wordsCount[searchWord]}`);
} else if (searchWord && !wordsCount[searchWord]) {
  console.log(`${searchWord} is not found`);
} else {
  if (!searchWord) console.log(wordsCount);
}
