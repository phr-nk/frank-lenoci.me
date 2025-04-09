export default async function fetchProjects() {
  return new Promise((resolve, reject) =>
    resolve([
       {
        id: "timetravel-workspace",
        name: "Launchpad Hack - TimeTravel Workspace",
        subtitle: "A ServiceNow workspace built to bring global teams together.",
        description:
           "TimeTravel is an innovative ServiceNow workspace designed to foster collaboration and connection among global teams. This platform incorporates a dynamic and interactive 3D globe, built with Three.js, which visually represents team members and their accomplishments around the world. A standout feature of TimeTravel is its seamless integration of 3D environments into the ServiceNow ecosystem, showcasing advanced UI capabilities and enhancing user engagement. Additionally, the project features Krono AI, an intelligent virtual assistant that empowers users to navigate the workspace effortlessly and build stronger connections with their colleagues. TimeTravel bridges the gap between creativity, technology, and teamwork, setting a new standard for interactive workplace solutions.",
        links : [
          {
            url: "",
            githubUrl: "https://github.com/phr-nk/ServiceNow-AI-Assistant.git",

            extra_image1:
              "https://raw.githubusercontent.com/phr-nk/Storage/master/DTHackathon/architect_home.JPG",
            extra_image2:
              "https://raw.githubusercontent.com/phr-nk/Storage/master/DTHackathon/editor.JPG",
             extra_image3:
              "https://raw.githubusercontent.com/phr-nk/Storage/master/DTHackathon/editor2.JPG",
          },
        ],
        img:
          "https://raw.githubusercontent.com/phr-nk/master/DTHackathon/DTHackathonSubmission-ArticleArchitectv2.gif",
        tags: [{ name: "ServiceNow", color: "green" }],
      },
      {
        id: "article architect",
        name: "DT Hackathon - Article Architect",
        subtitle: "A ServiceNow workspace Agentic AI component.",
        description:
           "Article Architect is an innovative AI-powered UI component seamlessly integrated into the ServiceNow workspace. Developed as part of a hackathon within the DT organization at ServiceNow, this project aims to revolutionize the process of creating stylish articles. By leveraging Agentic AI, Article Architect allows users to transform existing images into visually compelling articles with ease.",
        links: [ 
          {
            url: "",
            githubUrl: "https://github.com/phr-nk/ServiceNow-AI-Assistant.git",

            extra_image1:
              "https://raw.githubusercontent.com/phr-nk/Storage/master/DTHackathon/architect_home.JPG",
            extra_image2:
              "https://raw.githubusercontent.com/phr-nk/Storage/master/DTHackathon/editor.JPG",
             extra_image3:
              "https://raw.githubusercontent.com/phr-nk/Storage/master/DTHackathon/editor2.JPG",
          },
        ],
        img:
          "https://raw.githubusercontent.com/phr-nk/master/DTHackathon/DTHackathonSubmission-ArticleArchitectv2.gif",
        tags: [{ name: "ServiceNow", color: "green" }],
      },
       {
        id: "resilient-state",
        name: "Resilient State - ServiceNow Workspace",
        subtitle: "ServiceNow workspace developed for an internal asset challenge. Our team won best asset for market expansion. ",
        description:
           "Resilient State is an innovative ServiceNow workspace designed to help state governments predict and manage wildfire responses more effectively. This cutting-edge application leverages AI technology, featuring an intuitive chatbot that provides users with easy-to-access information and actionable insights. Tailored specifically for wildfire-prone regions, Resilient State empowers officials with tools to make informed decisions, streamline operations, and enhance community safety. A standout project in Deloitte's 2024 internal Shark Tank Asset challenge, Resilient State earned recognition as the best asset for market expansion, underscoring its impact and potential in addressing critical environmental challenges. As part of the development team, I contributed to this success by designing and implementing all of the custom UI components that shape the workspace, ensuring both functionality and user-friendly interaction.",
        links: [
          {
            url: "",
            githubUrl: "https://github.com/phr-nk/ServiceNow-Leaflet-Map.git",

            extra_image1:
              "https://raw.githubusercontent.com/phr-nk/Storage/master/DisasterWorkspace/resq_ai.JPG",
            extra_image2:
              "https://raw.githubusercontent.com/phr-nk/Storage/master/DisasterWorkspace/Challenge%20Award.jpeg",
          },
        ],
        img:
          "https://raw.githubusercontent.com/phr-nk/master/DisasterWorkspace/dashboard.JPG",
        tags: [{ name: "ServiceNow", color: "green" }],
      },
      {
        id: "book-of-beasts",
        name: "A Book of Beasts",
        subtitle: "A React game which I developed for React Jam Fall 2024. ",
        description:
          "This project was built for a 10 day game jam which was centered around building games using React. I've always wanted to build a game, and this challenge felt like the perfect opportunity to do so. Medieval illuminated manuscript art is so cool so I decided to theme my game around that. There is a book from the 13th century that this game is designed after. I plan on updating this game so it may look different the next time you see it. ",
        links: [
          {
            url: "https://medieval-book-of-beasts.onrender.com/",
            githubUrl: "https://github.com/phr-nk/medieval-book-of-beasts",

            extra_image1:
              "https://raw.githubusercontent.com/phr-nk/Storage/master/BookOfBeastsImages/starting-screen.JPG",
            extra_image2:
              "https://raw.githubusercontent.com/phr-nk/Storage/master/BookOfBeastsImages/game-screen.JPG",
          },
        ],
        img:
          "https://raw.githubusercontent.com/phr-nk/Storage/master/BookOfBeastsImages/bob-game.gif",
        tags: [{ name: "React", color: "lightblue" }],
      },
      {
        id: "weeklychicagoconcerts",
        name: "Weekly Chicago Concerts",
        subtitle:
          "A React website that uses the API I developed in my previous project.",
        description:
          "This project uses the API I made in a previous project to display the data in a clean way and provide a tool to find upcoming concerts in Chicago. I plan to add more venues in the future and maybe add some more attributes to the API.",
        links: [
          {
            url: "https://weeklychicagoconcerts.onrender.com/",
            githubUrl: "https://github.com/phr-nk/WeeklyChicagoConcerts",

            extra_image1:
              "https://raw.githubusercontent.com/phr-nk/Storage/master/WeeklyChicagoConcerts/wcc_mobile.JPG",
          },
        ],
        img:
          "https://raw.githubusercontent.com/phr-nk/Storage/master/WeeklyChicagoConcerts/project_main.gif",
        tags: [
          { name: "React", color: "lightblue" },
          { name: "Material UI", color: "blue" },
          { name: "Mailchimp", color: "yellow" },
        ],
      },
      {
        id: "chicagoconcertapi",
        name: "Chicago Concert API",
        subtitle:
          "An API created for getting local Chicago indie music concerts.",
        description:
          "This project various technologies to scrape different websites and upload that data to a database. The purpose of this project was to create an API that I and other people could use to create useful websites surrounding the local Chicago music scene. I used Cheerio and Axios to scrape and parse data from local venue websites and then used Sequelize to do SQL operations to a CockroachDB serverless database. After that, I used Sequelize again in combination with Express JS to host the API.",
        links: [
          {
            url: "https://chicago-concert-api.herokuapp.com/concerts",
            githubUrl: "https://github.com/phr-nk/ChicagoConcertsAPI",

            extra_image1:
              "https://raw.githubusercontent.com/phr-nk/Storage/master/ChicagoConcertAPI/overview.JPG",
            extra_image2:
              "https://raw.githubusercontent.com/phr-nk/Storage/master/ChicagoConcertAPI/overview2.JPG",
            extra_image3:
              "https://raw.githubusercontent.com/phr-nk/Storage/master/ChicagoConcertAPI/columns_covered.jpg",
          },
        ],
        img:
          "https://raw.githubusercontent.com/phr-nk/Storage/master/ChicagoConcertAPI/concertapigif.gif",
        tags: [
          { name: "Express", color: "blue" },
          { name: "Herkoku", color: "purple" },
          { name: "Web Scraping", color: "darkred" },
          { name: "API Creation", color: "yellow" },
        ],
      },
      {
        id: "openseaspoke",
        name: "ServiceNow OpenSea Spoke",
        subtitle:
          "A spoke for ServiceNow's flow designer, allows for easy access to the OpenSea NFT marketplace API.",
        description:
          "This spoke was created and counted for credit towards 2021's Hacktoberfest. A spoke is an addition towards the IntegrationHub action that ServiceNow provides for Flow Designer, IntegrationHub makes it easier for a ServiceNow instance to connect to a third party application through REST functions. With the rise of NFTs as of late, I thought it appropriate to make a spoke to connect to the OpenSea API.",
        links: [
          {
            githubUrl: "https://github.com/phr-nk/Spoketoberfest_OpenSea",

            extra_image1:
              "https://raw.githubusercontent.com/phr-nk/Storage/master/OpenSea/get_nfts_flow.JPG",
            extra_image2:
              "https://raw.githubusercontent.com/phr-nk/Storage/master/OpenSea/table.JPG",
            extra_image3:
              "https://raw.githubusercontent.com/phr-nk/Storage/master/OpenSea/form.JPG",
          },
        ],
        img:
          "https://raw.githubusercontent.com/phr-nk/Storage/master/OpenSea/opensea.gif",
        tags: [
          { name: "ServiceNow", color: "green" },
          { name: "REST", color: "pink" },
          { name: "Hacktoberfest", color: "orange" },
        ],
      },
      {
        id: "cultra",
        name: "Cultra App",
        subtitle:
          "A cross platform app that works on both iOS and Andriod using Expo/React Native/Firebase.",
        description:
          "This is an app for connecting creative people together and bridging the gap between their respective mediums. This app was built for Cultra Offical as part of their internship program. I worked on mainly front-end with some minimal setup of Firebase email authentication.",
        links: [
          {
            url: "https://expo.io/@flenoci/projects/cultra-app",
            githubUrl: "https://github.com/JmCole19/Cultra-App",

            extra_image1:
              "https://raw.githubusercontent.com/phr-nk/Storage/master/Cultra/mainscreen.JPG",
            extra_image2:
              "https://raw.githubusercontent.com/phr-nk/Storage/master/Cultra/android_gif.gif",
            extra_image3:
              "https://raw.githubusercontent.com/phr-nk/Storage/master/Cultra/ios_gif.gif",
          },
        ],
        img:
          "https://raw.githubusercontent.com/phr-nk/Storage/master/Cultra/cross_platform_gif.gif",
        tags: [
          { name: "React Native", color: "lightblue" },
          { name: "Firebase", color: "red" },
          { name: "Expo", color: "grey" },
        ],
      },
      {
        id: "phranksart",
        name: "Phrank's Art",
        subtitle: "A web app created using ASP.NET and Blazor pages.",
        description:
          "This was a project built using the ASP.NET web framework and hosted on Microsoft's Azure servers. I used Blazor pages for most of the frontend components and Three.js for rendering the 3D models.",
        links: [
          {
            url: "https://phranksart.azurewebsites.net/",
            githubUrl: "https://github.com/phr-nk/PhranksArt",
          },
        ],
        img:
          "https://raw.githubusercontent.com/phr-nk/Storage/master/3DART/phranksartgif.gif",
        tags: [
          { name: "ASP.NET", color: "purple" },
          { name: "Three.JS", color: "grey" },
        ],
      },
      {
        id: "whosgoing",
        name: "Who's Going?",
        subtitle: "Full-stack social media site using Firebase and ReactJS.",
        description:
          "This was a full-stack project using ReactJS for the front-end and Firebase for the back-end and hosting. The goal of this project was to make a social media site where users could connect based on similar music interests and then got to live music events with each other. I used the Songkick API in order to fetch local events for users and leaflet to display the venues on a map. I also used Redux in order to pass data between components and prop types. All of the backend functions are done via an API I built using Firebase's cloud functions, with the operations then being executed on the cloud Firestore. This project is still in development. ",
        links: [
          {
            url: "https://whosgoing.web.app/",
            githubUrl: "https://github.com/phr-nk/whosgoing-frontend",
            extra_image1:
              "https://raw.githubusercontent.com/phr-nk/Storage/master/WhosGoing/tables.JPG",
            extra_image2:
              "https://raw.githubusercontent.com/phr-nk/Storage/master/WhosGoing/storage.JPG",
            extra_image3:
              "https://raw.githubusercontent.com/phr-nk/Storage/master/WhosGoing/tables.JPG",
          },
        ],
        img:
          "https://raw.githubusercontent.com/phr-nk/csc360-final-project/master/src/whosgoing.gif",
        tags: [
          { name: "React", color: "lightblue" },
          { name: "Firebase", color: "red" },
        ],
      },
      {
        id: "shirtify",
        name: "Shirtify",
        subtitle:
          "A web app that makes use of the Spotifiy API, utilizing ReactJS and D3 for the website UI.",
        description:
          "This Spotify web app takes a user's top artists and finds which genre comes up the most. This is done by storing the words in a data structure and then using that data with D3 in order to produce a word cloud on a t-shirt. A user can then download their shirt or design once they picked the required parameters.",
        links: [
          {
            url: "https://shiirtify.web.app/",
          },
        ],
        img:
          "https://raw.githubusercontent.com/phr-nk/Storage/master/Shirtify/ezgif.com-gif-maker.gif",
        tags: [
          { name: "React", color: "lightblue" },
          { name: "D3", color: "green" },
        ],
      },
      {
        id: "commuter",
        name: "Commuter Chronicles",
        subtitle: "An app developed for my iOS class at DePaul.",
        description:
          "The goal of this project was to make the average person’s commute to work or school a little more interesting. The way I thought I could accomplish this was by having them play a simulated adventure game, where the world is their map and they must enter dungeons and fight monsters that will be spawned around the real world. I was heavily inspired by the groundbreaking game Pokémon Go and thought it was a great starting point for a more role-playing based game. A very useful source that I found was a tutorial at https://www.raywenderlich.com/823-advanced-mapkit-tutorial-custom-tiles. I followed this tutorial and expanded on the provided code to bring my game idea to life.",
        links: [
          {
            githubUrl: "https://github.com/phr-nk/CommuterChronicles",
            extra_image1:
              "https://raw.githubusercontent.com/phr-nk/CommuterChronicles/master/MapQuest/Assets.xcassets/appview1.png",
            extra_image2:
              "https://raw.githubusercontent.com/phr-nk/CommuterChronicles/master/MapQuest/Assets.xcassets/appview2.png",
            extra_image3:
              "https://raw.githubusercontent.com/phr-nk/CommuterChronicles/master/MapQuest/Assets.xcassets/appview3.png",
          },
        ],
        img:
          "https://raw.githubusercontent.com/phr-nk/csc360-final-project/master/src/commuter.gif",
        tags: [
          { name: "Swift", color: "orange" },
          { name: "iOS", color: "grey" },
        ],
      },
      {
        id: "NYT",
        name: "New York Times Archiver - News Flash",
        subtitle: "Final project for my web applications class at DePaul.",
        description:
          "This was the final project for my web applications class at DePaul and we were tasked with finding an API and displaying the data in an interesting way. The front-end/UI is built on the ReactJS framework with the help of Material-ui for clean and organized components. The charts are visualized by the ChartsJS library and are dynamically rendered once an AJAX call returns data from the NYT API. The NYT API can give us metadata such as, keywords/tags, geo-tags, article links, thumbnail links, popular articles etc. These of course can all be extrapulated and analyzed to display the graphs and render the news feed. Of course all of these frameworks are in JavaScript and as such our server is hosted through Heroku by integrating NodeJS as the internal server.",
        links: [
          {
            githubUrl: "https://github.com/ckleinvehn/CSC360-Final",
            url: "https://nyt-newsflash.web.app/",
          },
        ],
        img:
          "https://raw.githubusercontent.com/phr-nk/csc360-final-project/master/src/newsflash.gif",
        tags: [
          { name: "React", color: "lightblue" },
          { name: "Material UI", color: "blue" },
        ],
      },
      {
        id: "Sudoku",
        name: "React Sudoku",
        subtitle:
          "Sudoku front-end application utilizing the ReactJS framework. ",
        description:
          "The sudoku puzzle game, developed in React for my Web Applications class at DePaul University. This helped us learn about React and state management. We used a Sudoku npm library in order to generate the puzzle and see if the users entered the correct guess. There is also functionality to go back steps in your game and then make new ones, also to finish most of the puzzle in order to test if the game works.",
        links: [
          {
            githubUrl: "https://github.com/phr-nk/ReactSudoku",
            url: "https://phr-nk.github.io/ReactSudoku/",
          },
        ],
        img:
          "https://raw.githubusercontent.com/phr-nk/csc360-final-project/master/src/sudoku.gif",
        tags: [{ name: "React", color: "lightblue" }],
      },
      {
        id: "kbplanner",
        name: "KB-Planner",
        subtitle:
          "A full-stack productivity website developed for my senior capstone.",
        description:
          "The purpose of KB Planner is to simplify the way for University students to efficiently manage and track group student projects. Through visualization of group workflow in a simplistic manner students will be able to both see the work assigned to each student as well as incentivize students to leave feedback on accomplishments of team members. This system will also allow for Professors to easily manage and check in with student groups throughout project timelines. The goal is to improve the painstaking process for assigning and completing group projects on University sponsored websites such as D2L.",
        links: [
          { githubUrl: "https://github.com/phr-nk/KB-Planner-Front-End" },
        ],
        img:
          "https://raw.githubusercontent.com/phr-nk/KB-Planner-Front-End/master/assets/projectpics/login.png",
        tags: [
          { name: "Vanilla JS", color: "blue" },
          { name: "HTML", color: "orange" },
        ],
      },
      {
        id: "PersonalWebsite",
        name: "Portfolio Website - phrank.me",
        subtitle:
          "My personal portfolio website developed using React and three.js.",
        description:
          "This is the site that you are currently viewing! It is still under development and most likely will continue to be. I used ReactJS ",
        links: [
          {
            url: "https://phrank.me",
            githubUrl: "https://github.com/phr-nk/phrank.me",
          },
        ],
        img:
          "https://raw.githubusercontent.com/phr-nk/phrank.me/master/src/assets/threedhead.png",
        tags: [
          { name: "React", color: "lightblue" },
          { name: "Three.JS", color: "grey" },
        ],
      },
      {
        id: "RogueLike",
        name: "Command Line Rogue Like",
        subtitle:
          "A ASCII based rogue like you can play in the command line, written in C++.",
        description:
          "This is a project I worked on sophomore year at Harper college, written in C++. It is an attempt at a rogue-like style game running in the at the command line. Currently it is still buggy, with enemies not doing damage to the player and the loot system not working that well. The maps are imported as txt files and can be as big or small as desired. There are different types of monsters to encounter which give different amounts of exp for defeating them. The combat works on a role based system where the player and enemy role to see who gets deals damage. ",
        links: [
          { githubUrl: "https://github.com/phr-nk/CommandLineRogueLike" },
        ],
        img:
          "https://raw.githubusercontent.com/phr-nk/CommandLineRogueLike/master/RogueLike.gif",
        tags: [{ name: "C++", color: "blue" }],
      },
      {
        id: "BopPi",
        name: "Bop Pi - Raspberry Pi Game",
        subtitle:
          "This was an attempt to recreate the 90's Bop It game but with 21st century features for the Raspberry Pi 3.",
        description:
          "The goal of this project was to try and adapt the 1990’s “Bop It” game for the Raspberry Pi. To do this we had a few things in mind in order to make it compatible with the 21st century. One was to connect it to the internet and be able to let other players know when someone else is playing the Bop Pi by displaying other players scores in real time, which we were able to accomplish. We also used multiple inputs such as the rotary encoder and three push switch buttons to track player moves. The game works by displaying commands on an LCD screen, then the user must press the desired input as many times as in the allotted amount of time. We were able to get some type of timer working but not exactly the how we wanted it. Finally, we wanted it to give feedback or give the player a game over if they pushed the wrong button which we couldn’t end up getting to work.",
        links: [{ githubUrl: "https://github.com/phr-nk/BopPi" }],
        img:
          "https://user-images.githubusercontent.com/28155935/55992181-9311fc00-5c71-11e9-9ea7-071dfa988cab.PNG",
        tags: [
          { name: "Python", color: "yellow" },
          { name: "Raspberry Pi", color: "green" },
        ],
      },
    ])
  );
}
