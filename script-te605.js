<script>
document.addEventListener("DOMContentLoaded", function () {
    function shuffleCards() {
        let row = document.querySelector(".t959__row");
        if (!row) return;

        let items = Array.from(row.querySelectorAll(".t959__card"));
        if (items.length === 0) return;

        let shuffledItems = items.sort(() => Math.random() - 0.5);
        row.innerHTML = "";
        shuffledItems.forEach(item => row.appendChild(item));
    }

    function waitForCards() {
        let checkExist = setInterval(() => {
            let row = document.querySelector(".t959__row");
            let items = row ? row.querySelectorAll(".t959__card") : [];

            if (row && items.length > 0) {
                clearInterval(checkExist);
                shuffleCards();
            }
        }, 500);
    }

    window.addEventListener("load", waitForCards);
});
</script>
