// eslint-disable-next-line no-unused-vars
import React from "react";
import { createRoot } from "react-dom/client";
import NotesApp from "./NotesApp";

//styling
import './styles/style.css';

const root = createRoot(document.getElementById('root'));
root.render(<NotesApp />);