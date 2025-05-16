const main = {
    top_banner : {
        button_color : function() {
            document.querySelectorAll(".top_banner_buttons").forEach(function(elem) {
                elem.style.background = config.top_banner_colors[elem.innerText.toLowerCase().trim()];
                elem.style.color = "white";
            });
        }
    },
    side_menu : {
        attach_events : function() {
            document.querySelectorAll(".top_banner_buttons").forEach(function(elem) {
                elem.addEventListener("click", function() {
                        main.utility.remove_side_menu_items();
                        main.side_menu.open_menu({
                            menu_items : config.side_menu_options[elem.innerText.toLowerCase().trim()]
                        });
                });
            });
            document.getElementById("close_side_menu").addEventListener("click", function() {
                main.side_menu.close_menu();
            });
        },
        open_menu : function(options) {     
                options.menu_items.forEach(function(elem, i) {
                    const item = document.createElement("div");
                    item.innerHTML = "<img class='side_menu_icon' src='img/icons/chart.svg'>" + elem;
                    item.classList.add("side_menu_items");
                    document.getElementById("side_menu").append(item);
                    if(i === 0) {
                        item.style.marginTop = "50px";
                    };
                });
            document.getElementById("side_menu").classList.add("open");
        },
        close_menu : function() {
            document.getElementById("side_menu").classList.remove("open");
        }
    },
    utility : {
        remove_side_menu_items : function() {
            document.querySelectorAll(".side_menu_items").forEach(function(elem) {
                elem.remove();
            });
        }
    }
};

