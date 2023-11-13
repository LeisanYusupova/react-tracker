export const Authorization = () => {
    return (
        <>
            <script>
                document.addEventListener("DOMContentLoaded", function()
                {
                window.onload = function() {
                window.YaSendSuggestToken("https://react-tracker-ochre.vercel.app", {
                    "kek": true
                })
            }})
            </script>
        </>
    );
};