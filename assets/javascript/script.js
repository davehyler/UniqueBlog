    //Global Variables and Constants
    const postBox =  
        document.getElementById('postBox'); 
    const postInfo =  
        document.getElementById('postInfo'); 
    const postSubmitBtn =  
        document.getElementById('postSubmitBtn'); 
    //target ID with period prior to name
    const postContainer =  
        document.querySelector('.newPost'); 
    const detailTitle =  
        document.getElementById('detailTitle'); 
    const detailDescription =  
        document.getElementById('detailDescription'); 
        postInfo.addEventListener('submit', function (event) { 
        event.preventDefault(); 
    // Requirement: store data in LocalStorage (see week 4 WebAPI)
    const blogUsername =  
        document.getElementById('blogUsername').value;
        localStorage.setItem('usernameLocalStorage', blogUsername);
    const blogTitle =  
        document.getElementById('blogTitle').value;
        localStorage.setItem('blogTitleLocalStorage', blogTitle); 
         
    const blogContent =  
        document.getElementById('blogContent').value;
        localStorage.setItem('blogContentLocalStorage', blogContent); 
  
    //use "trim" in order to force the end-user to have to enter ALL text fields. (UPDATE: apparently "html5" has this feature built-in. Leave code below for redundancy in case viewed on a browser that does not support this?)
    //If ANY field is blank (using the || or command within the if statement to avoid nested if statements) it will return an error.
    if (blogTitle.trim() === '' || blogUsername.trim() === '' ||  blogContent.trim() === '') { 
        alert('Please fill out this field.');
    } 
    
    // Create a new post element 
    const newPost = document.createElement('div'); 
    newPost.className = 'blogPost'; 
    //update: add "innerHTML" with targetting "data-title" to accept all of the content (username, title, post) in one single generated element rather than having to have three different ones.
    //adding backtick to induce a "template literal" as am unable to generate the post of the innerHTML without using it. Necessary to have backticks on multilines?
    //found a "substring" command that will allow me to limit user entry to 1000 characters or less so the blog does not ramble on too large.
    //update: users can still type beyond the character limit with this, but will prevent from showing. Add a "show more" option if time permits.
    newPost.innerHTML =` 
    <h1 class="post-title" data-title="${blogUsername}">${blogUsername}</h1><br> <h2 class="category">${blogTitle}</h2><br> 
    <p class="post-description">${blogContent.substring(0, 1000)}</p>
    <button class="delete-post" data-title="${blogUsername}">Delete</button> 
    <button class="back-button" data-title="${blogUsername}">Back</button>`; 
    // add the new post to the container just made. 
    // "insertBefore" works well as "blocks", appending works well until multiple posts seem to alter the div callback. Update: "appendChild"
    postContainer.appendChild(newPost,  
    postContainer); 
  
    // once the user presses submit and "appendChild" runs on the postContainer, it will RESET the user fields to BLANK
    postInfo.reset(); 
    }); 
  
    postContainer.addEventListener('click', function (event) { 
        if (event.target.classList.contains('delete-post')) { 
            const titleToDelete =  
                event.target.getAttribute('data-title'); 
            const deletePost =  
                document.querySelector(` 
            .post-title[data-title= 
                "${titleToDelete}"]`).closest('.blogPost'); 
                postContainer.removeChild(deletePost); 
        } 
        //adding back button function to a-href target # (top of page)
        if (event.target.classList.contains('back-button')) { 
            window.location.href = "#";
        } 
    }); 


// Add in the Dark Mode Functionality from Week 4 Web APIs (see "instructor event listening activity #11 for reference"). Adds toggle switch.
const darkModeSwitch = document.querySelector('#darkmode');
// declare the current mode to be "light" (as that is how the document is set to load initially)
let mode = 'light';

// Listen for a click event on toggle switch
darkModeSwitch.addEventListener('click', function () {
  // Conditional statement to switch to light only if dark
  if (mode === 'dark') {
    mode = 'light';
    document.body.style.backgroundColor = "#FFFFFF"; //Background. All Fs for White (full color equals white?)
    document.body.style.color = "#000000"; //Text. All zeros for Black (absence of color equals black?)
  }
  // Vice versa on the ELSE of the condition.
  else {
    mode = 'dark';
    document.body.style.backgroundColor = "#202528";
    document.body.style.color = "#FFFFFF";
  }
});

