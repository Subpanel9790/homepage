// User configuration for the startpage - update the palette, location, and your preferred tabs, categories, and links

// Available themes: latte, frappe, mocha, macchiato
const preferredLightTheme = latte;
const preferredDarkTheme = mocha;

let palette = initThemeSystem(preferredLightTheme, preferredDarkTheme);

const default_configuration = {
  overrideStorage: true,
  temperature: {
    location: "Nashville, TN, US",
    scale: "C",
    // Optional OpenWeatherMap API key, get a free one at https://openweathermap.org/api
    // Leave empty to keep the placeholder and skip the network request
    appId: "c7d80bac34232fe7f4f6c85b6d25743c",
  },
  clock: {
    format: "h:i",
    icon_color: palette.maroon,
  },
  additionalClocks: [
    {
      label: "US East",
      timezone: "America/New_York",
      format: "h:i",
      icon_color: palette.peach,
    },
    {
      label: "US Pacific",
      timezone: "America/Los_Angeles",
      format: "h:i",
      icon_color: palette.blue,
    },
  ],
  search: {
    engines: {
      p: ["https://www.perplexity.ai/search/?q=", "PerplexityAI"],
      d: ["https://duckduckgo.com/?q=", "DuckDuckGo"],
      g: ["https://google.com/search?q=", "Google"],
    },
    default: "g",
  },
  keybindings: {
    "s": "search-bar",
  },
  disabled: [],
  localIcons: true,
  localFonts: true,
  fastlink: "https://www.perplexity.ai",
  openLastVisitedTab: true,
   tabs: [
    {
      name: "Home",
      background_url: "src/img/banners/banner_13.gif",
      categories: [
        {
          name: "Workspace",
          links: [
            {
              name: "gmail",
              url: "https://google.com",
              icon: "brand-gmail",
              icon_color: palette.green,
            },
            {
              name: "calendar",
              url: "https://google.com",
              icon: "calendar-filled",
              icon_color: palette.green,
            },
            {
              name: "sheets",
              url: "https://google.com",
              icon: "table",
              icon_color: palette.green,
            },
            {
              name: "drive",
              url: "https://google.com",
              icon: "brand-google-drive",
              icon_color: palette.green,
            },
          ],
        },
        {
          name: "Media",
          links: [
            {
              name: "Youtube",
              url: "https://www.youtube.com",
              icon: "brand-youtube",
              icon_color: palette.green,
            },
            {
              name: "YT Music",
              url: "https://music.youtube.com",
              icon: "music",
              icon_color: palette.green,
            },
            {
              name: "Amazon Video",
              url: "https://www.amazon.com/gp/video/storefront?ref_=nav_cs_prime_video",
              icon: "video",
              icon_color: palette.green,
            },
            {
              name: "Facebook",
              url: "https://www.facebook.com",
              icon: "brand-facebook",
              icon_color: palette.green,
            },
            {
              name: "1337",
              url: "https://1337x.to",
              icon: "magnet",
              icon_color: palette.green,
            },
          ],
        },
        {
          name: "Shops",
          links: [
            {
              name: "Amazon",
              url: "https://www.amazon.com/",
              icon: "brand-amazon",
              icon_color: palette.green,
            },
            {
              name: "Target",
              url: "https://www.target.com/",
              icon: "shopping-bag",
              icon_color: palette.green,
            },
            {
              name: "Slickdeals",
              url: "https://slickdeals.net/",
              icon: "tags",
              icon_color: palette.green,
            },
            {
              name: "Publix",
              url: "https://www.publix.com/savings/weekly-ad/bogo?merch=hp_viz_nav_bogo",
              icon: "shopping-cart",
              icon_color: palette.green,
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(default_configuration, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.blue);
