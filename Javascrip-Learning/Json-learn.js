function hocTieng(tieng) {
    return new Promise(function (resolve, reject) {
        if (tieng == "Anh") {
            
            resolve("Hoc Dung Tieng Roi");
        } else {

            reject("Hoc Tieng Anh Di");
        }
    });
}
hocTieng("anh")
    .then(function (x) {
        console.log( x)
    })
    .catch(function (x) {
        console.log(x);
    })
