# Crpyto-converter
## Look at the page in action (https://boring-yalow-97ef08.netlify.app/ "Crypto converter")
## Which features are on the page
>1. Page design with html and css
>2. Getting data from api(in js: responeBtc...) for currencies(for example how much is 1$ in  BTC - get data from api), with using function fetch()
>3. Displaying div(in html: id="currency-price") when text is selected in div(in html: class="selectable-text-area")
>4. Getting value from selected text in to nubmers(in js: const selectedText = window.getSelection().toString().trim())
>5. And then multiplying and appending value to the div(in html: id="currency-price") - ( return currencenyDiv.innerHTML = (responseBtc * parseInt(selectedText)).toFixed(8) + " Bitcoin") Note: toFixed(8) means max 8 decimal numbers displaying
>6. Adding selcet element to the html and then convrting from selected from api(for examaple : ETH)
