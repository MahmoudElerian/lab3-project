document.getElementById('loadDemoFile').addEventListener('click', function() {
    fetch('demo.txt')
        .then(response => response.text())
        .then(data => {
            document.getElementById('fileContents').textContent = data;
        });
});
