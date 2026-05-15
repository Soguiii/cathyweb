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

    if (!image || !quoteEl) return;

    
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

const happyBtn = document.getElementById("happybtn");
if (happyBtn) {
    happyBtn.onclick = () => setMood("happy");
    document.getElementById("confusebtn").onclick = () => setMood("confuse");
    document.getElementById("smirkbtn").onclick = () => setMood("smirk");
    document.getElementById("mehbtn").onclick = () => setMood("meh");
}

// Album Modal Logic
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Array holding all album photo data
    const albumPhotos = [
        { img: "images/cathybg.jpg", title: "Cathy Art.", desc: "Enter your specific description for Cathy Art here.", date: "Date / Place" },
        { img: "images/cathyfinal.png", title: "Cathy Iconic pose.", desc: "Enter your specific description for Cathy's iconic pose here.", date: "Date / Place" },
        { img: "images/cathycry.jpg", title: "CATHYYYY CRYINGG.", desc: "Enter your specific description for Cathy crying here.", date: "Date / Place" },
        { img: "images/cathypfp.jpg", title: "Sleppy Cathyy.", desc: "Enter your specific description for Sleepy Cathy here.", date: "Date / Place" },
        { img: "images/cathytruck.jpg", title: "Last moments of Cathy.", desc: "Enter your specific description for the last moments of Cathy here.", date: "Date / Place" },
        { img: "images/cathyNmark.png", title: "Cathy and Mark store scene.", desc: "Enter your specific description for the store scene here.", date: "Date / Place" }
    ];

    // 2. Dynamically generate the photo grid
    const photoGrid = document.getElementById('photoGrid');
    if (photoGrid) {
        let gridHTML = "";
        albumPhotos.forEach(photo => {
            gridHTML += `
                <div class="col-sm-6 col-md-4">
                    <div class="album-card card" style="cursor: pointer;" data-bs-toggle="modal" data-bs-target="#photoModal" data-img="${photo.img}" data-title="${photo.title}" data-desc="${photo.desc}" data-date="${photo.date}">
                        <div class="album-img-wrap">
                            <img src="${photo.img}" alt="${photo.title}" class="album-img">
                        </div>
                        <div class="album-info">
                            <p class="album-desc">${photo.title}</p>
                            <span class="album-date">${photo.date}</span>
                        </div>
                    </div>
                </div>
            `;
        });
        photoGrid.innerHTML = gridHTML;
    }

    // 3. Handle modal population when a card is clicked
    const photoModal = document.getElementById('photoModal');
    if (photoModal) {
        photoModal.addEventListener('show.bs.modal', event => {
            const card = event.relatedTarget;
            document.getElementById('modalImage').src = card.getAttribute('data-img');
            document.getElementById('photoModalLabel').textContent = card.getAttribute('data-title');
            document.getElementById('modalDescription').textContent = card.getAttribute('data-desc');
            document.getElementById('modalDate').textContent = card.getAttribute('data-date');
        });
    }
});