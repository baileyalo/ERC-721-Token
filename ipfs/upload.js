const { create } = require("ipfs-http-client");

const ipfs = create("https://ipfs.infura.io:5001");

async function run() {
  const files = [{
    path: '/',
    content: JSON.stringify({
      name: "Madara",
      attributes: [
        {
          "trait_type": "Breed",
          "value": "Maltipoo"
        },
        {            
        "trait_type": "Eye color",
        "value": "Mocha"
        }
      ], 
       description: "The world's greatest Shinobi.",
    image: "https://gateway.pinata.cloud/ipfs/Qmcy1NtKnpeduKDFXjLGHnqTa6kN4tzQ8ekUsMVHysf8Qj",
    name: "Madara"
    })
  }];

  const result = await ipfs.add(files);
  console.log(result);
}

run();