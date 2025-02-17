function showDetails(plan) {
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modal-title");
    const modalText = document.getElementById("modal-text");

    if (plan === "basic") {
        modalTitle.textContent = "Basic Package";
        modalText.innerHTML = "<strong>$20 One-Time</strong> + $1/month hosting <br> Includes standard games and features.";
    } else if (plan === "advanced") {
        modalTitle.textContent = "Advanced Customization";
        modalText.innerHTML = "Pricing varies based on custom features, multipliers, VIP systems, and special requests.";
    }

    modal.style.display = "flex";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const body = document.body;

    sidebar.classList.toggle("active");
    body.classList.toggle("sidebar-open");
}
