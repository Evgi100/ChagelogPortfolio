import { Portfolio } from '../'
// The portfolio is imported from the index
export const PortfolioData: Portfolio = {
    firstName: 'Evgeny',
    lastName: 'Shapira',
    subheading: `Full-Stack Web Developer with supreme passion for coding`,
    socialMedia: [{
        icon: 'fa fa-linkedin fa-3x',
        link: 'http://www.linkedin.com/in/evgenyshapira',
        color: '#077b5'
    },
    {
        icon: 'fa fa-github fa-3x',
        link: 'https://github.com/Evgi100',
        color: '#000000'
    },
    {
        icon: 'fa fa-codepen fa-3x',
        link: 'https://codepen.io/Eugene100/',
        color: '#663300'
    }],
    introduction: `I have vast experience solving problems and programming automation solutions`,
    changelog: [
        {
            color: '#33ff33',
            month: 'January',
            year: 2018,
            highlight: 'Graduated Elevation Academy Coding Bootcamp ',
            details: `3-month intensive (50+ hours/week) hands on coding bootcamp.  During the bootcamp, I gained experience building individual and team-based full-stack web applications. The course emphasis was on becoming a full-stack programmer using the MEAN stack, and REACT.`
        },
        {
            color: '#4d4dff',
            month: 'January-December',
            year: 2016,
            highlight: 'Risk Management Analyst at Meitav Dash ',
            details: `In charge of risk management for stock and bonds indices ETN'S and ETF'S`
        },
        {
            color: '#33ff33',
            month: 'January-December',
            year: 2015,
            highlight: 'Excel/VBA Professional at Meitav Dash ',
            details: `Using Advanced Excel and VBA, I created various automation solutions and change work procedures to make it more efficient and reduce the amount of human error mistakes by 80%.  `

        },
        {
            color: '#4d4dff',
            month: 'January-December',
            year: 2011,
            highlight: 'MBA, Finance and Economics',
            details: `Obtained a MBA degree from the The Open University of Israel    `

        }
    ],
    projects: [{
        description: 'Budgetify: SPA(Single-page-application) that allow the user add filter and control their expenses',
        link: 'https://budgetfy.herokuapp.com/'
    },
    {
        description: 'MirrorMirror: SPA  that uses the power of the internet to help choose the best outfit for each occasion',
        link: 'https://mirrormirror-app2.herokuapp.com/'
    },
    {
        description: 'Omnifood is sample web site for a organic food delivery service',
        link: 'https://omnifood-sample.netlify.com/'
    }],
    speakerBio: `Passionate coder specializing in Angular & React with strong analytical skills (both qualitative and quantitative), team oriented and self motivated with both product and customer oriented mind set. 
   In my previous position I worked as part of a diverse and dynamic team in a highly pressure environment where I had to prioritize, multi-task and work with minimum supervision to cope with tight deadlines.
  Using Advanced Excel and VBA, I created various solution and changes to work procedures and process to make it more efficient and reduce the amount of human error mistakes`

}


