import {useState} from 'react';
export const Auth = () => {
    const [authInProgress, setAuthInProgress] = useState(false);
    const handleAuthButtonClick = () => {
        if (!authInProgress) {
            setAuthInProgress(true);
            window.YaAuthSuggest.init({
                client_id: '59f0959964be487a84f13f7b64a4821d',
                response_type: 'token',
                redirect_uri: 'https://react-tracker-leisan-yusupovas-projects.vercel.app/token.html'
            }, '--https://react-tracker-leisan-yusupovas-projects.vercel.app/--')
                .then(({ handler }) => handler())
                .then(async (data) => {
                    console.log(data);
                    setAuthInProgress(false);
                })
                .catch((error) => {
                    console.log('Что-то пошло не так: ', error);
                    setAuthInProgress(false);
                });
        }
    }

    return (
        <div>
            <button onClick={handleAuthButtonClick}>
                Яндекс
            </button>
        </div>
    );
};