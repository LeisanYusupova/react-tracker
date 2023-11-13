export const Calculation  = () => {
    const requestOptions = {
        method: 'GET',
        mode: 'no-cors',
        headers: {
            'Authorization': 'OAuth y0_AgAAAAAjDSwQAArFuQAAAADxFlH4pT5rM82wR9aup7MuB6eVNUKtaYg',
            'Content-Type': 'application/json',
            'X-Org-ID': '7031733',
        },
    };

    fetch('https://api.tracker.yandex.net/v2/worklog?createdBy=leisanyagmurova&start=from:2023-11-01T00:00:00.008&start=to:2023-11-30T00:00:00.00', requestOptions)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
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