//create array and store paths
let data = [
	{
		"image":"https://embed.widencdn.net/img/scprt/3gb9fyak0t/1024px/?u=nkm28l%23quality=75",
		"title":"MyrtleBeach State Park Pier",
		"desc":"Myrtle Beach State Park Pier fishing at Sunset"
	},
	{
		"image":"",
		"title":"title 2",
		"desc":"Described image 2"
	},
	//3
	{

	},
	//4
	{

	},
	//5
	{

	}
];

//change Gallery to my theme
document.querySelector("#gallery h2").innerHTML ='Myrtle Beach State Park <strong>Gallery</strong>';

//create buttons for event listen to attach to.
const prev = document.querySelector('.pagination li:first-of-type button');
const next = document.querySelector('.pagination li:last-of-type button');

//get img element
const imgEl = document.querySelector('#gallery img');

//get paragraph element
const para = document.querySelector('#gallery :nth-child(3)');

//index varibale to keep track in array
let index =0;

//set initial image to 0
imgEl.src = data[index].image;
imgEl.alt = data[index].title;
imgEl.height = "600";
document.querySelector("#gallery h3").innerHTML = data[index].title;
para.innerHTML = data[index].desc;

//attach the event listeners to buttons
next.addEventListener('click',nextImg);
prev.addEventListener('click',prevImg);

//next and previous functions
function nextImg(){
	//change index
	if(index <data.length -1){
		index++;
	}else{
		index = 0;
	}
	//change the image
	imgEl.src = data[index].image;
}

function prevImg(){
	//change index
	if(index >0 ){
		index--;
	}else{
		index = data.length;
	}
	//change the image
}


















