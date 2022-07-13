let movies = [
  {
    id:0,
    title:"DeadPool",
    imgurl: "http://cdn.entries.clios.com/styles/clio_aotw_ems_image_details_retina/s3/tb/KEYARTS/media/2016/th_soc/501613934_1.jpg",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, voluptas natus dolore odio aspernatur eius vero maiores nulla suscipit fugit porro, id est excepturi similique magnam. Tenetur quaerat expedita debitis.",
    comments:["Geat Movie","THe best","Noicee"]


  },
  {
    id:1,
    title:"SpiderMan",
    imgurl: "https://blog.playstation.com/tachyon/2022/06/0c3c20a8d8514501524a0859461f391572ea6e61.jpg?resize=1088%2C612&crop_strategy=smart",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, voluptas natus dolore odio aspernatur eius vero maiores nulla suscipit fugit porro, id est excepturi similique magnam. Tenetur quaerat expedita debitis.",
    comments:["Geat Movie","THe best","Noicee"]
  },
{
  id:2,
  title:"American Sniper",
    imgurl: "https://m.media-amazon.com/images/M/MV5BMTkxNzI3ODI4Nl5BMl5BanBnXkFtZTgwMjkwMjY4MjE@._V1_.jpg",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, voluptas natus dolore odio aspernatur eius vero maiores nulla suscipit fugit porro, id est excepturi similique magnam. Tenetur quaerat expedita debitis.",
    comments:["Geat Movie","THe best","Noicee"]
},
{
  id:3,
  title:"Brothers",
    imgurl: "https://flxt.tmsimg.com/assets/p182461_p_v8_an.jpg",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, voluptas natus dolore odio aspernatur eius vero maiores nulla suscipit fugit porro, id est excepturi similique magnam. Tenetur quaerat expedita debitis.",
    comments:["Geat Movie","THe best","Noicee"]
}
]

let divEl = document.querySelector(".main")
for(let movie of movies){

  let imgEl = document.createElement('img');
  imgEl.src = movie.imgurl
  imgEl.className = " img"
  divEl.append(imgEl)

}
function displaycontent(){
  alert("Hello Ed")

}

let movie1 = document.querySelector('.img')
movie1.addEventListener("click",displaycontent);