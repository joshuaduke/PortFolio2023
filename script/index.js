loadTimelineData();

async function loadTimelineData() {
    const response = await fetch("../timeline.json");
    const jsonData = await response.json();
    console.log(jsonData);
    constructTimelineItem(jsonData);
}

function constructTimelineItem(timelineData)
{
  let timeline = document.querySelector(".timeline");
  let newEvent = [];
  let newEventStr = "";

  // for each item in timelinedata
  // find #timeline
  //  append li and add class event
  // append 3 paragraphs (date, tag, desc)
  // append a tag

  let ulContainer = document.createElement("ul");
  ulContainer.classList.add("event");

  timelineData[0].achievements.forEach(achievement => {
    newEvent.push(`
    <li class="event">
      <p class="date">${achievement.date}</p>
      <p class="tag">${achievement.tag}</p>
      <p class="desc">${achievement.desc}</p>

      ${achievement.link == "" ? "" : `<a href="" target="_blank">Check it out</a>`}
      
    </li>
    `);
  });

  for (let i = 0; i < 6; i++) {
    newEventStr += newEvent[i];
  }

  timeline.innerHTML = newEventStr;

  let eventNodes = document.querySelectorAll(".event");
  let firstEvent = eventNodes[0];
  firstEvent.classList.add("offset-first");


  // add offset-first class to the first li element 

}