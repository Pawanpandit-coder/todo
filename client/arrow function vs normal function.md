Bilkul 👍
Yeh raha **NORMAL function vs ARROW function** ka **short + one-shot revision**
(yaad rakhne ke liye perfect 👇)

---

## 🚀 Normal Function vs Arrow Function (ONE-SHOT)

### 1️⃣ Syntax

```js
function add(a, b) {
  return a + b;
}
```

```js
const add = (a, b) => a + b;
```

---

### 2️⃣ `this` behavior 🔥

| Point     | Normal Function    | Arrow Function        |
| --------- | ------------------ | --------------------- |
| `this`    | Apna `this` banata | Parent se `this` leta |
| Confusion | Zyada              | Kam (React me best)   |

🧠 **Memory trick:**
👉 *Arrow function = `this` borrow karta hai*

---

### 3️⃣ `arguments`

|             | Normal      | Arrow     |
| ----------- | ----------- | --------- |
| `arguments` | ✅ Milta hai | ❌ Nahi    |
| Replacement | —           | `...args` |

---

### 4️⃣ Constructor (`new`)

|               | Normal | Arrow |
| ------------- | ------ | ----- |
| `new` keyword | ✅      | ❌     |

---

### 5️⃣ Hoisting

|         | Normal | Arrow |
| ------- | ------ | ----- |
| Hoisted | ✅      | ❌     |

---

### 6️⃣ React usage 🔥

|                | Normal  | Arrow    |
| -------------- | ------- | -------- |
| Event handlers | ❌ Avoid | ✅ Best   |
| Components     | ❌ Rare  | ✅ Mostly |

---

## ✅ When to use what (FINAL RULE)

### ✅ Arrow Function use karo jab:

* React components / handlers
* `this` issue se bachna ho
* Short & clean code chahiye

### ✅ Normal Function use karo jab:

* Constructor banana ho
* Object method me exact `this` chahiye
* `arguments` use karna ho

---

## 🧠 ONE-LINE FINAL MEMORY 🔥

> **React = Arrow Function**
> **JS core / constructor = Normal Function**

---

Agar chaho to mai isko **PDF-style notes** ya **interview Q&A format** me bhi bana deta hoon 😄
