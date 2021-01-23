// polyfill es6 things that arent easily transpiled
import "core-js";
import "regenerator-runtime";

// people often import their css and let webpack take care
// of injecting it into the DOM
import "./index.css";

import { swap } from "./wonderful-background";

// this waits a sec. cmon.
const waitASec = () => new Promise(resolve => setTimeout(resolve, 1000));

async function swapALot(){
  await waitASec();
  swap();
  swapALot();
}

swap();
swapALot();
