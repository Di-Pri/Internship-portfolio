"use strict";
import { openMenu } from "./modules/menu.js";

window.addEventListener("DOMContentLoaded", start);

function start() {
  loadJSON();
  openMenu();
}

async function loadJSON() {
  const response = await fetch("projects.json");
  const data = await response.json();
  data.forEach(displayProjects);
}

function displayProjects(project) {
  const clone = document.querySelector("#childProjects").content.cloneNode(true);

  const thumbnail = document.createElement("img");
  thumbnail.src = project.image;
  thumbnail.alt = `Project's landing page`;
  clone.querySelector(".projectImage").append(thumbnail);
  clone.querySelector(".projectInfo h2").textContent = project.projectname;
  clone.querySelector(".projectInfo h3").textContent = project.tools.join(" | ");
  clone.querySelector(".projectInfo p").innerHTML = project.description.join("<br><br>");
  clone.querySelector(".repository").href = project.repository;
  clone.querySelector(".page").href = project.page;

  document.querySelector(".parentProjects").appendChild(clone);
}
