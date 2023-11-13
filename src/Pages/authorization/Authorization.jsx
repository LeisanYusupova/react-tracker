export const Authorization = () => {
    return (
        <>
            <script>
                window.onload = function() {
                window.YaSendSuggestToken("https://examplesite.com", {
                    "kek": true
                })
            };
            </script>
        </>
    );
};