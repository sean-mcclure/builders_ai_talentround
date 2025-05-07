const main = {
    side_menu : {
        attach_events : function() {
            document.querySelectorAll(".top_banner_buttons").forEach(function(elem) {
                elem.addEventListener("click", function() {
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
                item.innerText = elem;
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
    }
};

