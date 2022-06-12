const { ipcRenderer, clipboard } = require('electron');

window.addEventListener('DOMContentLoaded', () => {

    const transAction = '/n';
    const transActionWindow = '/o';

    let transCodes = {
        se11: {
            title: 'ABAP Dictionary Pflege', 
            code: 'se11'
        },
        se16: {
            title: 'Data Browser', 
            code: 'se16'
        },
        se16h: {
            title: 'Data Browser - H', 
            code: 'se16h'
        },
        se16n: {
            title: 'Data Browser - N', 
            code: 'se16n'
        },
        se38: {
            title: 'ABAP Editor', 
            code: 'se38'
        },
        se80: {
            title: 'Object Navigator', 
            code: 'se80'
        },
        se93: {
            title: 'Transaktionspflege', 
            code: 'se93'
        },
        su01: {
            title: 'Benutzerpflege', 
            code: 'su01'
        }
    }

    let rowCount = 0;

    // Loop Transactioncodes
    for (const element in transCodes) {

        // Generate Content
        let div = document.createElement('div');
            
        if(rowCount % 2 == 0) {
            div.classList = 'rowCode rowCodeMarked';
        } else {
            div.classList = 'rowCode';
        }

        document.getElementById('btnContent').appendChild(div);

        let spanCode = document.createElement('span');
        spanCode.classList = 'spanCode';
        spanCode.textContent = transCodes[element].code;

        let spanTitle = document.createElement('span');
        spanTitle.classList = 'spanTitle';
        spanTitle.textContent = transCodes[element].title;

        createButton(div, element + 'Btn', 'Kopieren');
        createButton(div, element + 'BtnWindow', 'Kopieren (neues Fenster)');

        div.prepend(spanCode, spanTitle);
    
        // Copy
        document.getElementById(element + 'Btn').addEventListener('click', function () {
            clipboard.writeText(transAction + element);
        });
    
        // Copy with Window Option
        document.getElementById(element + 'BtnWindow').addEventListener('click', function () {
            clipboard.writeText(transActionWindow + element);
        });

        rowCount++;
    }

    // Create Content for Transactioncodes
    function createButton(div, btnID, btnTxt) {

        let button = document.createElement('button');

        button.id = btnID;
        button.classList = 'btnCode';
        button.textContent = btnTxt;

        div.appendChild(button);

    }

    document.getElementById('alwaysOnTop').addEventListener('change', function(e) {
        var checkbox =  document.getElementById('alwaysOnTop');
        ipcRenderer.send('alwaysOnTop', checkbox.checked);
    });

});