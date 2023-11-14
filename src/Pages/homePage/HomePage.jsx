
export const HomePage = () => {
    document.addEventListener("DOMContentLoaded", function() {
        window.onload = () => {
            document.getElementById("suggest").onclick = () => {
                window.YaAuthSuggest.init({
                        client_id: '202f06d8b9824ee680dd9201edf6bf64',
                        response_type: 'token',
                        redirect_uri: 'https://react-tracker-ochre.vercel.app/authorization'
                    },
                    '--https://react-tracker-ochre.vercel.app/--'
                )
                    .then(({handler}) => handler())
                    .then(async (data) => {
                        console.log(data);
                    })
                    .catch((error) => console.log("Что-то пошло не так: ", error));
            };
            document.getElementById("button").onclick = () => {
            };
        };
    });
    return (
        <>
            <div className="buttons">
                <button id="suggest">Саджест</button>
                <button id="button">Кнопка</button>
            </div>
        </>
    )
};