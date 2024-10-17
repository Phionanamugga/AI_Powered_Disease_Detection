// Handle image preview with Bootstrap styling
function handleFileUpload(file) {
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const imgElement = document.createElement('img');
            imgElement.src = e.target.result;
            imgElement.classList.add('img-fluid', 'rounded', 'mt-3'); // Bootstrap classes for responsiveness and styling
            
            const photoPreview = document.getElementById('photo-preview');
            photoPreview.innerHTML = ''; // Clear previous previews
            photoPreview.appendChild(imgElement);
        };
        reader.readAsDataURL(file);
    }
}

// Load saved note content from localStorage
document.addEventListener("DOMContentLoaded", function() {
    const savedContent = localStorage.getItem('noteContent');
    if (savedContent) {
        document.getElementById('note-content').value = savedContent;
    }
});
