loadTimelineData();

async function loadTimelineData() {
    const response = await fetch("../timeline.json");
    const jsonData = await response.json();
    console.log(jsonData);
  }