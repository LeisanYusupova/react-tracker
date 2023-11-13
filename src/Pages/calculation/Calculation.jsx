export const Calculation  = () => {
    const requestOptions = {
      method: 'GET', // or 'POST', 'PUT', etc., depending on your request
      mode: 'no-cors',
      headers: {
        'Authorization': 'OAuth y0_AgAAAAAjDSwQAArFuQAAAADxFlH4pT5rM82wR9aup7MuB6eVNUKtaYg',
        'Content-Type': 'application/json', // You can set this based on your request
        'X-Org-ID': '7031733', // Include the organization ID in the headers
      },
    };

    fetch('https://api.tracker.yandex.net/v2/myself', requestOptions).then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json(); // Возвращаем JSON-ответ (или другой тип ответа)
    })
        .then((data) => {
            // Обрабатываем полученные данные
            console.log(data);
        })
        .catch((error) => {
            console.error('Request failed:', error);
        });

    return (
        <>
            Calc
        </>
    )

}