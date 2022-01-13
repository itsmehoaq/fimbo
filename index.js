function hideText() {
    $('#main-page-visibility-toggle').text(".main-page-content { opacity: 0; }")
}

function showText() {
    $('#main-page-visibility-toggle').text(".main-page-content { opacity: 1; }")
}

function showabout() {
    hideText();
    $("#about_container").css("display", "inherit");
    $("#about_container").addClass("animated slideInLeft");
    setTimeout(function () {
        $("#about_container").removeClass("animated slideInLeft");
    }, 800);
}

function closeabout() {
    showText();
    $("#about_container").addClass("animated slideOutLeft");
    setTimeout(function () {
        $("#about_container").removeClass("animated slideOutLeft");
        $("#about_container").css("display", "none");
    }, 800);
}

function showwork() {
    hideText();
    $("#work_container").css("display", "inherit");
    $("#work_container").addClass("animated slideInRight");
    setTimeout(function () {
        $("#work_container").removeClass("animated slideInRight");
    }, 800);
}

function closework() {
    showText();
    $("#work_container").addClass("animated slideOutRight");
    setTimeout(function () {
        $("#work_container").removeClass("animated slideOutRight");
        $("#work_container").css("display", "none");
    }, 800);
}

function showcontact() {
    hideText();
    $("#contact_container").css("display", "inherit");
    $("#contact_container").addClass("animated slideInUp");
    setTimeout(function () {
        $("#contact_container").removeClass("animated slideInUp");
    }, 800);
}

function closecontact() {
    showText();
    $("#contact_container").addClass("animated slideOutDown");
    setTimeout(function () {
        $("#contact_container").removeClass("animated slideOutDown");
        $("#contact_container").css("display", "none");
    }, 800);
}

setTimeout(function () {
    $("#loading").addClass("animated fadeOut");
    setTimeout(function () {
        $("#loading").removeClass("animated fadeOut");
        $("#loading").css("display", "none");
        $("#box").css("display", "none");
        $("#about").removeClass("animated fadeIn");
        $("#contact").removeClass("animated fadeIn");
        $("#work").removeClass("animated fadeIn");
    }, 1000);
}, 1500);

magnify = (src) => {
    let url = src.substring(src.indexOf(`(`) + 2, src.indexOf(`)`) - 1);
    let magnified = document.createElement("div");
    magnified.id = "magnifyOverlay";

    let img = document.createElement("img");
    img.src = url;

    magnified.addEventListener("click", () => {
        img.style.animation = "zoomOut 0.3s ease-in-out";
        magnified.style.opacity = 0;
        setTimeout(() => {
            document.getElementsByTagName("body")[0].removeChild(magnified);
        }, 300);
    })

    img.addEventListener("click", (e) => {
        e.stopPropagation();
    })

    magnified.appendChild(img);
    document.getElementsByTagName("body")[0].appendChild(magnified);
}