const image = document.getElementById("cathyImage");
const quoteEl = document.getElementById("cathyQuote");
const badgeEl = document.getElementById("moodBadge");

const moods = {
    happy: {
        src: "images/happy.png",
        quote: "\"Hey! Great to see you smiling today. Keep it going!\"",
        label: "Happy",
        badgeClass: "mood-happy"
    },
    confuse: {
        src: "images/confuse.png",
        quote: "\"It's okay to not have all the answers. Take a breath — you'll figure it out.\"",
        label: "Confused",
        badgeClass: "mood-confuse"
    },
    smirk: {
        src: "images/smirk.png",
        quote: "\"Oh, you've got something up your sleeve, don't you?\"",
        label: "Smirk",
        badgeClass: "mood-smirk"
    },
    meh: {
        src: "images/meh.png",
        quote: "\"Those quiet days are valid too. Just exist for a while.\"",
        label: "Meh",
        badgeClass: "mood-meh"
    }
};

function setMood(key) {
    const mood = moods[key];

    
    image.style.opacity = 0;
    setTimeout(() => {
        image.src = mood.src;
        image.style.opacity = 1;
    }, 200);

    
    quoteEl.style.opacity = 0;
    setTimeout(() => {
        quoteEl.textContent = mood.quote;
        quoteEl.style.opacity = 1;
    }, 200);

    
    if (badgeEl) {
        badgeEl.textContent = mood.label;
        badgeEl.className = "mood-badge " + mood.badgeClass;
    }
}

document.getElementById("happybtn").onclick = () => setMood("happy");
document.getElementById("confusebtn").onclick = () => setMood("confuse");
document.getElementById("smirkbtn").onclick = () => setMood("smirk");
document.getElementById("mehbtn").onclick = () => setMood("meh");