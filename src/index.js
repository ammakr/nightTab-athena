import { component } from "./component";
import { APP_NAME } from "./constant";
import AthenaConfig from "./athena.json";

console.log(
  APP_NAME + " version:",
  component.version.number,
  component.version.name
);

function initializeApp() {
  component.data.init();

  component.theme.init();

  component.layout.init();

  component.toolbar.init();

  component.header.init();

  component.group.init();

  component.bookmark.init();

  component.groupAndBookmark.init();

  component.pageLock.init();

  component.keyboard.init();
  // component.menu.open();
}

if (localStorage.getItem("initialized") !== "true") {
  const configString = JSON.stringify(AthenaConfig);
  localStorage.setItem("initialized", "true");
  localStorage.setItem("nightTab", configString);

  setTimeout(() => {
    initializeApp();
  }, 200);
} else {
  initializeApp();
}
