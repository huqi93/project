//create required arrays
let arrayList123=[];
let another1=[];
let eachLength=[];
let a=[];
let b=[]

//get main url content
fetch ('https://www.grab.com/my/')
    .then(response =>response.text())
    .then(function(html) {

        //parse the content into DOM
        let parser = new DOMParser();
        let document = parser.parseFromString(html, 'text/html');
        //search for headers content
        let searchbyheader = document.getElementById("top");
        let links = searchbyheader.getElementsByTagName("a");

        //search the header urls using href attribute
        let Arraylinks = [];
        for (let i = 0; i < links.length; i++) {
            Arraylinks[i] = links[i].getAttribute("href");
        }
        for (let i = 0; i < Arraylinks.length; i++) {
            if (Arraylinks[i].charAt(0) == "h" && Arraylinks[i].charAt(9)== "w") {
                let correct = Arraylinks[i];
                arrayList123.push(correct);

            }
            if (Arraylinks[i].charAt(0) == "/") {
                links = "https://www.grab.com" + Arraylinks[i];
                let index = another1.push(links);
            }
            ;

        }
        //create array for header urls
        arrayList123.push.apply(arrayList123, another1);

//fetch and an array of content length for all urls
    for(let i=0; i<arrayList123.length;i++){
     fetch(arrayList123[i]) 
    .then(response => response.text()) 
    .then(function (text1) { 

     a[i]=text1.length;
   }) 
    }})

//create and display table
function Finallink(){

    function tableCreate() {

        let body = document.getElementsByTagName('body')[0];
        let tbl = document.createElement('table');

         tbl.style.width = "800px" ;

        //create caption
        let caption = document.createElement("CAPTION");
        let text = document.createTextNode("Character Count for grab.com Header Urls");
        caption.appendChild(text);

        tbl.insertBefore(caption, tbl.childNodes[0]);

        //set column headers
        tbl.setAttribute('border', '1');
        let orderArrayHeader = ["url","character count"];
        let thead = document.createElement('thead');
        tbl.appendChild(thead);

        //create table columns and rows with added strings
        for(var i=0;i<orderArrayHeader.length;i++){
            thead.appendChild(document.createElement("th")).
            appendChild(document.createTextNode(orderArrayHeader[i]));
        }
        let tbdy = document.createElement('tbody');
        //create rows
        for (let i = 0; i < a.length; i++) {
            let tr = document.createElement('tr');

            //create columns with values
            for (let j = 0; j < 2; j++) {
                if (i == a.length && j == 1) {
                    break
                } else {
                    b=[arrayList123,a];
                    let td = document.createElement('td');
                    td.appendChild(document.createTextNode(b[j][i]));
                    tr.appendChild(td)
                }

            }
            tbdy.appendChild(tr);

        }
        tbl.appendChild(tbdy);
        body.appendChild(tbl)

    }
    tableCreate();
}


//set timer to display table after all items are fetched
setTimeout( Finallink, 1200);



