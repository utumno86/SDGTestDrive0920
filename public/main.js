const darkModeButton = document.querySelector("#dark-mode-button")

const changeToDarkMode = () => {
  const bodyClasses = document.querySelector("body").classList
  if (bodyClasses.contains("dark-mode")) {
    bodyClasses.remove("dark-mode")
    darkModeButton.textContent = "Dark Mode!"
  } else {
    bodyClasses.add("dark-mode")
    darkModeButton.textContent = "Light Mode!"
  }
}

darkModeButton.addEventListener("click", changeToDarkMode)