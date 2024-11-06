// TASK : "Hello NodeJS!" with ascii-art
import ASCIIArt from 'ascii-art';
ASCIIArt.font('Hello NodeJS!', 'larry3d', function(rendered) {
  console.log(rendered);
});


// TASK : Try to read the JSON file directly using the fs module. More information.
import fs from 'fs/promises';  
async function readQuotes() {
  try {
    const data = await fs.readFile('sayings.json', 'utf8');
    const quotes = JSON.parse(data);


    quotes.forEach((sayings, index) => {
    const quoteText = `"${sayings.saying.replace(/"/g, '""')}"`;
      const author = `"${sayings.author.replace(/"/g, '""')}"`;
      const numberOfChars = sayings.numberOfChars;

      console.log(`${quoteText}, ${author}, ${numberOfChars}`);
    });
  } catch (err) {
    console.error('Error reading file:', err);
  }
}

// Call the function
readQuotes();