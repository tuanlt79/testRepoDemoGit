
export class Manage {
    albumList = [];
    CurrentID='';
    findID='';
    abc='';
    constructor() {

    }

    addAlbum(alb) {
        this.albumList.push(alb);
    }

    removeAlbum(albName) {
        let index = this.albumList.findIndex(
            (item) => item.tenAlbum === albName
        );
        if (index !== -1) {
            this.albumList.splice(index, 1);
        }

    }

    editAlbum(albName) {
        let index = this.albumList.findIndex(
            (item) => item.tenAlbum === albName
        );

        let edit = this.albumList[index];
        document.getElementById("linkAnh").value = edit.linkAnh;
        document.getElementById("tenAlbum").value = edit.tenAlbum;
        document.getElementById("moTa").value = edit.moTa;
        document.getElementById("loaiAlbum").value = edit.loaiAlbum;

    }

    updateAlbum(album) {
        let index = this.albumList.findIndex(
            (item) => item.tenAlbum === album.tenAlbum
        );

        this.albumList[index].tenAlbum = { ...album }


    }

    //kiểm tra trùng tên album khi bắt đầu thêm album vào
    validateAlbum(tenAlbum) {
        let index = this.albumList.findIndex(
            (item) => item.tenAlbum === tenAlbum
        );
        if (index !== -1) {

            alert("Album Name existed! Input another Name.")
            document.getElementById("tenAlbum").reset();
        }
    }

    saveAlbum() {
        let sList = JSON.stringify(this.albumList);
        localStorage.setItem("saveList", sList);
    }

    getAlbum() {
        if (localStorage.getItem("saveList")) {
            let gList = JSON.parse(localStorage.getItem("saveList"));
            this.albumList = gList;
        }
    }
}
