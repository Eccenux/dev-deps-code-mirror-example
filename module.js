import {basicSetup} from "codemirror"
import {EditorView} from "@codemirror/view"
import {javascript} from "@codemirror/lang-javascript"

const view = new EditorView({
  doc: "Start document",
  parent: document.querySelector('#edit-js'),
  extensions: [
	basicSetup,
	javascript(),
  ],
});
