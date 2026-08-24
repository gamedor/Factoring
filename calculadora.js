function calcular() {

    // =========================
    // DATOS INGRESADOS
    // =========================

    const capital = parseFloat(
        document.getElementById("capital").value
    );

    const tasaFactoring = parseFloat(
        document.getElementById("tasa").value
    ) / 100;

    const dias = parseFloat(
        document.getElementById("dias").value
    );

    const treaAhorro = parseFloat(
        document.getElementById("trea").value
    ) / 100;


    // =========================
    // VALIDACIÓN
    // =========================

    if (
        isNaN(capital) ||
        isNaN(tasaFactoring) ||
        isNaN(dias) ||
        isNaN(treaAhorro) ||
        capital <= 0 ||
        dias <= 0
    ) {
        alert("Por favor, completa correctamente todos los campos.");
        return;
    }


    // =========================
    // GANANCIA DEL FACTORING
    // =========================

    const gananciaFactoring =
        capital *
        tasaFactoring *
        dias /
        365;


    // =========================
    // GANANCIA DEL AHORRO
    // =========================

    const gananciaAhorro =
        capital *
        (
            Math.pow(
                1 + treaAhorro,
                dias / 365
            ) - 1
        );


    // =========================
    // DIFERENCIA
    // =========================

    const diferencia =
        gananciaFactoring -
        gananciaAhorro;


    // =========================
    // RENDIMIENTO FACTORING
    // =========================

    const rendimientoFactoring =
        (gananciaFactoring / capital) * 100;


    // =========================
    // TASA DE EQUILIBRIO
    // =========================

    const tasaEquilibrio =
        (
            365 / dias
        ) *
        (
            Math.pow(
                1 + treaAhorro,
                dias / 365
            ) - 1
        ) *
        100;


    // =========================
    // MOSTRAR RESULTADOS
    // =========================

    document.getElementById("capitalResultado").textContent =
        "S/ " + capital.toFixed(2);

    document.getElementById("gananciaFactoring").textContent =
        "S/ " + gananciaFactoring.toFixed(2);

    document.getElementById("gananciaAhorro").textContent =
        "S/ " + gananciaAhorro.toFixed(2);

    document.getElementById("diferencia").textContent =
        "S/ " + diferencia.toFixed(2);

    document.getElementById("rendimientoFactoring").textContent =
        rendimientoFactoring.toFixed(2) + "%";

    document.getElementById("tasaEquilibrio").textContent =
        tasaEquilibrio.toFixed(2) + "%";


    // =========================
    // DECISIÓN
    // =========================

    const decision =
        document.getElementById("decision");

    const explicacion =
        document.getElementById("explicacion");


    if (diferencia > 0) {

        decision.textContent =
            "🟢 EL FACTORING CONVIENE";

        explicacion.textContent =
            "Durante este período, el factoring produciría aproximadamente S/ "
            + diferencia.toFixed(2)
            + " más que la cuenta de ahorro.";

    } else if (diferencia < 0) {

        decision.textContent =
            "🔴 EL AHORRO CONVIENE";

        explicacion.textContent =
            "Durante este período, la cuenta de ahorro produciría aproximadamente S/ "
            + Math.abs(diferencia).toFixed(2)
            + " más que el factoring.";

    } else {

        decision.textContent =
            "🟡 SON EQUIVALENTES";

        explicacion.textContent =
            "Ambas alternativas producirían aproximadamente la misma ganancia.";

    }


    // =========================
    // MOSTRAR PANEL
    // =========================

    document
        .getElementById("resultado")
        .classList
        .remove("oculto");
}
