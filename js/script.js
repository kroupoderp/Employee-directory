

document.addEventListener('DOMContentLoaded', () => {

    let avatar = document.querySelectorAll('img');
    let name_field = document.querySelectorAll("h3");
    let email_field = document.querySelectorAll("p:first-of-type");
    let city_field = document.querySelectorAll("p:last-of-type");



    // cpfl - capitalize first letter

    let regex = /\s{1}/g;

    function cpfl(string) {

        if(!regex.test(string)) {
            // if city or name consists of one word, capitalize first letter
            return string.charAt(0).toUpperCase() + string.slice(1);

        }

        // if city (not name in this case!!!) consists of two words, also
        // capitalize the letter after the whitespace
            
        else  {
            let town = string.charAt(0).toUpperCase() +
                string.slice(1, regex.lastIndex -1) + ' ' +
                string.charAt(regex.lastIndex).toUpperCase() +
                string.slice(regex.lastIndex + 1);

            console.log(town);
            return town;

        }
    }




    let xhr = new XMLHttpRequest();

    xhr.open('GET', "https://randomuser.me/api/?results=12&nat=us", true);

    xhr.onreadystatechange = function() {

        if(xhr.readyState === 4) {

            // console.log(xhr.response);

            let data = JSON.parse(xhr.responseText);

            for(let x = 0; x < data.results.length; x++) {

                let photo = data.results[x].picture.large;
                avatar[x].setAttribute('src', photo);

                let name = cpfl(data.results[x].name.first) + ' ' +
                            cpfl(data.results[x].name.last);

                name_field[x].textContent = name;

                let email = data.results[x].email;
                email_field[x].textContent = email;

                let city = data.results[x].location.city;
                city_field[x].textContent = cpfl(city);

            }
        }
    };

    xhr.send()

});





