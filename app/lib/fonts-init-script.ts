export const FONTS_HREF =
  'https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Rubik:wght@400;500;600;700;800&family=VT323&display=swap';

// Loads the Google Fonts stylesheet via JS instead of a blocking <link rel="stylesheet">,
// so it doesn't delay first paint. Runs inline (not via React) since it must execute
// during initial HTML parsing, before hydration.
export const FONTS_INIT_SCRIPT = `(function(){try{var l=document.createElement('link');l.rel='stylesheet';l.href='${FONTS_HREF}';document.head.appendChild(l);}catch(e){}})();`;
