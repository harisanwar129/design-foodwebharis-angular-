import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }
  // detail makanan
  foodDetails = [
    {
      id:1,
      foodName:"Hp",
      foodDetails: "Selama beberapa tahun terakhir, laptop HP Pavilion 15telah menjadi standar baru untuk laptop dengan harga terjangkau yang berperforma tinggi.",
      foodPrice:5000000,
      foodImg:"https://res.cloudinary.com/djqdp0nel/image/upload/v1651568439/dell_zm368s.jpg"
    },
    {
      id:2,
      foodName:"Asus",
      foodDetails:"Asus memiliki desain yang tipis, tetapi memiliki banyak keandalan dengan memori hingga 8GB dan penyimpanan hingga 2TB, sehingga Anda dapat memuat aplikasi favorit dengan cepat",
      foodPrice:369,
      foodImg:"https://res.cloudinary.com/djqdp0nel/image/upload/v1651568428/asus_j4jcs2.jpg"
    },
    {
      id:3,
      foodName:"Acer",
      foodDetails:"Acer memiliki desain yang tipis, tetapi memiliki banyak keandalan dengan memori hingga 8GB dan penyimpanan hingga 2TB, sehingga Anda dapat memuat aplikasi favorit dengan cepat",
      foodPrice:149,
      foodImg:"https://res.cloudinary.com/djqdp0nel/image/upload/v1651568420/fu_zxyqje.jpg"
    },
    {
      id:4,
      foodName:"Lenovo",
      foodDetails:"Lenovo memiliki desain yang tipis, tetapi memiliki banyak keandalan dengan memori hingga 8GB dan penyimpanan hingga 2TB, sehingga Anda dapat memuat aplikasi favorit dengan cepat",
      foodPrice:149,
      foodImg:"https://res.cloudinary.com/djqdp0nel/image/upload/v1651568409/levo_ytwnwk.jpg"
    }
   
  ]
}
