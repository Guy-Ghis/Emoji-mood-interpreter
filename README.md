# 😊 Emoji Mood Interpreter
A simple JavaScript project that calculates a **mood score** based on a list of emoji inputs. The score is computed by summing predefined values associated with each emoji.

---
## 🚀 Features

- Accepts an array of emoji strings representing user moods.
- Calculates a total mood score based on known emoji values.
- Throws errors for invalid inputs (e.g. unknown emojis or non-string values).
- Includes a comprehensive Jest test suite.

---
## 🧠 Emoji Scoring

The following emojis are recognized and scored:

| Emoji | Description  | Score |
| ----- | ------------ | ----- |
| 🤩    | Excited      | +3    |
| 😀    | Happy        | +2    |
| 😐    | Neutral      | 0     |
| 🫤    | Disappointed | -1    |
| 😞    | Sad          | -2    |
| 😡    | Angry        | -3    |

---

## 🛠️ Getting Started
1. Clone the repository
```bash
git clone https://github.com/Guy-Ghis/Emoji-mood-interpreter.git
cd Emoji-mood-interpreter
```

2. Install dependencies
```bash
npm install
```

3. Run tests
```bash
npm test
```

---
## 🧪 Test Coverage
The test suite includes:

- ✅ Valid emoji arrays

- ✅ Unknown emoji detection

- ✅ Input validation (type checks)

- ✅ Edge cases (e.g. empty array, neutral-only array)

Run the tests with:

```bash
npm test
```

---
## 📄 License
This project is licensed under the MIT License. Check the LICENSE file.