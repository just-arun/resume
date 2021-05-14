const app = new Vue({
	el: "#app",
	data: {
		topics: [
			["OBJECTIVE",],
			["PROFESSIONAL SUMMARY",],
			["Technical Skills",],
			["WORK HISTORY",],
			["Education Qualification",],
			["Projects",],
			["Project 2: Holadoc",],
			["Concept: Online Medical Counselling",],
			["Project 3: GoNative (Restaurant management app)",],
			["Project 4: OBE Power (EV Charging Port)",],
			["Project 6: Growth Portal",],
			["PERSONAL INFORMATION",],
			["DECLARATION",],
		],
		current: "",
		contents: [
			{
				list: [],
				table: [],
				text: `To seek a challenging and interesting career that encourages my technical skills to achieve professional and personal growth along with the substantial growth of organization.`
			},
			{
				list: [
					`Having 2 year 8 month of experience as a UI/Front - End Software Developer of which 1 year as a freelancer `,
					`Extensive experience in developing interactive web applications using HTML/HTML5, CSS/CSS3, Bootstrap, JavaScript, JSON, Angular (8+). Vuejs, NuxtJS, ReactJS, NodeJS, ExpressJS, GoLang and MongoDB.`,
					`Extensively involved in various phases of Software Development Life Cycle such as Requirements gathering, Requirement Walkthrough, Design, Workflow Architecture and Implementation.`,
					`Work Extensively in Agile Development process including SCRUM, involved in daily SCRUM meetings to keep track of the ongoing project status and issues using JIRA`,
					`Responsible for the effective Development and Delivery of Products on time.`,
					`Experience in developing the Single Page Application using (Angular, React, Vue) Frameworks. `,
					`Experience in building responsive and Mobile optimized websites using Scss and Vuetify`,
					`Good Understanding of Document Object Model (DOM) and Web Standards.`,
					`Understanding the business goals and converts it into technical design.`,
					`Proficient in css3 Grid and Media queries to achieve Responsive web design (RWD).`,
					`Hands-on experience in creating Angular,React,Vue factories for using angular services like ($http/axios/fetch) to make RESTful API calls to the NodeJs/Go based backend`,
					`Hands on experience in testing tools such as Jasmine, Karma. Mocha for Test Driven Development.`,
					`Extensive working Knowledge and through exposure on cross browser / cross device compatibility with emphasis on responsive design principles and Interactive web design.`,
					`Experience in writing and updating the technical documentation of the Developed Product.`,
					`Hands-on experience with using software version control tools like GitHub and Bit bucket.`,
					`Able to quickly grasp new concepts, incorporate innovations and stay up to date with industry and business directions`,
					`Self-starter always inclined to learn new technologies and Team Player with very good communication, organizational and interpersonal skills.`,
					`Recommend business process flow improvements and clearly communicate problem/resolution process to project management`,
				],
				table: [],
				text: ""
			},
			{
				list: [], table: [
					["Operating System", "Windows and Linux(Ubuntu)"],
					["Web Technologies", "HTML5, CSS3, JavaScript (ES6), JSON, "],
					["JavaScript Libraries", "Angular (8), Nustjs, Vuejs2, Reactjs, Nextjs"],
					["State management", "Redux, Vuex"],
					["Programming Languages", "Typescript, Golang"],
					["Testing Tools", "Jasmine, Karma. Mocha, Chai"],
					["Methodologies", " Agile "],
					["Other Tool & Technologies  ", "NPM , ANGULAR CLI , JIRA"],
					["Database", "MySQL, MongoDB,"],
					["Backend", "Nodejs, GoLang"],
					["Version Controlling  ", "GitHub, Bit Bucket"],
					["IDE s", "Visual Studio Code"],
					["Others", "RXJS, NGRX Webpack"],
				], text: ""
			},
			{ list: [
				`Working as a freelancer from 2018 - 2019`,
				`Wekan Technologies, Chennai as Software Engineer Jun 2019 to Mar 2021.`,
				`Poorvika technologies, Chennai as Senior Software Engineer Apr 2021 to present`,
			], text: "", table: [] },
			{ list: [], text: "", table: [] },
			{ list: [], text: "", table: [] },
			{ list: [], text: "", table: [] },
			{ list: [], text: "", table: [] },
			{ list: [], text: "", table: [] },
			{ list: [], text: "", table: [] },
			{ list: [], text: "", table: [] },
			{ list: [], text: "", table: [] },
			{ list: [], text: "", table: [] },
		]
	},
	mounted() {
		window.onhashchange = (e) => {
			this.current = String(window.location.hash).replace(/\#/, "")
		}
	},
	methods: {
		toTitle(str) {
			return String(str).toUpperCase();
		},
		toLink(str) {
			return String(str).toLowerCase().replace(/ /g, '-');
		},
	}
})