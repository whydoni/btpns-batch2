var userList = [{
    name: "admin",
    email: "admin@admin.com",
    password: "admin",
    tglLahir: "21-10-2020",
    jenisKelamin: "Laki-laki",
}]
var idnumber
var idUser
var namaUser

albumList = []

var addInput = () => {
    let name = document.formInput.name.value;
    let email = document.formInput.email.value;
    let password = document.formInput.password.value;
    let birthday = document.formInput.birthday.value;
    let gender = document.formInput.gender.value;
    let dataArray=[name,email,password,birthday,gender];
    let i = userList.length
    userList[i]=dataArray
    console.log(userList);
    showInput(userList);
    document.formInput.reset();
    alert("Data telah tersimpan");
    klikMasuk();
}

// var fetchData = async () => {
//     await fetch('https://jsonplaceholder.typicode.com/users')
//         .then(response => response.json())
//         .then(data => userList = data)
//         .catch(err => console.warn("err :", err))
// }

// var fetchAlbum = async () => {
//     await fetch('https://jsonplaceholder.typicode.com/albums')
//         .then(response => response.json())
//         .then(album => albumList = album)
//         .catch(err => console.warn("err :", err))
// }
    
// fetchData()
// fetchAlbum()

var showInput = datas => {
    let tableData = document.getElementsByClassName("tableData")[0]
    let newTr = tableData.children[0].children[0].outerHTML

    var newTR2 = userList.map((user, index) => {
        return `
                <tr>
                    <td>${index + 1}</td>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>${user.password}</td>
                    <td>${user.birthday}</td>
                    <td>${user.gender}</td>
                    <td style="background-color:green;"><button type="button" class="btn btn-link btnEdit" onclick="editInput()">Edit</button></td>
                    <td style="background-color:red;"><button type="button" class="btn btn-link btnDelete" onclick="deleteInput()">Delete</button></td>
                </tr>
            `
    })

    tableUsers.innerHTML = newTR + newTR2.join("")

    // for (i=0; i < datas.length; i++) { //bisa pake forEach dan find ke element yg di cari
    //     tr += `
    //         <tr>
    //             <td>${i + 1}</td>
    //             <td>${datas[i][0]}</td>
    //             <td>${datas[i][1]}</td>
    //             <td>${datas[i][2]}</td>
    //             <td>${datas[i][3]}</td>
    //             <td>${datas[i][4]}</td>
    //             <td style="background-color:green;"><button type="button" class="btn btn-link btnEdit" onclick="editInput()">Edit</button></td>
    //             <td style="background-color:red;"><button type="button" class="btn btn-link btnDelete" onclick="deleteInput()">Delete</button></td>
    //         </tr>
    //     `
    // }
    // tableData.innerHTML = tr;
}

function editInput() {
    // document.addEventListener('click', function(event) {
    //     if (event.target.className === 'btnEdit')
    //     var idnumber = event.target.
    // })
    $('tbody').on('click', '.btnEdit', function () {
        klikDaftar()
        // var idnumber = $(this).parent().siblings('td:first').text()
        // document.formInput.name.value=userList[idnumber-1][0] //masih perlu di edit lagi pake global listener
        // document.formInput.email.value=userList[idnumber-1][1]
        // document.formInput.password.value=userList[idnumber-1][2]
        // document.formInput.birthday.value=userList[idnumber-1][3]
        // document.formInput.gender.value=userList[idnumber-1][4]
        // userList.splice(idnumber-1,1); //bisa pake update array, terus pake find
        // showInput(userList)
    })
}

function deleteInput() {
    $('tbody').on('click', '.btnDelete', function () {
        var id = $(this).parent().siblings('td:first').text()
        userList.splice(id-1,1);
        showInput(userList)
    })
}

var doLogin = async () => {
    username = document.getElementById("inputNamaLogin").value
    password = document.getElementById("inputPasswordLogin").value

    console.log(username);
    console.log(password);

    if (username && password) {
        let statusLogin = false
        await fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => userList = json)
            .catch(err => console.warn("Error Fetching Data" + err))
            .finally(() => console.info("finally..."))

        statusLogin = userList.find((data) => (data.username == username && password == '12345'))
       
        if (statusLogin) {
            idUser=statusLogin.id
            namaUser=statusLogin.name
            window.alert("Sukses Login")
            showAlbum()
        } else {
            alert("Mohon Cek Email dan Password")
        }
    }
}

var doSearch=()=>{
    let tableData = document.getElementById("tableData2")
    let tr = tableData.children[0].children[0].outerHTML

    search = document.getElementById("formSearch").value;
    albumList.forEach((val,index)=>{
        if (val.title==search || val.userId==search){
            tr += `
            <tr> 
                <td>${val.id}</td>
                <td>${val.title}</td>
                <td>${val.userId}</td>
            </tr>
        `
        }
    })
    tableData.innerHTML = tr
}

var showAlbum = async () => {
    let tableData = document.getElementById("tableData2")
    let tr = tableData.children[0].children[0].outerHTML


    await fetch('https://jsonplaceholder.typicode.com/albums')
        .then(response => response.json())
        .then(json => albumList = json)
        .catch(err => console.warn("Error" + err))

    if (idUser){
        albumList.forEach((val,index)=>{
            if (val.userId==idUser){
                tr += `
            <tr> 
                <td>${val.id}</td>
                <td>${val.title}</td>
                <td>${namaUser}</td>
            </tr>
        `
            }
        })
    } else {

        albumList.forEach((val,index)=>{
                tr += `
            <tr> 
                <td>${val.id}</td>
                <td>${val.title}</td>
                <td>${val.userId}</td>
            </tr>
        `
        })
    }
    tableData.innerHTML = tr
}

showAlbum()

// function pengecekanMember() {
//     let loginNama = document.getElementById("inputNamaLogin").value;
//     let loginPassword = document.getElementById("inputPasswordLogin").value;
//     console.log(loginNama);
//     console.log(loginPassword);
//     var verifNama
//     // var verifPass
//     for (i=0; i < userList.length; i++) {
//         if (loginNama == userList.username) {
//             verifNama = 1;
//         }

//         // if (loginPassword == 123) {
//         //     verifPass =1;
//         // }
//     }
    
//     if (verifNama == 1) {
//         alert("Anda Berhasil Login")
//         // document.getElementById("tabelUser").style.display = "";
//     } else {
//         alert("Nama dan Password salah")
//     }
// }

//function navigasi
function klikBeranda() {
    document.getElementById("beranda").style.display = "";
    document.getElementById("tentang").style.display = "none";
    document.getElementById("hubungi").style.display = "none";
    document.getElementById("album").style.display = "none";
    document.getElementById("login").style.display = "none";
    document.getElementById("daftar").style.display = "none";
}

function klikTentang() {
    document.getElementById("beranda").style.display = "none";
    document.getElementById("tentang").style.display = "";
    document.getElementById("hubungi").style.display = "none";
    document.getElementById("album").style.display = "none";
    document.getElementById("login").style.display = "none";
    document.getElementById("daftar").style.display = "none";
}

function klikHubungi() {
    document.getElementById("beranda").style.display = "none";
    document.getElementById("tentang").style.display = "none";
    document.getElementById("hubungi").style.display = "";
    document.getElementById("album").style.display = "none";
    document.getElementById("login").style.display = "none";
    document.getElementById("daftar").style.display = "none";
}

function klikAlbum() {
    document.getElementById("beranda").style.display = "none";
    document.getElementById("tentang").style.display = "none";
    document.getElementById("hubungi").style.display = "none";
    document.getElementById("album").style.display = "";
    document.getElementById("login").style.display = "none";
    document.getElementById("daftar").style.display = "none";
}

function klikMasuk() {
    document.getElementById("beranda").style.display = "none";
    document.getElementById("tentang").style.display = "none";
    document.getElementById("hubungi").style.display = "none";
    document.getElementById("album").style.display = "none";
    document.getElementById("login").style.display = "";
    document.getElementById("daftar").style.display = "none";
}

function klikDaftar() {
    document.getElementById("beranda").style.display = "none";
    document.getElementById("tentang").style.display = "none";
    document.getElementById("hubungi").style.display = "none";
    document.getElementById("album").style.display = "none";
    document.getElementById("login").style.display = "none";
    document.getElementById("daftar").style.display = "";
}