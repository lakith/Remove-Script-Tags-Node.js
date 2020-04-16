# Remove-Script-Tags-Node.js

****This is the code  and the REGEX I have added to remove the script tags**

```javascript
  removeScriptTags(text) {
      let SCRIPT_REGEX = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi      
      while (SCRIPT_REGEX.test(text)) {
         text = text.replace(SCRIPT_REGEX, '');
      }
      return text
  }
```
/gi means do a global, case-insensitive search. while block ensures that if there are multiple script tags, it will remove all.

Sample code snippet to test.

[Remove Script Tags](https://repl.it/@LakithMuthugala/EnlightenedImaginativeTransformations)
