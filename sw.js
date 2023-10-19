import { coi } from 'coi-serviceworker';

coi({
  // Set the Cross-Origin-Opener-Policy header to same-origin.
  crossOriginOpenerPolicy: 'same-origin',
});