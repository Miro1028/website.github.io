const bookName = document.getElementById("book__name");
const bookHeading = document.getElementById("bookHeading")
const bookDescription = document.getElementById("book__description");

const firstBook = document.getElementById("book__one");
const secondBook = document.getElementById("book__two");
const thirdBook = document.getElementById("book__three");
const fourthBook = document.getElementById("book__four");

const bookOne = () => {
    firstBook.style.backgroundColor = "black";
    firstBook.style.border = "3px solid white";
    bookName.innerHTML = "Power";
    bookDescription.innerText = "Энэхүү номын зорилго нь таны бичих чадварыг хөгжүүлж, цаашлаад шилдэг сэтгэгч болоход тань өөрийн карьерын туршлага дээр үндэслэн зөвлөж, амжилтын үүд хаалгыг тань нээх билээ. Сэтгэн бодох чадвараа хөгжүүлэх, амжилтаа ахиулахыг хүссэн хүн бүрт энэ ном нь нээлттэй бөгөөд маш олон чухал чадваруудыг нэг номонд багтааж чадсанаараа онцлогтой.";
    bookName.style.marginLeft = "0";
    document.getElementById("book_img").src = "./img/power.jpg";
    
    secondBook.style.backgroundColor = "white";
    secondBook.style.border = "0";
    thirdBook.style.backgroundColor = "white";
    thirdBook.style.border = "0";
    fourthBook.style.backgroundColor = "white";
    fourthBook.style.border = "0";
}

const bookTwo = () => {
    secondBook.style.backgroundColor = "black";
    secondBook.style.border = "3px solid white";
    bookName.innerHTML = "F*ck you money";
    bookDescription.innerHTML = "Унтаж байхад чинь хүртэл таны төлөө ажиллах хөрөнгийг бүтээмээр байна уу? Дахиж хэзээ ч мөнгөний талаар санаа зовохгүй амьдрах мөрөөдөлтэй юу? Тэгвэл энэхүү ном таны мөрөөдөлдөө хүрэх гарц байх болно. Дөрвөн зуун хуудсанд эдийн засаг, санхүү, мөнгөний менежмент, хөрөнгө оруулалт, хувьцаатай холбоотой бүх ойлголтыг маш энгийнээр тайлбарласан";
    bookName.style.marginLeft = "-10%";
    document.getElementById("book_img").src = "./img/fkYouMoney.svg";
    document.getElementById("book_img").style.border = "1px solid white";
    document.getElementById("book_img").style.width = "303px";
    document.getElementById("book_img").style.height = "433px";

    firstBook.style.backgroundColor = "white";
    firstBook.style.border = "0";
    thirdBook.style.backgroundColor = "white";
    thirdBook.style.border = "0";
    fourthBook.style.backgroundColor = "white";
    fourthBook.style.border = "0";
}
const bookThree = () => {
    thirdBook.style.backgroundColor = "black";
    thirdBook.style.border = "3px solid white";
    bookName.innerHTML = "Хөрөнгө оруулалтын 10 ДҮРЭМ";
    bookDescription.innerText = "Амжилттай хөрөнгө оруулагч бүрийн зөв хариулж чаддаг асуулт: Хэрхэн санхүүгээ зөв удирдаж хөрөнгө оруулалт хийх илүүдэл хөрөнгийг бий болгох вэ? Хэрхэн зөв хөрөнгө оруулалтын боломжийг (компанийг) сонгох вэ?3. Хэрхэн хөрөнгө оруулалтын багцаа зөв удирдаж, хөрөнгө оруулалт хийх, гарах тохиромжтой цагийг сонгох вэ? Харин та эдгээр асуултад чээжээрээ хариулж чадсан уу? Хэрвээ үгүй бол энэ ном танд хариултыг нь хэлж өгөх болно.";
    bookName.style.marginLeft = "-30%";
    document.getElementById("book_img").src = "./img/tenRules.svg";
    document.getElementById("book_img").style.border = "1px solid white";
    document.getElementById("book_img").style.width = "303px";
    document.getElementById("book_img").style.height = "433px";
    
    firstBook.style.backgroundColor = "white";
    firstBook.style.border = "0";
    secondBook.style.backgroundColor = "white";
    secondBook.style.border = "0";
    fourthBook.style.backgroundColor = "white";
    fourthBook.style.border = "0";
}
