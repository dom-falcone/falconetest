#!/usr/bin/env python3
"""File upload error messages"""
import os

BASE_PATH = "/Users/a.humeniuk/Documents/GitHub/testfalcone/Ohne Titel/de"

TRANSLATIONS = {
    # News file upload errors
    "Entfernen новость?": "Neuigkeit löschen?",
    "Файл": "Datei",
    "слишком большой": "zu groß",
    "не является изображением": "ist kein Bild",
    "Не удалось достаточно сжать изображение": "Das Bild konnte nicht ausreichend komprimiert werden",
    "Попробуйте изображение меньшего разрешения.": "Versuchen Sie ein Bild mit geringerer Auflösung.",
    "Fehler обработки изображения": "Fehler bei der Bildverarbeitung",
    "Видео": "Video",
    "слишком большое": "zu groß",
    "имеет неподдерживаемый формат. Используйте MP4, WebM, OGG или MOV": "hat ein nicht unterstütztes Format. Verwenden Sie MP4, WebM, OGG oder MOV",
    "Fehler публикации:": "Veröffentlichungsfehler:",
    "Токен верификации не найден в ссылке": "Verifizierungstoken nicht im Link gefunden",
    
    # More cleanup
    "новость": "Neuigkeit",
    "изображения": "Bilder",
    "изображение": "Bild",
}

def translate_file(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        original = content
        for ru, de in TRANSLATIONS.items():
            content = content.replace(ru, de)
        if content != original:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        return False
    except Exception as e:
        print(f"Error: {e}")
        return False

def main():
    translated = []
    for root, dirs, files in os.walk(BASE_PATH):
        for f in files:
            if f.endswith('.html'):
                path = os.path.join(root, f)
                if translate_file(path):
                    translated.append(path.replace(BASE_PATH+'/', ''))
    print(f"Translated {len(translated)} files")

if __name__ == "__main__":
    main()
