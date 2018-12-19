# Senso

### Choose a meaningful name for that brand new JS framework you are developing

So you want to create a new framework, uh? But how will it stand out from the plethora of already existing ones? It has to have a nice, catchy name. And if that name makes sense with your framework's purpose, that's even better.
What ? You'd rather spend the time for searching that name actually developing?

Fear no more ! With this ***incredible new framework/package/whatever man you have to use this*** called Senso, all of the research will be done for you and you will only have to pick that one name you prefer over the proposed ones! 


### In a more serious tone

Senso uses [moby](https://github.com/words/moby) as a base to retrieve synonyms of the desired idea.

The dictionary.json file is taken from [here](https://github.com/words/moby/blob/master/words.txt).
It has been rearranged as a JSON file for better usability.

You can use pretty much any file following this format (commas for convenience): 

```json
{
  "beer": "drinks,alcohol,beverage",
  "pizza": "food,snack"
}
```

## Usage


The words translated and returned in a JSON object are randomly chosen among the words matching the ideas provided.
The number of words returned is defined by the second parameter of the Generator constructor.

```javascript
// Create the name generator with an array containing various ideas
// Pick 2 words out of the matching ones
let nameGenerator = new Generator(['fun', 'drink','club','night','bar','dance','lounge'], 2);
// Handle the result
nameGenerator.generateNames().then(function (names) {
    // Do whatever you want with the result
    ...
    console.log(names);
    ...
});
```

The code above will produce the following output :

```json
{
  "cabaret":[
    {
      "language":"ar",
      "translation":"ملهى",
      "romanized":"mlh~"
    },
    {
      "language":"es",
      "translation":"cabaret"
    },
    {
      "language":"fr",
      "translation":"cabaret"
    },
    {
      "language":"ja",
      "translation":"キャバレー",
      "romanized":"kiyabare"
    },
    {
      "language":"ko",
      "translation":"카바레",
      "romanized":"kabare"
    },
    {
      "language":"ru",
      "translation":"кабаре",
      "romanized":"kabare"
    }
  ],
  "nightclub":[
    {
      "language":"ar",
      "translation":"ملهى ليلي",
      "romanized":"mlh~ lyly"
    },
    {
      "language":"es",
      "translation":"Club nocturno"
    },
    {
      "language":"fr",
      "translation":"boîte de nuit"
    },
    {
      "language":"ja",
      "translation":"ナイトクラブ",
      "romanized":"naitokurabu"
    },
    {
      "language":"ko",
      "translation":"나이트 클럽",
      "romanized":"naiteu keulreob"
    },
    {
      "language":"ru",
      "translation":"ночной клуб",
      "romanized":"nochnoy klub"
    }
  ]
}
```