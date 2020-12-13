/***************
ALL IMPORTS
****************/
/* navigation bar */
/* hero */
import { typeWriterWords } from "./data/typewriterData.js"
import { renderTypewriter } from "./components/renderTypewriter/renderTypewriter.js"
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
renderTypewriter('li');
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