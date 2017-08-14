var friends = [ "Shala", "Merissa", "Kim", "Andre", "Bria" ];
    numberOfLines = 99;

document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('sing');
    button.addEventListener('click', singSong);
});

function singSong() {
    for (var i = 0; i < friends.length; i++) {
        var friendDiv = document.createElement('div');
        friendDiv.className = 'friendDiv';
        var name = document.createElement('h3');
        name.innerText = friends[i];
        friendDiv.appendChild(name);

        for (var j = numberOfLines; j > 0; j--) {
            var log = document.createElement('p');
            var k = j - 1;

            if (j > 2) {
                log.innerText = j + ' lines of code in the file, ' + j + ' lines of code, ' + friends[i] + ' strikes one out, clears it all out, ' + k + ' lines of code in the file, ';
            } else if (j === 2) {
                log.innerText = j + ' lines of code in the file, ' + j + ' lines of code, ' + friends[i] + ' strikes one out, clears it all out, ' + k + ' line of code in the file, ';
            } else {
                log.innerText = j + ' line of code in the file, ' + j + ' line of code, ' + friends[i] + ' strikes one out, clears it all out, no more lines of code in the file.';
            }

            friendDiv.appendChild(log);
        }

        document.body.appendChild(friendDiv);
    }
}
