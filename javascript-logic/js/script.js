var inputUser = []
var idnumber

function addInput() {
    let inputNama = document.formInput.name.value;
    let inputEmail = document.formInput.email.value;
    let inputPassword = document.formInput.password.value;
    let inputBirthdate = document.formInput.birthday.value;
    let inputGender = document.formInput.gender.value;
    let dataArray=[inputNama,inputEmail,inputPassword,inputBirthdate,inputGender];
    let i = inputUser.length
    inputUser[i]=dataArray
    console.log(inputUser);
    showInput(inputUser);
    document.formInput.reset();
    alert("Data telah tersimpan");
}

function showInput(datas) {
    let tableData = document.getElementsByClassName("tableData")[0]
    let tr = tableData.children[0].children[0].outerHTML
    for (i=0; i < datas.length; i++) {
        tr += `
            <tr>
                <td>${i + 1}</td>
                <td>${datas[i][0]}</td>
                <td>${datas[i][1]}</td>
                <td>${datas[i][2]}</td>
                <td>${datas[i][3]}</td>
                <td>${datas[i][4]}</td>
                <td style="background-color:green;"><button type="button" class="btn btn-link btnEdit" onclick="editInput()">Edit</button></td>
                <td style="background-color:red;"><button type="button" class="btn btn-link btnDelete" onclick="deleteInput()">Delete</button></td>
            </tr>
        `
    }
    tableData.innerHTML = tr;
}

function editInput() {
    // document.addEventListener('click', function(event) {
    //     if (event.target.className === 'btnEdit')
    //     var idnumber = event.target.
    // })
    $('tbody').on('click', '.btnEdit', function () {
        var idnumber = $(this).parent().siblings('td:first').text()
        document.formInput.name.value=inputUser[idnumber-1][0] //masih perlu di edit lagi pake global listener
        document.formInput.email.value=inputUser[idnumber-1][1]
        document.formInput.password.value=inputUser[idnumber-1][2]
        document.formInput.birthday.value=inputUser[idnumber-1][3]
        document.formInput.gender.value=inputUser[idnumber-1][4]
        inputUser.splice(idnumber-1,1);
        showInput(inputUser)
    })
}

function deleteInput() {
    $('tbody').on('click', '.btnDelete', function () {
        var id = $(this).parent().siblings('td:first').text()
        inputUser.splice(id-1,1);
        showInput(inputUser)
    })
}

function pengecekanMember() {
    let loginNama = document.getElementById("inputNamaLogin").value;
    let loginPassword = document.getElementById("inputPasswordLogin").value;
    console.log(loginNama);
    console.log(loginPassword);
    let datas = inputUser;
    var verifNama
    var verifPass
    for (i=0; i < datas.length; i++) {
        if (loginNama == datas[i][0]) {
            verifNama = 1;
        }

        if (loginPassword == datas[i][2]) {
            verifPass =1;
        }
    }
    
    if (verifNama == 1 && verifPass == 1) {
        alert("Anda Berhasil Login")
        document.getElementById("tabelUser").style.display = "";
    } else {
        alert("Nama dan Password salah")
    }
}

//function navigasi
function klikBeranda() {
    document.getElementById("beranda").style.display = "";
    document.getElementById("tentang").style.display = "none";
    document.getElementById("hubungi").style.display = "none";
    document.getElementById("login").style.display = "none";
    document.getElementById("daftar").style.display = "none";
}

function klikTentang() {
    document.getElementById("beranda").style.display = "none";
    document.getElementById("tentang").style.display = "";
    document.getElementById("hubungi").style.display = "none";
    document.getElementById("login").style.display = "none";
    document.getElementById("daftar").style.display = "none";
}

function klikHubungi() {
    document.getElementById("beranda").style.display = "none";
    document.getElementById("tentang").style.display = "none";
    document.getElementById("hubungi").style.display = "";
    document.getElementById("login").style.display = "none";
    document.getElementById("daftar").style.display = "none";
}

function klikMasuk() {
    document.getElementById("beranda").style.display = "none";
    document.getElementById("tentang").style.display = "none";
    document.getElementById("hubungi").style.display = "none";
    document.getElementById("login").style.display = "";
    document.getElementById("daftar").style.display = "none";
}

function klikDaftar() {
    document.getElementById("beranda").style.display = "none";
    document.getElementById("tentang").style.display = "none";
    document.getElementById("hubungi").style.display = "none";
    document.getElementById("login").style.display = "none";
    document.getElementById("daftar").style.display = "";
}