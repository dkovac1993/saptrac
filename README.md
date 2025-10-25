# SAPTRAC
Application for quickly looking up (the most important) SAP transaction codes!

Expanding the List (preload.js)

Extend let transCodes = { }

# Expanding the List (preload.js)
Extend ```let transCodes = { }```

Example:

```
let transCodes = {
  su01: {
    title: 'User Maintenance', 
    code: 'su01'
  },
  example1: {
    title: 'Example 1',
    code: 'example1'
  },
  example2: {
    title: 'Example 2',
    code: 'example2'
  }
}
```

# Building the Application
npx electron-builder build --win portable
