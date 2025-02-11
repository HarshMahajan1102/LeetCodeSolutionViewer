const category = document.getElementsByClassName('category');
const categoricalPara = document.getElementsByClassName('categoricalPara');
const probTypeDiv = document.getElementsByClassName('probTypeDiv');
const input = document.createElement("input");
const searchBtn = document.getElementById("searchBtn");
const searchContainer = document.getElementById("searchContainer");
const crossBtn = document.getElementById("crossBtn");

// fetch("https://api.github.com/repos/haoel/leetcode", {
//   headers: {
//     "Authorization": `token ${token}`
//   }
// })
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error("Error fetching repository:", error));



// function getDataDiff(str) {

// }

// function getDataLang(str) {

// }

// function getDataSerialNo(str) {

// }




document.getElementById('searchBtn').addEventListener('click', () => {
    input.type = "text";
    input.placeholder = "Enter the problem name/number";
    searchContainer.innerHTML = "";
    searchContainer.appendChild(input);
    searchBtn.style.visibility = 'hidden';
    crossBtn.style.visibility = 'visible';

    input.classList.add("inputBox");
    
})

// crossBtn.addEventListener("click", () => {
//     crossBtn.style.visibility = "hidden";  // Hide cross button
//     searchBtn.style.visibility = "visible";  // Show search button
//     // crossBtn.style.display = "none";
//     searchContainer.innerHTML = ""; // Clear input field
// });


// const easy = document.getElementById('catEasy').addEventListener('click', () => {getDataDiff('Easy')});
// const medium = document.getElementById('catMedium').addEventListener('click', () => {getDataDiff('Medium')});
// const difficult = document.getElementById('catDifficult').addEventListener('click', () => {getDataDiff('Difficult')});
  
// document.getElementById('catCpp').addEventListener('click', () => {getDataLang('cpp')});
// const python = document.getElementById('catPython').addEventListener('click', () => {getDataLang('Python')});
// const java = document.getElementById('catJava').addEventListener('click', () => {getDataLang('Java')});
// const go = document.getElementById('catGo').addEventListener('click', () => {getDataLang('Go')});
// const bash = document.getElementById('catBash').addEventListener('click', () => {getDataLang('Bash')});

// const qS1 = document.getElementById('catQSet1').addEventListener('click', () => {getDataSerialNo('QSet1')});
// const qS2 = document.getElementById('catQSet2').addEventListener('click', () => {getDataSerialNo('QSet2')});
// const qS3 = document.getElementById('catQSet3').addEventListener('click', () => {getDataSerialNo('QSet3')});
// const qS4 = document.getElementById('catQSet4').addEventListener('click', () => {getDataSerialNo('QSet4')});
// const qS5 = document.getElementById('catQSet5').addEventListener('click', () => {getDataSerialNo('QSet5')});

// function getDataDiff(str) {
    
// }

 async function getDataLang(str) {
    const apiUrl = `https://api.github.com/repos/haoel/leetcode/contents/algorithms/${str}?ref=master`;
    
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        // Create an array of objects with name and corresponding download_url
        const filesArray = data.map(file => ({
            name: file.name,
            link: file.html_url  // This is the clickable GitHub URL
    }));
        
        // console.log(filesArray);  // Debugging: Check the extracted data
        
        // Display the links in the DOM
        const container = document.getElementById("catCpp");
        container.innerHTML = "";
        
        filesArray.forEach(file => {
        const a = document.createElement("a");
        a.href = file.link;
        a.textContent = file.name;
        a.target = "_blank"; // Open in new tab
        // a.style.display = "block"; // Display each link in a new line
        a.classList.add(`${str}Content`)
        container.appendChild(a);
});

    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
            
// function getDataSerialNo(str) {
    
// }

document.getElementById('catCpp').addEventListener('click', () => {
    // categoricalPara.classList.remove('categoricalPara');
    // categoricalPara.classList.add('categoricalParaClicked');
    // category.classList.remove('category');
    // category.classList.add('categoryClicked');
    // probTypeDiv.classList.remove('probTypeDiv');
    // probTypeDiv.classList.add('probTypeDivClicked');
    // categoricalPara.style.visibility = 'hidden';
    // category.style.visibility = 'hidden';
    // probTypeDiv.style.visibility = 'hidden';
    
    document.querySelectorAll('categoricalPara').style.display = 'none';
    document.querySelectorAll('category').style.display = 'none';
    document.querySelectorAll('probTypeDiv').style.display = 'none';
    getDataLang('cpp');
});
