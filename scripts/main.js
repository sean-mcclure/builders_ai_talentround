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
    charts : {
        polar : function(options) {
            data = [
            {
                type: "scatterpolar",
                mode: "lines",
                r: [0, 2, 1.5, 0, 2.5, 2.5, 0],
                theta: [0, 10, 25, 0, 205, 215, 0],
                fill: "toself",
                fillcolor: '#709BFF',
                line: {
                color: 'black'
                }
            },
            {
                type: "scatterpolar",
                mode: "lines",
                r: [0, 3.5, 3.5, 0],
                theta: [0, 55, 75, 0],
                fill: "toself",
                fillcolor: '#E4FF87',
                line: {
                color: 'black'
                }
            },
            {
                type: "scatterpolar",
                mode: "lines",
                r: [0, 4.5, 4.5, 0, 4.5, 4.5, 0],
                theta: [0, 100, 120, 0, 305, 320, 0],
                fill: "toself",
                fillcolor: '#FFAA70',
                line: {
                color: 'black'
                }
            },
            {
                type: "scatterpolar",
                mode: "lines",
                r: [0, 4, 4, 0],
                theta: [0, 165, 195, 0],
                fill: "toself",
                fillcolor: '#FFDF70',
                line: {
                color: 'black'
                }
            },
            {
                type: "scatterpolar",
                mode: "lines",
                r: [0, 3, 3, 0],
                theta: [0, 262.5, 277.5, 0],
                fill: "toself",
                fillcolor: '#B6FFB4',
                line: {
                color: 'black'
                }
            }
            ]

            layout = {
                 width: 300, 
                height: 300, 
                responsive: true,
            polar: {
                radialaxis: {
                visible: true,
                range: [0, 5]
                }
            },
               showlegend: false,
               paper_bgcolor: 'rgba(0,0,0,0)',
               plot_bgcolor: 'rgba(0,0,0,0)',
               font: {
                color: 'white'
               },
               margin : {
                  t : 10,
                  b : 10,
                  l : 10,
                  r : 10,
                  p : 0
               }
            };
            const polar_config = {
                displayModeBar: false
            }
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

