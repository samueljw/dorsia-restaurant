const overlay = document.querySelector(".overlay");

const btnDisplayMenu = document.querySelector(".display-menu");
const btnCloseMenu = document.querySelector(".close-menu");
const menu = document.querySelector(".menu");

const btnDisplayMap = document.querySelector(".display-map");
const btnCloseMap = document.querySelector(".close-map");
const map = document.querySelector(".map");

const btnDisplayRes = document.querySelector(".display-res");
const btnCloseRes = document.querySelector(".close-res");
const res = document.querySelector(".res");

const navMobile = document.querySelector(".nav-mobile");
const hamburger = document.querySelector(".hamburger");
const mobile = document.querySelectorAll(".mobile");
const bar1 = document.querySelector(".bar1");
const bar2 = document.querySelector(".bar2");
const bar3 = document.querySelector(".bar3");

const parallax = (element, distance, speed) => {
	const item = document.querySelector(element);
	item.style.transform = `translateY(${distance * speed}px)`;
};

window.addEventListener("scroll", () => {
	parallax(".parallax", window.scrollY, 0.8);
});

hamburger.addEventListener("click", () => {
	navMobile.classList.toggle("nav-expand");
	bar1.classList.toggle("change1");
	bar2.classList.toggle("change2");
	bar3.classList.toggle("change3");
});

mobile.forEach((button) => {
	button.addEventListener("click", () => {
		navMobile.classList.toggle("nav-expand");
		bar1.classList.toggle("change1");
		bar2.classList.toggle("change2");
		bar3.classList.toggle("change3");
	});
});

btnDisplayMenu.addEventListener("click", () => {
	menu.classList.remove("hidden");
	overlay.classList.remove("hidden");
});

const closeMenu = () => {
	menu.classList.add("hidden");
	overlay.classList.add("hidden");
};

btnCloseMenu.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);

document.addEventListener("keydown", (e) => {
	if (e.key === "Escape" && !menu.classList.contains("hidden")) {
		closeMenu();
	}
});

btnDisplayMap.addEventListener("click", () => {
	map.classList.remove("hidden");
	overlay.classList.remove("hidden");
});

const closeMap = () => {
	map.classList.add("hidden");
	overlay.classList.add("hidden");
};

btnCloseMap.addEventListener("click", closeMap);
overlay.addEventListener("click", closeMap);

document.addEventListener("keydown", (e) => {
	if (e.key === "Escape" && !map.classList.contains("hidden")) {
		closeMap();
	}
});

btnDisplayRes.addEventListener("click", () => {
	res.classList.add("res-expand");
	overlay.classList.remove("hidden");
});

const closeRes = () => {
	res.classList.remove("res-expand");
	overlay.classList.add("hidden");
};

btnCloseRes.addEventListener("click", closeRes);
overlay.addEventListener("click", closeRes);

document.addEventListener("keydown", (e) => {
	if (e.key === "Escape" && !res.classList.contains("hidden")) {
		closeRes();
	}
});

const allSections = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
	const [entry] = entries;

	if (!entry.isIntersecting) return;

	entry.target.classList.remove("section--hidden");
	observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
	root: null,
	threshold: 0.15,
});

allSections.forEach(function (section) {
	sectionObserver.observe(section);
	section.classList.add("section--hidden");
});
