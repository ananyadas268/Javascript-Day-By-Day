// Main data storage
let students = [];

// ➕ Add Student
function addStudent() {
    let nameInput = document.getElementById("name");
    let marksInput = document.getElementById("marks");

    let name = nameInput.value.trim();
    let marks = parseInt(marksInput.value);

    // Validation
    if (!name || isNaN(marks)) {
        alert("Please enter valid name and marks");
        return;
    }

    students.push({ name, marks });

    displayStudents(students);

    // Clear input fields
    nameInput.value = "";
    marksInput.value = "";
}

// 📋 Display Students
function displayStudents(data) {
    let list = document.getElementById("list");
    list.innerHTML = "";

    data.forEach((student, index) => {
        let li = document.createElement("li");

        // Highlight failed students
        if (student.marks < 40) {
            li.style.color = "red";
        }

        li.innerHTML = `
            ${student.name} - ${student.marks}
            <button onclick="deleteStudent(${index})">Delete</button>
        `;

        list.appendChild(li);
    });
}

// ❌ Delete Student
function deleteStudent(index) {
    students.splice(index, 1);
    displayStudents(students);
}

// ✅ Show Passed Students
function showPassed() {
    let passed = students.filter(s => s.marks >= 40);
    displayStudents(passed);
}

// 📊 Show All Students
function showAll() {
    displayStudents(students);
}

// 📈 Show Average Marks
function showAverage() {
    if (students.length === 0) {
        alert("No students available");
        return;
    }

    let total = students.reduce((sum, s) => sum + s.marks, 0);
    let avg = total / students.length;

    alert("Average Marks: " + avg.toFixed(2));
}

// 🔽 Sort Students by Marks (Descending)
function sortStudents() {
    let sorted = [...students].sort((a, b) => b.marks - a.marks);
    displayStudents(sorted);
}