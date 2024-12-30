// /config/aboutData.js
const aboutData = [{
    "name": "HP Capstone",
    "imageLink": "/images/HP_1.png",
    "description": [
      {"type": "header", "details": "Project Objective"},
      {"type": "text", "details": "Objective of the project is to create a Web User Interface system that allows customers to connect + view important KPI’s associated with user and associated printers which will allow them to obtain insights on how their business is running. "},
      {"type": "header", "details": "Front End Objective"},
      {"type": "text", "details": "Design a frontend that is responsive and user friendly allowing a user to be able to obtain key insights associated with the user allowing them to quickly navigate and quickly derive the information they need to give the business owners (customer base) a n overview of how their printers/business is running. "},
      {"type": "image", "details": "/images/HP_2.png"},
      {"type": "text", "details": "The frontend application is built using Vue3, incorporating Axios for state management and PrimeVue for frontend component templates, along with JavaScript's Fetch API for additional data fetching, and is hosted on Vercel. Upon login, users are provided with a session token via a cookie, granting access to privileged pages displaying KPIs and user-specific information, while unauthenticated users are redirected to the login page. KPIs are retrieved through API calls to a Spring Boot API hosted on an EC2 instance. The GUI combines custom Vue components with prebuilt solutions from PrimeVue, enabling features such as graph generation and printer card components."},
      {"type": "header", "details": "Back End Objective"},
      {"type": "text", "details": "The objective for the backend system is to be able to capture and store data emitted from a simulated device, and populate our frontend UI with KPI (key performance indicator) data. It aims to capture and store device data via AWS IoT Topics, and populate the frontend via a REST API. When a user enters a webpage, what is happening behind the scenes is it is calling the REST API to fetch relevant data. For example, if a user enters a webpage that displays a list of devices associated with them, those devices need to be fetched from our database. If a user were to click on a specific device from that list, then we need to make another call from our REST API to fetch, raw or transformed data called KPIs (key performance indicators) associated with that specific device. But this raises a question, where and how was the data with the device generated? This is where the simulated device and AWS IoT comes in. When a simulated device creates data, it needs to be able to store it in our database. Data that is created from the printer will be piped to our database via AWS IoT Topic."},
      {"type": "header", "details": "System Overview"},
      {"type": "image", "details": "/images/HP_3.png"},
    ]
  },
  {
    "name": "Portfolio Site",
    "imageLink": "/images/PP_1.jpg",
    "description": [{"type": "text", "details": "something"}]
  }
]

export default aboutData;
