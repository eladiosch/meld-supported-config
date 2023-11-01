const axios = require('axios');
const fs = require('fs');

// hacky global to hold all the colours
let colorThemes = [];


// A helper function to generate the basic/initial files from our api
// This can be removed once the files are in git, as after that they will be manaually edited, 
// and running this again will overwrite!!! You have been warned
const populateTokens = async (url, cardanoNetwork, cardanoOnly) => {
  const result = await axios.get(url);
  console.log(result.data.data)
  result.data.data.map((d) => {

    let tokenType;

    if(d.isNative) {
      if(d.chainName == "cardano") {
        tokenType = "native-cardano";
      } else {
        tokenType = "native-evm"
      }
    } else {
      if(d.chainName == "cardano") {
        tokenType = "CNT";
      } else {
        tokenType = "ERC20"
      }
    }

    let chainName = d.chainName;

    if (chainName  == "cardano") {
      chainName = cardanoNetwork;
    }

    const token = {
          "tokenTicker": d.tokenSymbol,
          "tokenName": d.tokenName,
          "tokenAddress": d.tokenAddress || 'native',
          "mldId": `${chainName}-${d.tokenSymbol}-${d.tokenAddress || 'native'}`,
          "isPartent": d.isPartent,
          "isChildOf": d.isChildOf,
          "tokenIcon": d.tokenIcon,
          "tokenColorTheme": null,
          "tokenType": tokenType,
          "decimals": d.decimals,
          "CMCslug": d.slug,
          "isStableCoin": d.isStableCoin,
          "isNative": d.isNative,
          "isWrapped": null,
          "isBridged": null,
          "orgName": null,
          "orgUrl": null
      };

      colorThemes.push(d.tokenColor)

      if(!cardanoOnly) {
        fs.writeFile(__dirname + `/networks/${chainName}/tokens/${d.tokenAddress || 'native'}.json`, JSON.stringify(token, null, "\t"), (err, data) => { 
          if(err) {
            console.log(err);
          }
        });
      } else {
        if(d.chainName == "cardano") {
          fs.writeFile(__dirname + `/networks/${chainName}/tokens/${d.tokenAddress || 'native'}.json`, JSON.stringify(token, null, "\t"), (err, data) => { 
            if(err) {
              console.log(err);
            }
          });
        }
      }
  });
}

const createColorThemes = async () => {
  const uniqueColours = [...new Set(colorThemes)];

  let colors = '';

  uniqueColours.map((c, i) => colors += `${i+1}   ${c}\n`)

  fs.writeFile(__dirname + `/colors.md`, colors, (err, data) => { 
    if(err) {
      console.log(err);
    }
  });
}


// Run script to populate the files from our api as a one off action
const run = async () => {

  // Commented to avoid accidental running
  // await populateTokens("https://api.backend.meldlabs.dev/api/available-tokens", 'cardano-preview', true)
  // await populateTokens("https://staging-api.meldapp.meld.com/api/available-tokens", 'cardano-preprod', false)
  // await populateTokens("https://backend-api.meld.com/api/available-tokens", 'cardano', false)

  // createColorThemes();
}

run();