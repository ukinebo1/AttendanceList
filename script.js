document.addEventListener('DOMContentLoaded', () => {
    const studentList = [];

    // Function to update the attendance list
    function updateList() {
        const list = document.getElementById('list');
        list.innerHTML = '';

        studentList.forEach((student) => {
            const listItem = document.createElement('li');
            listItem.textContent = `Name: ${student.name}, Class: ${student.class}, Seat: ${student.seat}, Status: ${student.present ? 'Present' : 'Absent'}`;
            list.appendChild(listItem);
        });
    }

    // Event listeners for marking students as present or absent
    document.getElementById('mark-present').addEventListener('click', () => {
        const studentName = document.getElementById('student-name').value;
        const studentClass = document.getElementById('class').value;
        const seatNumber = document.getElementById('seat-number').value;

        if (studentName && studentClass && seatNumber) {
            studentList.push({ name: studentName, class: studentClass, seat: seatNumber, present: true });
            updateList();
        }
    });

    document.getElementById('mark-absent').addEventListener('click', () => {
        const studentName = document.getElementById('student-name').value;
        const studentClass = document.getElementById('class').value;
        const seatNumber = document.getElementById('seat-number').value;

        if (studentName && studentClass && seatNumber) {
            studentList.push({ name: studentName, class: studentClass, seat: seatNumber, present: false });
            updateList();
        }
    });
});
