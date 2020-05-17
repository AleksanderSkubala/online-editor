const ace = require('brace');
require('brace/mode/html'); //JavaScript, Coffee, Lua, JSON
require('brace/theme/monokai');

const editor = ace.edit('editor');

const setup = () => {
  editor.getSession().setMode('ace/mode/html');
  editor.setTheme('ace/theme/monokai');

  const setupValue = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <h1>Hello Wolrd</h1>
</body>
</html>
  `;

  editor.setValue(setupValue);
  editor.getSession().on('change', () => update());
}

const update = () => {
  const iframe = document.querySelector('#result').contentWindow.document;

  iframe.open();
  iframe.write(editor.getValue());
  iframe.close();
};

setup();
update();
