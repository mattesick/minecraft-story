document.addEventListener("keydown", e => {
    let road;
    if (e.key == "1") {
        road = document.getElementById("anco    rone");
        if (road != null)
            this.document.location.href = road.href;
        //ancorone
    } else if (e.key == "2") {
        road = document.getElementById("ancortwo");
        if (road != null)
            this.document.location.href = road.href;
        //ancortwo
    } else if (e.key == "3") {
        road = document.getElementById("ancorthree");
        if (road != null)
            this.document.location.href = road.href;
        //ancorthree
    } else if (e.key == "4") {
        road = document.getElementById("ancorfour");
        if (road != null)
            this.document.location.href = road.href;
        //ancorfour
    }
})