# YouTube Subtitle Extractor

This web application allows users to extract subtitles from YouTube videos using the OpenAI API. It provides an easy-to-use interface to input your OpenAI API key and YouTube video URL, fetch the subtitles, and display them on the screen.

## Features

- **API Key Management**: Save and manage your OpenAI API key.
- **Subtitle Extraction**: Fetch and display subtitles from a YouTube video.
- **User Interface**: Simple and clean design with a "Go Back" feature to return to the main screen.
- **GitHub Integration**: Link to the project's GitHub repository for easy access.

## Installation

To set up and run this project locally, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/JugraajSingh/YouTube-Subtitle-Extractor.git
   cd YouTube-Subtitle-Extractor
2. Setup a Python Virtual Environment (optional but recommended):
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
3. Install Dependencies:
Ensure you have Flask installed. You can install it using pip:
   ```bash
   pip install flask
4. Run the Flask Application:
Make sure you're in the project directory, then run:
   ```bash
   python app.py

## File Structure

- `index.html`: Main HTML file for the web application interface.
- `style.css`: CSS file for styling the web application.
- `script.js`: JavaScript file for handling user interactions and API requests.
- `app.py`: Flask server-side script for handling requests and serving the web application.

## Dependencies

- **Flask**: Python web framework for serving the application.
- **OpenAI API**: Used for generating responses based on video subtitles.
- **YouTube Transcript API**: Retrieves subtitles from YouTube videos.


## Contact

For questions or feedback, please reach out to [Jugraaj Singh](https://github.com/JugraajSingh) on GitHub.
