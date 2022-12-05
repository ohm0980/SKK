function SubmitForm(){
    let NameProduct = document.getElementById('CodePrc').value 
    let NumSelect = document.getElementById('NumSelect').value
    let Name = Number(NumSelect)
    let error = "กรุณากรอกรหัสสินค้า"


    if(NameProduct == ""){
        alert(error)
        document.getElementById('CodePrc').value=""
        document.getElementById('NumSelect').value=""
    }else if(NumSelect == ""){
        alert(error)
        document.getElementById('CodePrc').value=""
        document.getElementById('NumSelect').value=""
    }else if(NameProduct == 001){
        let price = "5"
        let num = Number(price)
        let plus = document.getElementById('ruam').value
        let numtwo = Number(plus)
        document.getElementById('CodePrc').value=""
        document.getElementById('NumSelect').value=""
        let ss = Name*num
        let pluss = numtwo + ss
        alert("ค้นหาสินค้าสำเร็จ:รหัสสินค้าคือ : "+NameProduct+"\n"+"ชื่อสินค้า : "+"สินค้า"+price+"บาท"+"\n"+"ราคาสินค้า : "+ss)
        document.getElementById('ruam').value=pluss
        
    }else if(NameProduct == 002){
        let price = "10"
        let num = Number(price)
        let plus = document.getElementById('ruam').value
        let numtwo = Number(plus)
        document.getElementById('CodePrc').value=""
        document.getElementById('NumSelect').value=""
        let ss = Name*num
        let pluss = numtwo + ss
        alert("ค้นหาสินค้าสำเร็จ:รหัสสินค้าคือ : "+NameProduct+"\n"+"ชื่อสินค้า : "+"สินค้า"+price+"บาท"+"\n"+"ราคาสินค้า : "+ss)
        document.getElementById('ruam').value=pluss
        
    }else if(NameProduct == 003){
        let price = "15"
        let num = Number(price)
        let plus = document.getElementById('ruam').value
        let numtwo = Number(plus)
        document.getElementById('CodePrc').value=""
        document.getElementById('NumSelect').value=""
        let ss = Name*num
        let pluss = numtwo + ss
        alert("ค้นหาสินค้าสำเร็จ:รหัสสินค้าคือ : "+NameProduct+"\n"+"ชื่อสินค้า : "+"สินค้า"+price+"บาท"+"\n"+"ราคาสินค้า : "+ss)
        document.getElementById('ruam').value=pluss
        
    }else if(NameProduct == 004){
        let price = "20"
        let num = Number(price)
        let plus = document.getElementById('ruam').value
        let numtwo = Number(plus)
        document.getElementById('CodePrc').value=""
        document.getElementById('NumSelect').value=""
        let ss = Name*num
        let pluss = numtwo + ss
        alert("ค้นหาสินค้าสำเร็จ:รหัสสินค้าคือ : "+NameProduct+"\n"+"ชื่อสินค้า : "+"สินค้า"+price+"บาท"+"\n"+"ราคาสินค้า : "+ss)
        document.getElementById('ruam').value=pluss
        
    }else if(NameProduct == 005){
        let price = "25"
        let num = Number(price)
        let plus = document.getElementById('ruam').value
        let numtwo = Number(plus)
        document.getElementById('CodePrc').value=""
        document.getElementById('NumSelect').value=""
        let ss = Name*num
        let pluss = numtwo + ss
        alert("ค้นหาสินค้าสำเร็จ:รหัสสินค้าคือ : "+NameProduct+"\n"+"ชื่อสินค้า : "+"สินค้า"+price+"บาท"+"\n"+"ราคาสินค้า : "+ss)
        document.getElementById('ruam').value=pluss
        
    }else{
        document.getElementById('CodePrc').value =""
        document.getElementById('NumSelect').value = ''
    }
}function focusCode() {
    document.getElementById('CodePrc').focus()
}
function focus(){
    document.getElementById('NumSelect').focus()
}
window.addEventListener('keydown', (event) => {
    if (event.code === 'NumpadEnter') {
        let NameProduct = document.getElementById('CodePrc').value 
        let NumSelect = document.getElementById('NumSelect').value
        if(NameProduct==""){
            focusCode()
        }else if(NumSelect==""){
            focus()
        }else{
            SubmitForm()
            focusCode()
        }
    }
});
function sarup(){
    let ruam = document.getElementById('ruam').value
    let pr = prompt("ราคาสินค้าทั้งหมด : "+ruam+"\nกรุณากรอกจำนวนเงินที่รับมา")
    let n = Number(ruam)
    let u = Number(pr)
    let num = u-n
    let pas = prompt("กรุณากรอกรหัสลิ้นชัก")
    if(pas == 331040){
        alert("เงินทอนคือ : "+num+"\nคำเตือนกรุณาปิดลิ้นชัก")
    }else{
        alert("รหัสลิ้นชักผิดพลาด")
    }
}
window.addEventListener('keydown', (event) => {
    if (event.code === 'NumpadAdd') {
        sarup()
        document.getElementById('ruam').value=""
    }
});