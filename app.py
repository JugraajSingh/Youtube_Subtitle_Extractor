from flask import Flask, request, jsonify
from flask_cors import CORS
import openai
from youtube_transcript_api import YouTubeTranscriptApi

app = Flask(__name__)
CORS(app)

def seconds_to_hms(time_str):
    seconds = int(time_str)
    hours = seconds // 3600
    minutes = (seconds % 3600) // 60
    seconds = seconds % 60
    return f"{hours:02d}:{minutes:02d}:{seconds:02d}"

@app.route('/get_subtitles', methods=['POST'])
def get_subtitles():
    data = request.json
    video_url = data.get('video_url')
    api_key = request.headers.get('Authorization').split(' ')[1]
    
    print(f"Received video URL: {video_url}")
    print(f"Received API Key: {api_key}")

    openai.api_key = api_key
    try:
        video_id = video_url.split("v=")[1]
        subtitles = YouTubeTranscriptApi.get_transcript(video_id)
        subtitle_text = ""
        for subtitle in subtitles:
            start_time = seconds_to_hms(subtitle['start'])
            end_time = seconds_to_hms(subtitle['duration'])
            subtitle_text += f"{start_time} - {end_time}: {subtitle['text']} ;"
        return jsonify({'subtitles': subtitle_text})
    except Exception as e:
        print(f"Error: {e}")
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)
