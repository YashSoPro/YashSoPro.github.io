const projects = [
    { name: "emuinabox", link: "https://github.com/YashSoPro/emuinabox" },
    { name: "MeowCraftServer", link: "https://github.com/YashSoPro/MeowCraftServer" },
    { name: "meowmc", link: "https://github.com/YashSoPro/meowmc" }
];

// Function to display projects
function displayProjects() {
    const projectContainer = document.getElementById("projects");
    projectContainer.innerHTML = projects.map(project => `
        <li class="project-box">
            <a href="${project.link}" target="_blank">
                <img src="https://i.ibb.co/kBCbD6y/github-icon.png" alt="GitHub">
                <p>${project.name}</p>
            </a>
        </li>
    `).join('');
}

displayProjects();

// Initialize typewriter effects with delays
setTimeout(() => {
    $("#name").typewriter({
        delay: 150,
        waitingTime: 1000,
        hide: 0,
        cursor: true
    });
}, 1000);

setTimeout(() => {
    $("#alias").typewriter({
        delay: 150,
        waitingTime: 2000,
        hide: 0,
        cursor: true
    });
}, 8000);

setTimeout(() => {
    $("#hobbies").typewriter({
        delay: 150,
        waitingTime: 3000,
        hide: 0,
        cursor: true
    });
}, 15000);

// Introducing typos randomly in the strings
function introduceTypos(strings) {
    return strings.map(string => {
        if (Math.random() < 0.3) { // 30% chance to introduce a typo
            const typoIndex = Math.floor(Math.random() * string.length);
            const typoChar = String.fromCharCode(97 + Math.floor(Math.random() * 26));
            return string.substring(0, typoIndex) + typoChar + string.substring(typoIndex + 1);
        }
        return string;
    });
}

let hobbiesText = $("#hobbies").attr("tw-text").split(', ');
hobbiesText = introduceTypos(hobbiesText);
$("#hobbies").attr("tw-text", hobbiesText.join(', '));