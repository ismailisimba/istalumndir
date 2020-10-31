let localVar = "testing";

let nodes = document.querySelectorAll(".childreninsidecontainer");
let hiddenMenu = document.getElementById("detailedmenu");

/* detailed page updatable values */
let title1 = document.getElementById("buztitle");
let description1 = document.getElementById("descriptionbuzbox")

let email = document.getElementById("buzemail");
let phoneone = document.getElementById("phoneone");
let phonetwo = document.getElementById("phonetwo")
let phonethree = document.getElementById("phonethree")

let map = document.getElementById("map-div");


let title2 = document.getElementById("alumname");
let description2 = document.getElementById("descriptionalumbox");


/* detailed page updatable values */

document.getElementById("closearrow").addEventListener("click", function () {
  hiddenMenu.style.visibility = "hidden";
});

let motherDiv = document.getElementById("mother-container");
let tempDiv2 = document.getElementById("closearrow");
let tempDiv = hiddenMenu;
let reqString = "https://script.google.com/macros/s/AKfycbwePxUUAJRuhfdsKMe7ghiJYxEBSeroek9Z6xAA49XnjjN5cdY/exec"



function mainFunc () {

    

 //  addClickEventFunc();

   fetchInfoWithFilter ();
   

 myasync();




}

mainFunc();

function addClickEventFunc(element,i) {

  
  //  let styleTemp = window.getComputedStyle(hiddenMenu);
  


        element.addEventListener("click", function (){

          //  hiddenMenu.style.visibility === "visible";
        

                hiddenMenu.style.visibility = "visible";

            
               // title1.innerHTML = this.id;

               title1.innerHTML = localVar.values[i][2];
               description1.innerHTML = localVar.values[i][3];
               email.innerHTML = localVar.values[i][9];
               phoneone.innerHTML = localVar.values[i][6];
               phonetwo.innerHTML = localVar.values[i][7];
               phonethree.innerHTML = localVar.values[i][8];
               map.innerHTML = localVar.values[i][13];
               title2.innerHTML = localVar.values[i][10];
               description2.innerHTML = localVar.values[i][12]

              

              // description1.innerHTML = i;
                

            
        });

      


       



}



async function fetchInfoWithFilter () {
    
    const myInit = {
        method: "GET",
        mode: "cors",
        credentials: "omit",
        headers: {
         // 'Content-Type': 'text/txt',
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow'
      };

    var myRequest = new Request(reqString);
    

         
    const returnVal = await fetch(myRequest, myInit)
          .then(function(response) {
            if (!response.ok) {
              
              throw new Error("HTTP error, status = " + response.status);
              
            }
            
            return response.text();
          })
          .then(function(myBlob) {
            
            var cloudObject = JSON.parse(myBlob);
            
          
            return cloudObject;
            
          })
          .catch(function(error) {
            var p = document.createElement('p');
            p.appendChild(
              document.createTextNode('Error: ' + error.message)
            );
            tempDiv.insertBefore(p, tempDiv2);
          });

        

          return returnVal; 

       tempDiv.innerHTML = Object.entries(localVar.values)[0][1][3] ;   
};


async function myasync () {

  localVar = await fetchInfoWithFilter();

  //hiddenMenu.innerHTML = localVar;

 let tempDiv = document.getElementById("childrencontainerone").cloneNode(true);

  motherDiv.innerHTML = "";

  let boxes = localVar.lastrow;
  boxes--;

 // motherDiv.appendChild(tempclone);

  for (let i=0; i<boxes; i++){

    tempclone = tempDiv.cloneNode(true);
    tempclone.id = "childnumindex"+i;

    motherDiv.appendChild(tempclone);

    addClickEventFunc(tempclone,i);

    
  }





 //motherDiv.innerHTML = boxes;













}