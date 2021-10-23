# Crpyto-converter
## Look at the page in action (https://boring-yalow-97ef08.netlify.app/ "Crypto converter")
## The list of features on the page:
>1. Page design with html and css
>2. Getting data from api(in js: responeBtc...) for currencies(for example how much is 1$ in  BTC - get data from api), with using function fetch()
>3. Displaying div(in html: id="currency-price") when text is selected in div(in html: class="selectable-text-area")
>4. Getting value from selected text in to nubmers(in js: const selectedText = window.getSelection().toString().trim())
>5. And then multiplying and appending value to the div(in html: id="currency-price") - ( return currencenyDiv.innerHTML = (responseBtc * parseInt(selectedText)).toFixed(8) + " Bitcoin") 
>>Note: toFixed(8) means max 8 decimal numbers displaying
>6. Adding selcet element to the html and then convrting from selected from api(for examaple : ETH)
>7. Generating a random number from 100 to 1000

## What I learned?
>1. Fetching data from API
>2. Generating a radnom number in custom range
>3. How to get icon from https://fontawesome.com/ and customise it
>4. How much time could simple application like this take to make ;)

## What could be better?
>1. Despite the fact that the site is optimized for mobile phone, the main function isn't working on phone. That's because it is build for chrome on desktop - and phone don't offer same functionality
>> Solution: for the cryptocurrency they have selected, I would write below how much it is worth (this text would be displayed at a certain width, typical for mobile phones)

