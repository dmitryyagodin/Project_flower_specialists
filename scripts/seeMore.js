var full = false;
function expandMainText() {
    if (full === false) {
        var text = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non, autem perferendis? Consectetur veritatis aliquid nam aut culpa animi exercitationem id totam. Enim, a. Et voluptate asperiores tempore recusandae molestias esse!";
        document.getElementById("main-a").innerHTML = "See less";
        full = true;
    } else {
        var text = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non, autem perferendis?";
        document.getElementById("main-a").innerHTML = "See more";
        full = false;
    }
    document.getElementById("main-text").innerHTML = text;
}
