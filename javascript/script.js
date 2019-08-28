document.addEventListener("keydown", e => {
    let road;
    if (e.key == "ArrowRight") {
        road = document.getElementById("ancorone");
        if (road != null)
            this.document.location.href = road.href;
        //ancorone
    } else if (e.key == "ArrowUp") {
        road = document.getElementById("ancortwo");
        if (road != null)
            this.document.location.href = road.href;
        //ancortwo
    } else if (e.key == "ArrowDown") {
        road = document.getElementById("ancorthree");
        if (road != null)
            this.document.location.href = road.href;
        //ancorthree
    } else if (e.key == "ArrowLeft") {
        road = document.getElementById("ancorfour");
        if (road != null)
            this.document.location.href = road.href;
        //ancorfour
    }
})