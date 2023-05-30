from fastapi import FastAPI, UploadFile
# import whisper

app = FastAPI()

@app.get("/api/python")
def hello_world():
    return {"message": "Hello World"}

@app.get("/api/audio")
def whisper():
    return {"message": "Please using button to upload an audio file."}

@app.post("/api/audio")
def whisper_extract(audio: UploadFile):
    print(audio.filename, audio.content_type)
    # model = whisper.load_model("base")
    # result = model.transcribe("audio.mp3")
    # print(result["text"])
    return {"message": "Upload an audio file.", "filename": audio.filename, "content_type": audio.content_type}
