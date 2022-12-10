function init() {
    vals = new Array(6).fill(0);
    val_to_index = {
        "power-level" : 0,
        "top-speed" : 1,
        "structural-integrity" : 2,
        "scanners" : 3,
        "defensive-systems" : 4,
        "power-types" : 5,
    }
}

function change(val, amt) {
    limits = {
        "solar" : {"power-level" : 10, "top-speed" : 10, "structural-integrity" : 10},
        "hydro" : {"power-level" : 8, "top-speed" : 12, "structural-integrity" : 10},
        "nuclear" : {"power-level" : 12, "top-speed" : 4, "structural-integrity" : 4},
    }
    let temp_val = vals[val_to_index[val]] + amt;
    if (temp_val < 0) alert("This value can't go below 0");
    else if (vals[5] == 0) alert("You need to select a power type first.")
    else if (temp_val > limits[vals[5]][val]) alert("That attribute is at capacity.");
    else vals[val_to_index[val]] += amt;
    display();
}

function toggle(val) {
    if (vals[5] == 0) alert("You need to select a power type first.");
    else vals[val_to_index[val]] = !Boolean(vals[val_to_index[val]]) ? 1 : 0;
    display();
}

function set(val, type) {
    vals[val_to_index[val]] = type;
    display();
}

function display() {
    document.getElementById("power-level-text").innerHTML = `Power level: ${vals[0]}`;
    document.getElementById("top-speed-text").innerHTML = `Top speed: ${vals[1]}`;
    document.getElementById("structural-integrity-text").innerHTML = `Structural integrity: ${vals[2]}`;
    document.getElementById("scanners-text").innerHTML = `Scanners: ${vals[3] == 1 ? "ON" : "OFF"}`;
    document.getElementById("defensive-systems-text").innerHTML = `Defensive systems: ${vals[4] == 1 ? "ON" : "OFF"}`;
    document.getElementById("power-types-text").innerHTML = `Power type: ${vals[5].charAt(0).toUpperCase() + vals[5].slice(1)}`;
}

function switchRobots(imgUrl) {
    document.getElementById("disp").setAttribute("src", `images/${imgUrl}`);
}

function finalize() {
    for (e of document.getElementsByTagName("button")) e.style.display = "none";
}