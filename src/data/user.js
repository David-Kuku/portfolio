import nft from '../assets/nft.png'
import gym from '../assets/gym.png'
import dboard from '../assets/dboard.png'
import sql from '../assets/sql.png'
import ocpus from '../assets/ocpus.png'

const INFO = {
	main: {
		title: "Portfolio By David",
		name: "Kuku D.",
		email: "psalmsgus99@gmail.com",
		logo: "../logo.png",
	},

	socials: {
		github: "https://github.com/David-Kuku",
		linkedin: "https://www.linkedin.com/in/kukudavid/",
		leetcode: "https://leetcode.com/Kuku_David/",
	},

	homepage: {
		title: "Frontend Developer.",
		description:
		"I'm a skilled frontend developer with over 2 years of professional experience. I have expertise in React and its ecosystem, including Redux, Jest, Node js and GraphQL. I have proven ability to design and implement high-quality user interfaces. I'm passionate about building engaging, scalable, highly maintainable and user-friendly web applications."
	},

	about: {
		title: "I’m David Kuku. I live in Lagos, Nigeria, where I give life to beautiful designs.",
		description:
			"I've worked on a variety of projects over the years and I'm proud of the progress I've made. Many of the products I have worked on are driven by professional purposes, characterized by their fast-paced nature, high scalability, maintainability, and efficiency. These experiences have played a significant role in my growth as a developer, allowing me to continuously refine and hone my skills.",
	},

	projects: [
		{
			title: "NFT Marketplace",
			description:
				"A React and Bootstrap-powered NFT marketplace that allows users to buy, sell, and trade NFTs in a secure and user-friendly environment.",
			logo: nft,
			linkText: "Demo",
			githubLink: "https://github.com/David-Kuku/NFT-Marketplace",
			link: "https://kuku-nft.netlify.app",
		},

		{
			title: "Gym",
			description:
				"A gym website built with React and Tailwind that empowers users to find and book classes, track their progress, and connect with other gym members.",
			logo: gym,
			linkText: "Demo",
			link: "https://gym-kuku.netlify.app/",
			githubLink: 'https://github.com/David-Kuku/KipFit'
		},

		{
			title: "Admin Dashboard",
			description:
				"This React admin dashboard (only desktop view) is built with four popular JavaScript frameworks: React, Material UI, Chart.js, and Redux. React is used to create the user interface, while Material UI is used to provide the underlying structure and styling. Redux is used to keep track of the state of the application, and Chart.js is used to create interactive charts and graphs.",
			logo: dboard,
			linkText: "Demo",
			githubLink: "https://github.com/David-Kuku/Admin-Dashboard",
			link: "https://kuku-admin-dashboard.netlify.app/",
		},

		{
			title: "React SQL Editor",
			description:
				"This application is a SQL editor developed using React, styled components, Jest, and Ace editor. It allows users to query data using SQL Query Language. Users can access data from predefined SQL queries (listed in the repository's readme) through either the SQL editor or the sidebar menu.",
			logo: sql,
			linkText: "Demo",
			githubLink: "https://github.com/David-Kuku/React-SQL-editor",
			link: "https://kukusqleditor.netlify.app/",
		},

		{
			title: "Ocpus",
			description:
				"A sophisticated e-commerce website for buying and selling with high end functionalities such as video streaming, realtime chat, push notifications and stripe integrations. I was a major part (worked as a fullstack engineer) of the team that built this. The stacks include MongoDB, Express, React and Node js.",
			logo: ocpus,
			linkText: "Demo",
			link: "https://ocpus.io/",
		},
	],
};

export default INFO;
