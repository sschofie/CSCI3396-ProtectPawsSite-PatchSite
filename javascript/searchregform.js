let courses = [ 
    {Term: "Spring 2021", Status: "Waitlisted", SecNameTitle: "CSCI-3396-1 (67421) Special Topics Systems", Location: "Campus", MeetingInfo: "01/25/2021-05/10/2021 Lecture Monday, Wednesday, Friday 10:30AM - 11:20AM, Room to be Announced", Faculty: "S. Tan", Credits: "3.00", Pathways: ""},
    {Term: "Spring 2021", Status: "Open", SecNameTitle: "CSCI-3397-1 (68682) Special Topics in Design", Location: "Campus", MeetingInfo: "01/25/2021-05/10/2021 Lecture Monday, Wednesday, Friday 09:30AM - 10:20AM, Ctr for Sciences & Innovation, Room 388", Faculty: "S. Tan", Credits: "3.00", Pathways: ""},
    {Term: "Spring 2021", Status: "Open", SecNameTitle: "CSCI-3398-2 (68950) Thesis Reading", Location: "Campus", MeetingInfo: "01/25/2021-05/18/2021 Independent Study Days to be Announced, Times to be Announced, Room to be Announced", Faculty: "S. Tan", Credits: "3.00", Pathways: ""}

]

let tableHeaders = ["Term", "Status", "SecNameTitle", "Location", "MeetingInfo", "Faculty", "Credits", "Pathways"]
const logoutbtn = document.getElementById("logout");
console.log(logoutbtn.value)

logoutbtn.addEventListener("click", () => logOut());

function renderTable(data) {
    let courseTable = document.getElementById("courseTable")
    courseTable.innerHTML = ""

    let headers = courseTable.insertRow(0);

    //fill in the table headers
    tableHeaders.forEach(header => {
        let headerCell = document.createElement("th");
        headerCell.innerHTML = header;
        headers.appendChild(headerCell);
    })

    //fill table data
    let j = 1;
    data.forEach( course => {
        let Row = courseTable.insertRow(j);

        let termCell = Row.insertCell(0);
        let termCellData = document.createTextNode(course["Term"]);
        termCell.appendChild(termCellData);

        let statusCell = Row.insertCell(1);
        let statusCellData = document.createTextNode(course["Status"]);
        statusCell.appendChild(statusCellData);

        let secCell = Row.insertCell(2);
        let secCellData = document.createTextNode(course["SecNameTitle"]);
        secCell.appendChild(secCellData);

        let locCell = Row.insertCell(3);
        let locCellData = document.createTextNode(course["Location"]);
        locCell.appendChild(locCellData);

        let meetCell = Row.insertCell(4);
        let meetCellData = document.createTextNode(course["MeetingInfo"]);
        meetCell.appendChild(meetCellData);

        let facultyCell = Row.insertCell(5);
        let facultyCellData = document.createTextNode(course["Faculty"]);
        facultyCell.appendChild(facultyCellData);

        let credCell = Row.insertCell(6);
        let credCellData = document.createTextNode(course["Credits"]);
        credCell.appendChild(credCellData);

        let pathCell = Row.insertCell(7);
        let pathCellData = document.createTextNode(course["Pathways"]);
        pathCell.appendChild(pathCellData);
    })
}

renderTable(courses);

function logOut() {
    window.location.replace("../htmldocs/login.html");
}