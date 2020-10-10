// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

const Content = document.querySelector('.topics')

axios.get("https://lambda-times-api.herokuapp.com/topics")
.then((response) => {
    const newTabs = response.data.topics;
    newTabs.forEach((topic) => {
        Content.appendChild(tabCreator(topic))
    })
    console.log(response);
})
.catch((error) => {
    console.log(error)
});


function tabCreator(tabName) {
const divTopic = document.createElement('div');
divTopic.classList.add('tab');
divTopic.textContent = tabName;
return divTopic;
}