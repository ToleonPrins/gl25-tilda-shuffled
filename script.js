<script>
document.addEventListener("DOMContentLoaded", function() {
    let grid = document.querySelector(".t979__grid");
    if (!grid) return;

    let items = Array.from(grid.children);
    let shuffledItems = items.sort(() => Math.random() - 0.5); 

    shuffledItems.forEach(item => grid.appendChild(item)); 
});
</script>
