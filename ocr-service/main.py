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


# =========================
# 3. Extraction CIN
# =========================

def extraire_infos_cin(text):
    infos = {
        "type_document": "cin",
        "nom": None,
        "prenom": None,
        "date_naissance": None,
        "lieu_naissance": None,
        "cin": None,
        "date_expiration": None,
        "text_brut": text
    }

    lignes = nettoyer_lignes(text)

    # CIN بحال AE123456
    cin_match = re.search(r"\b[A-Z]{1,2}[0-9]{5,8}\b", text)
    if cin_match:
        infos["cin"] = cin_match.group()

    # التواريخ بحال 15/05/1998
    dates = re.findall(r"\b\d{2}/\d{2}/\d{4}\b", text)

    if len(dates) >= 1:
        infos["date_naissance"] = dates[0]

    if len(dates) >= 2:
        infos["date_expiration"] = dates[1]

    # Nom و Prénom
    for i, ligne in enumerate(lignes):
        ligne_clean = ligne.lower().replace("é", "e").replace("è", "e").strip()

        if ligne_clean.startswith("prenom"):
            if i + 1 < len(lignes):
                infos["prenom"] = lignes[i + 1]

        elif ligne_clean.startswith("nom"):
            if i + 1 < len(lignes):
                infos["nom"] = lignes[i + 1]

    # المدينة
    villes = [
        "RABAT", "CASABLANCA", "FES", "FEZ", "MEKNES",
        "MARRAKECH", "TANGER", "AGADIR", "OUJDA",
        "TETOUAN", "KENITRA", "SALE", "SAFI",
        "EL JADIDA", "BENI MELLAL", "NADOR", "SETTAT"
    ]

    text_upper = normaliser_text(text)

    for ville in villes:
        if ville in text_upper:
            infos["lieu_naissance"] = "FES" if ville == "FEZ" else ville
            break

    return infos