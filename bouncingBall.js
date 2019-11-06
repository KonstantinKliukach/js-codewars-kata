function bouncingBall(h, bounce, window) {
    if (h <= 0 || bounce >= 1 || bounce <= 0 || window >= h) {
        return -1;
    }
    let passes = 0;
    function getCalc(h, bounce, window) {
        if (h > window) {
            passes += 1;
        }
        let newH = h * bounce;
        if (newH > window) {
            passes += 1;
        }
        if (newH <= window) {
            return passes;
        }
        return getCalc(newH, bounce, window);
    };
    return getCalc(h, bounce, window);
}

/* now I think that 'while' approach with while could be better, but, m.b. recursive way is more readable? */

function bouncingBall(h, bounce, window) {
    if (h <= 0 || bounce >= 1 || bounce <= 0 || window >= h) {
        return -1;
    }
    let passes = 0;
    while (h > window) {
        passes += 1; // falling
        h *= bounce; // decreasing height
        if (h > window) {
            passes +=1; // rising
        }
    }
    return passes;
}