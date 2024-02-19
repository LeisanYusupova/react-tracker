export const Auth = () => {
    // let authHandler;
    const handleAuthButtonClick = () => {
        // if (authHandler && typeof authHandler.unmount === 'function') {
        //     authHandler.unmount();
        // }

            window.YaAuthSuggest.init({
                client_id: '59f0959964be487a84f13f7b64a4821d',
                response_type: 'token',
                redirect_uri: 'https://react-tracker-leisan-yusupovas-projects.vercel.app/token.html'
            }, '--https://react-tracker-leisan-yusupovas-projects.vercel.app/--')
                .then(({ handler }) => {
                    // authHandler = handler;
                    return handler();
                })
                .then(async (data) => {
                    console.log(data);
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
