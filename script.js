// Save API Key to local storage
document.getElementById('save-api-key').addEventListener('click', function() {
    const apiKey = document.getElementById('api-key').value;
    localStorage.setItem('api_key', apiKey);
    alert('API Key saved!');
});

// Handle form submission
document.getElementById('subtitle-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const videoUrl = document.getElementById('video-url').value;
    const subtitlesContainer = document.getElementById('subtitles');
    
    const apiKey = localStorage.getItem('api_key');
    
    console.log(`Video URL: ${videoUrl}`);
    console.log(`API Key: ${apiKey}`);
    
    try {
        const response = await fetch('http://127.0.0.1:5000/get_subtitles', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({ video_url: videoUrl })
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('Response Data:', data);

        subtitlesContainer.innerHTML = ''; // Clear previous subtitles
        if (data.subtitles) {
            const subtitlesArray = data.subtitles.split(';');
            subtitlesArray.forEach(subtitle => {
                if (subtitle.trim()) {
                    const p = document.createElement('p');
                    p.textContent = subtitle.trim();
                    subtitlesContainer.appendChild(p);
                }
            });
        } else {
            subtitlesContainer.textContent = data.error;
        }
        
        document.getElementById('subtitles-container').style.display = 'block';
        document.getElementById('subtitle-form').style.display = 'none'; // Hide the form
        document.getElementById('go-back').style.display = 'block'; // Show the "Go Back" button
    } catch (error) {
        console.error('Error:', error);
    }
});

// Handle "Go Back" button click
document.getElementById('go-back').addEventListener('click', function() {
    document.getElementById('subtitles-container').style.display = 'none'; // Hide subtitles container
    document.getElementById('subtitle-form').style.display = 'block'; // Show the form
    document.getElementById('go-back').style.display = 'none'; // Hide the "Go Back" button
});
