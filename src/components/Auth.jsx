import {useState, useEffect} from 'react';
export const Auth = () => {
    const [storedData, setStoredData] = useState([]);

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('storedData')) || [];
        setStoredData(storedData);
    }, []);

    const handleAuthButtonClick = () => {
            window.YaAuthSuggest.init({
                client_id: '59f0959964be487a84f13f7b64a4821d',
                response_type: 'token',
                redirect_uri: 'https://react-tracker-leisan-yusupovas-projects.vercel.app/token.html'
            }, '--https://react-tracker-leisan-yusupovas-projects.vercel.app/--')
                .then(({ handler }) => handler())
                .then( (data) => {
                    console.log(data);
                    window.location.reload();
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
        </div>
    );
};