from fastapi import FastAPI, UploadFile, File
from PIL import Image
import pytesseract
import io

app = FastAPI()

@app.get("/")
def home():
    return {"message": "OCR service is running"}

@app.post("/scan")
async def scan_document(file: UploadFile = File(...)):
    contents = await file.read()
    image = Image.open(io.BytesIO(contents))

    text = pytesseract.image_to_string(image)

    return {
        "text_extrait": text
    }