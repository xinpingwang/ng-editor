/* eslint-env commonjs */
/* globals window, document, console */

const ClassicEditor = require("../../build/ckeditor");

ClassicEditor.create(document.querySelector("#editor"))
  .then((editor) => {
    window.editor = editor;
  })
  .catch((error) => {
    console.error("There was a problem initializing the editor.", error);
  });
