const toggleBtn = document.querySelector(".btn-nav-toggle");
const showNavFooter = document.querySelector(".nav-footer");
toggleBtn.addEventListener("click", () => {
  showNavFooter.classList.toggle("show-nav");
});

const comments = [
  {
    message: "This company is the best. I am so happy with the result!",
    name: "Michael Roe, Vice President, Comment Box"
  },
  {
    message: "One word... WOW!!",
    name: "John Doe, Salesman, Rep Inc"
  },
  {
    message: "Could I... BE any more happy with this company?",
    name: "Chandler Bing, Actor, FriendsAlot"
  },
];

 showComments = (comment) => {
  const commentBox = document.querySelector(".carousel-track-container");
  commentBox.innerHTML = ` <h3>${comment.message}</h3><p>${comment.name}</p>`;
};

// showComments(comments[1]);

//Set Initial Count.
let count = 0;
//Select buttons
let buttons = document.querySelectorAll(".carousel-btn");

window.addEventListener("load", ()=>{
    showComments(comments[0]);
})

buttons.forEach((button)=>{
    button.addEventListener("click", (e)=>{
        const styles = e.currentTarget.classList;
        if (
          styles.contains("carousel-btn--left") ||
          styles.contains("indicator-left")
        ) {
          count--;
        } else if (
          styles.contains("carousel-btn--right") ||
          styles.contains("indicator-right")
        ) {
          count++;
        }
        if (styles.contains("indicator-middle")){
            count = 1;
        }
          if (count < 0) {
            count = 2;
          }
        if(count > 2){
            count = 0;
        }
        console.log(count);
        showComments(comments[count]); 
    })
})



