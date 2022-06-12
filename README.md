# SAPTRAC
Anwendung zum schnellen Nachschlagen von (den wichtigsten) SAP Transaktionscodes!

# Liste erweitern (preload.js)
let transCodes = { } erweitern

Beispiel:

```
let transCodes = {
  su01: {
    title: 'Benutzerpflege', 
    code: 'su01'
  },
  example1: {
    title: 'Beispiel 1',
    code: 'beispiel1'
  },
  example2: {
    title: 'Beispiel 2',
    code: 'beispiel2'
  }
}
```

# Anwendung erstellen
npx electron-builder build --win portable
