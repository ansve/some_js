function refreshCurrensyCourse () {
    const req = new XMLHttpRequest();
    req.addEventListener('load', function() {
        const data = JSON.parse(this.responseText);
        const currensyInfo = document.querySelector('#currencyList');

        console.log(data);
    });
    req.open('GET', 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?valcode=GBP&json', true);
    req.send();
}

refreshCurrensyCourse();


// var xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json', true);
// xhr.onload = function () {
//   console.log(xhr.responseURL); // http://example.com/test
// };
// xhr.send(null);