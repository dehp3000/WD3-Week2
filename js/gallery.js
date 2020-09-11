//create array and store paths
let data = [
	{
		"image":"https://embed.widencdn.net/img/scprt/3gb9fyak0t/1024px/?u=nkm28l%23quality=75",
		"title":"Myrtle Beach State Park Pier",
		"desc":"Myrtle Beach State Park Pier fishing at Sunset."
	},
	//2
	{
		"image":"https://embed.widencdn.net/img/scprt/rou9ry2oyl/1024px/?u=nkm28l%23quality=75",
		"title":"Myrtle Beach State Park Pier and oak tree",
		"desc":"Myrtle Beach State Park Pier mid day with oak tree and walking trail."
	},
	//3
	{
		"image":"https://embed.widencdn.net/img/scprt/kpv5rxyzlx/1024px/?u=nkm28l%23quality=75",
		"title":"Myrtle Beach State Park Pelican",
		"desc":"Myrtle Beach State Park Pelican taking flight in the evening."
	},
	//4
	{
		"image":"https://embed.widencdn.net/img/scprt/cilcq5v03b/1024px/?u=nkm28l%23quality=75",
		"title":"Myrtle Beach State Park egret",
		"desc":"A great white egret catching it's prey at Myrtle Beach State Park."
	},
	//5
	{
		"image":"https://embed.widencdn.net/img/scprt/kf25uzrbez/1024px/?u=nkm28l%23quality=75",
		"title":"Myrtle Beach State Park Pier Evening.",
		"desc":"Myrtle Beach State Park Pier in the Evening at Sunset from underneath."
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

	//set text fields and alt.
	imgEl.src = data[index].image;
	imgEl.alt = data[index].title;
	imgEl.height = "600";
	imgEl.width = "800";
	document.querySelector("#gallery h3").innerHTML = data[index].title;
	para.innerHTML = data[index].desc;
}

function prevImg(){
	//change index
	if(index >0 ){
		index--;
	}else{
		index = data.length;
	}
	//change the image
	imgEl.src = data[index].image;
	
	//set text fields and alt.
	imgEl.src = data[index].image;
	imgEl.alt = data[index].title;
	imgEl.height = "600";
	imgEl.width = "800";
	document.querySelector("#gallery h3").innerHTML = data[index].title;
	para.innerHTML = data[index].desc;
}


















