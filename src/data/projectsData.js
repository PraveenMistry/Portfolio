import one from '../assets/svg/projects/one.svg'
import two from '../assets/svg/projects/two.svg'
import three from '../assets/svg/projects/three.svg'
import four from '../assets/svg/projects/four.svg'
import five from '../assets/svg/projects/five.svg'
import six from '../assets/svg/projects/six.svg'
// import seven from '../assets/svg/projects/seven.svg'
// import eight from '../assets/svg/projects/eight.svg'


export const projectsData = [
    {
        id: 1,
        projectName: 'PR Review AI Agent',
        projectDesc: 'Developed an automated AI-powered agent to streamline daily engineering workflows by conducting highly contextual pull request reviews, reducing manual review time.',
        tags: ['AI Engineering', 'NodeJs', 'LLMs'],
        code: 'https://github.com/PraveenMistry',
        demo: 'https://medium.com/@praveenmistry',
        image: one
    },
    {
        id: 2,
        projectName: 'promise-cap',
        projectDesc: 'Built a zero-dependency async concurrency library from scratch featuring priority queues, AbortSignal support, and deadlock detection.',
        tags: ['NodeJs', 'JavaScript', 'NPM Package'],
        code: 'https://github.com/PraveenMistry/promise-cap',
        demo: 'https://www.npmjs.com/package/promise-cap',
        image: two
    },
    {
        id: 3,
        projectName: 'ai-coding-assistant',
        projectDesc: 'Created an AI-powered coding helper CLI tool published on NPM, designed to enhance developer productivity directly from the terminal.',
        tags: ['AI', 'CLI', 'NodeJs'],
        code: 'https://github.com/PraveenMistry/ai-coding-assistant',
        demo: 'https://www.npmjs.com/package/ai-code-assistant',
        image: three
    },
    {
        id: 4,
        projectName: 'Smart Price Comparison',
        projectDesc: 'Engineered a web application to scrape and compare product prices from major e-commerce platforms like Flipkart, demonstrating data processing skills.',
        tags: ['NodeJs', 'AWS Services', 'Web Scraping'],
        code: 'https://github.com/PraveenMistry/Smart-Price-Comparison',
        demo: 'https://github.com/PraveenMistry/Smart-Price-Comparison',
        image: four
    },
    {
        id: 5,
        projectName: 'Rebootify',
        projectDesc: 'Developed Rebootify, a lightweight (30x smaller than Nodemon) CLI tool for automatically restarting Node.js applications on file changes.',
        tags: ['NodeJs', 'CLI Tool'],
        code: 'https://github.com/PraveenMistry/Rebootify',
        demo: 'https://github.com/PraveenMistry/Rebootify',
        image: five
    },
    {
        id: 6,
        projectName: 'Technical Knowledge Sharing',
        projectDesc: 'Publish articles on AI integrations (Claude Code, MCP), System Design, Performance Optimization, and advanced Node.js architecture.',
        tags: ['Technical Writing', 'Architecture', 'AI'],
        code: 'https://medium.com/@praveenmistry',
        demo: 'https://medium.com/@praveenmistry',
        image: six
    }
]


// Do not remove any fields.
// Leave it blank instead as shown below