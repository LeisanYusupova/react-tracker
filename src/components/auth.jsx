export const Auth = () => {
    let authHandler;
    let isInitInProgress = false;

    const handleAuthButtonClick = () => {
        if (authHandler) {
            authHandler.destroy();
            authHandler = null;
        }

        if (isInitInProgress) {
            return;
        }

        isInitInProgress = true;

        window.YaAuthSuggest.init({
            client_id: '59f0959964be487a84f13f7b64a4821d',
            response_type: 'token',
            redirect_uri: 'https://react-tracker-leisan-yusupovas-projects.vercel.app/token.html'
        }, '--https://react-tracker-leisan-yusupovas-projects.vercel.app/--')
            .then(({ handler }) => {
                authHandler = handler;
                isInitInProgress = false;
                return handler();
            })
            .then(async (data) => {
                console.log(data);
            })
            .catch((error) => {
                console.error('Error during initialization:', error);
                isInitInProgress = false;
            });
    };

    return (
        <div>
            <button onClick={handleAuthButtonClick}>
                Яндекс
            </button>
        </div>
    );
};
