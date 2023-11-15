// Авторизуем пользователя, используя инфу о нем.
document.getElementById('button').disabled = true;
const authorize = ({
                       default_avatar_id: defaultAvatarId,
                       display_name: displayName,
                   }) => {
    const avatarHtml = `<div class="avatar" style="background-image:url('https://avatars.mds.yandex.net/get-yapic/${defaultAvatarId}/islands-middle')"></div>`;
    const nameHtml = `<div class="name">${displayName}</div>`;

    document.getElementById("auth").innerHTML = `${avatarHtml}${nameHtml}`;
};

// Делаем запрос за инфой о пользователе.
const fetchYandexData = (token) =>
    fetch(`https://login.yandex.ru/info?format=json&oauth_token=${token}`).then(
        (res) => res.json()
    );

window.onload = () => {
    document.getElementById("suggest").onclick = () => {
        console.log('click');
        YaAuthSuggest.init({
                client_id: '202f06d8b9824ee680dd9201edf6bf64',
                response_type: 'token',
                redirect_uri: 'https://react-tracker-ty5h.vercel.app/authorization.html'
            },
            '--https://react-tracker-ty5h.vercel.app/--'
        )
            .then(({ handler }) => handler())
            .then(async (data) => {
                const result = await fetchYandexData(data.access_token);
                authorize(result);
                console.log(result, data);
                localStorage.setItem('token', data.access_token);
                document.getElementById('button').disabled = false;
                document.getElementById('button').onclick = () => {
                    window.location.href = 'https://tracker.seven-group.pro/calculation'
                }
            })
            .catch((error) => console.log("Что-то пошло не так: ", error));
    };
};
