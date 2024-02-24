import {useState, useEffect} from 'react';
export const Auth = ({updateAccounts}) => {
    const [storedData, setStoredData] = useState([]);

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('storedData')) || [];
        setStoredData(storedData);
        updateAccounts(storedData);
    }, []);

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('storedData')) || [];
        setStoredData(storedData);
    }, []);

    useEffect(() => {
        updateAccounts(storedData);
    }, [storedData]);



    const handleAuthButtonClick = () => {
        window.YaAuthSuggest.init({
            client_id: '59f0959964be487a84f13f7b64a4821d',
            response_type: 'token',
            redirect_uri: 'https://react-tracker-leisan-yusupovas-projects.vercel.app/token.html'
        }, '--https://react-tracker-leisan-yusupovas-projects.vercel.app/--')
            .then(({ handler }) => handler())
            .then(async (data) => {
                try {
                    const response = await fetch(
                        `https://login.yandex.ru/info?format=json&oauth_token=${data.access_token}`,
                    );
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    const loginData = await response.json();
                    const login = loginData.login;
                    const storedData =
                        JSON.parse(window.localStorage.getItem('storedData')) || [];
                    storedData.push({
                        token: data.access_token,
                        login: login,
                    });
                    window.localStorage.setItem(
                        'storedData',
                        JSON.stringify(storedData),
                    );
                    const modifiedStoredData = JSON.parse(
                        window.localStorage.getItem('storedData'),
                    );
                    setStoredData(modifiedStoredData);
                    updateAccounts(modifiedStoredData);
                    window.localStorage.setItem('openModal', 'true');
                    window.location.reload();
                } catch {}
            })
            .catch((error) => {
                console.log('Что-то пошло не так: ', error);
            });
    }

    return (
        <div>
            <button onClick={handleAuthButtonClick}>
                Яндекс
            </button>
            <div className="wrapper-button">
                {storedData.length > 0 &&
                    storedData.map((item, index) => (
                        <div className="button-container" key={item.login}>
                            <span>{item.login}</span>
                        </div>
                    ))}
            </div>

        </div>
    );
};