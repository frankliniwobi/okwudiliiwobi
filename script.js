// api url
const api_url = "http://nesrea.schoolville.ng/api/v1/questions";

// Defining async function
async function getapi(url) {
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    // return data;
    show(data);
}

// Calling that async function
getapi(api_url);


function show(data) {
    let tab =
        `<tr>
            <th>#</th>
            <th>Course ID</th>
            <th>Question</th>
            <th>A</th>
            <th>B</th>
            <th>C</th>
            <th>D</th>
            <th>Answer</th>
            <th>Type</th>
            <th>Action</th>
        </tr>`;

    // Loop to access all rows
    for (let r of data.data) {
        var params = new URLSearchParams();
        params.append("first", JSON.stringify(r));
        var url = "view.html?" + params.toString();

        tab += `<tr>
            <td>${r.id} </td>
            <td>${r.courseId}</td>
            <td>${r.question}</td>
            <td>${r.a}</td>		
            <td>${r.b}</td>		
            <td>${r.c}</td>		
            <td>${r.d}</td>		
            <td>${r.answer}</td>		
            <td>${r.type}</td>		
            <td> <a href="${url}"> <span class="material-symbols-outlined">preview</span> </a> </td>	
            	
        </tr>`;
    }

    // Setting innerHTML as tab variable
    document.getElementById("mytable").innerHTML = tab;

}

