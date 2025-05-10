import AthenaConfig from "../data/athena_astronaut.json";

const bookmarkPreset = {};

bookmarkPreset.get = () => {
  return AthenaConfig.bookmark;
};

export { bookmarkPreset };
