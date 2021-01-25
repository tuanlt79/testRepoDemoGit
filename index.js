import { Album } from "../models/Album.js";
import { Manage } from "../models/Manage.js";

let manage = new Manage();
manage.getAlbum();

// let album = new Album(); // dung album ngoai button khi add vao bi thay doi het album truoc do
// BTD ADDALBUM
document.getElementById("btnThemAlbum").onclick = (event) => {
    event.preventDefault();
    // create album from class
    let album = new Album();
    let arrInput = document.querySelectorAll("#inputFromUI input, #inputFromUI select");
    for (let input of arrInput) {
        let id = input.id;
        let value = input.value;
        album[id] = value;
    }
    // bi loi khong add ten khac
    // manage.validateAlbum(album.tenAlbum); 

    manage.addAlbum(album);
    manage.saveAlbum();
    renderAlbum();

};

const renderAlbum = () => {
    let renderDiv = '';
    for (let obj of manage.albumList) {
        renderDiv += `
        <div class="col-md-4">
        <div class="card mb-4 box-shadow">
            <div class="reponsive-img"
                style="background-image: url(${obj.linkAnh});">
            </div>
            <div class="card-body">
                <h3>${obj.tenAlbum}</h3>
                <p class="card-text"> ${obj.moTa} </p>
                <p class="card-text">Thể loại: ${obj.loaiAlbum}</p>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                        <button onclick="editAlbum('${obj.tenAlbum}')" type="button" class="btn btn-success text-white btn-sm btn-outline-secondary mr-2">Chỉnh sửa</button>
                        <button onclick="removeAlbum('${obj.tenAlbum}')" type="button" class="btn btn-danger text-white btn-sm btn-outline-secondary">Xóa</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
        `;
    }
    document.getElementById("output").innerHTML = renderDiv;
}

renderAlbum();

//  BTN REMOVE
window.removeAlbum = (tenAlbum) => {
    manage.removeAlbum(tenAlbum);
    manage.saveAlbum();
    renderAlbum();

}

//  BTN EDIT
window.editAlbum = (tenAlbum) => {
    manage.editAlbum(tenAlbum);
    manage.saveAlbum();
    // manage.renderAlbum();
}

//  BTN CAPNHATALBUM
document.getElementById("btnCapNhatAlbum").onclick = (event) => {
    event.preventDefault();

    // let album = new Album();
    // console.log(album); // album khi new

    // let arrInput = document.querySelectorAll("#inputFromUI input, #inputFromUI select");
    // for (let input of arrInput) {
    //     let id = input.id;
    //     let value = input.value;
    //     album[id] = value;
    // }
    // manage.updateAlbum(album.tenAlbum)
    // console.log(manage.albumList);
    // console.log(album); //album khi truyen value vao

    let albumUpdated = new Album();
    let arrInput = document.querySelectorAll("#inputFromUI input, #inputFromUI select");
    for (let inputUpdated of arrInput) {
        let id = inputUpdated.id;
        let value = inputUpdated.value;
        albumUpdated[id] = value;
    }
    
    console.log(manage.albumList);
    console.log(albumUpdated.tenAlbum);
    manage.updateAlbum(albumUpdated)

    // renderAlbum();
};

//  let number1 = 5;
// let number2 = number1;
// number2 = 10;
// console.log('num1', number1);
// console.log('num2', number2);
// let sinhVien1 = { ma: 1, ten: 'Nguyễn Văn A', tuoi: 18 };
// gán địa chỉ không gán giá trị, cùng địa chỉ vùng nhớ
// let sinhVien2 = sinhVien1;

// sao chép giá trị, nằm ở 2 vùng nhớ khác nhau
// let sinhVien2 = { ...sinhVien1, lop: 'BC01', tuoi: 28 };
// sinhVien2.ten = 'Nguyễn Văn B';
// console.log('sv1 ', sinhVien1.ten);
// console.log('sv2 ', sinhVien2); */

// let abc = { a=1, b=2, c=3 }
// let xyz = { x=4, y=5, z=6 } */
//  abc = xyz;
//  console.log(abc);
console.log('userB')
console.log('userA')
console.log('userc')
console.log('userZYX');