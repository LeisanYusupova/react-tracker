export const Auth = () => {
    const handleAuthButtonClick = () => {
            window.YaAuthSuggest.init({
                client_id: '202f06d8b9824ee680dd9201edf6bf64',
                response_type: 'token',
                redirect_uri: 'https://react-tracker-ty5h.vercel.app/token.html'
            }, '--https://react-tracker-ty5h.vercel.app/--')
                .then(({ handler }) => handler())
                .then(async (data) => {
                    console.log(data);
                });

    };

    return (
        <div>
            <button onClick={handleAuthButtonClick}>
                Auth
            </button>
        </div>
    );
};
