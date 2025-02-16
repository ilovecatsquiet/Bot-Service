function showDetails(plan) {
    let title, text;

    if (plan === "basic") {
        title = "Basic Package";
        text = "✅ $20 One-Time + $1/month hosting\n\nIncludes:\n- Basic gambling commands\n- Roblox verification system\n- Fully managed & hosted\n- 24/7 uptime & bug fixes";
    } else if (plan === "advanced") {
        title = "Advanced Customization";
        text = "💡 Pricing varies\n\nIncludes:\n- Custom house edge & multipliers\n- Adjustable win probabilities\n- Automated leaderboards\n- Custom bot branding & responses";
    }

    document.getElementById("modal-title").innerText = title;
    document.getElementById("modal-text").innerText = text;
    document.getElementById("modal").style.display = "block";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

// Close modal when clicking outside of content
window.onclick = function(event) {
    let modal = document.getElementById("modal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
