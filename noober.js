async function pageLoaded() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)

  
  
  // 🔥 start here: write code to loop through the rides

  for (let i = 0; i < json.length; i++){
    ride = json[i]
   let outputElement = document.querySelector(".rides")
  }

  
 
  
}

window.addEventListener('DOMContentLoaded', pageLoaded)

