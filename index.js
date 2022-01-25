window.onload = () => {

    const root = document.getElementById("root");
    let x = -1, y = -1;
    let queue = [];
    setInterval(CreateSpan, 75);

    function RemoveSpan() {
        queue.shift().remove();
    }

    function GetRandomChar() {
        const chars = ["💚", "❤️", "🧡", "💛"]
        return chars[Math.floor(Math.random() * chars.length)];
    }

    function CreateSpan() {
        if (x < 0 && y < 0) return;
        let _x = x;
        let _y = y;
        x = -1; y = -1;
        let span = document.createElement("span");
        root.appendChild(span);
        span.textContent = GetRandomChar();
        span.style.left = _x + "px";  
        span.style.top = _y + "px";
        queue.push(span);
        setTimeout(RemoveSpan, 5000)
        setTimeout(() => {
            span.style.top = (_y + 1000) + "px";
            span.style.fontSize = "36px";
        }, 100);
    }

    document.onmousemove = function(e) {
        x = e.pageX;
        y = e.pageY;
    }
}