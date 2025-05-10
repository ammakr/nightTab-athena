import AthenaConfig from "../data/athena_astronaut.json";

const state = {};

state.current = {};

state.default = AthenaConfig.state;

state.minMax = {
  header: {
    greeting: { size: { min: 50, max: 500 } },
    transitional: { size: { min: 50, max: 500 } },
    clock: { size: { min: 50, max: 500 } },
    date: { size: { min: 50, max: 500 } },
    search: {
      size: { min: 50, max: 500 },
      width: { size: { min: 10, max: 100 } },
    },
  },
  bookmark: { size: { min: 50, max: 500 } },
  group: {
    name: { size: { min: 50, max: 500 } },
    toolbar: { size: { min: 50, max: 500 } },
  },
  layout: {
    area: {
      header: { width: { min: 10, max: 100 } },
      bookmark: { width: { min: 10, max: 100 } },
    },
    size: { min: 10, max: 200 },
    width: { min: 10, max: 100 },
    padding: { min: 0, max: 300 },
    gutter: { min: 0, max: 300 },
  },
  toolbar: { size: { min: 50, max: 500 } },
  theme: {
    color: {
      range: { primary: { h: { min: 0, max: 359 }, s: { min: 0, max: 100 } } },
      contrast: { start: { min: 0, max: 100 }, end: { min: 0, max: 100 } },
    },
    accent: {
      hsl: {
        h: { min: 0, max: 359 },
        s: { min: 0, max: 100 },
        l: { min: 0, max: 100 },
      },
      rgb: {
        r: { min: 0, max: 255 },
        g: { min: 0, max: 255 },
        b: { min: 0, max: 255 },
      },
      cycle: { speed: { min: 100, max: 1000 }, step: { min: 1, max: 100 } },
    },
    font: {
      display: { weight: { min: 100, max: 900 } },
      ui: { weight: { min: 100, max: 900 } },
    },
    opacity: {
      general: { min: 0, max: 100 },
      toolbar: { min: 0, max: 100 },
      bookmark: { min: 0, max: 100 },
      search: { min: 0, max: 100 },
    },
    layout: {
      color: {
        hsl: {
          h: { min: 0, max: 359 },
          s: { min: 0, max: 100 },
          l: { min: 0, max: 100 },
        },
        rgb: {
          r: { min: 0, max: 255 },
          g: { min: 0, max: 255 },
          b: { min: 0, max: 255 },
        },
        blur: { min: 0, max: 200 },
        opacity: { min: 0, max: 100 },
      },
      divider: { size: { min: 0, max: 10 } },
    },
    header: {
      color: {
        hsl: {
          h: { min: 0, max: 359 },
          s: { min: 0, max: 100 },
          l: { min: 0, max: 100 },
        },
        rgb: {
          r: { min: 0, max: 255 },
          g: { min: 0, max: 255 },
          b: { min: 0, max: 255 },
        },
        opacity: { min: 0, max: 100 },
      },
      search: { opacity: { min: 0, max: 100 } },
    },
    bookmark: {
      color: {
        hsl: {
          h: { min: 0, max: 359 },
          s: { min: 0, max: 100 },
          l: { min: 0, max: 100 },
        },
        rgb: {
          r: { min: 0, max: 255 },
          g: { min: 0, max: 255 },
          b: { min: 0, max: 255 },
        },
        opacity: { min: 0, max: 100 },
      },
      item: { border: { min: 0, max: 20 }, opacity: { min: 0, max: 100 } },
    },
    group: { toolbar: { opacity: { min: 0, max: 100 } } },
    toolbar: { opacity: { min: 0, max: 100 } },
    background: {
      color: {
        hsl: {
          h: { min: 0, max: 359 },
          s: { min: 0, max: 100 },
          l: { min: 0, max: 100 },
        },
        rgb: {
          r: { min: 0, max: 255 },
          g: { min: 0, max: 255 },
          b: { min: 0, max: 255 },
        },
      },
      gradient: {
        angle: { min: 0, max: 360 },
        start: {
          hsl: {
            h: { min: 0, max: 359 },
            s: { min: 0, max: 100 },
            l: { min: 0, max: 100 },
          },
          rgb: {
            r: { min: 0, max: 255 },
            g: { min: 0, max: 255 },
            b: { min: 0, max: 255 },
          },
        },
        end: {
          hsl: {
            h: { min: 0, max: 359 },
            s: { min: 0, max: 100 },
            l: { min: 0, max: 100 },
          },
          rgb: {
            r: { min: 0, max: 255 },
            g: { min: 0, max: 255 },
            b: { min: 0, max: 255 },
          },
        },
      },
      image: {
        blur: { min: 0, max: 200 },
        grayscale: { min: 0, max: 100 },
        scale: { min: 100, max: 400 },
        accent: { min: 0, max: 100 },
        opacity: { min: 0, max: 100 },
        vignette: {
          opacity: { min: 0, max: 100 },
          start: { min: 0, max: 100 },
          end: { min: 0, max: 100 },
        },
      },
      video: {
        blur: { min: 0, max: 200 },
        grayscale: { min: 0, max: 100 },
        scale: { min: 100, max: 400 },
        accent: { min: 0, max: 100 },
        opacity: { min: 0, max: 100 },
        vignette: {
          opacity: { min: 0, max: 100 },
          start: { min: 0, max: 100 },
          end: { min: 0, max: 100 },
        },
      },
    },
    radius: { min: 0, max: 500 },
    shadow: { min: 0, max: 300 },
    shade: { opacity: { min: 0, max: 100 }, blur: { min: 0, max: 200 } },
  },
};

state.step = {
  theme: {
    font: {
      display: { weight: 100 },
      ui: { weight: 100 },
    },
  },
};

state.option = {
  layout: {
    area: {
      header: {
        justify: ["left", "center", "right"],
        align: ["left", "center", "right"],
      },
      bookmark: {
        justify: ["left", "center", "right"],
        align: ["left", "center", "right"],
      },
    },
    alignment: [
      "top-left",
      "top-center",
      "top-right",
      "center-left",
      "center-center",
      "center-right",
      "bottom-left",
      "bottom-center",
      "bottom-right",
    ],
    direction: ["horizontal", "vertical"],
    order: ["header-bookmark", "bookmark-header"],
    scrollbar: ["auto", "thin", "none"],
  },
  header: {
    item: { justify: ["left", "center", "right"] },
    search: {
      width: { by: ["auto", "custom"] },
      text: { justify: ["left", "center", "right"] },
    },
  },
  bookmark: {
    item: { justify: ["left", "center", "right"] },
    orientation: ["top", "bottom"],
    style: ["block", "list"],
  },
  group: {
    area: { justify: ["left", "center", "right"] },
    order: ["header-body", "body-header"],
  },
  toolbar: {
    location: ["corner", "header"],
    position: ["top-left", "top-right", "bottom-right", "bottom-left"],
  },
  theme: {
    accent: {
      random: { style: ["any", "light", "dark", "pastel", "saturated"] },
    },
    style: ["dark", "light", "system"],
    layout: { color: { by: ["theme", "custom"] } },
    header: { color: { by: ["theme", "custom"] } },
    bookmark: { color: { by: ["theme", "custom"] } },
    background: {
      type: ["theme", "accent", "color", "gradient", "image", "video"],
    },
  },
};

state.get = {
  current: () => {
    return state.current;
  },
  default: () => {
    return JSON.parse(JSON.stringify(state.default));
  },
  minMax: () => {
    return JSON.parse(JSON.stringify(state.minMax));
  },
  step: () => {
    return JSON.parse(JSON.stringify(state.step));
  },
  option: () => {
    return JSON.parse(JSON.stringify(state.option));
  },
};

state.set = {
  restore: {
    setup: (dataToRestore) => {
      state.current.language = dataToRestore.state.language;
      state.current.layout = dataToRestore.state.layout;
      state.current.header = dataToRestore.state.header;
      state.current.bookmark = dataToRestore.state.bookmark;
      state.current.group = dataToRestore.state.group;
      state.current.toolbar = dataToRestore.state.toolbar;
      console.log("setup restored");
    },
    theme: (dataToRestore) => {
      state.current.theme = dataToRestore.state.theme;
      console.log("theme restored");
    },
  },
  default: () => {
    state.current = state.get.default();
    console.log("state set to default");
  },
};

export { state };
