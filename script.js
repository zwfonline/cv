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

// 当用户点击 "View Project" 按钮时，加载项目详情
document.querySelectorAll('.view-project').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault(); // 阻止默认的链接行为
        
        // 获取项目链接（可以使用 data 属性来动态设置）
        const projectLink = this.getAttribute('href');
        
        // 动画效果
        const overlay = this.closest('.project-item').querySelector('.overlay');
        overlay.style.backgroundColor = '#16a085'; // 更改背景颜色以显示点击效果
        
        // 动态加载项目详情
        loadProjectDetails(projectLink, overlay);
    });
});

// 模拟加载项目详情
function loadProjectDetails(link, overlay) {
    // 模拟网络延迟
    setTimeout(() => {
        alert('Loading project details from ' + link);
        
        // 可以在这里执行实际的加载项目逻辑，例如通过 AJAX 获取内容
        // 在此示例中，弹出一个对话框模拟加载
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)'; // 恢复原始背景颜色
    }, 1000); // 模拟1秒的加载时间
}

// 为项目卡片添加悬停时的额外视觉效果
document.querySelectorAll('.project-item').forEach(item => {
    item.addEventListener('mouseover', function() {
        // 悬停时为卡片添加边框高亮效果
        this.style.borderColor = '#1abc9c';
        this.style.boxShadow = '0 0 20px rgba(26, 188, 156, 0.5)';
    });

    item.addEventListener('mouseout', function() {
        // 离开悬停时恢复原始样式
        this.style.borderColor = '#ecf0f1';
        this.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
    });
});

function showContactInfo(button) {
    const contactInfo = button.nextElementSibling;
    contactInfo.style.display = contactInfo.style.display === "none" ? "block" : "none";
}

function toggleMenu() {
    var navList = document.getElementById("nav-list");
    navList.classList.toggle("show");
}

