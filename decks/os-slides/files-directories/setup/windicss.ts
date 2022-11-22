// setup/windicss.ts

import { defineWindiSetup } from '@slidev/types'

// extending the builtin windicss configurations
export default defineWindiSetup(() => ({
  shortcuts: {
    // custom the default background
    'bg-main': 'bg-white text-[#181818] dark:bg-[#121212] dark:text-[#ddd]',
  },
  theme: {
    extend: {
      // fonts can be replaced here, remember to update the web font links in `index.html`
      // note that it does not actually seem to be needed to update the index.html file!
      fontFamily: {
          sans: '"IBM Plex Sans","Nunito Sans",ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
          mono: '"IBM Plex Mono", monospace',
        },
    },
  },
}))
