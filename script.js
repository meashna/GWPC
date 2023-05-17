

// ............navbar..........
document.querySelector('.nav-button .Open').addEventListener('click',()=>{
    document.querySelector('nav .nav-container ul').style.left = '0';
    document.querySelector('.nav-button .Close').style.display='block'
    document.querySelector('.nav-button .Open').style.display='none'
});

document.querySelector('.nav-button .Close').addEventListener('click',()=>{
    document.querySelector('.nav-button .Close').style.display='none'
    document.querySelector('nav .nav-container ul').style.left = '-16rem';
    document.querySelector('.nav-button .Open').style.display='block'
})


// .........nav-active.............

const active = document.querySelectorAll('.nav-container ul li a');

active.forEach(index => {
    index.addEventListener('click',()=>{
        removeItem();
        index.classList.add('nav-active')
    })    
});

function removeItem(){
    active.forEach(index => {      
        index.classList.remove('nav-active'); 
    });    
}



//Testimonials 

const reviewWrap = document.getElementById("reviewWrap");
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");
const imgDiv = document.getElementById("imgDiv");
const personName = document.getElementById("personName");
const profession = document.getElementById("profession");
const description = document.getElementById("description");
const surpriseMeBtn = document.getElementById("surpriseMeBtn");
const chicken = document.querySelector(".chicken");

let isChickenVisible;

let people = [
	{
		photo:
			'url("./img/ramshi.jpg")',
		name: "Ramshida",
		profession: "2nd year,CABM",
		description:
			"It was a great experience for me .I learned many things and also I developed my skill a lot .Now I can develop a website myself. "
	},

	{
		photo:
		'url("./img/lubi.jpg")',
		name: "lubna",
		profession: "2nd year,CABM",
		description:"The workshop I attended was incredibly enriching. I acquired a wealth of knowledge and honed my skills, enabling me to build websites independently. "
			
	},

	{
		photo:
			"url('./img/juzi.jpg')",
		name: "juzaira",
		profession: "2nd year,CABM",
		description:
		"The experience of learning web development has been invaluable. It has empowered me to take charge of my projects, enhance my skill set, and deliver exceptional websites to clients. "
	},
	
	{
		photo:
			"url('./img/asna.jpg')",
		name: "Asna shamila",
		profession: "2nd year,CABM",
		description:
		"The training proved to be a turning point in my career. I am now equipped with the expertise to develop websites on my own, which has opened up new opportunities for personal and professional growth. "
	},

	{
		photo:
			"url('./img/liya.jpg')",
		name: "Liyana",
		profession: "2nd year,CABM",
		description:
		"It was a great experience for me .I learned many things and also I developed my skill a lot .Now I can develop a website myself "
	},
	{
		photo:
			"url('./img/mahra.jpg')",
		name: " Mahra",
		profession: "2nd year,CABM",
		description:
		"The program exceeded my expectations, as it helped me advance my web development skills significantly. I now possess the ability to create professional websites independently and achieve my desired results. "
	},
	
	{
		photo:
			"url('./img/mufi.jpg')",
		name: "mufeeda",
		profession: "2nd year,CABM",
		description:
		"I am extremely grateful for the learning opportunity. It equipped me with the necessary tools to build websites from scratch, providing me with a sense of accomplishment and independence. "
	},
	{
		photo:
			"url('./img/vidya.jpg')",
		name: "vidya",
		profession: "2nd year,CABM",
		description:
		"It was a great experience for me .I learned many things and also I developed my skill a lot .Now I can develop a website myself "
	},
	{
		photo:
			"url('./img/shahana.jpg')",
		name: "Shahana sherin",
		profession: "2nd year,CABM",
		description:
		"The knowledge and skills I gained during the program have been instrumental in my growth as a web developer. I am now capable of creating stunning websites and have become self-reliant in this field."
	},
	{
		photo:
			"url('./img/rumi.jpg')",
		name: "Rumaisha",
		profession: "2nd year,CABM",
		description:
		"The training session proved to be a game-changer for me. I not only acquired new skills, but I also mastered the art of website development, empowering me to handle projects with ease."
	},
	{
		photo:
			"url('./img/rushi.jpg')",
		name: "Rushda banu",
		profession: "2nd year,CABM",
		description:
		"Engaging in the learning process was an eye-opening experience. I now possess the skills and expertise necessary to craft impressive websites independently."
	},
];

imgDiv.style.backgroundImage = people[0].photo;
personName.innerText = people[0].name;
profession.innerText = people[0].profession;
description.innerText = people[0].description;
let currentPerson = 0;

//Select the side where you want to slide
function slide(whichSide, personNumber) {
	let reviewWrapWidth = reviewWrap.offsetWidth + "px";
	let descriptionHeight = description.offsetHeight + "px";
	//(+ or -)
	let side1symbol = whichSide === "left" ? "" : "-";
	let side2symbol = whichSide === "left" ? "-" : "";

	let tl = gsap.timeline();

	if (isChickenVisible) {
		tl.to(chicken, {
			duration: 0.4,
			opacity: 0
		});
	}

	tl.to(reviewWrap, {
		duration: 0.4,
		opacity: 0,
		translateX: `${side1symbol + reviewWrapWidth}`
	});

	tl.to(reviewWrap, {
		duration: 0,
		translateX: `${side2symbol + reviewWrapWidth}`
	});

	setTimeout(() => {
		imgDiv.style.backgroundImage = people[personNumber].photo;
	}, 400);
	setTimeout(() => {
		description.style.height = descriptionHeight;
	}, 400);
	setTimeout(() => {
		personName.innerText = people[personNumber].name;
	}, 400);
	setTimeout(() => {
		profession.innerText = people[personNumber].profession;
	}, 400);
	setTimeout(() => {
		description.innerText = people[personNumber].description;
	}, 400);

	tl.to(reviewWrap, {
		duration: 0.4,
		opacity: 1,
		translateX: 0
	});

	if (isChickenVisible) {
		tl.to(chicken, {
			duration: 0.4,
			opacity: 1
		});
	}
}

function setNextCardLeft() {
	if (currentPerson === 10) {
		currentPerson = 0;
		slide("left", currentPerson);
	} else {
		currentPerson++;
	}

	slide("left", currentPerson);
}

function setNextCardRight() {
	if (currentPerson === 0) {
		currentPerson = 10;
		slide("right", currentPerson);
	} else {
		currentPerson--;
	}

	slide("right", currentPerson);
}

leftArrow.addEventListener("click", setNextCardLeft);
rightArrow.addEventListener("click", setNextCardRight);

surpriseMeBtn.addEventListener("click", () => {
	if (chicken.style.opacity === "0") {
		chicken.style.opacity = "1";
		imgDiv.classList.add("move-head");
		surpriseMeBtn.innerText = "Remove the chicken";
		surpriseMeBtn.classList.remove("surprise-me-btn");
		surpriseMeBtn.classList.add("hide-chicken-btn");
		isChickenVisible = true;
	} else if (chicken.style.opacity === "1") {
		chicken.style.opacity = "0";
		imgDiv.classList.remove("move-head");
		surpriseMeBtn.innerText = "Surprise me";
		surpriseMeBtn.classList.add("surprise-me-btn");
		surpriseMeBtn.classList.remove("hide-chicken-btn");
		isChickenVisible = false;
	}
});

window.addEventListener("resize", () => {
	description.style.height = "100%";
});



/*******************************************Galley 2**************************** */
const carousel = document.querySelector(".carousel"),
  firstImg = document.querySelectorAll("img")[0];
const arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false,
  isDragging = false,
  prevPageX,
  prevScrollLeft,
  positionDiff;

arrowIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    let firstImgWidth = firstImg.clientWidth + 14; // getting first img width & adding 14 margin value
    // if clicked icon is left, reduce width value from the carousel scroll left else add to it
    carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
  });
});

const autoSlide = () => {
  // if there is no image left to scroll then return from here
  if (carousel.scrollLeft == carousel.scrollWidth - carousel.clientWidth)
    return;

  positionDiff = Math.abs(positionDiff); // making positionDiff value to positive
  let firstImgWidth = firstImg.clientWidth + 14;
  // getting difference value that needs to add or reduce from carousel left to take middle img center
  let valDifference = firstImgWidth - positionDiff;

  if (carousel.scrollLeft > prevScrollLeft) {
    // return console.log("user is scrolling to the right");
    // if user is scrolling to the right
    return (carousel.scrollLeft +=
      positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff);
  }
  //   console.log("user is scrolling to the left");
  // if user is scrolling to the left
  carousel.scrollLeft -=
    positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
};

const dragStart = (e) => {
  // updating global variables value on mouse down event
  isDragStart = true;
  prevPageX = e.pageX || e.touches[0].pageX;
  prevScrollLeft = carousel.scrollLeft;
};

const dragging = (e) => {
  // scrolling images/carousel to left according to mouse pointer
  if (!isDragStart) return;
  e.preventDefault();
  isDragging = true;
  carousel.classList.add("dragging");
  positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
  carousel.scrollLeft = prevScrollLeft - positionDiff;
};

const dragStop = () => {
  isDragStart = false;
  carousel.classList.remove("dragging");

  if (!isDragging) return;
  isDragging = false;
  autoSlide();
};

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

carousel.addEventListener("mouseup", dragStop);
carousel.addEventListener("mouseleave", dragStop);
carousel.addEventListener("touchend", dragStop);

