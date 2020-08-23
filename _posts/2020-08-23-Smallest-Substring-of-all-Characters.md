---
title: Smallest Substring of All Characters
layout: post
date: '2020-08-23 11:30:00'
description: 
lang: en-US
# image: "/static/assets/img/blog/intro/introPic.jpg"
# categories:
# - String
keywords: Nachiket,Dhamankar,Nachiket Dhamankar,Software,Developer,Engineer,Software Developer,Softare Engineer,Software Developer Engineer
tags:
- String Manipulation
- Array Manipulation
- Pramp
- Python3
# - kscript
# - windows
# - windows 10
# - upgrade
# - aggiornamento
# icon: fa-floppy-o
# intro: Welcome to my <i>dumpfile!</i>
---
#### Smallest Substring of All Characters
Given an array of unique characters arr and a string str, Implement a function getShortestUniqueSubstring that finds the smallest substring of str containing all the characters in arr. Return ```""``` (empty string) if such a substring doesn’t exist.

Come up with an asymptotically optimal solution and analyze the time and space complexities.

## Example:
```
input:  arr = ['x','y','z'], str = "xyyzyzyx"

output: "zyx"
```
## Constraints:
- [time limit] 5000ms
- [input] array.character arr
    - 1 ≤ arr.length ≤ 30
- [input] string str
    - 1 ≤ str.length ≤ 500
- [output] string

## Solution
```
from collections import Counter

def isValid(s, dk):
  for char in s:
    if char not in dk:
      return False
  return True

def get_shortest_unique_substring(arr, str):
  cur = {}
  unique = set(arr)
  left = 0
  right = 0
  output = ""
  outputLen = float('inf')
  while right < len(str):

    cur[str[right]] = cur.get(str[right], 0) + 1    

    while left < right and str[left] in cur and cur[str[left]] > 1:
      if str[left] not in unique:
        left += 1
        continue
      cur[str[left]] = cur.get(str[left], 0) - 1
      left += 1

    if len(cur) >= len(unique) and isValid(unique, cur.keys()):
      tmp = str[left: right+1]
      if len(tmp) < outputLen:
        output = tmp
        outputLen = len(tmp)
    right += 1
  return output


arr = ["A","B","C"]
str = "ADOBECODEBANCDDD"
print(get_shortest_unique_substring(arr, str))
```
## Complexities
Consider N is the length of ```str``` and M is length of ```arr```.

- Time Complexity: O(N+M) since we're traversing both ```arr``` and ```str```
- Space Complexity: O(N+M) since we store ```arr``` in a set and the output holds ```str``` (worst case)