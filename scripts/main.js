const main = {
    values : {
        top_banner_selection : ""
    },
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
                elem.addEventListener("click", function(e) {
                        main.values.top_banner_selection = e.target.innerText.toLowerCase();
                        main.utility.remove_side_menu_items();
                        const side_menu_title = elem.innerText.toLowerCase().trim();
                        main.side_menu.open_menu({
                            title : side_menu_title,
                            menu_items : config.side_menu_options[side_menu_title]
                        });
                        main.utility.remove_borders_from_all_top_banner_buttons();
                        this.style.outline = "2px solid deeppink";
                });
            });
            document.getElementById("close_side_menu").addEventListener("click", function() {
                main.side_menu.close_menu();
            });
        },
        open_menu : function(options) {   
                options.menu_items.forEach(function(elem, i) {
                    const item = document.createElement("div");
                    item.innerHTML = "<img class='side_menu_icon' src='img/icons/chart.svg'><span class='truncate'>" + elem + "</span>";
                    item.classList.add("side_menu_items");
                    document.getElementById("side_menu").append(item);
                    if(i === 0) {
                        item.style.marginTop = "50px";
                    };
                    item.addEventListener("click", function() {
                        
                        const top_banner_selection = main.values.top_banner_selection;
                        const side_menu_selection = item.innerText.split(" ").join("_").split("-").join("_");
                        
                        ["visual_plot_1", "visual_plot_2", "visual_plot_3", "visual_plot_4"].forEach(function(id) {
                            if(polar_data[top_banner_selection][side_menu_selection][id]) {
                                main.charts.polar({
                                    target_id : id,
                                    values : polar_data[top_banner_selection][side_menu_selection][id]
                                });
                            }
                        });

                        if(top_banner_selection === "apply" && ["fill_out_details", "upload_resume", "upload_cover_letter"].includes(side_menu_selection)) {
                            main.utility.modal();
                            main.form({
                                target_id : "modal",
                                form_type : side_menu_selection
                            });
                        };
                    });
                });
            document.getElementById("side_menu").classList.add("open");
            document.getElementById("side_menu_title").innerText = options.title;
        },
        close_menu : function() {
            document.getElementById("side_menu").classList.remove("open");
        }
    },
    charts : {
        polar : function(options) {
            const n = options.values.length;
            const angleStep = 360 / n;
            const r = [];
            const theta = [];
            // Build the polygon shape
            for (let i = 0; i < n; i++) {
                r.push(options.values[i]);
                theta.push(i * angleStep);
            }
            // Close the shape by repeating the first point
            r.push(options.values[0]);
            theta.push(0);
            const data = [{
                type: 'scatterpolar',
                mode: 'lines',
                r: r,
                theta: theta,
                fill: 'toself',
                fillcolor: "#8c7ae6",
                line: { color: 'black' }
            }];
            const layout = {
                width : 340,
                height : 340,
                paper_bgcolor: 'rgba(0,0,0,0)',  // fully transparent background
                plot_bgcolor: 'rgba(0,0,0,0)', 
                polar: { 
                bgcolor: 'rgba(0,0,0,0)',
                radialaxis: {
                    visible: true,
                    color: 'white',
                    tickfont: { color: 'white' },
                    gridcolor: 'white',
                    linecolor: 'white'
                },
                angularaxis: {
                    color: 'white',
                    tickfont: { color: 'white' },
                    gridcolor: 'white',
                    linecolor: 'white'
                }
                },
                font: { color: 'white' },
                showlegend: false,
                margin : {
                    t : 30,
                    b : 30,
                    l : 30,
                    r : 30,
                    p : 0
                }
            };
            const polar_config = {
                responsive: true
            };
            Plotly.newPlot(options.target_id, data, layout, polar_config);
        }
    },
    form : function(options) {
        document.getElementById("modal").innerHTML = "";
        const html = forms[options.form_type];
        document.getElementById(options.target_id).innerHTML = html;
        document.getElementById("submit_button").addEventListener("click", function() {
             const name = document.getElementById("name");
             const email = document.getElementById("email");
             const subject = document.getElementById("subject");
             const message = document.getElementById("message");
             alert("submitted")
        });
    },
    utility : {
        remove_side_menu_items : function() {
            document.querySelectorAll(".side_menu_items").forEach(function(elem) {
                elem.remove();
            });
        },
        remove_borders_from_all_top_banner_buttons : function() {
            document.querySelectorAll(".top_banner_buttons").forEach(function(elem) {
                elem.style.outline = "none";
            });
        },
        modal : function() {
            if(!document.getElementById("modal")) {
                const div = document.createElement("div");
                div.id = "modal";
                document.body.append(div);
            }
        }
    }
};

