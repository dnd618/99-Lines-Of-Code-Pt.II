var friends = [ "Shala", "Merissa", "Steph", "Andre", "Jay" ];
for(var i = 0; i < friends.length; i++) {
    console.log(friends[i]+":");

   for(var j = 99; j >= 1; j--) {
        if (j > 2) {
            console.log([j] + ' lines of code in the file, ' + [j] + ' lines of code; ' + friends[i] + ' strikes one out, clears it all out, ' + (j-1) + ' lines of code in the file' );
        } else if (j == 2) {
            console.log([j] + ' lines of code in the file, ' + [j] + ' lines of code; ' + friends[i] + ' strikes one out, clears it all out, ' + (j-1) + ' line of code in the file' );
        } else if (j = 1) {
            console.log([j] + ' line of code in the file, ' + [j] + ' line of code; ' + friends[i] + ' strikes one out, clears it all out, no more lines of code in the file' );
        }
    }
}
//Button//
document.addEventListener('DOMContentLoaded', function(){
    for(var i = 0; i < friends.length; i++) {
        console.log(friends[i]+":");
        //1st loop make div, give it a class, make & append my h3 to div//
    var friendDiv = document.createElement("div");
        friendDiv.className = "container";
        document.body.appendChild(friendDiv);
    var div = document.createElement('div');
    var para = document.createTextNode('Name');
        div.appendChild(para);

    for(var j = 99; j >= 1; j--) {
            if (j > 2) {
                console.log([j] + ' lines of code in the file, ' + [j] + ' lines of code; ' + friends[i] + ' strikes one out, clears it all out, ' + (j-1) + ' lines of code in the file' );
            } else if (j == 2) {
                console.log([j] + ' lines of code in the file, ' + [j] + ' lines of code; ' + friends[i] + ' strikes one out, clears it all out, ' + (j-1) + ' line of code in the file' );
            } else if (j = 1) {
                console.log([j] + ' line of code in the file, ' + [j] + ' line of code; ' + friends[i] + ' strikes one out, clears it all out, no more lines of code in the file' );
            }
        }
    }
}
//2nd loop make p, put lyric in p & append p to div; here is where you append div to body//
    );      

