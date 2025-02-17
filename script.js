// Sidebar Toggle
document.getElementById('sidebarToggle').addEventListener('click', function () {
    document.getElementById('sidebar').classList.toggle('active');
});

// Close Sidebar on Link Click
function closeSidebar() {
    document.getElementById('sidebar').classList.remove('active');
}

// Package Details Modal
function showDetails(packageType) {
    let title = "";
    let text = "";

    if (packageType === "basic") {
        title = "Basic Package";
        text = "Includes all standard gambling features. One-time payment of $20 + $1/month hosting.";
    } else if (packageType === "advanced") {
        title = "Advanced Customization";
        text = "Fully customized bot with additional features. Pricing varies.";
    }

    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-text').innerText = text;
    document.getElementById('modal').style.display = "block";
}

// Close Modal
function closeModal() {
    document.getElementById('modal').style.display = "none";
}
