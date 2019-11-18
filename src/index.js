import React from "react";
import ReactDOM from "react-dom";
import {IntlProvider} from 'react-intl';
import Spanish from './locales/es-ES.json';
import English from './locales/en.json';
import JobsList from "./components/jobsList";

let language = navigator.language || navigator.userLanguage;
let currentLanguage;

switch (language) {
    case 'en':
        currentLanguage = English;
        break
    case 'es-ES':
        currentLanguage = Spanish;
        break
    default:
        currentLanguage = English;
        break
}

ReactDOM.render(
	<IntlProvider locale={language} messages={currentLanguage}>
		<JobsList/>
	</IntlProvider>, document.getElementById("root")
);