function sattHojd() {
    var bredden = screen.width;
    if (bredden > 768) {
        var hojden = screen.height;
        $("#startsida").css("height", hojden + 'px')
        $("#tidigareProjekt").css("height", hojden + 'px')
        $("#varaTjanster").css("height", hojden + 'px')
        $("#kontakt").css("height", hojden + 'px')
    }
}