
onCheckNoOfUsers();
function onCheckNoOfUsers() {
    var vc = localStorage.getItem('viewerCount');
    if (vc) {
        vc = +vc;
        vc++;
    } else {
        vc = 1;
    }
    var ele = document.getElementById('viewerId');
    ele.innerText = vc;
    console.log(vc);
    localStorage.setItem('viewerCount', vc);
}