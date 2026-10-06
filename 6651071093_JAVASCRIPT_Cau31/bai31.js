function removecolor() {
    let select = document.getElementById("colorSelect");

    let viTri = select.selectedIndex;

    if (viTri != -1) {
        select.remove(viTri);
    }
}
