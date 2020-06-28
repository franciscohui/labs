import React, {useState, useEffect} from "react";
import './Projects.css';

const projectData = {
    "records": [
        {
            "id": "rec1n1qs8WxRn0O5N",
            "fields": {
                "done": "Done",
                "status": "Done",
                "summary": "Start, stop; pause, resume, and set time",
                "programming-concepts": "Trigger via user input",
                "title": "Timer"
            },
            "createdTime": "2020-05-20T18:55:04.000Z"
        },
        {
            "id": "recHdSXwvtwjmeUS9",
            "fields": {
                "status": "Started",
                "summary": "A stack of random quotes and highlights. Shows a new one on trigger. Populate by uploading a JSON file.",
                "title": "Quotes and reminders"
            },
            "createdTime": "2020-06-26T14:17:55.000Z"
        },
        {
            "id": "recHfLIANteZzJrGu",
            "fields": {
                "summary": "Display city and state budgets",
                "title": "Visualize public data"
            },
            "createdTime": "2020-06-23T17:19:02.000Z"
        },
        {
            "id": "recIRE7RAjRwm7U9O",
            "fields": {
                "title": "SMS project"
            },
            "createdTime": "2020-06-23T17:21:26.000Z"
        },
        {
            "id": "recJtnd4EWe6cdzNt",
            "fields": {
                "done": "Done",
                "status": "Done",
                "details": "Commit to Github. Deploy site via Netlify. Populate via JSON",
                "summary": "A list of projects with titles, summaries, and a done state.",
                "title": "Project List 1.0"
            },
            "createdTime": "2020-05-20T18:55:04.000Z"
        },
        {
            "id": "recLAVI3ZM7aZQKvy",
            "fields": {
                "done": "Done",
                "status": "Done",
                "summary": "Build React apps locally",
                "title": "Set up local dev environment"
            },
            "createdTime": "2020-06-22T14:57:08.000Z"
        },
        {
            "id": "recMOgE52SHxTwAsN",
            "fields": {
                "title": "Web video app"
            },
            "createdTime": "2020-06-23T17:22:13.000Z"
        },
        {
            "id": "recQQafqXspO6zJER",
            "fields": {
                "done": "Done",
                "status": "Done",
                "summary": "Create component list populated via Airtable API. See how design and code components complement each other.",
                "title": "Framer code components"
            },
            "createdTime": "2020-06-22T14:57:20.000Z"
        },
        {
            "id": "recQXNLF5mrjGStYP",
            "fields": {
                "summary": "Understand local politics, the positions, responsibilities, budget, news outlets, individuals, issues, communities, organizations.",
                "title": "Local politics"
            },
            "createdTime": "2020-06-25T12:55:34.000Z"
        },
        {
            "id": "recUPPtrrJq2pZr9V",
            "fields": {
                "summary": "Figma timer, or color picker.\n",
                "title": "Figma plugin"
            },
            "createdTime": "2020-06-25T12:51:15.000Z"
        },
        {
            "id": "recV4yQTBMB06Z2i3",
            "fields": {
                "title": "Desktop window resizer"
            },
            "createdTime": "2020-06-26T20:10:22.000Z"
        },
        {
            "id": "recVmA8NVbmgsX8rO",
            "fields": {
                "summary": "Set primary color, toggle complementaries, add secondary, add saturation variations",
                "title": "Color Picker"
            },
            "createdTime": "2020-05-20T18:55:04.000Z"
        },
        {
            "id": "recYybgrUZgskmxJJ",
            "fields": {
                "summary": "Create patterns based on the drawings of a single tile. Could be prototyped via a repeating component.",
                "title": "Kaleidoscope tiling"
            },
            "createdTime": "2020-06-25T12:52:31.000Z"
        },
        {
            "id": "recas6hWuMorNSvfr",
            "fields": {
                "done": "Started",
                "status": "Started",
                "summary": "Populate message templates by entering the content once",
                "programming-concepts": "Capture input and update page in real time",
                "title": "Mad Libs Content"
            },
            "createdTime": "2020-06-22T14:55:54.000Z"
        },
        {
            "id": "recfl5DQLPoNLsTOT",
            "fields": {
                "title": "Slack App"
            },
            "createdTime": "2020-06-23T17:22:02.000Z"
        },
        {
            "id": "recgQlC9pzMTJyJaV",
            "fields": {
                "done": "Done",
                "summary": "Tell a joke by calling the joke.api",
                "title": "Joke API"
            },
            "createdTime": "2020-06-27T15:12:03.000Z"
        },
        {
            "id": "recmhXpE2RCgsa0un",
            "fields": {
                "details": "Allow drag and drop to update the state of each item. Display additional details for each project item",
                "summary": "A board with columns to track progress and states",
                "title": "Project List 1.2"
            },
            "createdTime": "2020-06-22T14:55:42.000Z"
        },
        {
            "id": "recskfL7yJy5aOz3k",
            "fields": {
                "summary": "Use cases, tools, templates, patterns",
                "title": "No-code database"
            },
            "createdTime": "2020-06-25T12:54:04.000Z"
        },
        {
            "id": "recswMyptraJKDywf",
            "fields": {
                "done": "Started",
                "status": "Started",
                "details": "Allow users to enter a new zip code to change the city",
                "summary": "Pull and display data from a weather API",
                "url": "https://csb-gngqm.netlify.app",
                "programming-concepts": "Display data via API",
                "title": "Weather via API"
            },
            "createdTime": "2020-06-22T14:56:22.000Z"
        },
        {
            "id": "recyZ9hd9c12Sh6No",
            "fields": {
                "done": "Done",
                "status": "Done",
                "details": "Populate projects via Google Sheets or AirTable. Mark items as done. Add sorting and filtering.",
                "summary": "Make it dynamic and interactive",
                "programming-concepts": "Display data via API",
                "title": "Project List 1.1"
            },
            "createdTime": "2020-06-22T14:54:51.000Z"
        },
        {
            "id": "reczImCk29zZmOKjo",
            "fields": {
                "summary": "Create simple transitions on click or events",
                "title": "Framer React Animations"
            },
            "createdTime": "2020-06-25T12:51:51.000Z"
        }
    ]
}

function ProjectList(){
  const [projects, setProjects] = useState([
      {
        id: '1',
        fields: {
          title: "title",
          summary: "summary"
        }
      },
      {
        id: '2',
        fields: {
          title: "title 2",
          summary: "summary 2"
        }
      },
    ]);

  //const dataURL = "#"

  const updateProjects = () => {
    setProjects(projectData.records)
    /*
    fetch(dataURL, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })
    .then(responseFromAPI => responseFromAPI.json())
    .then(dataFromResponse => {
      setProjects(dataFromResponse.records);
      console.log(dataFromResponse.records);
      ProjectList();
    })
    */
  }

  function ProjectList (){
    return(
      <div>
        {projects.map(project =>
          <SingleProject
            done={project.fields.done}
            title={project.fields.title}
            summary={project.fields.summary}
            details={project.fields.details}
            id={project.fields.id}
            url={project.fields.url}
          />
        )}
      </div>
    )
  }

  function SingleProject({ done, title, summary, details, url, id }) {
    return (
      <div className={`SingleProject ${done}`} key={id}>
        <div className="ProjectTitle">{title}</div>
        <div className="ProjectSummary">{summary}</div>
        <div className="ProjectDetail">{details}</div>
        <div>
          <a href={url}>{url}</a>
        </div>
      </div>
    )
  }
  
  useEffect(() => {
    updateProjects()
  }, [])

  return(
    <ProjectList />
  )
}

export default ProjectList;
