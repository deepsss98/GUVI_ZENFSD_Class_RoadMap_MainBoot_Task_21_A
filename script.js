const kural_display= async() => {
try{
   let key_value=document.getElementById("search").value;
   if(key_value>0 && key_value <=1330)
   {
   const thirukural_URL=`https://api-thirukkural.vercel.app/api?num=${key_value}`;
   const response = await fetch(thirukural_URL);
   const result = await response.json(); //Converting raw data to readable stream
   display_jurisdictions_details(result,key_value);
   }
   else
   {
    document.getElementById("display-card").innerHTML="";
    setTimeout(() => {
      alert("Invalid Value !!! Kindly enter number from 1 to 1330");
    }, 500);
   }
}
catch(err){
    console.error(err.message);
}
}

const display_jurisdictions_details=(kural,key_value)=>{
 let kurals_info="";
 kurals_info=`
   <div class="card" id="display-card">
   <div class="card-header text-center text-dark fw-bold"> குறள்: ${key_value}</div>
   <div class="card-body">
   <h6 class="card-title text-center text-dark fw-bold">Chapter Name: ${kural.chap_tam}</h6>
   <h6 class="card-title fw-bold text-dark">குறள்:</h6>
   <p class="card-text" id="kural-text">${kural.line1}<br>${kural.line2}</p>
   <h6 class="card-title text-dark fw-bold">Tamil Explanation:</h6>
   <p class="card-text">${kural.tam_exp}</p>
   <h6 class="card-title text-dark fw-bold">English Explanation:</h6>
   <p class="card-text">${kural.eng_exp}</p>
   </div>
   </div>
   </div>`
 document.getElementById("display-card").innerHTML=kurals_info;
}

let search_button=document.getElementById("search-btn")
search_button.addEventListener("click",kural_display);
