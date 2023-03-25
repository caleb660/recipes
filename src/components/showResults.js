import axios from 'axios';

const API_PATH = '/add_recipe.php';

export default (async function showResults(values) {
    axios({
        method: 'post',
        url: API_PATH,
        headers: {
            'content-type': 'application/json'
        },
        data: values,
    })
        .then(result => {
            if (result.data === "success") {
                window.alert("Your recipe has been successfully saved");
                window.location.reload();
            } else if (result.data === "bad password") {
                window.alert("The password is incorrect");
            } else {
                window.alert("Something has went wrong! Please try again.");
            }
        });
});
