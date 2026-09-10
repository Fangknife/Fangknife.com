
const sidebar_width = 200;
const margin_right = 25;
var player_container;
var header_height;

document.addEventListener("DOMContentLoaded", (event) => {
    player_container = document.getElementById("player_container")
    player_container.style.maxWidth = player_container_max_width;
    header_height = document.getElementById('page_title').clientHeight + 25;
    document.getElementById("main_img").style.aspectRatio = ratio_width/ratio_height;
    window.addEventListener("resize", player_resize);
    player_resize();
    if (debug_color == true) {
        document.getElementById("main_img").style.opacity = "50%";
    };
});

function player_resize() {
    // smaler than container's max...
    if (window.innerWidth < player_container_max_width + sidebar_width + margin_right) { 
        // 
        if (window.innerHeight > (ratio_height/ratio_width) * (window.innerWidth-sidebar_width-margin_right) + header_height) {
            player_container.style.width = "100%";
            player_container.style.minWidth = ratio_width/ratio_height * player_container_min_width;
            if (debug_color == true) {
                player_container.style.backgroundColor = "green";
            }
        }
        if (window.innerHeight < (ratio_height/ratio_width) * (window.innerWidth-sidebar_width-margin_right) + header_height) {
            if (window.innerHeight > player_container_min_width + header_height) {
                player_container.style.width = (ratio_width/ratio_height) * (window.innerHeight - header_height);
                if (debug_color == true) {
                    player_container.style.backgroundColor = "blue";
                }
            }
            if (window.innerHeight < player_container_min_width + header_height) {
                player_container.style.width = (ratio_width/ratio_height) * player_container_min_width;
                if (debug_color == true) {
                player_container.style.backgroundColor = "purple";
                }
            }
        }
    }
    // greater than I want the image to get...
    if (window.innerWidth > player_container_max_width + sidebar_width + margin_right) {
        if (window.innerHeight > (ratio_height/ratio_width) * player_container_max_width + header_height ) {
            player_container.style.width = player_container_max_width;
            if (debug_color == true) {
                player_container.style.backgroundColor = "red";
            }
        }
        if (window.innerHeight < (ratio_height/ratio_width) * player_container_max_width + header_height) {
            if (window.innerHeight > player_container_min_width + header_height) {
                player_container.style.width = (ratio_width/ratio_height) * (window.innerHeight - header_height);
                if (debug_color == true) {
                    player_container.style.backgroundColor = "orange";
                }
            }
            if (window.innerHeight < player_container_min_width + header_height) {
                player_container.style.width = (ratio_width/ratio_height) * player_container_min_width
                if (debug_color == true) {
                    player_container.style.backgroundColor = "yellow";
                }
            }
        }
    }
}