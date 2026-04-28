# ASSET_IMPORT_GUIDE

## Why this file exists
Some coding environments cannot safely diff or edit binary assets (PNG, JPG, PDF, ZIP, APK, etc.) and may show errors like **"Binary files are not supported"**.

In this project, binary assets are kept unchanged and all editable logic/data is moved to text-based files.

## Binary assets in this repository
Binary examples include `.png`, `.jpg`, `.pdf`, `.zip`, font files, videos, and executables.

Do **not** edit these directly in restricted environments.

## Question-bank data rule
Question-bank content must live in text-readable formats.

Current text source:
- `data/jee-math-questions.sample.json`

The app loads this JSON via JavaScript loader files:
- `jee_main_mcq.js`
- `jee_advanced_mcq.js`
- `iit_math_mcq.js`

## If source content is only in PDF/image
1. Convert PDF/image content to CSV or JSON first.
2. Validate each record has:
   - `question` (string)
   - `options` (array of 4 strings)
   - `answer` (0-3)
3. Import the cleaned result into `data/jee-math-questions.sample.json`.
4. Keep binary originals in `assets/` for reference only.

## Recommended import schema
```json
{
  "jee_main": [
    {
      "question": "...",
      "options": ["A", "B", "C", "D"],
      "answer": 0,
      "topic": "Algebra",
      "difficulty": "Medium-Hard"
    }
  ],
  "jee_advanced": [],
  "iit_math": []
}
```
