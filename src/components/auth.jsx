export const Auth = () => {
    const handleAuthButtonClick = () => {
        const script = document.createElement('script');
        script.src = 'https://yastatic.net/s3/passport-sdk/autofill/v1/sdk-suggest-with-polyfills-latest.js';
        document.body.appendChild(script);

        script.onload = () => {
            window.YaAuthSuggest.init({
                client_id: '202f06d8b9824ee680dd9201edf6bf64',
                response_type: 'token',
                redirect_uri: 'https://react-tracker-ty5h.vercel.app/'
            }, '--https://react-tracker-ty5h.vercel.app/--')
                .then(({ handler }) => handler())
                .then(async (data) => {
                    console.log(data);
                });
        };

        // Удалить скрипт после выполнения
        script.onload = () => {
            document.body.removeChild(script);
        };
    };

    return (
        <div>
            <button onClick={handleAuthButtonClick}>
                Auth
            </button>
        </div>
    );
};
