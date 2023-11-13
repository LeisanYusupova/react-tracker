

export const HomePage = () => {
    document.addEventListener("DOMContentLoaded", function() {
        window.onload = function () {
            window.YaAuthSuggest.init({
                    client_id: '202f06d8b9824ee680dd9201edf6bf64',
                    response_type: 'token',
                    redirect_uri: 'https://react-tracker-ochre.vercel.app/authorization'
                },
                'https://react-tracker-ochre.vercel.app/', {
                    view: 'button',
                    parentId: 'container',
                    buttonView: 'main',
                    buttonTheme: 'light',
                    buttonSize: 'm',
                    buttonBorderRadius: 0
                })
                .then(function (result) {
                    return result.handler()
                })
                .then(function (data) {
                    console.log('Сообщение с токеном: ', data);
                    document.body.innerHTML += `Сообщение с токеном: ${JSON.stringify(data)}`;
                })
                .catch(function (error) {
                    console.log('Что-то пошло не так: ', error);
                    document.body.innerHTML += `Что-то пошло не так: ${JSON.stringify(error)}`;
                });
        }
    })

    return (
        <div>
            <div id="container">Authorization</div>
        </div>
    );
};