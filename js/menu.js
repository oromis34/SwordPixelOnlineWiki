document.addEventListener("DOMContentLoaded", function() {
    const navbarDiv = document.querySelector(".navbar");
    const menuList = document.createElement("ul");
    
    const homeItem = document.createElement("li");
    const homeLink = document.createElement("a");
    homeLink.href = "home.html";
    homeLink.textContent = "HOME";
    homeItem.appendChild(homeLink);
    menuList.appendChild(homeItem);

    const beginnerGuideItem = document.createElement("li");
    const beginnerGuideLink = document.createElement("a");
    beginnerGuideLink.href = "beginnerGuide.html";
    beginnerGuideLink.textContent = "BEGINNER GUIDE";
    beginnerGuideItem.appendChild(beginnerGuideLink);
    menuList.appendChild(beginnerGuideItem);
    
    const mobsItem = document.createElement("li");
    const mobsLink = document.createElement("a");
    mobsLink.href = "mobs.html";
    mobsLink.textContent = "MOBS";
    mobsItem.appendChild(mobsLink);
    menuList.appendChild(mobsItem);
    
    const creditsItem = document.createElement("li");
    const creditsLink = document.createElement("a");
    creditsLink.href = "credits.html";
    creditsLink.textContent = "CREDITS";
    creditsItem.appendChild(creditsLink);
    menuList.appendChild(creditsItem);
    
    const playButton = document.createElement("button");
    playButton.textContent = "PLAY";
    playButton.onclick = function() {
        window.location.href = "https://sword-pixel-online.com";
    };
    navbarDiv.appendChild(menuList);
    navbarDiv.appendChild(playButton);
});
