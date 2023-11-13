#### Support tooling for Meld

The Meld Supported config manages the supported tokens, NFT, chains and networks for use in the MeldApp and Mobile App.
Its used by our backend services as well as our clients.

### Development

After cloning run `npm i`. Then you are good to go!.
To run the tests its `npm run test`.

### How it works

Each token is represented by a json file containing the details of the token or NFT.

These mini config files are grouped by network (`meld`, `kanazawa` etc). We validate this list, checking for duplication, invalid schemas etc, then concatanate them into a config file _per_ network.

Our backend & frontend services then consume that config.

## ERC20 Token Support


```javascript
{
//This is the offical ticker for the specific asset. The ticker can from 2 to 8 letters or numners always represented only as capitals. In almost all cases tickers shoudl be 3 or 4 charactes. You can not use any special characters in the ticker. 
  "tokenTicker": "USDC",
    
//This is common full name of the asset. This is described in normal letters (upper lower and special characters allowed). 
  "tokenName": "USD Coin (ERC20)",
    
//This is the offical token contract and it has to be verfied in order to be accepted. More details on the requirments can be found at dev.meld.com.
  "tokenAddress": "0x777777fdd5026127f247aa92ba6dbd0ec882b095",
    
//This is the MELD internal address for a token. It is produced based on this model {network}-{tokenTicker}-{tokenAddress}.
  "mldId": "MELD-JOE-0x777777fdd5026127f247aa92ba6dbd0ec882b095",
    
//This flags the asset as the 'main' asset in a group of assets that could include bridges, wrapped and tokens on other chains.
  "isPartent": false,
    
//This flags that the token is a version of the 'main' asset. 
  "isChildOf": "0x777777fdd5026127f247aa92ba6dbd0ec882b095",
    
//This is the circluar image uplaoded to with the PR
  "tokenIcon": "usdc.svg",
    
//This is the color used in in the MELDapp We have different colors that can be selected which come close to a brand color.
  "tokenColorTheme": 2,
    
//This describes the token type. It can be native-cardano, native-evm, CNT, ERC20, ERC-1155.
  "tokenType": "ERC20",
    
//This is by default always 18. In some very special cases it can be less. 
  "decimals": 18,
    
//This is the lowercase name used in Coin Market Cap API.
  "CMCslug": "usdc",     
    
//This flags that the asset is a stable coin. This is used to show the graph in a different way. 
  "isStableCoin": false,
    
//If the token is the native gas token used to pay for transactions on a L1 or L2 then this will be flagged as true.
  "isNative": false,
    
//This flags the that the asset has been wrapped at some point. 
  "isWrapped": false,
    
//This flags that the asset is in the origial or 'main' asset. 
  "isBridged": true

  //This is the IRL organization name.
  "orgName": "Nakamigos",

//This is the organization or project URL.
  "orgUrl": "https://nakamigos.io",
}
```

For example:

```javascript
{
	"tokenTicker": "MELD",
	"tokenName": "MELD",
	"tokenAddress": "0x333000333b26ee30214b4af6419d9ab07a450400",
	"mldId": "ETH-MELD-0x333000333b26ee30214b4af6419d9ab07a450400",
	"tokenIcon": "/static/tokens/MELD.svg",
	"tokenColorTheme": "#e51b44",
	"tokenType": "ERC20",
	"decimals": 18,
	"CMCslug": "meld",
	"isStableCoin": false,
	"isNative": false,
	"isWrapped": null,
	"isBridged": null,
	"orgName": "MELD",
	"orgUrl": "https://www.meld.com"
}
```



## NFT (721/1155) Support


```javascript
//This is the schema to be used for deploying a new NFT project into the MELD token registry. THese can be either ERC721 or ERC1155.

{
//Not all NFTs have this. You might need to look into the smart contract for it. 
  "tokenTicker": "NKMGS",

//This is the main display name of the NFT
  "tokenName": "Nakamigos #8990",

//This is the token address for the specific NFT
  "tokenAddress": "0xd774557b647330C91Bf44cfEAB205095f7E6c367",

//This is either the unique ID in a collection if it's a ERC-721 or it's the ERC-1155 under a specific author.
  "tokenID": 8990,

//This is the color used in in the MELDapp We have different colors that can be selected which come close to a brand color.
  "tokenColorTheme": 2,

//This is the token type: ERC20, ERC721A, ERC721C, ERC1155
  "tokenType": "ERC721A",

//This is a name for a group of NFTs to be described under. Similar to the author but without a unique wallet address.
  "collectionName": "Nakamigos",
    
//This is a person or orgs wallet that many NFT collections or 1of1 or other works can be grouped under.
  "groupedUnder": "0x777777fdd5026127f247aa92ba6dbd0ec882b095",

//This is the icon used for representing the whoel collection.
  "collectionIcon": "nakamigos.png",

//This is the actual wallet that minted the NFTs
  "authorsName": "Nakamigos-Deployer",
  "authorAddress": "0xBAa4b7858C3277Da9cb9CdaDf405f2017aFea19A",
    
//This is the maximum numner of assets under this specific deployer.
  "maxSupply": 20000,

//mldId is setup based on the following: {tokenTicker}-{tokenAddress}-{tokenID}
  "mldId": "ETH-NKMGS-0x777777fdd5026127f247aa92ba6dbd0ec882b095-8990",
    
//The URL where the metadata can be found.
  "metaURL": "ipfs://QmaN1jRPtmzeqhp6s3mR1SRK4q1xWPvFvwqW1jyN6trir9/8990",
    
//The URL for the actual asset: jpg, png, mp4, aiff etc.
  "assetURL": "ipfs://QmYhWbMgfAjkFGf9U7ueut9csL3PpJ7fosY2VKJQmG9VH2",

//This is the blockchain in which this token was orgininally minted.
  "chainId": 1,

//This is the royalties the authoer gets per transaction. The number is from 0 to 50.
  "royalties": 5,

//nftType is showing what kind category of NFT it is: art, game, pfp, photo, genart, pass or music consumable.
  "nftType": "art",
    
//This flags the asset as a 1 of 1 art.
  "is1of1": false,
    
//This flags the asset to be used as a Persona Profile Picture (PFP).
  "isPfp": false,

//This flags the assets as a singple assets mintable many times.
  "isCollection": false,

//This flags the asset has having been bridged from somewhere else.
  "isBridged": true,

//This is the IRL organization name.
  "orgName": "Nakamigos",

//This is the organization or project URL.
  "orgUrl": "https://nakamigos.io",
    
}
```

For example:
```javascript
{
  "tokenTicker": "CDB",
  "tokenName": "CryptoDickbutt #690",
  "tokenAddress": "0x42069ABFE407C60cf4ae4112bEDEaD391dBa1cdB",
  "tokenID": 8990,
  "tokenColorTheme": 3,
  "tokenType": "ERC721A",
  "collectionName": "CryptoDickbutts S3",
  "groupedUnder": "0x777777fdd5026127f247aa92ba6dbd0ec882b095",
  "collectionIcon": "nakamigos.png",
  "authorsName": "Nakamigos-Deployer",
  "authorAddress": "0xFCD457B27EE149E74A080B2a4e482D9A5dBaf3d9",
  "maxSupply": 20000,
  "mldId": "NKMGS-0x777777fdd5026127f247aa92ba6dbd0ec882b095-8990",
  "metaURL": "ipfs://bafybeih6w5u6lrtgjny462e4kposywwzksvg4rsdp6c55g5shpe3hs2x3q/1/690.json",
  "assetURL": "ipfs://QmXUWxunVioYiTwfqisx6f8V5zPX1aAJtmn4KwQgnEkjrj",
  "chainId": 1,
  "royalties": 5,
  "nftType": "PFP",
  "is1of1": false,
  "isPfp": true,
  "isCollection": false,
  "isBridged": false,
  "orgName": "CryptoDickbutts",
  "orgUrl": "https://cryptodickbutts.com/",
}
```


### Color Theme
Tokens and NFT have a `tokenColorTheme` property. This is a id to hex colour mapping used to set and restrict the number of colours displayed. 

The full list of colour themes is

| ID  | HEX | |
|----|---------|---------|
| 1  | #e51b44 |<img src ='https://placehold.co/50x10/e51b44/e51b44' />|
| 2  | #2775ca |<img src ='https://placehold.co/50x10/2775ca/2775ca' />|
| 3  | #e4a62a |<img src ='https://placehold.co/50x10/e4a62a/e4a62a' />|
| 4  | #50AF95 |<img src ='https://placehold.co/50x10/50AF95/50AF95' />|
| 5  | #2f45c5 |<img src ='https://placehold.co/50x10/2f45c5/2f45c5' />|
| 6 | #1B314F |<img src ='https://placehold.co/50x10/1B314F/1B314F' />|
| 7  | #F1716A |<img src ='https://placehold.co/50x10/F1716A/F1716A' />|
| 8  | #E62F29 |<img src ='https://placehold.co/50x10/E62F29/E62F29' />|
| 9  | #F7931A |<img src ='https://placehold.co/50x10/F7931A/F7931A' />|
| 10 | #0033ad |<img src ='https://placehold.co/50x10/0033ad/0033ad' />|
| 11 | #525255 |<img src ='https://placehold.co/50x10/525255/525255' />|
| 12 | #9355fa |<img src ='https://placehold.co/50x10/9355fa/9355fa' />|
| 13 | #00a35c |<img src ='https://placehold.co/50x10/00a35c/00a35c' />|
| 14 | #4b2fc5 |<img src ='https://placehold.co/50x10/4b2fc5/4b2fc5' />|
| 15 | #6349a2 |<img src ='https://placehold.co/50x10/6349a2/6349a2' />|
| 16 | #000000 |<img src ='https://placehold.co/50x10/000000/000000' />|
| 17 | #BF5750 |<img src ='https://placehold.co/50x10/BF5750/BF5750' />|
| 18 | #FF007A |<img src ='https://placehold.co/50x10/FF007A/FF007A' />|
| 19  | #393939 |<img src ='https://placehold.co/50x10/393939/393939' />|
| 20 | #F00500 |<img src ='https://placehold.co/50x10/F00500/F00500' />|
| 21 | #290290 |<img src ='https://placehold.co/50x10/290290/290290' />|
| 22 | #2986F0 |<img src ='https://placehold.co/50x10/2986F0/2986F0' />|



### Contributing

While Token & NFT support is done by the MELD team, we will look at PR's raised to add token support.
Please fork and raise your PR along with a completed pull request template for consideration.

> While we would love to support all tokens from day 1, it's not aways feasable. Please don't be offended if we chose to not support your favourite memecoin at this time.

Please note that we will run validation and unit tests as part of our CI/CD, and nothing will be deployed or merged with breaking tests.
