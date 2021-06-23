import empDirect from '../assets/imgs/empDirect.png';
import profPortfolio from '../assets/imgs/profPortfolio.png';
import workdayScheduler from '../assets/imgs/workdayScheduler.png';
import weatherDash from '../assets/imgs/weatherDash.png';
import jobJump from '../assets/imgs/jobJump.png';
import fanPage from '../assets/imgs/fanPage.png';

const projects = [
	{
		id: 1,
		name: 'Employee Directroy',
		img: empDirect,
		repo: 'https://github.com/mschall217/employee-directory',
		deployed: 'https://mschall217.github.io/employee-directory/',
		description:
			'A sortable employee directory created using React.js.',
	},
	{
		id: 2,
		name: 'Professional Portfolio',
		img: profPortfolio,
		repo: 'https://github.com/mschall217/professional-portfolio',
		deployed: 'https://mschall217.github.io/professional-portfolio//',
		description:
			"Portfolio page built from HTML / CSS / vanilla JS",
	},
	{
		id: 3,
		name: 'Workday Scheduler',
		img: workdayScheduler,
		repo: 'https://github.com/mschall217/work-day-scheduler',
		deployed:
			'https://mschall217.github.io/work-day-scheduler/',
        description:
			'A simple APP to plan out the work day. Add notes and they save on refresh until you unlock to edit / delete',
	},
	{
		id: 4,
		name: 'Weather Dashboard',
		img: weatherDash,
		repo: 'https://github.com/mschall217/weather-dashboard',
		deployed: 'https://mschall217.github.io/weather-dashboard/',
		description:
			'Using 3rd Party API this dashboard allows a user to find their current and 5 day forecast in a user friendly way',
	},
	{
		id: 5,
		name: 'JobJump',
		img: jobJump,
		repo: 'https://github.com/mschall217/job-jump',
		deployed: 'https://mschall217.github.io/job-jump/.',
		description:
			'Leading a team of developers, this app was created to allow users to search for jobs in the midst of the pandemic while updating them on local covid data',
	},
	{
		id: 6,
		name: 'My First Website',
		img: fanPage,
		repo: 'https://github.com/mschall217/FanPage',
		deployed: 'https://mschall217.github.io/FanPage/',
		description:
			'It is always imporatnt to remember where you started. This was my first website I built and will always be near and dear to my heart. When I am frustrated it reminds me how far I have come and how much I have learned.',
	},
];

export default projects;