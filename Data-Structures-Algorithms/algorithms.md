# Data Structures & Algorithms

> Essential DSA concepts, problem-solving patterns, and algorithmic techniques for technical interviews.

---

## 📚 Contents

1. [Algorithm](#algorithm) - Definition
2. [Problem Solving](#problem-solving) - Approach
3. [Character Codes](#character-codes) - ASCII reference
4. [Problem Solving Patterns](#problem-solving-patterns) - Common techniques
5. [Code Examples](#count-integer-with-same-frequency) - Implementation

---

## Algorithm

A process or set of steps to accomplish certain task.

---

## Problem Solving

1. **Understand the Problem** - In our language
2. **Concrete Examples** - Start with simple input, more complex input, empty input, invalid input
3. **Break it Down** - Write some sudo code
4. **Solve**
5. **Refactor**

---

## Character Codes

- `47 - 58` - Alpha numeric 0-9
- `64 - 91` - Upper alpha A-Z
- `96 - 123` - Lower alpha a-z

---

## Problem Solving Patterns

### 1. Frequency Pattern

- Use splice pattern
- Assign frequency in object or Map

**Example:**

```
aaabbcc = {a: 3, b: 2, c: 2}
```

### 2. Multiple Pointer

- Pair of zero into a sorted array in minimum iteration
- Count unique values into a sorted array

**Example:**

```
[1, 1, 1, 2, 2, 3, 4, 4, 5, 5]

Solution:
i
[1, 1, 1, 2, 2, 3, 4, 4, 5, 5]
    j
   i
[1, 2, 1, 2, 2, 3, 4, 4, 5, 5]
       j
         i
[1, 2, 3, 4, 5, 3, 4, 4, 5, 5]
                      j
```

Mutate the array find new value using j replace the i array with new value increase the value of j.

### 3. Sliding Window

Make a window in an array, remove the last element and add the next element, slide the window.

---

## Count Integer with Same Frequency

```javascript
function sameFrequency(a, b) {
  if (a.toString().length !== b.toString().length) return false;

  const obj1 = freqObj(a.toString());
  const obj2 = freqObj(b.toString());

  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}

function freqObj(value) {
  const obj = {};
  for (const char of value) {
    if (char in obj) {
      obj[char] += 1;
    } else {
      obj[char] = 1;
    }
  }
  return obj;
}

console.log(sameFrequency(182, 2681));
```

---

## Check for Duplicates

**Problem:** Implement a function called `areThereDuplicates` which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.

**Restrictions:**

- Time - O(n)
- Space - O(n)

**Bonus:**

- Time - O(n log n)
- Space - O(1)

**Solution:**

```javascript
function areThereDuplicates(...arr) {
  let left = 0;
  let right = arr.length - 1;

  if (arr.length === 0) return false;

  while (left < right) {
    if (arr[left] !== arr[right]) {
      right--;
    } else {
      return true;
    }
    if (right === left + 1) {
      right = arr.length - 1;
      left++;
    }
  }
  return false;
}
```
