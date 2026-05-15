from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from PIL import Image
import pytesseract
import io
import re

app = FastAPI()

# Permission de faire des requêtes depuis n'importe quelle origine (frontend)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {
        "message": "OCR service is running",
        "endpoints": {
            "scan": "/scan",
            "docs": "/docs"
        }
    }

# =========================
# 1. Nettoyage simple
# =========================

def nettoyer_lignes(text):
    """
    نحولو النص لسطور ونحيدو السطور الخاوية
    """
    return [ligne.strip() for ligne in text.split("\n") if ligne.strip()]


def normaliser_text(text):
    """
    نخليو النص uppercase ونسهلو البحث
    """
    return text.upper().replace("É", "E").replace("È", "E").replace("À", "A")

# =========================
# 2. Détection type document
# =========================

def detecter_type_document(text):
    text_upper = normaliser_text(text)

    if "CARTE NATIONALE" in text_upper or "IDENTITE" in text_upper or "N° CIN" in text_upper or "CIN" in text_upper:
        return "cin"

    if "PERMIS" in text_upper or "CONDUIRE" in text_upper or "DRIVING" in text_upper or "LICENCE" in text_upper:
        return "permis"

    return "inconnu"


