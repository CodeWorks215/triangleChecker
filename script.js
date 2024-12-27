function checkTriangleType() {
    const sideA = parseFloat(document.getElementById("sideA").value);
    const sideB = parseFloat(document.getElementById("sideB").value);
    const sideC = parseFloat(document.getElementById("sideC").value);

    // 入力値の検証
    if (isNaN(sideA) || isNaN(sideB) || isNaN(sideC) || sideA <= 0 || sideB <= 0 || sideC <= 0) {
        alert("正の数値を入力してください。");
        return;
    }

    // 三角形の成立条件をチェック
    if (sideA + sideB <= sideC || sideA + sideC <= sideB || sideB + sideC <= sideA) {
        alert("これは三角形を形成できません。");
        return;
    }

    // 三角形の種類を判定
    if (sideA === sideB && sideB === sideC) {
        alert("これは正三角形です。");
    } else if (sideA === sideB || sideB === sideC || sideA === sideC) {
        alert("これは二等辺三角形です。");
    } else {
        alert("これは不等辺三角形です。");
    }
}
