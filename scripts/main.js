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
                    item.addEventListener("click", function() {
                        main.charts.polar({
                            target_id : "visual_plot_1",
                            values : polar_data.apply[item.innerText.split(" ").join("_")]
                        });
                    });
                });
            document.getElementById("side_menu").classList.add("open");
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
    utility : {
        remove_side_menu_items : function() {
            document.querySelectorAll(".side_menu_items").forEach(function(elem) {
                elem.remove();
            });
        }
    }
};

