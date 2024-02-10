function calculateTotal() {
    var subject1 = parseFloat(document.getElementById('subject1').value) || 0;
    var subject2 = parseFloat(document.getElementById('subject2').value) || 0;
    var subject3 = parseFloat(document.getElementById('subject3').value) || 0;

    var total = subject1 + subject2 + subject3;

    document.getElementById('result').innerHTML = 'Total Marks: ' + total;
}
