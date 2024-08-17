 // 添加页面滚动时的动画效果
 document.addEventListener("scroll", function() {
    var sections = document.querySelectorAll(".section, .footer");
    sections.forEach(function(section) {
        var rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            section.classList.add("visible");
        }
    });
});

// 为导航菜单添加平滑滚动效果
var links = document.querySelectorAll(".nav a");
links.forEach(function(link) {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        var targetId = link.getAttribute("href").substring(1);
        var targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - 60,
            behavior: "smooth"
        });
    });
});

document.getElementById("messageForm").addEventListener("submit", function(event) {
    event.preventDefault(); // 阻止表单提交

    // 弹出感谢留言的提示框
    alert("Thank you for your message, " + document.getElementById("name").value + "! I will get back to you soon.");

    // 重置表单
    document.getElementById("messageForm").reset();
});

function openMap(address) {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    window.open(url, '_blank');
}

