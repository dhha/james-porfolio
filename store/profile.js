import axios from "axios"

export const state = () => ({
    personal: null,
    skills: [],
    knowledges: [],
    resume: [],
})

export const getters = {
    hasProfile: state => state.personal,
    hasSkills: state => state.skills
}

export const mutations = {
    FETCH_PERSONAL(state, data) {
        state.personal = data
    },
    FETCH_SKILLS(state, data) {
        state.skills = data
    },
    FETCH_KNOWLEDGE(state, data) {
        state.knowledges = data
    },
    FETCH_RESUME(state, data) {
        state.resume = data
    }
}

export const actions = {
    fetchProfile({ commit }, payload) {
        let personal = {
            name: "Ha Doan",
            about_me: 'As a Senior Software Engineer, I have been leading the development of innovative web products and features using PHP frameworks such as Laravel, and Vue.js. I have over 12 years of professional experience in web development, with a strong background in database design, performance optimization, and security. I am passionate about creating user-friendly and responsive web applications that meet the needs and expectations of the clients and users. I enjoy collaborating with UI/UX designers, project managers, and other developers to deliver high-quality solutions that are scalable and reliable.',
            address: 'Jacksonville, Florida, USA',
            email: 'doanhuuha@gmail.com',
            phone_number: '+1(319)512 6710',
            website: 'https://doangia.dev',
            github: 'https://github.com/dhha',
            linkedin: 'https://www.linkedin.com/in/huuha-doan/',
            avatar: 'images/profile/z5079069516557_6ac8fb7a11b80cb567f55dc01c03ce08.jpg',
            resume_file: 'files/HuuHa_Doan_Resume.pdf'
        };
        commit('FETCH_PERSONAL', personal);

        let skills = [
            { name: "Laravel", value: 90 },
            { name: "Vuejs", value: 90 },
            { name: "React", value: 30 },
            { name: "Symfony", value: 80 },
            { name: "PHP / MYSQL", value: 75 },
            { name: "Angular / JavaScript", value: 85 },
            { name: "HTML / CSS", value: 95 },
        ];
        commit('FETCH_SKILLS', skills);

        let knowledges = [
            {name: 'Website hosting'},
            {name: 'iOS and android apps'},
            {name: 'AWS EC2'},
        ]
        
        commit('FETCH_KNOWLEDGE', knowledges);

        let resume = {
            educations: [
                {
                    name: 'Maharishi International University',
                    major: 'Master of Science in Computer Science',
                    period:'February 2023 - October 2025',
                    address: 'Iowa - USA'
                },
                {
                    name: 'Dalat University',
                    major: 'Engineer\'s degree, Information Technology',
                    period: 'February 2006 - January 2011',
                    address: 'DaLat - VietNam'
                },
            ],
            experiences: [
                {
                    company_name: 'Intuitive Reason',
                    title: 'Senior Software Developer',
                    period: 'Nov 2023 - Present',
                    description: '●	Developed and maintained full-stack web applications using Symfony, Twig template and MYSQL.' +
                    '●	Developed translation feature for mobile applications using react native ' +
                    '● Initiative and Cooperative with mobile applications team to create RESTful API from symfony project ' 
                },
                {
                    company_name: 'Kensoft Vietnam',
                    title: 'Senior Software Developer',
                    period: 'May 2016 - Jan 2023',
                    description: '• Developed and maintained full-stack web applications using Laravel for the backend and Vue.js for the frontend. Manage and build up Infrastructure for the software, using AWS ' +
                    '• Leveraged the power of Laravel\'s RESTful APIs to create seamless communication between the frontend and backend.' +
                    '• Implemented robust authentication and authorization systems using Laravel Passport' +
                    '• Configured AWS RDS for database management and utilized Amazon S3 for object storage.' +
                    '• Designed, deployed, and managed cloud infrastructure on AWS, utilizing services like S3, RDS, and EC2.' +
                    '• Developed real-time features in Vue.js using technologies like WebSocket.io for live chat and notifications.' +
                    '• Developed and manage over 100 domains using Vuejs and Nuxtjs, They communicate to same api gateway backend' 
                },
                {
                    company_name: 'Seldat Technology Services',
                    title: 'Senior Software Developer',
                    period: 'Jun 2015 - Apr 2016',
                    description: '• Led the end-to-end development of web applications using Laravel, ensuring code quality, scalability, and security.' +
                    '• Collaborated closely with UI/UX designers to implement responsive and user-friendly interfaces.' +
                    '• Mentored junior developers, providing guidance on coding standards, best practices, and architectural decisions.' +
                    '• Worked closely with project managers to define technical requirements, estimate effort, and meet project deadlines.' +
                    '• Developed new features: Container, Buying request, Manage product using Laravel and JavaScript' 
                },
                {
                    company_name: 'MMSOFT Company Ltd.',
                    title: 'Senior Software Developer',
                    period: 'Jan 2011 - May 2015',
                    description: '• Developed and maintained web applications using PHP and Codeigniter framework, ensuring optimal performance, security, and scalability.' +
                    '• Collaborated with designers and front-end developers to integrate user-facing elements with server-side logic, resulting in seamless user experiences.' +
                    '• Participated in code reviews, providing constructive feedback to team members, and maintaining coding standards.' +
                    '• Contributed to the continuous improvement of existing applications, enhancing code quality and user satisfaction.' +
                    '• Designed and optimized relational databases (MySQL) for efficient data storage and retrieval.' 
                }
            ]
        }

        commit('FETCH_RESUME', resume);
        // axios.get('/profile').then(data => {
        //     commit('FETCH_PROFILE', data);
        // });
    }
}