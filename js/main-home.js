/***************
ALL IMPORTS
****************/
/* navigation bar */
/* hero */
import { typeWriterAllWords } from "./data/typewriterData.js"
import { renderTypeWriting } from "./components/renderTypewriter/renderTypewriter.js"
/* about me */
/* skills */
/* resume */
/* client counter */
/* services */
import { servicesData } from "./data/servicesData.js";
import { renderMyServices } from "./components/myServices/renderMyServices.js";
/* portfolio */
/* testimonials */
/* blog */
/* contact */
/* footer */

/***************
EXECUTION
****************/
/* navigation bar */
/* hero */
renderTypeWriting();
/* about me */
/* skills */
/* resume */
/* client counter */
/* services */
renderMyServices('#services-block', servicesData);
/* portfolio */
/* testimonials */
/* blog */
/* contact */
/* footer */

