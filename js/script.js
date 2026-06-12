 /* ==========================================
   DARK / LIGHT THEME TOGGLE
========================================== */

const themeToggle =
document.getElementById("theme-toggle");

const savedTheme =
localStorage.getItem("theme");

if(savedTheme){

    document.documentElement
    .setAttribute(
        "data-theme",
        savedTheme
    );

    themeToggle.textContent =
        savedTheme === "dark"
        ? "☀️"
        : "🌙";
}

themeToggle.addEventListener(
    "click",
    () => {

        let currentTheme =
        document.documentElement
        .getAttribute("data-theme");

        if(currentTheme === "light"){

            currentTheme = "dark";

            themeToggle.textContent =
            "☀️";

        }
        else{

            currentTheme = "light";

            themeToggle.textContent =
            "🌙";
        }

        document.documentElement
        .setAttribute(
            "data-theme",
            currentTheme
        );

        localStorage.setItem(
            "theme",
            currentTheme
        );
    }
);

/* ==========================================
   TYPING ANIMATION
========================================== */

const words = [

    "Full Stack Developer",

    "MERN Stack Developer",

    "Problem Solver",

    "Competitive Programmer"

];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingElement =
document.querySelector(".typing-text");

function typeEffect(){

    const currentWord =
    words[wordIndex];

    if(!isDeleting){

        typingElement.textContent =
        currentWord.substring(
            0,
            charIndex + 1
        );

        charIndex++;

        if(charIndex === currentWord.length){

            isDeleting = true;

            setTimeout(
                typeEffect,
                1500
            );

            return;
        }
    }
    else{

        typingElement.textContent =
        currentWord.substring(
            0,
            charIndex - 1
        );

        charIndex--;

        if(charIndex === 0){

            isDeleting = false;

            wordIndex =
            (wordIndex + 1)
            %
            words.length;
        }
    }

    setTimeout(
        typeEffect,
        isDeleting ? 60 : 120
    );
}

typeEffect();

/* ==========================================
   SCROLL PROGRESS BAR
========================================== */

const progressBar =
document.querySelector(
    ".scroll-progress"
);

window.addEventListener(
    "scroll",
    () => {

        const scrollTop =
        window.scrollY;

        const docHeight =
        document.documentElement
        .scrollHeight
        -
        document.documentElement
        .clientHeight;

        const progress =
        (scrollTop / docHeight)
        * 100;

        progressBar.style.width =
        progress + "%";
    }
);

/* ==========================================
   FADE IN ON SCROLL
========================================== */

const fadeElements =
document.querySelectorAll(
    ".fade-in-section"
);

const observer =
new IntersectionObserver(

    (entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList
                .add("visible");
            }
        });

    },

    {
        threshold:0.2
    }

);

fadeElements.forEach(element=>{

    observer.observe(element);

});

/* ==========================================
   ACTIVE NAV LINK
========================================== */

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(
    ".nav__link"
);

window.addEventListener(
    "scroll",
    ()=>{

        let current = "";

        sections.forEach(section=>{

            const sectionTop =
            section.offsetTop - 120;

            const sectionHeight =
            section.clientHeight;

            if(
                pageYOffset >= sectionTop
                &&
                pageYOffset <
                sectionTop +
                sectionHeight
            ){
                current =
                section.getAttribute("id");
            }
        });

        navLinks.forEach(link=>{

            link.classList.remove(
                "active"
            );

            if(
                link.getAttribute("href")
                ===
                `#${current}`
            ){

                link.classList.add(
                    "active"
                );
            }
        });
    }
);

/* ==========================================
   SMOOTH SCROLL
========================================== */

document
.querySelectorAll(
'a[href^="#"]'
)
.forEach(anchor=>{

    anchor.addEventListener(
        "click",
        function(e){

            e.preventDefault();

            const target =
            document.querySelector(
                this.getAttribute(
                    "href"
                )
            );

            target.scrollIntoView({

                behavior:"smooth"
            });
        }
    );
});

/* ==========================================
   CONTACT FORM DEMO
========================================== */

const form =
document.querySelector(
    ".contact__form"
);

form.addEventListener(
    "submit",
    (e)=>{

        e.preventDefault();

        alert(
            "Message Sent Successfully!"
        );

        form.reset();
    }
);