/***************
ALL IMPORTS
****************/
/* navigation bar */
/* hero */
import { typeWriterAllWords } from "./data/typewriterData.js"
import { RenderTypeWriter } from "./components/renderTypewriter/renderTypewriter.js"
/* about me */
/* skills */
/* resume */
/* client counter */
import { clientCounterData } from './data/clientCounterData.js';
import { renderClientCounter } from './components/clientCounter/renderClientCounter.js';
/* services */
import { servicesData } from "./data/servicesData.js";
import { renderMyServices } from "./components/myServices/renderMyServices.js";
/* portfolio */
/* testimonials */
/* blog */
/* contact */
import { contactsValidator } from "./components/myServices/contactsValidator.js";


/* footer */

/***************
EXECUTION
****************/
/* navigation bar */
/* hero */
const typeEffect = new RenderTypeWriter(".typer", typeWriterAllWords);
typeEffect.typeWriting();
/* about me */
/* skills */
/* resume */
/* client counter */
renderClientCounter('#clientCounterBlock', clientCounterData);
/* services */
renderMyServices('#services-block', servicesData);
/* portfolio */
/* testimonials */
/* blog */
/* contact */
contactsValidator('form');

/* footer */
