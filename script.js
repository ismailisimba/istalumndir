
let localVar = {"cloudobject":{},
                "searchcontext":"all",
                "searchResults":[],
                "searchKey":{  "type":"typeofkey",
                               "value":"valueofkey",
                               "textVal":"optionstext"},
                "lastRow":0,
              "numOfLocations":0,
            "locationObject":{"locMapOne":[],
                              "locMapTwo":[],
                              "locMapThree":[]},
              "currAniico":"play",
            "mouseEveValSet":0,
          "prevScrollPos":0};

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
let website = document.getElementById("buzweblink");

let map = document.getElementById("map-div");



let locationBoxContainer = document.getElementById("locationsbox");

let newBuzLogo = document.getElementById("mybuzlogo");
let newBuzPic = document.getElementById("buzmainpic");

let locationBoxes = locationBoxContainer.querySelectorAll(".locations");
locationBoxes[0].remove();
locationBoxes[1].remove();
locationBoxes[2].remove();

//let animationControll = document.querySelectorAll(".animecontrolbox")[0];
let alumBusyIcon = document.querySelectorAll(".childalumbox")[0];





let title2 = document.getElementById("alumname");
let description2 = document.getElementById("descriptionalumbox");


/* detailed page updatable values */

document.getElementById("closearrow").addEventListener("click", function () {
  motherDiv.innerHTML = "";
  locationBoxContainer.innerHTML = "";
  mySearchQuery.innerHTML = "";
  populatingBoxes (localVar.searchResults.length, cardDiv);
  window.scrollTo(0,localVar.prevScrollPos);

  
  
});

let spanNumall = document.getElementById("letitular").querySelectorAll("span");
let motherDiv = document.getElementById("mother-container");
let tempDiv2 = document.getElementById("closearrow");
let tempDiv = hiddenMenu;
let reqString = "https://script.google.com/macros/s/AKfycbwePxUUAJRuhfdsKMe7ghiJYxEBSeroek9Z6xAA49XnjjN5cdY/exec"


hiddenMenu.remove();

function mainFunc () {

    

 

  // fetchInfoWithFilter ();
    myasync();
    searchBarStuff();
    searchButStuff();
    




}


mainFunc();

function addClickEventFunc(element,i) {

  
  //  let styleTemp = window.getComputedStyle(hiddenMenu);
  

       // addAnimation(element,i);
        
        element.querySelectorAll(".childreninsidecontainer")[0].addEventListener("click", cardClickFunction);

        element.addEventListener("mouseenter",doAnimationControllStuff);
        element.addEventListener("touchstart",doAnimationControllStuff);

        

      

          element.addEventListener("mouseleave",undoAnimationControllStuff);
          element.addEventListener("touchend",undoAnimationControllStuff);

    
        

      
       



}

function removeClickEventFunc(element,i) {

  
  //  let styleTemp = window.getComputedStyle(hiddenMenu);
  


        element.removeEventListener("click", cardClickFunction, false);

        element.removeEventListener("mouseenter", doAnimationControllStuff, false);
        element.removeEventListener("touchstart", doAnimationControllStuff, false);

       element.removeEventListener("mouseleave", undoAnimationControllStuff, false);
      element.removeEventListener("touchend", undoAnimationControllStuff, false);
      

    


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
  



  let context = "all";
  populateSearchResults(context);
  
  populatingBoxes (localVar.lastRow-1, cardDiv);





 //motherDiv.innerHTML = boxes;



}


function addAnimation(element,i){

  let tempDiv300 = element.querySelectorAll(".childreninsidecontainer");
  //tempDiv300[0].id = "childreninternal"+i;

  element.querySelectorAll(".childalumbox")[0].style.opacity = "0.12";

  


  if( i == 0 || i%2 == 0){
    
    tempDiv300[0].classList.add("childrenrollleft");
  }else {
    tempDiv300[0].classList.add("childrenrollright");
  }
}



function stopAnimation(element,i){

  let tempDiv300 = element.querySelectorAll(".childreninsidecontainer");
  //tempDiv300[0].id = "childreninternal"+i;

  element.querySelectorAll(".childalumbox")[0].style.opacity = "1";

  


  if( i == 0 || i%2 == 0){
    
    tempDiv300[0].classList.remove("childrenrollleft");
  }else {
    tempDiv300[0].classList.remove("childrenrollright");
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
    doAlumnBusyStuff(i,"outsideCard",tempclone);

    
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

     let myParentNode = this.parentNode;
     //  title1.innerHTML = myParentNode.id;

       let elementId = myParentNode.id;
       let elementIndex = elementId.slice(13);
       let i = parseInt(elementIndex,10);
       

       title1.innerHTML= elementIndex;

        title1.innerHTML = localVar.searchResults[i].busyName;
        newBuzLogo.style.backgroundImage = `url(${localVar.searchResults[i].logo})`;
        newBuzPic.style.backgroundImage = `url(${localVar.searchResults[i].mainImage})`
        description1.innerHTML = localVar.searchResults[i].busyDescription;
       email.innerHTML = localVar.searchResults[i].email;
       website.querySelectorAll("a")[0].href = "https://"+localVar.searchResults[i].website;
       website.querySelectorAll("a")[0].innerHTML = localVar.searchResults[i].website;
       // phoneone.innerHTML = localVar.searchResults[i].phoneOne;
       // phonetwo.innerHTML = localVar.searchResults[i].phoneTwo;
       // phonethree.innerHTML = localVar.searchResults[i].phoneThree;
        //map.innerHTML = localVar.searchResults[i].mapOne;

       fillLocationAndMap(this,i);
       doAlumnBusyStuff(i,"insideCard",tempDiv);

      //  title2.innerHTML = localVar.searchResults[i].alumName;
       // description2.innerHTML = localVar.searchResults[i].alumBio;

       

      // description1.innerHTML = i;

      localVar.prevScrollPos = Math.floor(window.scrollY);

      if(window.screen.width <1000){

        window.scrollTo(0,500);

      }else{

        window.scrollTo(0,100);

      }

   
        
    
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




function fillLocationAndMap (element, givenIndex){
  let locationOneValue = localVar.searchResults[givenIndex].locationOne;
  let locationTwoValue = localVar.searchResults[givenIndex].locationTwo;
  let locationThreeValue = localVar.searchResults[givenIndex].locationThree;

  locationOneValue = locationOneValue.toString();
  locationTwoValue = locationTwoValue.toString();
  locationThreeValue = locationThreeValue.toString();

 

  /*Remove empty boxes first before adding content */


          if(locationOneValue.length>1){
         
         localVar.numOfLocations = localVar.numOfLocations + 1; 
          }else{
          
          }


          if(locationTwoValue.length>1){
         
         localVar.numOfLocations = localVar.numOfLocations + 1; 
          }else{
          
          }


          if(locationThreeValue.length>1){
          
          localVar.numOfLocations = localVar.numOfLocations + 1; 
          }else{
          
          }

          locationBoxContainer.innerHTML = "";

          if(localVar.numOfLocations>0){


         

                          for(let i=0 ; i<localVar.numOfLocations ; i++){

                            if(i==0){

                              locationBoxContainer.appendChild(locationBoxes[i]); 
                              locationBoxes[i].querySelectorAll(".locationnum")[0].innerHTML = localVar.searchResults[givenIndex].locationOne;
                              document.getElementById("map-div").innerHTML = localVar.searchResults[givenIndex].mapOne;

                              addMapClickForThisLocation(document.getElementById("map-div"),localVar.searchResults[givenIndex].mapOne,locationBoxes[i].querySelectorAll(".locationnum")[0]);

                              locationBoxes[i].querySelectorAll(".phonenums")[0].innerHTML = localVar.searchResults[givenIndex].phoneOne;

                            }else if(i==1){
                              locationBoxContainer.appendChild(locationBoxes[i]); 
                              locationBoxes[i].querySelectorAll(".locationnum")[0].innerHTML = localVar.searchResults[givenIndex].locationTwo;

                              addMapClickForThisLocation(document.getElementById("map-div"),localVar.searchResults[givenIndex].mapTwo,locationBoxes[i].querySelectorAll(".locationnum")[0]);

                              locationBoxes[i].querySelectorAll(".phonenums")[0].innerHTML = localVar.searchResults[givenIndex].phoneTwo;
                              
                            }else{
                              locationBoxContainer.appendChild(locationBoxes[i]); 
                              locationBoxes[i].querySelectorAll(".locationnum")[0].innerHTML = localVar.searchResults[givenIndex].locationThree;

                              addMapClickForThisLocation(document.getElementById("map-div"),localVar.searchResults[givenIndex].mapThree,locationBoxes[i].querySelectorAll(".locationnum")[0]);

                              locationBoxes[i].querySelectorAll(".phonenums")[0].innerHTML = localVar.searchResults[givenIndex].phoneThree;

                            }

                          
                            

                          }



               }

         // mySearchQuery.innerHTML = "Detailed Card";

          localVar.numOfLocations = 0;

  



}




function addMapClickForThisLocation(mapContainer,mapCode,locationTitElement){

  locationTitElement.removeEventListener("click",titleMapClickFunc,false);
  locationTitElement.addEventListener("click",titleMapClickFunc);



          function titleMapClickFunc (){

            mapContainer.innerHTML = mapCode;
            
          }

}





function doAnimationControllStuff() {

  let animationControll = this.querySelectorAll(".animecontrolbox")[0];
 // sty = "visible";

  animationControll.removeEventListener("click",cardClickFunction) 
  animationControll.addEventListener("click",myTemp3000Func) ;
  
  let elementId = this.id;
  let elementIndex = elementId.slice(13);
  let i = parseInt(elementIndex,10); 
  addAnimation(this,i)
  

  function myTemp3000Func(){
  //  let animationControll = document.querySelectorAll(".animecontrolbox")[0];
  let elementId = this.parentNode.id;
  let elementIndex = elementId.slice(13);
  let i = parseInt(elementIndex,10); 
  
        
    if(localVar.currAniico==="play"){
     animationControll.style.backgroundImage = `url(${"https://www.istafrica.com/uploaded/Elementary_Communications_Department/2020-21/secopenhouse1/play-ico.png"})`
      localVar.currAniico = "pause";

     
      stopAnimation(this.parentNode,i)
     // animationControll.innerHTML = this.parentNode.id;
    }else{
      animationControll.style.backgroundImage = `url(${"https://www.istafrica.com/uploaded/Elementary_Communications_Department/2020-21/secopenhouse1/pause-ico.png"})`
      localVar.currAniico = "play";
      addAnimation(this.parentNode,i)
      //animationControll.innerHTML = this.parentNode.className;
    }

    
 // event.stopstopPropagation();
    }


}


function undoAnimationControllStuff() {

  let animationControll = this.querySelectorAll(".animecontrolbox")[0];
  sty = "collapse";
 // animationControll.removeEventListener("click",myTemp3000Func,false) ;

 let elementId = this.id;
 let elementIndex = elementId.slice(13);
 let i = parseInt(elementIndex,10);
  
 stopAnimation(this,i);


}





function doAlumnBusyStuff(i,context,element){

  if(context==="insideCard"){

    let alumStatus = localVar.searchResults[i].alumStatus

    if(alumStatus === "yes"){
      document.getElementById("alumname").innerHTML = localVar.searchResults[i].alumName +" - Class of " + localVar.searchResults[i].alumYear;
      document.getElementById("descriptionalumbox").innerHTML = localVar.searchResults[i].alumBio;

      document.getElementById("linebreak").style.visibility = "visible";
      document.getElementById("alinfo").style.visibility = "visible";

    }else{
      document.getElementById("linebreak").style.visibility = "collapse";
      document.getElementById("alinfo").style.visibility = "collapse";
    }

  }else{






    let alumStatus = localVar.searchResults[i].alumStatus

    if(alumStatus === "yes"){

      element.querySelectorAll(".childalumbox")[0].style.visibility = "visible";
     

    }else{
      element.querySelectorAll(".childalumbox")[0].style.visibility = "collapse";


    }


  }

  
};



