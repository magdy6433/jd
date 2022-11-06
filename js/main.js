

let loadMoreBtn = document.querySelector('#load-more');
let currentItem = 3;

loadMoreBtn.onclick = () =>{
   let boxes = [...document.querySelectorAll('.container .box-container .box')];
   for (var i = currentItem; i < currentItem + 3; i++){
      boxes[i].style.display = 'block';
   }
   currentItem += 3;

   if(currentItem >= boxes.length){
      loadMoreBtn.style.display = 'none';
   }
}




var navBars = document.querySelector('.nav-link');
var bars = document.getElementById('bars');
var clos = document.getElementById('close');
var links = document.querySelectorAll(".link-item")
var httpReq = new XMLHttpRequest();
var category = "business";
var allData = [];
let users = [];
const searchInput = document.querySelector('[data-search]');
getData(category);

bars.onclick = function() {
   navBars.style.top = "100%";
   bars.style.display = "none";
   clos.style.display = "block";

}
clos.onclick = function() {
   navBars.style.top = "-178px";
   clos.style.display = "none";
   bars.style.display = "block";
}

for(var i =0;i<links.length;i++) {
   links[i].addEventListener("click",function(e) {
      category = e.target.text;
      getData(category);
   })
}

function getData(category){
   httpReq.open("GET","https://newsapi.org/v2/top-headlines?country=us&category="+category+"&apiKey=d2f0bc55924745bfa165d20696f359f6")
   httpReq.send();
   httpReq.onreadystatechange = function() {
      if(httpReq.readyState == 4 && httpReq.status == 200) {
         allData = JSON.parse(httpReq.response).articles;
         console.log(allData)
         displayData();
      }
   }
}


// function displayData() {
//    var temp = "";
//    for(var i =0;i<allData.length;i++) {
//       temp += `  <div class="box">
//       <div class="image">
//          <img src="${allData[i].urlToImage}" alt="">
//       </div>
//       <div class="content" id="contentOne">
//       <h3>${allData[i].title}</h3>
//       <p>${allData[i].description}</p>
//          <a href="#" class="btn">read more</a>
//          <div class="icons">
//             <span> <i class="fas fa-calendar"></i> 21st may, 2022 </span>
//             <span> <i class="fas fa-user"></i> by admin </span>
//          </div>
//       </div>
//    </div>`
//    }
//    document.getElementById("rowData").innerHTML = temp
// }


function displayData() {
   var temp = "";

   for(var i =0;i<allData.length;i++) {
      temp += `  <div class="box">
      <div class="image">
         <img src="${allData[i].urlToImage}" alt="">
      </div>
      <div class="content" id="contentOne">
      <h3>${allData[i].title}</h3>
      <p>${allData[i].description}</p>
         <a href="#" class="btn">read more</a>
         <div class="icons">
            <span> <i class="fas fa-calendar"></i> 21st may, 2022 </span>
            <span> <i class="fas fa-user"></i> by admin </span>
         </div>
      </div>
   </div>`
   }
   document.getElementById("rowData").innerHTML = temp;

}

// searchInput.addEventListener("input", (e)=> {
//    const value = e.target.value.toLowerCase();

//    users.forEach(user => {
//       const isVisible =
//       allData[i].title.toLowerCase().includes(value) ||
//       allData[i].description.toLowerCase().includes(value)
//       user.element.classList.toggle("hide", !isVisible)
//     })
 
//    console.log(value);
// })


// Search
let searchMode = 'title';
function getSearchMode(id) {
   let search = document.getElementById('search');
   if(id == 'searchTitle') {
      searchMode = 'title';
      search.placeholder = 'search By title';
   }
 
 
   search.focus()
}

function searchData(value) {
   if(searchMode == 'title') {
      for(let i=0;i<allData.length;i++){
         if(allData[i].title.includes(value)){
            var temp = "";

         
               temp += `  <div class="box">
               <div class="image">
                  <img src="${allData[i].urlToImage}" alt="">
               </div>
               <div class="content" id="contentOne">
               <h3>${allData[i].title}</h3>
               <p>${allData[i].description}</p>
                  <a href="#" class="btn">read more</a>
                  <div class="icons">
                     <span> <i class="fas fa-calendar"></i> 21st may, 2022 </span>
                     <span> <i class="fas fa-user"></i> by admin </span>
                  </div>
               </div>
            </div>`
            
          
         }
      }
   }else {
      for(let i=0;i<allData.length;i++){
        
            var temp = "";

         
               temp += `  <div class="box">
               <div class="image">
                  <img src="${allData[i].urlToImage}" alt="">
               </div>
               <div class="content" id="contentOne">
               <h3>${allData[i].title}</h3>
               <p>${allData[i].description}</p>
                  <a id="moreP" onclick='morep()' href="#" class="btn">read more</a>
                  <div class="icons">
                     <span> <i class="fas fa-calendar"></i> 21st may, 2022 </span>
                     <span> <i class="fas fa-user"></i> by admin </span>
                  </div>
               </div>
            </div>`
            
          
         
      }
   }
   document.getElementById("rowData").innerHTML = temp;
   
}


// document.getElementById('moreP').onclick = function() {
//    // let p = document.querySelectorAll('p');
//    // p.style.color = "red";
//    alert("mmm");
// }

function morep() {
   alert("nkjkj");
}