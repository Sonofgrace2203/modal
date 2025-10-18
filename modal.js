
    const profileBtn = document.getElementById("btn1");
    const analysisBtn = document.querySelector("#btn2");
    const productsBtn = document.querySelector("#btn3");

    const sectionProfile = document.getElementById("section-profile");
    const sectionConnect = document.querySelector("#section-connect");
    const sectionDashboard = document.querySelector("#section-dashboard");

    const profileClose = document.getElementById("profile-close");
    const connectClose = document.getElementById("connect-close");
    const dashboardClose = document.getElementById("dashboard-close");

    function popUp() {
        sectionProfile.style.display = "block";
    }
    profileBtn.addEventListener("click", popUp);

    function popUp1() {
        sectionConnect.style.display = "block";
    }
    analysisBtn.addEventListener("click", popUp1);

    function popUp2() {
        sectionDashboard.style.display = "block";
    }
    productsBtn.addEventListener("click", popUp2);

    function hideContainer() {
        sectionProfile.style.display = "none";
    }
    profileClose.addEventListener("click", hideContainer);

    function hideContainer1() {
        sectionConnect.style.display = "none";
    }
    connectClose.addEventListener("click", hideContainer1);

    function hideContainer2() {
        sectionDashboard.style.display = "none";
    }
    dashboardClose.addEventListener("click", hideContainer2);
    





















































// var menuIcon = document.getElementById("mobile-menu");
// var asideNav = document.getElementById("aside-nav");

// function popUp() {
//     asideNav.classList.remove("d-hide");
// }

//     menuIcon.addEventListener("click", popUp);

//     var cancelIcon = document.getElementById("cancel-icon");

// function hideNav() {
//     asideNav.classList.add("d-hide");
// }       
//     cancelIcon.addEventListener("click", hideNav);