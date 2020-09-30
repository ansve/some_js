function refreshCurrensyCourse (currensy) {
    const req = new XMLHttpRequest();
    req.addEventListener('load', function() {
        const table = document.querySelector('tbody');
        table.innerHTML = null;
        const data = JSON.parse(this.responseText);
        data.forEach(p => {
                //console.log(`Валюта: ${p.cc} Имя валюты: ${p.txt} Курс: ${p.rate} Дата торгов: ${p.exchangedate}`);
                let str = p.cc;
                 if (str.startsWith(currensy.toUpperCase())){
                    
                    table.innerHTML += `<tr><td>${p.cc}</td><td>${p.txt}</td><td>${p.rate}</td><td>${p.exchangedate}</td></tr>`;
                 }
                
                //console.log(str);
            });
        
    });
    req.open('GET', 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json', true);
    req.send();
}





const input = document.querySelector('#currencyName');
    input.addEventListener('input', event=> {
        let currensy = input.value;
        refreshCurrensyCourse(currensy);
            //console.log(currensy);
        
        
        
    });




/*
$('button').click(function(){
    $.get('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json').success(
                function(data) {
             data.forEach(p => {
                console.log(`Валюта: ${p.cc} Имя валюты: ${p.txt} Курс: ${p.rate} Дата торгов: ${p.exchangedate}`);
            });
            alert('Success!');
        });
});



$('table').append('<tr><td>Валюта</td><td>Валюта</td><td>???</td><td>???</td></tr>');
*/

// var obj = {"r030":156,"txt":"Юань Женьміньбі","rate":3.9727,"cc":"CNY","exchangedate":"10.08.2020"};
// console.log(Object.keys(obj));