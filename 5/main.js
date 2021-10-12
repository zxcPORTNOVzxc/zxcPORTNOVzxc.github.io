window.addEventListener("DOMContentLoaded", function (event) {
    console.log("DOM fully loaded and parsed");
});

function calculate() {
    let firstProduct = Number(document.getElementById("firstProduct").value);
    let firstLot = Number(document.getElementById("firstLot").value);
    let secondProduct = Number(document.getElementById("secondProduct").value);
    let secondLot = Number(document.getElementById("secondLot").value);


    let re = new RegExp(/^[0-9]+$/i);
    if (
        !(
            re.test(firstProduct) &&
            re.test(firstLot) &&
            re.test(secondProduct) &&
            re.test(secondLot)
        )
    ) {
        alert("����� ������ �����!");
    } else if (firstProduct == "") {
        alert("�� �� ������� ���� 1 ������");
    } else if (firstLot == "") {
        alert("�� �� ������� ���-�� 1 ������");
    } else if (secondProduct == "") {
        alert("�� �� ������� ���� 2 ������");
    } else if (secondLot == "") {
        alert("�� �� ������� ���-�� 2 ������");
    } else {
        const cost = firstProduct * firstLot + secondProduct * secondLot;
        document.getElementById("cost").innerHTML =
            "��������� �����: " + cost + " ���.";
    }
}