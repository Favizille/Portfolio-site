const projects = [
    {id: "html/css",
    heading: "Responsive Registration form",
    title:"Personal Work",
    description:"This is a single page of html and css, which is responsive on any device",
    link: "https://github.com/Favizille/a-single-page-responsive-registration-form"
    },
] 

let navBar =document.getElementById("nav-bar");
// let navBar =document.querySelector(".navbar");
let positionNavBar = navBar.offsetTop; 
const ProjectsClass = document.querySelector(".projects");
const filterBtn = document.querySelectorAll(".filter-btn");
const allBtn = document.getElementById("all");
const html_css = document.getElementById("html/css");
const javascript = document.getElementById("javascript");
const php = document.getElementById("php");

window.onscroll = staticNavBar();

function staticNavBar () {
    if( window.pageYOffset >= positionNavBar){
        navBar.classList.add("sticky ");
    }
    navBar.classList.remove("sticky");
}

window.addEventListener('DOMContentLoaded', function(){
    displayProjects(projects);
});

function displayProjects(projects){
    let displayProject = projects.map(function(project){
        return ` <div class="description" id="html/css">
        <h5>Responsive Registration form</h5>
        <span>Personal Work</span>
        <p>This is a single page of html and css, which is responsive on any device</p>
        <button> <a href="https://github.com/Favizille/a-single-page-responsive-registration-form">Code</a> </button>
      </div>`;
    });

    displayProject = displayProject.join("");
    ProjectsClass.innerHTML =displayProject 
}