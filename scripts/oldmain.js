// local JavaScript (js) code wrapped into website at runtime
// Image switcher code

/*

Welcome to the Javascript part of the main website!

Your probably here either to make improvements (which is amazing, hack away!), to link your profile website on here, or to add an example project to the site.

If your here because of the second or third reason and are a beginer to JS, read this to understand how this code works!

The first bunch of sections of code that you will notice are classes.
Obviously you know what they are if you made it to this class but in this context we are using them to organize the information.
It's very abstract, you don't need to worry about them.

To link profile website:
	Under that we have this huge chunk called MENU_BAR_SETTINGS.
	That is the part where you will add your name and (relative) link.
	There are, so far, four "Project" sections in the array.
	Find the one that you are a part of.
	Great! Now copy and paste the following line of code after the last "Website" object...
	➡️ new Website("", ""),
	After that, write inside the first quotations the follow string...
	➡️ [your name]'s Page
	Then, write inside the second quotations the link to your HTML page...
	➡️ "./html/[you name]Build/[your name].html"

To add example project:
	Under the MENU_BAR_SETTINGS, there is another const: STUDENT_EXAMPLES_SETTINGS.
	This array is not as complex as the one above it.
	Copy the following line of code an add it to the end of the array:
	➡️ new Example(
			"",
			"",
			"",
		),
	Inside the first quotations insert your name.
	Inside the second quotations insert a description of this example.
	Inside the last quotations insert the relative link to the html page.

Alright, your job is done now, but if your curious what the last huge chunk of code is...
Javascript lets coders create elements in an object-oriented way.
Which ends up doing the same thing you do in HTML, except in a cooler way.
By doing it this way we can automate the process, making it more efficient for everyone.

The logic for the menu bar links:
	We begin by looping through the array, going through each project.
	Inside each loop we extract the name, header, and description of that section and stick it in the proper element.
	We also link each element to the proper CSS code that hopefully makes it look better.
	Inside each loop we also loop through the different websites that are under it's section.
	Here we do the same thing as above and apply the different links for the student projects.

The logic for the example projects:


Ta-da! ✨ So that's how this code works.
Now go make some cool stuff. 👋

*/

class Area {
	constructor(title, websites) {
		this.title = title;
		this.websites = websites;
	}
}

class Website {
	constructor(name, link) {
		this.name = name;
		this.link = link;
	}
}

class Project {
	constructor(name, header, description, areas) {
		this.name = name;
		this.header = header;
		this.description = description;
		this.areas = areas;
	}
}

class Example {
	constructor(creator, description, src) {
		this.creator = creator;
		this.description = description;
		this.src = src;
	}
}

const MENU_BAR_SETTINGS = [
	new Project(
		"Older Versions",
		"Previous Versions",
		"This site is also managed and maintained every year by the senior Advanced Programmers. Whenever this site has a complete update, we make sure to archive the previous versions.",
		[
			new Area(
				"",
				[
					new Website("Version 1.0", "./Version 1.0/index.html"),
				]
			),
		]
	),
	new Project(
		"Teachers",
		"The Teachers",
		"The students look towards the teachers for for both help and knowledge that could be helpful for their projects.",
		[
			new Area(
				"",
				[
					new Website("Mr. Golanka's Page", "./Teachers/Golanka/golanka_page.html"),
					new Website("Mr. Lindow's Page", "./Teachers/Lindow/lindow_page.html"),
					new Website("Mr. Rencricca's Page", "./Teachers/Rencricca/drencricca.html"),
					new Website("Mr. O'Malley's Page", "./Teachers/O'Malley/omalley.html"),
				],
			),
		],
	),
	new Project(
		"Alumni",
		"The Alumni",
		"The alumni's projects are archived so that new students can see and learn from their work for inspiration.",
		[
			new Area(
				"2018",
				[
					new Website("Sophie's Page", "./html/archives/2019/sophieKofsky/KofskyPage.html"),
					new Website("Bryn's Page", "./html/archives/2019/brynStecher/bstecher.html"),
					new Website("Josh R's Page", "./html/archives/2019/joshRoss/Ross.html"),
					new Website("Phoebe's Page", "./html/archives/2019/phoebeBrewer/brewer.html"),
					new Website("Jason's Page", "./html/archives/2019/jasonDaniels/jdaniels.html"),
					new Website("Sabrina's Page", "./html/archives/2019/sabrinaAlessi/sabrinacode.html"),
					new Website("Will's Page", "./html/archives/2019/willBrooks/will_page.html"),
					new Website("Tyler's Page", "./html/archives/2019/tylerMelwani/tyler.html"),
					new Website("Kadhir's Page", "./html/archives/2019/kadhirPillai/kadhir_page.html"),
					new Website("Beck's Page", "./html/archives/2019/beckSonstein/beckpage.html"),
				],
			),
			new Area(
				"2019",
				[
					new Website("Owen's Page", "./html/Archives/2020/owenWiese/owen_page.html"),
					new Website("Max's Page", "./html/Archives/2020/maxbremner/maxBremner.html"),
					new Website("Josh S's Page", "./html/Archives/2020/joshScreen/screen_page.html"),
					new Website("Becky's Page", "./html/Archives/2020/beckyHershkowitz/hershkowitz_page.html"),
					new Website("Danny's Page", "./html/Archives/2020/dannyFisher/danny_project/new.html"),
				],
			),
		],
	),
	new Project(
		"Students",
		"The Students",
		"The students work on bigger and challenging projects that peak their interests. In their websites, they talk about their projects for the year.",
		[
			new Area(
				"Section 1",
				[
					new Website("Andres's Page", "./html/AndresPage.html"),
					new Website("Ozan's Page", "./html/ozanmirza/portfolio/index.html"),
					new Website("Robert's Page", "./html/Robert.html"),
					new Website("Jake's Page", "./html/jakehtml.html"),
					new Website("Daniel's Page", "./html/DanielLEwis.html"),
					new Website("Ella's Page", "./html/Ella_page.html"),
					new Website("Gina's Page", ""),
				],
			),
			new Area(
				"Section 2",
				[
					new Website("Justin's Page", "./html/RomanowPage.html"),
					new Website("Percy's Page", "./html/FleesPage.html"),
					new Website("Goodnews's Page", "./html/goodnews/html"),
					new Website("Archie's Page", "./html/silverstein.html"),
					new Website("Leila's Page", "./html/leila.html"),
				],
			),
			new Area(
				"Section 3",
				[
					new Website("Mikey's Page", ".html/michael.html"),
					new Website("Hayden's Page", "Hayden.html/"),
					new Website("Nathaniel's Page", "McNutt.html/"),
					new Website("Ethan's Page", "./html/Melwani.html"),
					new Website("Charlotte's Page", "charlotte.html/"),
					new Website("Jacob's Page", ".html/jacobweingard.html"),
				],
			),
		],
	),
];

const STUDENT_EXAMPLES_SETTINGS = [
	new Example(
		"Jake's Swirly Dirly",
		"This is a really cool animation that Jake made in the P5.JS rendering library with a simple algorithim that computes color and location in a circular manner.",
		"./html/jakehtml.html",
	),
	new Example(
		"Mr. Lindow's Magic Snake",
		"This is another really cool animation that Mr. Lindow made in the P5.JS rendering library with a bunch of complex math.",
		"./Teachers/Lindow/html/lindowP5_page.html",
	),
];

window.onload = () => {
	MENU_BAR_SETTINGS.forEach((section) => {
		let dropdown = document.createElement("div");
		dropdown.classList.add("dropdown");

		let button = document.createElement("button");
		button.classList.add("dropbtn");
		button.innerHTML = section.name;
		dropdown.appendChild(button);

		let content = document.createElement("div");
		content.classList.add("dropdown-content");
		dropdown.appendChild(content);

		let title = document.createElement("h3");
		title.classList.add("dropdown-title");
		title.innerHTML = section.header;
		content.appendChild(title);

		let description = document.createElement("p");
		description.classList.add("dropdown-description");
		description.innerHTML = section.description;
		content.appendChild(description);

		let buffer = 0;

		section.areas.forEach((area) => {
			let container = document.createElement("div");
			container.style.padding.left = (200 * buffer) + (20 * (buffer + 1)) + "px";
			content.appendChild(container);

			if (area.title != "") {
				let subtitle = document.createElement("h4");
				subtitle.innerHTML = area.title;
				container.appendChild(subtitle);
			}

			area.websites.forEach((website) => {
				let link = document.createElement("a");
				link.innerHTML = website.name;
				link.href = website.link;
				link.target = "_blank";
				container.appendChild(link);
			});

			buffer++;
		});

		content.style.width = (300 + ((100 + (17.5 * buffer)) * buffer)) + "px";

		document.getElementById("menu").appendChild(dropdown);
	});

	STUDENT_EXAMPLES_SETTINGS.forEach((example) => {
		let container = document.createElement("div");
		container.classList.add("example");
		document.getElementById("examples").appendChild(container);

		let title = document.createElement("h1");
		title.innerHTML = example.creator;
		container.appendChild(title);

		let content = document.createElement("iframe");
		content.src = example.src;
		container.appendChild(content);

		let description = document.createElement("p");
		description.innerHTML = example.description;
		container.appendChild(description);
	});
}
