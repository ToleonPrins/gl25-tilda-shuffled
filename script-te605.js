<script>
document.addEventListener("DOMContentLoaded", function () {
    function shuffleCards() {
        let rows = document.querySelectorAll(".t959__row");
        if (!rows.length) return;

        rows.forEach(row => {
            let items = Array.from(row.querySelectorAll(".t959__card"));
            if (items.length === 0) return;

            let shuffledItems = items.sort(() => Math.random() - 0.5);
            row.innerHTML = "";
            shuffledItems.forEach(item => row.appendChild(item));
        });
    }

    function waitForCards() {
        let checkExist = setInterval(() => {
            let rows = document.querySelectorAll(".t959__row");
            let allLoaded = Array.from(rows).every(row => row.querySelectorAll(".t959__card").length > 0);

            if (rows.length > 0 && allLoaded) {
                clearInterval(checkExist);
                shuffleCards();
            }
        }, 500);
    }

    window.addEventListener("load", waitForCards);
});
</script>
