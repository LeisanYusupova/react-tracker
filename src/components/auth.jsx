export const Auth = () => {
    let authHandler;
    let isInitInProgress = false;

    const handleAuthButtonClick = () => {
        if (authHandler && typeof authHandler.unmount === 'function') {
            authHandler.unmount();
        }

        if (isInitInProgress) {
            return; // Если инициализация уже запущена, выходим из функции
        }

        isInitInProgress = true;

        window.YaAuthSuggest.init({
            client_id: '59f0959964be487a84f13f7b64a4821d',
            response_type: 'token',
            redirect_uri: 'https://react-tracker-leisan-yusupovas-projects.vercel.app/token.html'
        }, '--https://react-tracker-leisan-yusupovas-projects.vercel.app/--')
            .then(({ handler }) => {
                authHandler = handler;
                isInitInProgress = false; // Сбрасываем флаг, так как инициализация завершена
                return handler();
            })
            .then(async (data) => {
                console.log(data);
            })
            .catch((error) => {
                console.error('Error during initialization:', error);
                isInitInProgress = false; // Обработка ошибки, сбрасываем флаг
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
