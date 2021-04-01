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

        let i = 0;
        tableHeaders.forEach(cellHeader => {
            let currCell = Row.insertCell(i);
            let currCellData = document.createTextNode(course[cellHeader]);
            currCell.appendChild(currCellData);
            i++;
        })

        j++;
    })
}

renderTable(courses);

function logOut() {
    window.location.replace("../htmldocs/login.html");
}