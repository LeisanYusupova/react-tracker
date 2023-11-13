export const Authorization = () => {
    return (
        <>
            <script>
                window.onload = function() {
                window.YaSendSuggestToken("https://react-tracker-ochre.vercel.app", {
                    "kek": true
                })
            };
            </script>
        </>
    );
};