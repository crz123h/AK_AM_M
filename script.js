function showEquipmentDetails(equipmentType) {
    const detailsDiv = document.getElementById("weapon-details");
    detailsDiv.style.display = "block";

    let content = '';

    if (equipmentType === 'armor') {
        content = `
            <h3>دروع واقية</h3>
            <p>تفاصيل حول الدروع الواقية، مثل دروع الصدر والأغطية الواقية المتقدمة.</p>
            <button class="buy-btn" onclick="buyEquipment('armor')">شراء</button>
        `;
    } else if (equipmentType === 'gear') {
        content = `
            <h3>معدات عسكرية</h3>
            <p>تفاصيل حول المعدات العسكرية مثل الحقائب العسكرية وأدوات الدفاع الأخرى.</p>
            <button class="buy-btn" onclick="buyEquipment('gear')">شراء</button>
        `;
    }

    detailsDiv.innerHTML = content;
}

function buyEquipment(equipmentType) {
    alert('تم إضافة ' + equipmentType + ' إلى سلة الشراء!');
}