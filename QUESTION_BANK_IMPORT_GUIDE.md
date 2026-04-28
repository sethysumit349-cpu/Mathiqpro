# JEE Question Bank Import Guide (2000 Questions)

This project now supports a **full 2000-question JEE Mathematics bank** with the following target distribution:

- **800** JEE Main
- **700** JEE Advanced
- **500** IIT Mathematics Practice

> Current repository includes only a **sample dataset** (`data/jee-math-questions.sample.json`) with original JEE-style demo questions for testing the system.

## 1) Required question object format

Every question must follow this structure:

```json
{
  "id": "JM-0001",
  "exam": "JEE Main",
  "level": "Easy | Medium | Hard",
  "chapter": "Circle",
  "topic": "Equation of Circle",
  "questionType": "MCQ | Integer | Multiple Correct",
  "question": "Question text here",
  "options": ["A", "B", "C", "D"],
  "correctAnswer": "B",
  "answerValue": "Final answer here",
  "solution": [
    "Step 1 explanation",
    "Step 2 explanation",
    "Step 3 explanation"
  ],
  "formulaUsed": ["Formula 1", "Formula 2"],
  "year": "2023",
  "source": "User provided dataset",
  "marks": 4,
  "negativeMarks": -1
}
```

## 2) Add full JSON directly (recommended)

1. Create/replace file:
   - `data/jee-math-questions.json`
2. Put all your real 2000 questions in this file as a JSON array.
3. Keep the same object schema above.
4. Reload the app.

The app loader checks files in this order:
1. `data/jee-math-questions.json`
2. `data/jee-math-questions.sample.json`
3. internal fallback sample

## 3) Import from CSV

If your data is in CSV:

1. Ensure CSV columns map to the JSON schema keys.
2. Convert rows to JSON objects.
3. Save as `data/jee-math-questions.json`.

### Suggested CSV columns

- id
- exam
- level
- chapter
- topic
- questionType
- question
- options (pipe-separated, e.g. `A|B|C|D`)
- correctAnswer
- answerValue
- solution (pipe-separated steps)
- formulaUsed (pipe-separated formulas)
- year
- source
- marks
- negativeMarks

## 4) Data quality checklist (important)

- `id` must be unique.
- `exam` must be one of: `JEE Main`, `JEE Advanced`, `IIT Mathematics`.
- `questionType`:
  - `MCQ`: provide `options` and single correct option label.
  - `Integer`: `options` can be empty.
  - `Multiple Correct`: `correctAnswer` as comma-separated labels (e.g. `A,C,D`).
- `solution` should be non-empty array of clear steps.
- `formulaUsed` should list key formulas used.
- Keep `marks` and `negativeMarks` numeric.

## 5) Optional chapter coverage validation

Before final import, verify all required chapters are present:

- Sets, Relations and Functions
- Complex Numbers
- Quadratic Equations
- Sequences and Series
- Binomial Theorem
- Permutations and Combinations
- Probability
- Matrices
- Determinants
- Limits and Continuity
- Differentiation
- Application of Derivatives
- Indefinite Integration
- Definite Integration
- Area Under Curve
- Differential Equations
- Straight Lines
- Circle
- Parabola
- Ellipse
- Hyperbola
- Three Dimensional Geometry
- Vectors
- Trigonometry
- Inverse Trigonometry
- Mathematical Reasoning
- Statistics
- Heights and Distances

## 6) Performance notes for large banks

The app already loads questions lazily and only renders one question at a time. For very large datasets, keep each question object compact and avoid unnecessary long HTML strings.

## 7) Real-data transparency

If you load an authentic past-year/provider dataset, update `source` accordingly (e.g., exam year/set or your data provider) for better traceability.
