document.querySelector("#gallery h2").innerHTML ='Carolina Parks <strong>Gallery</strong>';

//create buttons for event listen to attach to.
const prev = document.querySelector('.pagination li:first-of-type button');
const next = document.querySelector('.pagination li:last-of-type button');

//index varibale to keep track in array
let index =0;

//attach the event listeners to buttons
next.addEventListener('click',nextImg);
prev.addEventListener('click',prevImg);

//next and previous functions
function nextImg(){
	//change index
	alert('next image pressed');
}

function prevImg(){
	//change index
	alert('previous image pressed');
}


















//create array and store paths
let data = [
	{
		"image":"/images/image1.jpg",
		"title":"title 1",
		"desc":"Described image 1"
	},
	{
		"image":"/images/image1.jpg",
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


















