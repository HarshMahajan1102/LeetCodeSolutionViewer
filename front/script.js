// Declaring variables same as their class or id name

const category = document.getElementsByClassName('category');
const categoricalPara = document.getElementsByClassName('categoricalPara');
const probTypeDiv = document.getElementsByClassName('probTypeDiv');
const input = document.createElement("input");
const searchBtn = document.getElementById("searchBtn");
const searchContainer = document.getElementById("searchContainer");
const crossBtn = document.getElementById("crossBtn");

// Firstly I tried to fetch data with it but then I got another way so I commented it out 

// fetch("https://api.github.com/repos/haoel/leetcode", {
//   headers: {
//     "Authorization": `token ${token}`
//   }
// })
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error("Error fetching repository:", error));

// Deploying functionality for search button
// Thanks to ChatGPT for appendChild function

document.getElementById('searchBtn').addEventListener('click', () => {

    input.type = "text";
    input.placeholder = "Enter the problem name/number";

    searchContainer.innerHTML = "";
    searchContainer.appendChild(input);
    searchBtn.style.visibility = 'hidden';

    crossBtn.style.visibility = 'visible';

    input.classList.add("inputBox");
    
})

// Deploying functionality for cross button but then as it was not working as expected so I commented it out 

// crossBtn.addEventListener("click", () => {
//     crossBtn.style.visibility = "hidden"; 
//     searchBtn.style.visibility = "visible";  
//     // crossBtn.style.display = "none";
//     searchContainer.innerHTML = ""; 
// });

// Thought for implementing the clicking function for each button after deploying the cpp button successfully
// but due to time constraint i was unable to do so, so just left them commented out

// document.getElementById('catEasy').addEventListener('click', () => {getDataDiff('Easy')});
// document.getElementById('catMedium').addEventListener('click', () => {getDataDiff('Medium')});
// document.getElementById('catDifficult').addEventListener('click', () => {getDataDiff('Difficult')});
  
document.getElementById('catCpp').addEventListener('click', () => {getDataLang('cpp')});
// document.getElementById('catPython').addEventListener('click', () => {getDataLang('Python')});
// document.getElementById('catJava').addEventListener('click', () => {getDataLang('Java')});
// document.getElementById('catGo').addEventListener('click', () => {getDataLang('Go')});
// document.getElementById('catBash').addEventListener('click', () => {getDataLang('Bash')});

// document.getElementById('catQSet1').addEventListener('click', () => {getDataSerialNo('QSet1')});
// document.getElementById('catQSet2').addEventListener('click', () => {getDataSerialNo('QSet2')});
// document.getElementById('catQSet3').addEventListener('click', () => {getDataSerialNo('QSet3')});
// document.getElementById('catQSet4').addEventListener('click', () => {getDataSerialNo('QSet4')});
// document.getElementById('catQSet5').addEventListener('click', () => {getDataSerialNo('QSet5')});

// function getDataDiff(str) {
    
// }

// Took help of ChatGPT for the const a thing and error generation

 async function getDataLang(str) {
    const apiUrl = `https://api.github.com/repos/haoel/leetcode/contents/algorithms/${str}?ref=master`;
    
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        const filesArray = data.map(file => ({
            name: file.name,
            link: file.html_url  
    }));

        const container = document.getElementById("catCpp");
        container.innerHTML = "";
        
        filesArray.forEach(file => {
        const a = document.createElement("a");
        a.href = file.link;
        a.textContent = file.name;
        a.classList.add(`${str}Content`)
        container.appendChild(a);
});

    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
            
// function getDataSerialNo(str) {
    
// }

// My cpp button functionality which is not as successfull as expected

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
    
    // document.querySelectorAll('categoricalPara').style.display = 'none';
    // document.querySelectorAll('category').style.display = 'none';
    // document.querySelectorAll('probTypeDiv').style.display = 'none';
    getDataLang('cpp');
});
