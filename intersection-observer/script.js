const div = document.querySelectorAll("div");

const observer = new IntersectionObserver(
    (squares) => {
        squares.forEach((square) => {
            if (square.isIntersecting) {
                square.target.classList.add("visible");
            } else {
                square.target.classList.remove("visible");
            }
        });
    },
    {
        threshold: 0.7,
    }
);
div.forEach((square) => {
    observer.observe(square);
});

