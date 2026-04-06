# Longest Palindromic Substring

> To solve this problem, we iterate through each character of the string and treat it as a center point. We compare characters to the left and right of the center to find palindromes.

## Approach

- Treat each character (or gap between characters) as a potential center
- For odd-length palindromes: center is a single character (e.g., "aba" has center 'b')
- For even-length palindromes: center is the gap between two characters (e.g., "abba" has center between the two 'b's)
- Expand outward from the center as long as left and right characters match

## Solution

```javascript
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    const sArr = s.split('');
    let longest = '';

    const expandAroundCenter = (left, right) => {
        while (left >= 0 && right < sArr.length && sArr[left] === sArr[right]) {
            left--;
            right++;
        }
        // Return the palindrome found (left one step back from where mismatch occurred)
        const palindrome = sArr.slice(left + 1, right).join('');
        longest = longest.length > palindrome.length ? longest : palindrome;
    };

    for (let i = 0; i < sArr.length; i++) {
        // Odd length palindrome (center is single character)
        expandAroundCenter(i, i);
        // Even length palindrome (center is gap between characters)
        expandAroundCenter(i, i + 1);
    }

    return longest;
};
```

## Example

```
Input: "babad"
Output: "bab"  // or "aba"
Explanation: Both "bab" and "aba" are palindromes

Input: "cbbd"
Output: "bb"
Explanation: "bb" is the longest palindromic substring
```

## Time Complexity

- **O(n²)**: We expand around each character (2n centers for both odd and even)
- **O(n) space**: For the character array