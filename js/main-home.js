/***************
ALL IMPORTS
****************/
/* navigation bar */
/* hero */
/* about me */
/* skills */
import { skillsData } from "./data/skillsData.js";
import { renderMySkills } from "./components/mySkills/renderMySkills.js";
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
/* footer */

/***************
EXECUTION
****************/
/* navigation bar */
/* hero */
/* about me */
/* skills */
renderMySkills('#skillsLeft', skillsData);
renderMySkills('#skillsRight', skillsData);
/* resume */
/* client counter */
renderClientCounter('#clientCounterBlock', clientCounterData);
/* services */
renderMyServices('#services-block', servicesData);
/* portfolio */
/* testimonials */
/* blog */
/* contact */
/* footer */