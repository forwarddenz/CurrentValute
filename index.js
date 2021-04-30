const Current = {
    RUB: 'RUB',
    USD: 'USD',
    EUR: 'EUR'
};

const getToDay = () => {
    const date = new Date();
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
};

const renderContent = (response) => {
    const { data } = response;

    let Content = document.querySelector('.data').innerHTML;
    const Input = document.querySelector('.input');
    const btn = document.querySelector('.button');
    
    document.querySelector('.data').innerHTML = Content;

    btn.addEventListener('click', () => {
        Object.keys(data.rates).map((Current) => {
            Content = `
                <tr>
                    <td>${data.base}</td>
                    <br></br>
                    <td>${(data.rates[Current] * Input.value).toFixed(2)} USD</td>
                </tr>
            `;
        });
        console.log(Content);
        document.querySelector('.data').innerHTML = Content;
    });
}

axios.get(`https://api.ratesapi.io/api/${getToDay()}?base=${Current.RUB}&symbols=${Current.USD}`)
    .then(renderContent);