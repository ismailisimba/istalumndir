
let localVar = {"cloudobject":{},
                "searchcontext":"all",
                "searchResults":[],
                "searchKey":{  "type":"typeofkey",
                               "value":"valueofkey",
                               "textVal":"optionstext"},
                "lastRow":0};

let mySearchQuery = document.querySelectorAll(".mysearchquery")[0];
let mySearchBut = document.getElementById("myfancysearchbut");
mySearchQuery.innerHTML = "";

let cardDiv = document.getElementById("childrencontainerone").cloneNode(true);

let nodes = document.querySelectorAll(".childreninsidecontainer");
let hiddenMenu = document.getElementById("detailedmenu");
let genericTextArea = document.getElementById("myfancykey");

/* detailed page updatable values */
let title1 = document.getElementById("buztitle");
let description1 = document.getElementById("descriptionbuzbox")

let email = document.getElementById("buzemail");
let phoneone = document.getElementById("phoneone");
let phonetwo = document.getElementById("phonetwo")
let phonethree = document.getElementById("phonethree")

let map = document.getElementById("map-div");

let newBuzLogo = document.getElementById("mybuzlogo")


let title2 = document.getElementById("alumname");
let description2 = document.getElementById("descriptionalumbox");


/* detailed page updatable values */

document.getElementById("closearrow").addEventListener("click", function () {
  motherDiv.innerHTML = "";
  populatingBoxes (localVar.searchResults.length, cardDiv);
});

let spanNumall = document.getElementById("letitular").querySelectorAll("span");
let motherDiv = document.getElementById("mother-container");
let tempDiv2 = document.getElementById("closearrow");
let tempDiv = hiddenMenu;
let reqString = "https://script.google.com/macros/s/AKfycbwePxUUAJRuhfdsKMe7ghiJYxEBSeroek9Z6xAA49XnjjN5cdY/exec"


hiddenMenu.remove();

function mainFunc () {

    

 //  addClickEventFunc();

  // fetchInfoWithFilter ();
    myasync();
    searchBarStuff();
    searchButStuff();
    




}


mainFunc();

function addClickEventFunc(element,i) {

  
  //  let styleTemp = window.getComputedStyle(hiddenMenu);
  


        element.addEventListener("click", cardClickFunction);

      
       addAnimation(element,i);



}

function removeClickEventFunc(element,i) {

  
  //  let styleTemp = window.getComputedStyle(hiddenMenu);
  


        element.removeEventListener("click", cardClickFunction, false);

    


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

      // tempDiv.innerHTML = Object.entries(localVar.values)[0][1][3] ;   
};


async function myasync () {

  localVar.cloudobject = await fetchInfoWithFilter();

  //hiddenMenu.innerHTML = localVar;

 

  motherDiv.innerHTML = "";

  
  localVar.lastRow = localVar.cloudobject.lastRow;
  spanNumall[0].innerHTML = (localVar.cloudobject.lastRow-1);
  

 // motherDiv.appendChild(tempclone);

  /*for (let i=0; i<boxes; i++){

    tempclone = tempDiv.cloneNode(true);
    tempclone.id = "childnumindex"+i;

    motherDiv.appendChild(tempclone);

    addClickEventFunc(tempclone,i);

    
  }*/


  let context = "all";
  populateSearchResults(context);
  
  populatingBoxes (localVar.lastRow-1, cardDiv);





 //motherDiv.innerHTML = boxes;



}


function addAnimation(element,i){

  let tempDiv300 = element.querySelectorAll(".childreninsidecontainer");
  //tempDiv300[0].id = "childreninternal"+i;

  


  if( i == 0 || i%2 == 0){
    
    tempDiv300[0].classList.add("childrenrollleft");
  }else {
    tempDiv300[0].classList.add("childrenrollright");
  }
}


function populatingBoxes (boxes, myCardDiv) {

  motherDiv.innerHTML = "";

  for (let i=0; i<boxes; i++){

   var  tempclone = myCardDiv.cloneNode(true);
    tempclone.id = "childnumindex"+i;

    motherDiv.appendChild(tempclone);

    let busytitlediv = tempclone.querySelectorAll(".busytitle");
    let mainpicdiv = tempclone.querySelectorAll(".children:last-child");
    let busylogo = tempclone.querySelectorAll(".seconddeets");
    let catchphrasediv = tempclone.querySelectorAll(".catchphrase");
    //let bionamediv = tempclone.querySelectorAll(".profname");
    //let classofdiv = tempclone.querySelectorAll(".classOf");

    busytitlediv[0].innerHTML = localVar.searchResults[i].busyName;
    mainpicdiv[0].style.backgroundImage = `url("${localVar.searchResults[i].mainImage}")`;
    busylogo[0].style.backgroundImage = `url("${localVar.searchResults[i].logo}")`;
    catchphrasediv[0].innerHTML = localVar.searchResults[i].catchphrase;
    //bionamediv[0].innerHTML = localVar.cloudobject.busyobj[i].alumName;
    //classofdiv[0].innerHTML = "Class Of "+localVar.cloudobject.busyobj[i].alumYear;

    removeClickEventFunc(tempclone,i);
    addClickEventFunc(tempclone,i);

    
  }
}


function searchBarStuff() {

  showHideType();
  //document.querySelectorAll(".onethirdfancy")[0].innerHTML = "All Businesses In This Directory";
  
}


function showHideType() {

  let companyTypesSelect = document.getElementById("company-type-select");
  let searchTypeSelect = document.getElementById("search-type-select");
  let searchButton = document.getElementById("myfancysearchbut");
  let fancyContainer = document.querySelectorAll(".onethirdfancy");
  let alumniContainer = document.getElementById("alumni-type-select");

  fancyContainer = fancyContainer[0];
  companyTypesSelect.remove();
  genericTextArea.remove();
  alumniContainer.remove();
  fancyContainer.innerHTML = "";
  let tempDiv = document.createElement("div");
      tempDiv.innerHTML = "All Businesses";
      fancyContainer.appendChild(tempDiv) ;
      fancyContainer.appendChild(searchTypeSelect) ;
      fancyContainer.appendChild(searchButton) ;

  searchTypeSelect.addEventListener("input", function(){
    let value = this.value;
  fancyContainer.innerHTML = "";
    if (value === "name") {
      fancyContainer.appendChild(genericTextArea) ;
      fancyContainer.appendChild(searchTypeSelect) ;
      fancyContainer.appendChild(searchButton) ;
      

    }else if(value ==="alumni"){
      fancyContainer.appendChild(alumniContainer) ;
      fancyContainer.appendChild(searchTypeSelect) ;
      fancyContainer.appendChild(searchButton) ;
     

    }else if(value ==="type"){

      fancyContainer.appendChild(companyTypesSelect) ;
      fancyContainer.appendChild(searchTypeSelect) ;
      fancyContainer.appendChild(searchButton) ;
     

    }else if(value === "all") {
      let tempDiv = document.createElement("div");
      tempDiv.innerHTML = "All Businesses";
      fancyContainer.appendChild(tempDiv) ;
      fancyContainer.appendChild(searchTypeSelect) ;
      fancyContainer.appendChild(searchButton) ;
      
    }else {
      fancyContainer.innerHTML = "nnnn";
    }

  })


}


function populateSearchResults(context) {

  if(context==="all"){

    addAllToSearchResults();
    displayWithContext(context);

  }else if(context === "type"){

    addTypeToSearchResults();
    displayWithContext(context);

  }else if(context === "name"){

    addTypeToSearchResults();
    displayWithContext(context);


  }else if(context === "alumni"){

    addAlumniToSearchResults();
    displayWithContext(context);

  }else{
    
    
    addAllToSearchResults();
    displayWithContext("all");

  }


}



function addAllToSearchResults() {

  localVar.searchResults = [];

  for(let i=0; i < localVar.lastRow-1 ; i++){
    localVar.searchResults[i]= localVar.cloudobject.busyobj[i+1];
  }


}




function addTypeToSearchResults() {

  localVar.searchResults = [];

  
  let currentSearchTag = localVar.searchKey.value;

  for(let i=0; i < localVar.lastRow ; i++){
   //

   
   checkTypeTag(localVar.cloudobject.busyobj[i],currentSearchTag);
        
  }


}

function addAlumniToSearchResults() {

  localVar.searchResults = [];
  

  for(let i=0; i < localVar.lastRow ; i++){

    if(localVar.cloudobject.busyobj[i].alumStatus === "yes"){
      localVar.searchResults.push(localVar.cloudobject.busyobj[i]);
    }
        
  }


}



function displayWithContext(context) {

  if(context==="all"){

    let boxes = localVar.searchResults.length;
   populatingBoxes(boxes,cardDiv);

  }else if(context==="type"){
    let boxes = localVar.searchResults.length;
   
   populatingBoxes(boxes,cardDiv);

  }else if(context ==="name"){
    let boxes = localVar.searchResults.length;
    
    populatingBoxes(boxes,cardDiv);

  }else if(context ==="alumni"){
    let boxes = localVar.searchResults.length;
    
    populatingBoxes(boxes,cardDiv);

  }{
    mySearchQuery.innerHTML = "";
  }

}


function cardClickFunction (){

  //  hiddenMenu.style.visibility === "visible";

     
      //  hiddenMenu.style.visibility = "visible";
        myNavigationGuru("cardToDetail");

    
       // title1.innerHTML = this.id;

       let elementId = this.id;
       let elementIndex = elementId.charAt(elementId.length-1);
       let i = parseInt(elementIndex,10);
       

       

        title1.innerHTML = localVar.searchResults[i].busyName;
        newBuzLogo.style.backgroundImage = `url(${localVar.searchResults[i].logo})`;
        description1.innerHTML = localVar.searchResults[i].busyDescription;
       email.innerHTML = localVar.searchResults[i].email;
        phoneone.innerHTML = localVar.searchResults[i].phoneOne;
        phonetwo.innerHTML = localVar.searchResults[i].phoneTwo;
        phonethree.innerHTML = localVar.searchResults[i].phoneThree;
        map.innerHTML = localVar.searchResults[i].mapOne;
        title2.innerHTML = localVar.searchResults[i].alumName;
        description2.innerHTML = localVar.searchResults[i].alumBio;

       

      // description1.innerHTML = i;
        
    
}

function searchButStuff () {

  mySearchBut.addEventListener("click", function() {
     
    fetchSearchKey();
    
    populateSearchResults(localVar.searchKey.type);

    populateSearchKey();

    
    

  } )
}



function fetchSearchKey() {
    
  localVar.searchKey.type = document.getElementById("search-type-select").value;
  

  if(localVar.searchKey.type==="name"){

    localVar.searchKey.value = document.getElementById("myfancykey").value;

  }else if(localVar.searchKey.type==="type"){

    
    let myTempSelect = document.getElementById("company-type-select");
    localVar.searchKey.value = myTempSelect.value;
    localVar.searchKey.textVal = myTempSelect.options[myTempSelect.selectedIndex].text;

  }else if(localVar.searchKey.type==="alumni"){

    localVar.searchKey.value = document.getElementById("alumni-type-select").value;

  }else{

    localVar.searchKey.value = "all";
  }

  

}





function checkTypeTag(itemObject,tag) {

  let thisItemTagsArray = itemObject.tags;


  itemObject.searchScore = 0;

  tag = tag.toLowerCase();
  tag = tag.trim();
  tag = tag.toString();


  for(let i6969=0 ; i6969<thisItemTagsArray.length ; i6969++) {
    let thisItemThisTagString = thisItemTagsArray[i6969].toString();

    if(tag===thisItemThisTagString){
      itemObject.searchScore = 10;
      localVar.searchResults.push(itemObject);
      break;
     // let temp306942 = document.createElement("div");
      //temp306942.innerText = tag+":::"+thisItemThisTagString
      //mySearchQuery.appendChild(temp306942);
    
    }else{

      itemObject.searchScore = 0;
      
    }
  }

  

  return itemObject.searchScore;


}


function populateSearchKey() {

  let searchValue = "holla";
  let numOfResults = 0;
  let searchType = localVar.searchKey.type;
  


  if(searchType === "alumni"){

    searchValue = "IST Alumni Work Here!!";

  }else if (searchType === "type"){

    searchValue = localVar.searchKey.textVal;

  }else if (searchType === "name"){

    searchValue = localVar.searchKey.value;

  }else {
    
    
    searchValue = "All Businesses";
  }





numOfResults = localVar.searchResults.length;


  let searchInnerHtml =`Search results for : <span>${searchValue}</span><br>Number of results : <span style="color: #76bc43 !important">${numOfResults}</span>`;
  mySearchQuery.innerHTML = searchInnerHtml;

}




function myNavigationGuru(navContext) {
/*

Responsible for navigation animations, not originally how this was planned,so umm, it's choppy i guess!

it receives and perform actions by the following contexts: cardToDetail, detailToCards and much later searchAnime

this is implemented now to beautify the details page

*/

if(navContext==="cardToDetail"){

  motherDiv.innerHTML = "";
  motherDiv.appendChild(hiddenMenu);
  





}else if(navContext==="detailToCards"){}

};