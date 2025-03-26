
let chartInstance = null;

function updateCategories() {
}

function updateSubcategories() {
    const category = document.getElementById('category').value;
    const subcategorySelect = document.getElementById('subcategory');
    const inputsDiv = document.getElementById('inputs');
    const calculateBtn = document.getElementById('calculate');
    subcategorySelect.innerHTML = '<option value="">Selecciona un subtema</option>';
    inputsDiv.innerHTML = '';
    calculateBtn.disabled = true;

    if (category === 'cinematica') {
        subcategorySelect.innerHTML += `
            <option value="mru">Movimiento Rectilíneo Uniforme (MRU)</option>
            <option value="mrua">Movimiento Rectilíneo Uniformemente Acelerado (MRUA)</option>
            <option value="caida">Caída Libre</option>
            <option value="proyectiles">Movimiento de Proyectiles</option>
        `;
    } else if (category === 'dinamica') {
        subcategorySelect.innerHTML += `
            <option value="fuerza">Fuerza Neta (F = m·a)</option>
            <option value="peso">Peso</option>
            <option value="friccion">Fricción</option>
        `;
    } else if (category === 'energia') {
        subcategorySelect.innerHTML += `
            <option value="cinetica">Energía Cinética</option>
            <option value="potencial">Energía Potencial</option>
            <option value="trabajo">Trabajo</option>
        `;
    } else if (category === 'conversiones') {
        subcategorySelect.innerHTML += `
            <option value="longitud">Longitud</option>
            <option value="masa">Masa</option>
            <option value="tiempo">Tiempo</option>
            <option value="velocidad">Velocidad</option>
        `;
    } else if (category === 'temperatura') {
        subcategorySelect.innerHTML += `
            <option value="temp">Conversión de Temperatura</option>
        `;
    } else if (category === 'momento') {
        subcategorySelect.innerHTML += `
            <option value="momento">Momento Lineal</option>
            <option value="colision_elastica">Colisión Elástica</option>
            <option value="colision_inelastica">Colisión Inelástica</option>
        `;
    } else if (category === 'gravedad') {
        subcategorySelect.innerHTML += `
            <option value="fuerza_gravitacional">Fuerza Gravitacional</option>
        `;
    } else if (category === 'electricidad') {
        subcategorySelect.innerHTML += `
            <option value="coulomb">Ley de Coulomb</option>
            <option value="ohm">Ley de Ohm</option>
        `;
    } else if (category === 'ondas') {
        subcategorySelect.innerHTML += `
            <option value="velocidad_onda">Velocidad de Onda</option>
            <option value="reflexion">Reflexión</option>
        `;
    } else if (category === 'termodinamica') {
        subcategorySelect.innerHTML += `
            <option value="calor">Transferencia de Calor</option>
            <option value="gases">Gases Ideales</option>
        `;
    }
}

function showInputs() {
    const category = document.getElementById('category').value;
    const subcategory = document.getElementById('subcategory').value;
    const inputsDiv = document.getElementById('inputs');
    const calculateBtn = document.getElementById('calculate');
    inputsDiv.innerHTML = '';
    calculateBtn.disabled = false;

    if (chartInstance) {
        chartInstance.destroy();
        chartInstance = null;
    }

    const unitOptions = {
        longitud: `
            <option value="m">Metros (m)</option>
            <option value="km">Kilómetros (km)</option>
            <option value="cm">Centímetros (cm)</option>
            <option value="mm">Milímetros (mm)</option>
            <option value="um">Micrómetros (µm)</option>
            <option value="nm">Nanómetros (nm)</option>
            <option value="mi">Millas (mi)</option>
            <option value="yd">Yardas (yd)</option>
            <option value="ft">Pies (ft)</option>
            <option value="in">Pulgadas (in)</option>
        `,
        masa: `
            <option value="kg">Kilogramos (kg)</option>
            <option value="g">Gramos (g)</option>
            <option value="mg">Miligramos (mg)</option>
            <option value="t">Toneladas (t)</option>
            <option value="lb">Libras (lb)</option>
            <option value="oz">Onzas (oz)</option>
        `,
        tiempo: `
            <option value="s">Segundos (s)</option>
            <option value="min">Minutos (min)</option>
            <option value="h">Horas (h)</option>
            <option value="d">Días (d)</option>
            <option value="wk">Semanas (wk)</option>
            <option value="yr">Años (yr)</option>
        `,
        velocidad: `
            <option value="m/s">Metros por segundo (m/s)</option>
            <option value="km/h">Kilómetros por hora (km/h)</option>
            <option value="mph">Millas por hora (mph)</option>
            <option value="ft/s">Pies por segundo (ft/s)</option>
            <option value="kn">Nudos (kn)</option>
        `,
        aceleracion: `
            <option value="m/s2">Metros por segundo² (m/s²)</option>
            <option value="km/h2">Kilómetros por hora² (km/h²)</option>
            <option value="ft/s2">Pies por segundo² (ft/s²)</option>
        `,
        fuerza: `
            <option value="N">Newtons (N)</option>
            <option value="dyn">Dinas (dyn)</option>
            <option value="lbf">Libras-fuerza (lbf)</option>
        `,
        energia: `
            <option value="J">Joules (J)</option>
            <option value="cal">Calorías (cal)</option>
            <option value="kcal">Kilocalorías (kcal)</option>
            <option value="eV">Electronvoltios (eV)</option>
        `
    };

    if (category === 'cinematica') {
        if (subcategory === 'mru') {
            inputsDiv.innerHTML = `
                <label>Velocidad (v): <span class="tooltiptext">Velocidad del objeto en movimiento uniforme</span></label>
                <input type="number" id="v" step="any">
                <select id="vUnit">${unitOptions.velocidad}</select><br>
                <label>Tiempo (t): <span class="tooltiptext">Tiempo de desplazamiento</span></label>
                <input type="number" id="t" step="any">
                <select id="tUnit">${unitOptions.tiempo}</select><br>
                <label>Distancia (d): <span class="tooltiptext">Distancia recorrida</span></label>
                <input type="number" id="d" step="any">
                <select id="dUnit">${unitOptions.longitud}</select>
            `;
        } else if (subcategory === 'mrua') {
            inputsDiv.innerHTML = `
                <label>Velocidad inicial (Vi): <span class="tooltiptext">Velocidad al inicio del movimiento</span></label>
                <input type="number" id="v0" step="any">
                <select id="v0Unit">${unitOptions.velocidad}</select><br>
                <label>Velocidad final (Vf): <span class="tooltiptext">Velocidad al final del movimiento</span></label>
                <input type="number" id="vf" step="any">
                <select id="vfUnit">${unitOptions.velocidad}</select><br>
                <label>Aceleración (a): <span class="tooltiptext">Aceleración constante del objeto</span></label>
                <input type="number" id="a" step="any">
                <select id="aUnit">${unitOptions.aceleracion}</select><br>
                <label>Tiempo (t): <span class="tooltiptext">Duración del movimiento</span></label>
                <input type="number" id="t" step="any">
                <select id="tUnit">${unitOptions.tiempo}</select><br>
                <label>Distancia (d): <span class="tooltiptext">Distancia recorrida</span></label>
                <input type="number" id="d" step="any">
                <select id="dUnit">${unitOptions.longitud}</select>
            `;
        } else if (subcategory === 'caida') {
            inputsDiv.innerHTML = `
                <label>Velocidad inicial (Vi): <span class="tooltiptext">Velocidad inicial (positiva hacia abajo, negativa hacia arriba). Dejar en blanco si es 0.</span></label>
                <input type="number" id="v0" step="any" placeholder="0 (si se deja caer)">
                <select id="v0Unit">${unitOptions.velocidad}</select><br>
                <label>Altura (h): <span class="tooltiptext">Altura desde la que cae el objeto (debe ser positiva)</span></label>
                <input type="number" id="h" step="any">
                <select id="hUnit">${unitOptions.longitud}</select><br>
                <label>Tiempo (t): <span class="tooltiptext">Tiempo de caída</span></label>
                <input type="number" id="t" step="any">
                <select id="tUnit">${unitOptions.tiempo}</select><br>
                <label>Velocidad final (Vf): <span class="tooltiptext">Velocidad al impactar (positiva hacia abajo)</span></label>
                <input type="number" id="vf" step="any">
                <select id="vfUnit">${unitOptions.velocidad}</select>
            `;
        } else if (subcategory === 'proyectiles') {
            inputsDiv.innerHTML = `
                <label>Velocidad inicial (Vi): <span class="tooltiptext">Velocidad inicial del proyectil (debe ser positiva)</span></label>
                <input type="number" id="v0" step="any">
                <select id="v0Unit">${unitOptions.velocidad}</select><br>
                <label>Ángulo de proyección (θ): <span class="tooltiptext">Ángulo de lanzamiento en grados (0° a 90°)</span></label>
                <input type="number" id="theta" step="any"><br>
                <label>Tiempo de vuelo (t): <span class="tooltiptext">Tiempo total en el aire</span></label>
                <input type="number" id="t" step="any">
                <select id="tUnit">${unitOptions.tiempo}</select><br>
                <label>Alcance (R): <span class="tooltiptext">Distancia horizontal recorrida</span></label>
                <input type="number" id="r" step="any">
                <select id="rUnit">${unitOptions.longitud}</select><br>
                <label>Altura máxima (h): <span class="tooltiptext">Altura máxima alcanzada</span></label>
                <input type="number" id="h" step="any">
                <select id="hUnit">${unitOptions.longitud}</select>
            `;
        }
    } else if (category === 'dinamica') {
        if (subcategory === 'fuerza') {
            inputsDiv.innerHTML = `
                <label>Masa (m): <span class="tooltiptext">Masa del objeto (debe ser positiva)</span></label>
                <input type="number" id="m" step="any">
                <select id="mUnit">${unitOptions.masa}</select><br>
                <label>Aceleración (a): <span class="tooltiptext">Aceleración del objeto</span></label>
                <input type="number" id="a" step="any">
                <select id="aUnit">${unitOptions.aceleracion}</select><br>
                <label>Fuerza (F): <span class="tooltiptext">Fuerza neta aplicada</span></label>
                <input type="number" id="f" step="any">
                <select id="fUnit">${unitOptions.fuerza}</select>
            `;
        } else if (subcategory === 'peso') {
            inputsDiv.innerHTML = `
                <label>Masa (m): <span class="tooltiptext">Masa del objeto (debe ser positiva)</span></label>
                <input type="number" id="m" step="any">
                <select id="mUnit">${unitOptions.masa}</select>
            `;
        } else if (subcategory === 'friccion') {
            inputsDiv.innerHTML = `
                <label>Coeficiente de fricción (μ): <span class="tooltiptext">Coeficiente de fricción (valor entre 0 y 1)</span></label>
                <input type="number" id="mu" step="any"><br>
                <label>Fuerza normal (Fn): <span class="tooltiptext">Fuerza normal (debe ser positiva)</span></label>
                <input type="number" id="fn" step="any">
                <select id="fnUnit">${unitOptions.fuerza}</select>
            `;
        }
    } else if (category === 'energia') {
        if (subcategory === 'cinetica') {
            inputsDiv.innerHTML = `
                <label>Masa (m): <span class="tooltiptext">Masa del objeto (debe ser positiva)</span></label>
                <input type="number" id="m" step="any">
                <select id="mUnit">${unitOptions.masa}</select><br>
                <label>Velocidad (v): <span class="tooltiptext">Velocidad del objeto (debe ser positiva)</span></label>
                <input type="number" id="v" step="any">
                <select id="vUnit">${unitOptions.velocidad}</select>
            `;
        } else if (subcategory === 'potencial') {
            inputsDiv.innerHTML = `
                <label>Masa (m): <span class="tooltiptext">Masa del objeto (debe ser positiva)</span></label>
                <input type="number" id="m" step="any">
                <select id="mUnit">${unitOptions.masa}</select><br>
                <label>Altura (h): <span class="tooltiptext">Altura del objeto (debe ser positiva)</span></label>
                <input type="number" id="h" step="any">
                <select id="hUnit">${unitOptions.longitud}</select>
            `;
        } else if (subcategory === 'trabajo') {
            inputsDiv.innerHTML = `
                <label>Fuerza (F): <span class="tooltiptext">Fuerza aplicada (debe ser positiva)</span></label>
                <input type="number" id="f" step="any">
                <select id="fUnit">${unitOptions.fuerza}</select><br>
                <label>Distancia (d): <span class="tooltiptext">Distancia recorrida (debe ser positiva)</span></label>
                <input type="number" id="d" step="any">
                <select id="dUnit">${unitOptions.longitud}</select><br>
                <label>Ángulo (θ): <span class="tooltiptext">Ángulo entre fuerza y desplazamiento (en grados)</span></label>
                <input type="number" id="theta" step="any">
            `;
        }
    } else if (category === 'conversiones') {
        inputsDiv.innerHTML = `
            <label>Valor: <span class="tooltiptext">Valor a convertir</span></label>
            <input type="number" id="value" step="any">
            <label>De: <span class="tooltiptext">Unidad de origen</span></label>
            <select id="fromUnit"></select>
            <label>A: <span class="tooltiptext">Unidad de destino</span></label>
            <select id="toUnit"></select>
        `;
        updateConversionUnits(subcategory);
    } else if (category === 'temperatura' && subcategory === 'temp') {
        inputsDiv.innerHTML = `
            <label>Valor: <span class="tooltiptext">Temperatura a convertir</span></label>
            <input type="number" id="value" step="any">
            <select id="fromUnit">
                <option value="c">Celsius (°C)</option>
                <option value="k">Kelvin (K)</option>
                <option value="f">Fahrenheit (°F)</option>
            </select>
            <select id="toUnit">
                <option value="c">Celsius (°C)</option>
                <option value="k">Kelvin (K)</option>
                <option value="f">Fahrenheit (°F)</option>
            </select>
        `;
    } else if (category === 'momento') {
        if (subcategory === 'momento') {
            inputsDiv.innerHTML = `
                <label>Masa (m): <span class="tooltiptext">Masa del objeto (debe ser positiva)</span></label>
                <input type="number" id="m" step="any">
                <select id="mUnit">${unitOptions.masa}</select><br>
                <label>Velocidad (v): <span class="tooltiptext">Velocidad del objeto</span></label>
                <input type="number" id="v" step="any">
                <select id="vUnit">${unitOptions.velocidad}</select>
            `;
        } else if (subcategory === 'colision_elastica' || subcategory === 'colision_inelastica') {
            inputsDiv.innerHTML = `
                <label>Masa 1 (m1): <span class="tooltiptext">Masa del primer objeto (debe ser positiva)</span></label>
                <input type="number" id="m1" step="any">
                <select id="m1Unit">${unitOptions.masa}</select><br>
                <label>Velocidad inicial 1 (Vi1): <span class="tooltiptext">Velocidad inicial del primer objeto</span></label>
                <input type="number" id="v1i" step="any">
                <select id="v1iUnit">${unitOptions.velocidad}</select><br>
                <label>Masa 2 (m2): <span class="tooltiptext">Masa del segundo objeto (debe ser positiva)</span></label>
                <input type="number" id="m2" step="any">
                <select id="m2Unit">${unitOptions.masa}</select><br>
                <label>Velocidad inicial 2 (Vi2): <span class="tooltiptext">Velocidad inicial del segundo objeto</span></label>
                <input type="number" id="v2i" step="any">
                <select id="v2iUnit">${unitOptions.velocidad}</select>
            `;
        }
    } else if (category === 'gravedad' && subcategory === 'fuerza_gravitacional') {
        inputsDiv.innerHTML = `
            <label>Masa 1 (m1): <span class="tooltiptext">Masa del primer objeto (debe ser positiva)</span></label>
            <input type="number" id="m1" step="any">
            <select id="m1Unit">${unitOptions.masa}</select><br>
            <label>Masa 2 (m2): <span class="tooltiptext">Masa del segundo objeto (debe ser positiva)</span></label>
            <input type="number" id="m2" step="any">
            <select id="m2Unit">${unitOptions.masa}</select><br>
            <label>Distancia (r): <span class="tooltiptext">Distancia entre los objetos (debe ser positiva)</span></label>
            <input type="number" id="r" step="any">
            <select id="rUnit">${unitOptions.longitud}</select>
        `;
    } else if (category === 'electricidad') {
        if (subcategory === 'coulomb') {
            inputsDiv.innerHTML = `
                <label>Carga 1 (q1): <span class="tooltiptext">Carga del primer objeto (en Coulombs)</span></label>
                <input type="number" id="q1" step="any"><br>
                <label>Carga 2 (q2): <span class="tooltiptext">Carga del segundo objeto (en Coulombs)</span></label>
                <input type="number" id="q2" step="any"><br>
                <label>Distancia (r): <span class="tooltiptext">Distancia entre las cargas (debe ser positiva)</span></label>
                <input type="number" id="r" step="any">
                <select id="rUnit">${unitOptions.longitud}</select>
            `;
        } else if (subcategory === 'ohm') {
            inputsDiv.innerHTML = `
                <label>Voltaje (V): <span class="tooltiptext">Diferencia de potencial (en Volts)</span></label>
                <input type="number" id="v" step="any"><br>
                <label>Corriente (I): <span class="tooltiptext">Corriente eléctrica (en Amperes)</span></label>
                <input type="number" id="i" step="any"><br>
                <label>Resistencia (R): <span class="tooltiptext">Resistencia eléctrica (en Ohms)</span></label>
                <input type="number" id="r" step="any">
            `;
        }
    } else if (category === 'ondas') {
        if (subcategory === 'velocidad_onda') {
            inputsDiv.innerHTML = `
                <label>Frecuencia (f): <span class="tooltiptext">Frecuencia de la onda (en Hz)</span></label>
                <input type="number" id="f" step="any"><br>
                <label>Longitud de onda (λ): <span class="tooltiptext">Longitud de onda (debe ser positiva)</span></label>
                <input type="number" id="lambda" step="any">
                <select id="lambdaUnit">${unitOptions.longitud}</select><br>
                <label>Velocidad (v): <span class="tooltiptext">Velocidad de propagación de la onda</span></label>
                <input type="number" id="v" step="any">
                <select id="vUnit">${unitOptions.velocidad}</select>
            `;
        } else if (subcategory === 'reflexion') {
            inputsDiv.innerHTML = `
                <label>Ángulo de incidencia (θi): <span class="tooltiptext">Ángulo de incidencia en grados (0° a 90°)</span></label>
                <input type="number" id="theta_i" step="any">
            `;
        }
    } else if (category === 'termodinamica') {
        if (subcategory === 'calor') {
            inputsDiv.innerHTML = `
                <label>Masa (m): <span class="tooltiptext">Masa del objeto (debe ser positiva)</span></label>
                <input type="number" id="m" step="any">
                <select id="mUnit">${unitOptions.masa}</select><br>
                <label>Calor específico (c): <span class="tooltiptext">Calor específico del material (en J/kg·K)</span></label>
                <input type="number" id="c" step="any"><br>
                <label>Cambio de temperatura (ΔT): <span class="tooltiptext">Cambio de temperatura (en Kelvin o Celsius)</span></label>
                <input type="number" id="deltaT" step="any">
            `;
        } else if (subcategory === 'gases') {
            inputsDiv.innerHTML = `
                <label>Presión (P): <span class="tooltiptext">Presión del gas (en Pascales)</span></label>
                <input type="number" id="p" step="any"><br>
                <label>Volumen (V): <span class="tooltiptext">Volumen del gas (en m³)</span></label>
                <input type="number" id="v" step="any"><br>
                <label>Temperatura (T): <span class="tooltiptext">Temperatura del gas (en Kelvin)</span></label>
                <input type="number" id="t" step="any"><br>
                <label>Moles (n): <span class="tooltiptext">Cantidad de moles del gas</span></label>
                <input type="number" id="n" step="any">
            `;
        }
    }

    if (!subcategory) calculateBtn.disabled = true;
}

function updateConversionUnits(subcategory) {
    const fromUnit = document.getElementById('fromUnit');
    const toUnit = document.getElementById('toUnit');
    fromUnit.innerHTML = '';
    toUnit.innerHTML = '';

    const units = {
        longitud: [
            { value: 'm', text: 'Metros (m)' },
            { value: 'km', text: 'Kilómetros (km)' },
            { value: 'cm', text: 'Centímetros (cm)' },
            { value: 'mm', text: 'Milímetros (mm)' },
            { value: 'um', text: 'Micrómetros (µm)' },
            { value: 'nm', text: 'Nanómetros (nm)' },
            { value: 'mi', text: 'Millas (mi)' },
            { value: 'yd', text: 'Yardas (yd)' },
            { value: 'ft', text: 'Pies (ft)' },
            { value: 'in', text: 'Pulgadas (in)' }
        ],
        masa: [
            { value: 'kg', text: 'Kilogramos (kg)' },
            { value: 'g', text: 'Gramos (g)' },
            { value: 'mg', text: 'Miligramos (mg)' },
            { value: 't', text: 'Toneladas (t)' },
            { value: 'lb', text: 'Libras (lb)' },
            { value: 'oz', text: 'Onzas (oz)' }
        ],
        tiempo: [
            { value: 's', text: 'Segundos (s)' },
            { value: 'min', text: 'Minutos (min)' },
            { value: 'h', text: 'Horas (h)' },
            { value: 'd', text: 'Días (d)' },
            { value: 'wk', text: 'Semanas (wk)' },
            { value: 'yr', text: 'Años (yr)' }
        ],
        velocidad: [
            { value: 'm/s', text: 'Metros por segundo (m/s)' },
            { value: 'km/h', text: 'Kilómetros por hora (km/h)' },
            { value: 'mph', text: 'Millas por hora (mph)' },
            { value: 'ft/s', text: 'Pies por segundo (ft/s)' },
            { value: 'kn', text: 'Nudos (kn)' }
        ]
    };

    units[subcategory].forEach(unit => {
        fromUnit.innerHTML += `<option value="${unit.value}">${unit.text}</option>`;
        toUnit.innerHTML += `<option value="${unit.value}">${unit.text}</option>`;
    });
}

function clearForm() {
    const inputsDiv = document.getElementById('inputs');
    const resultDiv = document.getElementById('result');
    const category = document.getElementById('category');
    const subcategory = document.getElementById('subcategory');


    category.value = '';
    subcategory.innerHTML = '<option value="">Selecciona un subtema</option>';
    inputsDiv.innerHTML = '';
    resultDiv.innerHTML = '';

 
    if (chartInstance) {
        chartInstance.destroy();
        chartInstance = null;
    }


    document.getElementById('calculate').disabled = true;
}

function calculate() {
    const category = document.getElementById('category').value;
    const subcategory = document.getElementById('subcategory').value;
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';
    let resultsHTML = '';


    if (chartInstance) {
        chartInstance.destroy();
        chartInstance = null;
    }

    const conversions = {
        longitud: { m: 1, km: 1000, cm: 0.01, mm: 0.001, um: 0.000001, nm: 0.000000001, mi: 1609.34, yd: 0.9144, ft: 0.3048, in: 0.0254 },
        masa: { kg: 1, g: 0.001, mg: 0.000001, t: 1000, lb: 0.453592, oz: 0.0283495 },
        tiempo: { s: 1, min: 60, h: 3600, d: 86400, wk: 604800, yr: 31557600 },
        velocidad: { 'm/s': 1, 'km/h': 0.277778, mph: 0.44704, 'ft/s': 0.3048, kn: 0.514444 },
        aceleracion: { 'm/s2': 1, 'km/h2': 0.0000771605, 'ft/s2': 0.3048 },
        fuerza: { N: 1, dyn: 0.00001, lbf: 4.44822 },
        energia: { J: 1, cal: 4.184, kcal: 4184, eV: 1.602e-19 }
    };

    if (category === 'cinematica') {
        if (subcategory === 'mru') {
            let v = document.getElementById('v').value === '' ? null : parseFloat(document.getElementById('v').value);
            let t = document.getElementById('t').value === '' ? null : parseFloat(document.getElementById('t').value);
            let d = document.getElementById('d').value === '' ? null : parseFloat(document.getElementById('d').value);
            const vUnit = document.getElementById('vUnit').value;
            const tUnit = document.getElementById('tUnit').value;
            const dUnit = document.getElementById('dUnit').value;

         
            if ([v, t, d].filter(x => x !== null).length < 2) {
                resultDiv.innerHTML = 'Se necesitan al menos 2 valores.';
                return;
            }
            if (t !== null && t < 0) {
                resultDiv.innerHTML = 'El tiempo no puede ser negativo.';
                return;
            }
            if (d !== null && d < 0) {
                resultDiv.innerHTML = 'La distancia no puede ser negativa.';
                return;
            }

            v = v !== null ? v * conversions.velocidad[vUnit] : null;
            t = t !== null ? t * conversions.tiempo[tUnit] : null;
            d = d !== null ? d * conversions.longitud[dUnit] : null;

            if (v === null) v = d / t;
            else if (t === null) t = d / v;
            else if (d === null) d = v * t;

            v = v / conversions.velocidad[vUnit];
            t = t / conversions.tiempo[tUnit];
            d = d / conversions.longitud[dUnit];

            resultsHTML = `v = ${v.toFixed(2)} ${vUnit}, t = ${t.toFixed(2)} ${tUnit}, d = ${d.toFixed(2)} ${dUnit}`;
        } else if (subcategory === 'mrua') {
            let v0 = document.getElementById('v0').value === '' ? null : parseFloat(document.getElementById('v0').value);
            let vf = document.getElementById('vf').value === '' ? null : parseFloat(document.getElementById('vf').value);
            let a = document.getElementById('a').value === '' ? null : parseFloat(document.getElementById('a').value);
            let t = document.getElementById('t').value === '' ? null : parseFloat(document.getElementById('t').value);
            let d = document.getElementById('d').value === '' ? null : parseFloat(document.getElementById('d').value);
            const v0Unit = document.getElementById('v0Unit').value;
            const vfUnit = document.getElementById('vfUnit').value;
            const aUnit = document.getElementById('aUnit').value;
            const tUnit = document.getElementById('tUnit').value;
            const dUnit = document.getElementById('dUnit').value;

            
            if ([v0, vf, a, t, d].filter(x => x !== null).length < 3) {
                resultDiv.innerHTML = 'Se necesitan al menos 3 valores para MRUA.';
                return;
            }
            if (t !== null && t < 0) {
                resultDiv.innerHTML = 'El tiempo no puede ser negativo.';
                return;
            }
            if (d !== null && d < 0) {
                resultDiv.innerHTML = 'La distancia no puede ser negativa.';
                return;
            }

            v0 = v0 !== null ? v0 * conversions.velocidad[v0Unit] : null;
            vf = vf !== null ? vf * conversions.velocidad[vfUnit] : null;
            a = a !== null ? a * conversions.aceleracion[aUnit] : null;
            t = t !== null ? t * conversions.tiempo[tUnit] : null;
            d = d !== null ? d * conversions.longitud[dUnit] : null;

            if (v0 !== null && vf !== null && a !== null && t === null && d === null) {
                t = (vf - v0) / a;
                d = v0 * t + 0.5 * a * t * t;
            } else if (v0 !== null && vf !== null && t !== null && a === null && d === null) {
                a = (vf - v0) / t;
                d = v0 * t + 0.5 * a * t * t;
            } else if (v0 !== null && a !== null && t !== null && vf === null && d === null) {
                vf = v0 + a * t;
                d = v0 * t + 0.5 * a * t * t;
            } else if (v0 !== null && vf !== null && d !== null && a === null && t === null) {
                a = (vf * vf - v0 * v0) / (2 * d);
                t = (vf - v0) / a;
            } else if (v0 !== null && a !== null && d !== null && vf === null && t === null) {
                vf = Math.sqrt(v0 * v0 + 2 * a * d);
                t = (vf - v0) / a;
            } else if (vf !== null && a !== null && t !== null && v0 === null && d === null) {
                v0 = vf - a * t;
                d = v0 * t + 0.5 * a * t * t;
            } else if (vf !== null && a !== null && d !== null && v0 === null && t === null) {
                v0 = Math.sqrt(vf * vf - 2 * a * d);
                t = (vf - v0) / a;
            } else if (v0 !== null && t !== null && d !== null && vf === null && a === null) {
                vf = (d - v0 * t) * 2 / t;
                a = (vf - v0) / t;
            } else if (vf !== null && t !== null && d !== null && v0 === null && a === null) {
                v0 = (d - 0.5 * (vf - v0) * t) / t;
                a = (vf - v0) / t;
            } else if (a !== null && t !== null && d !== null && v0 === null && vf === null) {
                v0 = d / t - 0.5 * a * t;
                vf = v0 + a * t;
            }

            v0 = v0 !== null ? v0 / conversions.velocidad[v0Unit] : 'N/A';
            vf = vf !== null ? vf / conversions.velocidad[vfUnit] : 'N/A';
            a = a !== null ? a / conversions.aceleracion[aUnit] : 'N/A';
            t = t !== null ? t / conversions.tiempo[tUnit] : 'N/A';
            d = d !== null ? d / conversions.longitud[dUnit] : 'N/A';

            resultsHTML = `v0 = ${v0 === 'N/A' ? v0 : v0.toFixed(2)} ${v0Unit}, vf = ${vf === 'N/A' ? vf : vf.toFixed(2)} ${vfUnit}, a = ${a === 'N/A' ? a : a.toFixed(2)} ${aUnit}, t = ${t === 'N/A' ? t : t.toFixed(2)} ${tUnit}, d = ${d === 'N/A' ? d : d.toFixed(2)} ${dUnit}`;
        } else if (subcategory === 'caida') {
            let v0 = document.getElementById('v0').value === '' ? 0 : parseFloat(document.getElementById('v0').value); // v0 puede ser negativa
            let h = document.getElementById('h').value === '' ? null : parseFloat(document.getElementById('h').value);
            let t = document.getElementById('t').value === '' ? null : parseFloat(document.getElementById('t').value);
            let vf = document.getElementById('vf').value === '' ? null : parseFloat(document.getElementById('vf').value);
            const v0Unit = document.getElementById('v0Unit').value;
            const hUnit = document.getElementById('hUnit').value;
            const tUnit = document.getElementById('tUnit').value;
            const vfUnit = document.getElementById('vfUnit').value;
            const g = 9.81; 

            
            if ([h, t, vf].filter(x => x !== null).length < 2) {
                resultDiv.innerHTML = 'Se necesitan al menos 2 valores (excluyendo v0).';
                return;
            }
            if (h !== null && h < 0) {
                resultDiv.innerHTML = 'La altura no puede ser negativa.';
                return;
            }
            if (t !== null && t < 0) {
                resultDiv.innerHTML = 'El tiempo no puede ser negativo.';
                return;
            }

            v0 = v0 * conversions.velocidad[v0Unit];
            h = h !== null ? h * conversions.longitud[hUnit] : null; 
            t = t !== null ? t * conversions.tiempo[tUnit] : null; 
            vf = vf !== null ? vf * conversions.velocidad[vfUnit] : null; 

            let timeToMaxHeight = 0;
            let maxHeight = 0;
            let totalTime = 0;

           
            if (v0 < 0) {
                timeToMaxHeight = -v0 / g; 
                maxHeight = h + v0 * timeToMaxHeight + 0.5 * g * timeToMaxHeight * timeToMaxHeight;
                if (maxHeight < 0) {
                    resultDiv.innerHTML = 'La velocidad inicial es demasiado baja para alcanzar la altura inicial.';
                    return;
                }
            } else {
                timeToMaxHeight = 0;
                maxHeight = h;
            }

            if (vf === null && t !== null) {
             
                vf = v0 + g * t;
            
                if (h === null) {
                    h = v0 * t + 0.5 * g * t * t;
                }
            } else if (t === null && vf !== null) {
                
                t = (vf - v0) / g;
                if (t < 0) {
                    resultDiv.innerHTML = 'El tiempo calculado es negativo. Revisa los valores ingresados.';
                    return;
                }
               
                if (h === null) {
                    h = v0 * t + 0.5 * g * t * t;
                }
            } else if (h === null && t !== null) {
               
                h = v0 * t + 0.5 * g * t * t;
                
                if (vf === null) {
                    vf = v0 + g * t;
                }
            } else if (t === null && h !== null && vf !== null) {
                
                t = (vf - v0) / g;
                if (t < 0) {
                    resultDiv.innerHTML = 'El tiempo calculado es negativo. Revisa los valores ingresados.';
                    return;
                }
            } else if (t === null && h !== null && vf === null) {
         
                const a = 0.5 * g;
                const b = v0;
                const c = -h;
                const discriminant = b * b - 4 * a * c;
                if (discriminant < 0) {
                    resultDiv.innerHTML = 'No hay solución real para el tiempo con los valores dados.';
                    return;
                }
                t = (-b + Math.sqrt(discriminant)) / (2 * a);
                if (t < 0) {
                    t = (-b - Math.sqrt(discriminant)) / (2 * a); 
                }
                if (t < 0) {
                    resultDiv.innerHTML = 'El tiempo calculado es negativo. Revisa los valores ingresados.';
                    return;
                }
                vf = v0 + g * t;
            } else if (vf === null && h !== null && t !== null) {
                
                vf = v0 + g * t;
            }

            
            if (v0 < 0) {
                
                const timeToGround = Math.sqrt(2 * maxHeight / g);
                totalTime = timeToMaxHeight + timeToGround;
                if (t > totalTime) {
                    resultDiv.innerHTML = 'El tiempo ingresado excede el tiempo total de vuelo.';
                    return;
                }
            } else {
                totalTime = t;
            }

          
            v0 = v0 / conversions.velocidad[v0Unit];
            h = h !== null ? h / conversions.longitud[hUnit] : 'N/A';
            t = t !== null ? t / conversions.tiempo[tUnit] : 'N/A';
            vf = vf !== null ? vf / conversions.velocidad[vfUnit] : 'N/A';

            resultsHTML = `v0 = ${v0.toFixed(2)} ${v0Unit}, h = ${h === 'N/A' ? h : h.toFixed(2)} ${hUnit}, t = ${t === 'N/A' ? t : t.toFixed(2)} ${tUnit}, vf = ${vf === 'N/A' ? vf : vf.toFixed(2)} ${vfUnit}`;

            
            const tBase = t * conversions.tiempo[tUnit]; 
            const v0Base = v0 * conversions.velocidad[v0Unit]; 
            const hBase = h * conversions.longitud[hUnit]; 

            const timePoints = [];
            const positionPoints = [];
            const numPoints = 50;
            for (let i = 0; i <= numPoints; i++) {
                const time = (i / numPoints) * tBase;
                const position = hBase - (v0Base * time + 0.5 * g * time * time); 
                timePoints.push(time.toFixed(2));
                positionPoints.push(position >= 0 ? position.toFixed(2) : 0); 
            }

            const ctx = document.getElementById('physicsChart').getContext('2d');
            chartInstance = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: timePoints,
                    datasets: [{
                        label: 'Posición (m)',
                        data: positionPoints,
                        borderColor: '#007BFF',
                        fill: false,
                        tension: 0.1
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        x: {
                            title: {
                                display: true,
                                text: 'Tiempo (s)'
                            }
                        },
                        y: {
                            title: {
                                display: true,
                                text: 'Posición (m)'
                            },
                            min: 0
                        }
                    }
                }
            });
        } else if (subcategory === 'proyectiles') {
            let v0 = document.getElementById('v0').value === '' ? null : parseFloat(document.getElementById('v0').value);
            let theta = document.getElementById('theta').value === '' ? null : parseFloat(document.getElementById('theta').value);
            let t = document.getElementById('t').value === '' ? null : parseFloat(document.getElementById('t').value);
            let r = document.getElementById('r').value === '' ? null : parseFloat(document.getElementById('r').value);
            let h = document.getElementById('h').value === '' ? null : parseFloat(document.getElementById('h').value);
            const v0Unit = document.getElementById('v0Unit').value;
            const tUnit = document.getElementById('tUnit').value;
            const rUnit = document.getElementById('rUnit').value;
            const hUnit = document.getElementById('hUnit').value;
            const g = 9.81;

            // Validaciones
            if ([v0, theta, t, r, h].filter(x => x !== null).length < 2) {
                resultDiv.innerHTML = 'Se necesitan al menos 2 valores.';
                return;
            }
            if (v0 !== null && v0 < 0) {
                resultDiv.innerHTML = 'La velocidad inicial no puede ser negativa.';
                return;
            }
            if (theta !== null && (theta < 0 || theta > 90)) {
                resultDiv.innerHTML = 'El ángulo debe estar entre 0° y 90°.';
                return;
            }
            if (t !== null && t < 0) {
                resultDiv.innerHTML = 'El tiempo no puede ser negativo.';
                return;
            }
            if (r !== null && r < 0) {
                resultDiv.innerHTML = 'El alcance no puede ser negativo.';
                return;
            }
            if (h !== null && h < 0) {
                resultDiv.innerHTML = 'La altura máxima no puede ser negativa.';
                return;
            }

            v0 = v0 !== null ? v0 * conversions.velocidad[v0Unit] : null;
            t = t !== null ? t * conversions.tiempo[tUnit] : null;
            r = r !== null ? r * conversions.longitud[rUnit] : null;
            h = h !== null ? h * conversions.longitud[hUnit] : null;

            const rad = theta !== null ? theta * Math.PI / 180 : null;
            const v0x = v0 !== null && rad !== null ? v0 * Math.cos(rad) : null;
            const v0y = v0 !== null && rad !== null ? v0 * Math.sin(rad) : null;

            if (v0 !== null && theta !== null && t === null && r === null && h === null) {
                t = (2 * v0y) / g;
                h = (v0y * v0y) / (2 * g);
                r = v0x * t;
            } else if (v0 !== null && t !== null && theta === null && r !== null && h === null) {
                const tFlight = t;
                theta = Math.acos((r / (v0 * tFlight))) * 180 / Math.PI;
                h = (v0 * Math.sin(theta * Math.PI / 180)) * (tFlight / 2) - 0.5 * g * (tFlight / 2) * (tFlight / 2);
            } else if (v0 !== null && h !== null && theta === null && t === null && r === null) {
                const v0y = Math.sqrt(2 * g * h);
                theta = Math.asin(v0y / v0) * 180 / Math.PI;
                t = (2 * v0y) / g;
                r = v0 * Math.cos(theta * Math.PI / 180) * t;
            } else if (r !== null && t !== null && v0 === null && theta === null && h === null) {
                const v0x = r / t;
                const tFlight = t;
                const v0y = (g * tFlight) / 2;
                v0 = Math.sqrt(v0x * v0x + v0y * v0y);
                theta = Math.asin(v0y / v0) * 180 / Math.PI;
                h = (v0y * v0y) / (2 * g);
            }

           
            v0 = v0 !== null ? v0 / conversions.velocidad[v0Unit] : 'N/A';
            t = t !== null ? t / conversions.tiempo[tUnit] : 'N/A';
            r = r !== null ? r / conversions.longitud[rUnit] : 'N/A';
            h = h !== null ? h / conversions.longitud[hUnit] : 'N/A';
            theta = theta !== null ? theta : 'N/A';

            resultsHTML = `v0 = ${v0 === 'N/A' ? v0 : v0.toFixed(2)} ${v0Unit}, θ = ${theta === 'N/A' ? theta : theta.toFixed(2)}°, t = ${t === 'N/A' ? t : t.toFixed(2)} ${tUnit}, r = ${r === 'N/A' ? r : r.toFixed(2)} ${rUnit}, h = ${h === 'N/A' ? h : h.toFixed(2)} ${hUnit}`;

            
            const tBase = t * conversions.tiempo[tUnit]; 
            const v0Base = v0 * conversions.velocidad[v0Unit]; 
            const thetaRad = (theta * Math.PI) / 180;

            const xPoints = [];
            const yPoints = [];
            const numPoints = 50;
            for (let i = 0; i <= numPoints; i++) {
                const time = (i / numPoints) * tBase;
                const x = (v0Base * Math.cos(thetaRad)) * time; 
                const y = (v0Base * Math.sin(thetaRad)) * time - 0.5 * g * time * time; 
                xPoints.push(x.toFixed(2));
                yPoints.push(y >= 0 ? y.toFixed(2) : 0); 
            }

            const ctx = document.getElementById('physicsChart').getContext('2d');
            chartInstance = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: xPoints,
                    datasets: [{
                        label: 'Trayectoria',
                        data: yPoints,
                        borderColor: '#28a745',
                        fill: false,
                        tension: 0.1
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        x: {
                            title: {
                                display: true,
                                text: 'Distancia Horizontal (m)'
                            }
                        },
                        y: {
                            title: {
                                display: true,
                                text: 'Altura (m)'
                            },
                            min: 0
                        }
                    }
                }
            });
        }
    } else if (category === 'dinamica') {
        if (subcategory === 'fuerza') {
            let m = document.getElementById('m').value === '' ? null : parseFloat(document.getElementById('m').value);
            let a = document.getElementById('a').value === '' ? null : parseFloat(document.getElementById('a').value);
            let f = document.getElementById('f').value === '' ? null : parseFloat(document.getElementById('f').value);
            const mUnit = document.getElementById('mUnit').value;
            const aUnit = document.getElementById('aUnit').value;
            const fUnit = document.getElementById('fUnit').value;

            // Validaciones
            if ([m, a, f].filter(x => x !== null).length < 2) {
                resultDiv.innerHTML = 'Se necesitan al menos 2 valores.';
                return;
            }
            if (m !== null && m <= 0) {
                resultDiv.innerHTML = 'La masa debe ser mayor que 0.';
                return;
            }

            m = m !== null ? m * conversions.masa[mUnit] : null;
            a = a !== null ? a * conversions.aceleracion[aUnit] : null;
            f = f !== null ? f * conversions.fuerza[fUnit] : null;

            if (f === null) f = m * a;
            else if (m === null) m = f / a;
            else if (a === null) a = f / m;

            f = f / conversions.fuerza[fUnit];
            m = m / conversions.masa[mUnit];
            a = a / conversions.aceleracion[aUnit];

            resultsHTML = `f = ${f.toFixed(2)} ${fUnit}, m = ${m.toFixed(2)} ${mUnit}, a = ${a.toFixed(2)} ${aUnit}`;
        } else if (subcategory === 'peso') {
            let m = document.getElementById('m').value === '' ? null : parseFloat(document.getElementById('m').value);
            const mUnit = document.getElementById('mUnit').value;
            const g = 9.81;

        
            if (m === null) {
                resultDiv.innerHTML = 'Se necesita la masa.';
                return;
            }
            if (m <= 0) {
                resultDiv.innerHTML = 'La masa debe ser mayor que 0.';
                return;
            }

            m = m * conversions.masa[mUnit];
            const peso = m * g;
            resultsHTML = `Peso = ${peso.toFixed(2)} N`;
        } else if (subcategory === 'friccion') {
            let mu = document.getElementById('mu').value === '' ? null : parseFloat(document.getElementById('mu').value);
            let fn = document.getElementById('fn').value === '' ? null : parseFloat(document.getElementById('fn').value);
            const fnUnit = document.getElementById('fnUnit').value;

            if ([mu, fn].filter(x => x !== null).length < 2) {
                resultDiv.innerHTML = 'Se necesitan ambos valores.';
                return;
            }
            if (mu < 0 || mu > 1) {
                resultDiv.innerHTML = 'El coeficiente de fricción debe estar entre 0 y 1.';
                return;
            }
            if (fn <= 0) {
                resultDiv.innerHTML = 'La fuerza normal debe ser mayor que 0.';
                return;
            }

            fn = fn * conversions.fuerza[fnUnit];
            const f = mu * fn;
            resultsHTML = `Fuerza de fricción = ${f.toFixed(2)} N`;
        }
    } else if (category === 'energia') {
        if (subcategory === 'cinetica') {
            let m = document.getElementById('m').value === '' ? null : parseFloat(document.getElementById('m').value);
            let v = document.getElementById('v').value === '' ? null : parseFloat(document.getElementById('v').value);
            const mUnit = document.getElementById('mUnit').value;
            const vUnit = document.getElementById('vUnit').value;


            if ([m, v].filter(x => x !== null).length < 2) {
                resultDiv.innerHTML = 'Se necesitan ambos valores.';
                return;
            }
            if (m <= 0) {
                resultDiv.innerHTML = 'La masa debe ser mayor que 0.';
                return;
            }
            if (v < 0) {
                resultDiv.innerHTML = 'La velocidad no puede ser negativa.';
                return;
            }

            m = m * conversions.masa[mUnit];
            v = v * conversions.velocidad[vUnit];
            const ek = 0.5 * m * v * v;
            resultsHTML = `Energía cinética = ${ek.toFixed(2)} J`;

       
            const vBase = v; 
            const vPoints = [];
            const ekPoints = [];
            const numPoints = 50;
            for (let i = 0; i <= numPoints; i++) {
                const velocity = (i / numPoints) * vBase * 2;
                const energy = 0.5 * m * velocity * velocity;
                vPoints.push(velocity.toFixed(2));
                ekPoints.push(energy.toFixed(2));
            }

            const ctx = document.getElementById('physicsChart').getContext('2d');
            chartInstance = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: vPoints,
                    datasets: [{
                        label: 'Energía Cinética (J)',
                        data: ekPoints,
                        borderColor: '#ff9800',
                        fill: false,
                        tension: 0.1
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        x: {
                            title: {
                                display: true,
                                text: 'Velocidad (m/s)'
                            }
                        },
                        y: {
                            title: {
                                display: true,
                                text: 'Energía Cinética (J)'
                            },
                            min: 0
                        }
                    }
                }
            });
        } else if (subcategory === 'potencial') {
            let m = document.getElementById('m').value === '' ? null : parseFloat(document.getElementById('m').value);
            let h = document.getElementById('h').value === '' ? null : parseFloat(document.getElementById('h').value);
            const mUnit = document.getElementById('mUnit').value;
            const hUnit = document.getElementById('hUnit').value;
            const g = 9.81;

            // Validaciones
            if ([m, h].filter(x => x !== null).length < 2) {
                resultDiv.innerHTML = 'Se necesitan ambos valores.';
                return;
            }
            if (m <= 0) {
                resultDiv.innerHTML = 'La masa debe ser mayor que 0.';
                return;
            }
            if (h < 0) {
                resultDiv.innerHTML = 'La altura no puede ser negativa.';
                return;
            }

            m = m * conversions.masa[mUnit];
            h = h * conversions.longitud[hUnit];
            const ep = m * g * h;
            resultsHTML = `Energía potencial = ${ep.toFixed(2)} J`;


            const hBase = h; 
            const hPoints = [];
            const epPoints = [];
            const numPoints = 50;
            for (let i = 0; i <= numPoints; i++) {
                const height = (i / numPoints) * hBase * 2; 
                const energy = m * g * height;
                hPoints.push(height.toFixed(2));
                epPoints.push(energy.toFixed(2));
            }

            const ctx = document.getElementById('physicsChart').getContext('2d');
            chartInstance = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: hPoints,
                    datasets: [{
                        label: 'Energía Potencial (J)',
                        data: epPoints,
                        borderColor: '#4caf50',
                        fill: false,
                        tension: 0.1
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        x: {
                            title: {
                                display: true,
                                text: 'Altura (m)'
                            }
                        },
                        y: {
                            title: {
                                display: true,
                                text: 'Energía Potencial (J)'
                            },
                            min: 0
                        }
                    }
                }
            });
        } else if (subcategory === 'trabajo') {
            let f = document.getElementById('f').value === '' ? null : parseFloat(document.getElementById('f').value);
            let d = document.getElementById('d').value === '' ? null : parseFloat(document.getElementById('d').value);
            let theta = document.getElementById('theta').value === '' ? null : parseFloat(document.getElementById('theta').value);
            const fUnit = document.getElementById('fUnit').value;
            const dUnit = document.getElementById('dUnit').value;

          
            if ([f, d, theta].filter(x => x !== null).length < 3) {
                resultDiv.innerHTML = 'Se necesitan todos los valores.';
                return;
            }
            if (f <= 0) {
                resultDiv.innerHTML = 'La fuerza debe ser mayor que 0.';
                return;
            }
            if (d < 0) {
                resultDiv.innerHTML = 'La distancia no puede ser negativa.';
                return;
            }
            if (theta < 0 || theta > 180) {
                resultDiv.innerHTML = 'El ángulo debe estar entre 0° y 180°.';
                return;
            }

            f = f * conversions.fuerza[fUnit];
            d = d * conversions.longitud[dUnit];
            const rad = theta * Math.PI / 180;
            const w = f * d * Math.cos(rad);
            resultsHTML = `Trabajo = ${w.toFixed(2)} J`;

        
            const thetaPoints = [];
            const wPoints = [];
            const numPoints = 50;
            for (let i = 0; i <= numPoints; i++) {
                const angle = (i / numPoints) * 180; 
                const work = f * d * Math.cos(angle * Math.PI / 180);
                thetaPoints.push(angle.toFixed(2));
                wPoints.push(work.toFixed(2));
            }

            const ctx = document.getElementById('physicsChart').getContext('2d');
            chartInstance = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: thetaPoints,
                    datasets: [{
                        label: 'Trabajo (J)',
                        data: wPoints,
                        borderColor: '#ff5722',
                        fill: false,
                        tension: 0.1
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        x: {
                            title: {
                                display: true,
                                text: 'Ángulo (grados)'
                            }
                        },
                        y: {
                            title: {
                                display: true,
                                text: 'Trabajo (J)'
                            }
                        }
                    }
                }
            });
        }
    } else if (category === 'conversiones') {
        const value = parseFloat(document.getElementById('value').value);
        const fromUnit = document.getElementById('fromUnit').value;
        const toUnit = document.getElementById('toUnit').value;

        // Validaciones
        if (isNaN(value)) {
            resultDiv.innerHTML = 'Por favor, ingresa un valor numérico.';
            return;
        }
        if (fromUnit === toUnit) {
            resultDiv.innerHTML = `El valor sigue siendo ${value.toFixed(2)} ${toUnit}.`;
            return;
        }

        const baseValue = value * conversions[subcategory][fromUnit];
        const convertedValue = baseValue / conversions[subcategory][toUnit];
        resultsHTML = `${value.toFixed(2)} ${fromUnit} = ${convertedValue.toFixed(2)} ${toUnit}`;
    } else if (category === 'temperatura' && subcategory === 'temp') {
        const value = parseFloat(document.getElementById('value').value);
        const fromUnit = document.getElementById('fromUnit').value;
        const toUnit = document.getElementById('toUnit').value;

        // Validaciones
        if (isNaN(value)) {
            resultDiv.innerHTML = 'Por favor, ingresa un valor numérico.';
            return;
        }
        if (fromUnit === toUnit) {
            resultDiv.innerHTML = `El valor sigue siendo ${value.toFixed(2)} °${toUnit.toUpperCase()}.`;
            return;
        }

        let celsius;
        if (fromUnit === 'c') celsius = value;
        else if (fromUnit === 'k') celsius = value - 273.15;
        else if (fromUnit === 'f') celsius = (value - 32) * 5 / 9;

        let result;
        if (toUnit === 'c') result = celsius;
        else if (toUnit === 'k') result = celsius + 273.15;
        else if (toUnit === 'f') result = celsius * 9 / 5 + 32;

    
        if (toUnit === 'k' && result < 0) {
            resultDiv.innerHTML = 'La temperatura en Kelvin no puede ser negativa.';
            return;
        }

        resultsHTML = `${value.toFixed(2)} °${fromUnit.toUpperCase()} = ${result.toFixed(2)} °${toUnit.toUpperCase()}`;
    } else if (category === 'momento') {
        if (subcategory === 'momento') {
            let m = document.getElementById('m').value === '' ? null : parseFloat(document.getElementById('m').value);
            let v = document.getElementById('v').value === '' ? null : parseFloat(document.getElementById('v').value);
            const mUnit = document.getElementById('mUnit').value;
            const vUnit = document.getElementById('vUnit').value;

         
            if ([m, v].filter(x => x !== null).length < 2) {
                resultDiv.innerHTML = 'Se necesitan ambos valores.';
                return;
            }
            if (m <= 0) {
                resultDiv.innerHTML = 'La masa debe ser mayor que 0.';
                return;
            }

            m = m * conversions.masa[mUnit];
            v = v * conversions.velocidad[vUnit];
            const p = m * v;
            resultsHTML = `Momento lineal = ${p.toFixed(2)} kg·m/s`;

       
            const vBase = v;
            const vPoints = [];
            const pPoints = [];
            const numPoints = 50;
            for (let i = 0; i <= numPoints; i++) {
                const velocity = (i / numPoints) * vBase * 2 - vBase; 
                const momentum = m * velocity;
                vPoints.push(velocity.toFixed(2));
                pPoints.push(momentum.toFixed(2));
            }

            const ctx = document.getElementById('physicsChart').getContext('2d');
            chartInstance = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: vPoints,
                    datasets: [{
                        label: 'Momento Lineal (kg·m/s)',
                        data: pPoints,
                        borderColor: '#9c27b0',
                        fill: false,
                        tension: 0.1
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        x: {
                            title: {
                                display: true,
                                text: 'Velocidad (m/s)'
                            }
                        },
                        y: {
                            title: {
                                display: true,
                                text: 'Momento Lineal (kg·m/s)'
                            }
                        }
                    }
                }
            });
        } else if (subcategory === 'colision_elastica') {
            let m1 = document.getElementById('m1').value === '' ? null : parseFloat(document.getElementById('m1').value);
            let v1i = document.getElementById('v1i').value === '' ? null : parseFloat(document.getElementById('v1i').value);
            let m2 = document.getElementById('m2').value === '' ? null : parseFloat(document.getElementById('m2').value);
            let v2i = document.getElementById('v2i').value === '' ? null : parseFloat(document.getElementById('v2i').value);
            const m1Unit = document.getElementById('m1Unit').value;
            const v1iUnit = document.getElementById('v1iUnit').value;
            const m2Unit = document.getElementById('m2Unit').value;
            const v2iUnit = document.getElementById('v2iUnit').value;

            // Validaciones
            if ([m1, v1i, m2, v2i].filter(x => x !== null).length < 4) {
                resultDiv.innerHTML = 'Se necesitan todos los valores.';
                return;
            }
            if (m1 <= 0 || m2 <= 0) {
                resultDiv.innerHTML = 'Las masas deben ser mayores que 0.';
                return;
            }

            m1 = m1 * conversions.masa[m1Unit];
            v1i = v1i * conversions.velocidad[v1iUnit];
            m2 = m2 * conversions.masa[m2Unit];
            v2i = v2i * conversions.velocidad[v2iUnit];

            
            const v1f = ((m1 - m2) * v1i + 2 * m2 * v2i) / (m1 + m2);
            const v2f = ((m2 - m1) * v2i + 2 * m1 * v1i) / (m1 + m2);

            
            const v1fConverted = v1f / conversions.velocidad[v1iUnit];
            const v2fConverted = v2f / conversions.velocidad[v2iUnit];

            resultsHTML = `Velocidad final del objeto 1 = ${v1fConverted.toFixed(2)} ${v1iUnit}, Velocidad final del objeto 2 = ${v2fConverted.toFixed(2)} ${v2iUnit}`;
        } else if (subcategory === 'colision_inelastica') {
            let m1 = document.getElementById('m1').value === '' ? null : parseFloat(document.getElementById('m1').value);
            let v1i = document.getElementById('v1i').value === '' ? null : parseFloat(document.getElementById('v1i').value);
            let m2 = document.getElementById('m2').value === '' ? null : parseFloat(document.getElementById('m2').value);
            let v2i = document.getElementById('v2i').value === '' ? null : parseFloat(document.getElementById('v2i').value);
            const m1Unit = document.getElementById('m1Unit').value;
            const v1iUnit = document.getElementById('v1iUnit').value;
            const m2Unit = document.getElementById('m2Unit').value;
            const v2iUnit = document.getElementById('v2iUnit').value;

            // Validaciones
            if ([m1, v1i, m2, v2i].filter(x => x !== null).length < 4) {
                resultDiv.innerHTML = 'Se necesitan todos los valores.';
                return;
            }
            if (m1 <= 0 || m2 <= 0) {
                resultDiv.innerHTML = 'Las masas deben ser mayores que 0.';
                return;
            }

            m1 = m1 * conversions.masa[m1Unit];
            v1i = v1i * conversions.velocidad[v1iUnit];
            m2 = m2 * conversions.masa[m2Unit];
            v2i = v2i * conversions.velocidad[v2iUnit];

         
            const vf = (m1 * v1i + m2 * v2i) / (m1 + m2);

          
            const vfConverted = vf / conversions.velocidad[v1iUnit];

            resultsHTML = `Velocidad final (juntos) = ${vfConverted.toFixed(2)} ${v1iUnit}`;
        }
    } else if (category === 'gravedad' && subcategory === 'fuerza_gravitacional') {
        let m1 = document.getElementById('m1').value === '' ? null : parseFloat(document.getElementById('m1').value);
        let m2 = document.getElementById('m2').value === '' ? null : parseFloat(document.getElementById('m2').value);
        let r = document.getElementById('r').value === '' ? null : parseFloat(document.getElementById('r').value);
        const m1Unit = document.getElementById('m1Unit').value;
        const m2Unit = document.getElementById('m2Unit').value;
        const rUnit = document.getElementById('rUnit').value;
        const G = 6.67430e-11; 
     

        if ([m1, m2, r].filter(x => x !== null).length < 3) {
            resultDiv.innerHTML = 'Se necesitan todos los valores.';
            return;
        }
        if (m1 <= 0 || m2 <= 0) {
            resultDiv.innerHTML = 'Las masas deben ser mayores que 0.';
            return;
        }
        if (r <= 0) {
            resultDiv.innerHTML = 'La distancia debe ser mayor que 0.';
            return;
        }

        m1 = m1 * conversions.masa[m1Unit];
        m2 = m2 * conversions.masa[m2Unit];
        r = r * conversions.longitud[rUnit];

        const F = (G * m1 * m2) / (r * r);
        resultsHTML = `Fuerza gravitacional = ${F.toFixed(2)} N`;

        
        const rBase = r;
        const rPoints = [];
        const fPoints = [];
        const numPoints = 50;
        for (let i = 1; i <= numPoints; i++) {
            const distance = (i / numPoints) * rBase * 2;
            const force = (G * m1 * m2) / (distance * distance);
            rPoints.push(distance.toFixed(2));
            fPoints.push(force.toFixed(2));
        }

        const ctx = document.getElementById('physicsChart').getContext('2d');
        chartInstance = new Chart(ctx, {
            type: 'line',
            data: {
                labels: rPoints,
                datasets: [{
                    label: 'Fuerza Gravitacional (N)',
                    data: fPoints,
                    borderColor: '#dc3545',
                    fill: false,
                    tension: 0.1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Distancia (m)'
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Fuerza (N)'
                        },
                        min: 0
                    }
                }
            }
        });
    } else if (category === 'electricidad') {
        if (subcategory === 'coulomb') {
            let q1 = document.getElementById('q1').value === '' ? null : parseFloat(document.getElementById('q1').value);
            let q2 = document.getElementById('q2').value === '' ? null : parseFloat(document.getElementById('q2').value);
            let r = document.getElementById('r').value === '' ? null : parseFloat(document.getElementById('r').value);
            const rUnit = document.getElementById('rUnit').value;
            const k = 8.9875517923e9; 

            
            if ([q1, q2, r].filter(x => x !== null).length < 3) {
                resultDiv.innerHTML = 'Se necesitan todos los valores.';
                return;
            }
            if (r <= 0) {
                resultDiv.innerHTML = 'La distancia debe ser mayor que 0.';
                return;
            }

            r = r * conversions.longitud[rUnit];

            const F = (k * Math.abs(q1 * q2)) / (r * r);
            const direction = (q1 * q2 > 0) ? 'Repulsión' : 'Atracción';
            resultsHTML = `Fuerza electrostática = ${F.toFixed(2)} N (${direction})`;

          
            const rBase = r; 
            const rPoints = [];
            const fPoints = [];
            const numPoints = 50;
            for (let i = 1; i <= numPoints; i++) {
                const distance = (i / numPoints) * rBase * 2; 
                const force = (k * Math.abs(q1 * q2)) / (distance * distance);
                rPoints.push(distance.toFixed(2));
                fPoints.push(force.toFixed(2));
            }

            const ctx = document.getElementById('physicsChart').getContext('2d');
            chartInstance = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: rPoints,
                    datasets: [{
                        label: 'Fuerza Electrostática (N)',
                        data: fPoints,
                        borderColor: '#ffeb3b',
                        fill: false,
                        tension: 0.1
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        x: {
                            title: {
                                display: true,
                                text: 'Distancia (m)'
                            }
                        },
                        y: {
                            title: {
                                display: true,
                                text: 'Fuerza (N)'
                            },
                            min: 0
                        }
                    }
                }
            });
        } else if (subcategory === 'ohm') {
            let v = document.getElementById('v').value === '' ? null : parseFloat(document.getElementById('v').value);
            let i = document.getElementById('i').value === '' ? null : parseFloat(document.getElementById('i').value);
            let r = document.getElementById('r').value === '' ? null : parseFloat(document.getElementById('r').value);

            // Validaciones
            if ([v, i, r].filter(x => x !== null).length < 2) {
                resultDiv.innerHTML = 'Se necesitan al menos 2 valores.';
                return;
            }
            if (r !== null && r <= 0) {
                resultDiv.innerHTML = 'La resistencia debe ser mayor que 0.';
                return;
            }
            if (i !== null && i <= 0) {
                resultDiv.innerHTML = 'La corriente debe ser mayor que 0.';
                return;
            }

            if (v === null) v = i * r;
            else if (i === null) i = v / r;
            else if (r === null) r = v / i;

            resultsHTML = `Voltaje = ${v.toFixed(2)} V, Corriente = ${i.toFixed(2)} A, Resistencia = ${r.toFixed(2)} Ω`;

      
            const rBase = r; 
            const rPoints = [];
            const iPoints = [];
            const numPoints = 50;
            for (let i = 1; i <= numPoints; i++) {
                const resistance = (i / numPoints) * rBase * 2;
                const current = v / resistance;
                rPoints.push(resistance.toFixed(2));
                iPoints.push(current.toFixed(2));
            }

            const ctx = document.getElementById('physicsChart').getContext('2d');
            chartInstance = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: rPoints,
                    datasets: [{
                        label: 'Corriente (A)',
                        data: iPoints,
                        borderColor: '#2196f3',
                        fill: false,
                        tension: 0.1
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        x: {
                            title: {
                                display: true,
                                text: 'Resistencia (Ω)'
                            }
                        },
                        y: {
                            title: {
                                display: true,
                                text: 'Corriente (A)'
                            },
                            min: 0
                        }
                    }
                }
            });
        }
    } else if (category === 'ondas') {
        if (subcategory === 'velocidad_onda') {
            let f = document.getElementById('f').value === '' ? null : parseFloat(document.getElementById('f').value);
            let lambda = document.getElementById('lambda').value === '' ? null : parseFloat(document.getElementById('lambda').value);
            let v = document.getElementById('v').value === '' ? null : parseFloat(document.getElementById('v').value);
            const lambdaUnit = document.getElementById('lambdaUnit').value;
            const vUnit = document.getElementById('vUnit').value;

            // Validaciones
            if ([f, lambda, v].filter(x => x !== null).length < 2) {
                resultDiv.innerHTML = 'Se necesitan al menos 2 valores.';
                return;
            }
            if (f !== null && f <= 0) {
                resultDiv.innerHTML = 'La frecuencia debe ser mayor que 0.';
                return;
            }
            if (lambda !== null && lambda <= 0) {
                resultDiv.innerHTML = 'La longitud de onda debe ser mayor que 0.';
                return;
            }
            if (v !== null && v <= 0) {
                resultDiv.innerHTML = 'La velocidad debe ser mayor que 0.';
                return;
            }

            lambda = lambda !== null ? lambda * conversions.longitud[lambdaUnit] : null;
            v = v !== null ? v * conversions.velocidad[vUnit] : null;

            if (v === null) v = f * lambda;
            else if (f === null) f = v / lambda;
            else if (lambda === null) lambda = v / f;

            lambda = lambda / conversions.longitud[lambdaUnit];
            v = v / conversions.velocidad[vUnit];

            resultsHTML = `Frecuencia = ${f.toFixed(2)} Hz, Longitud de onda = ${lambda.toFixed(2)} ${lambdaUnit}, Velocidad = ${v.toFixed(2)} ${vUnit}`;
        } else if (subcategory === 'reflexion') {
            let theta_i = document.getElementById('theta_i').value === '' ? null : parseFloat(document.getElementById('theta_i').value);

            // Validaciones
            if (theta_i === null) {
                resultDiv.innerHTML = 'Se necesita el ángulo de incidencia.';
                return;
            }
            if (theta_i < 0 || theta_i > 90) {
                resultDiv.innerHTML = 'El ángulo de incidencia debe estar entre 0° y 90°.';
                return;
            }

            const theta_r = theta_i; 
            resultsHTML = `Ángulo de reflexión = ${theta_r.toFixed(2)}°`;
        }
    } else if (category === 'termodinamica') {
        if (subcategory === 'calor') {
            let m = document.getElementById('m').value === '' ? null : parseFloat(document.getElementById('m').value);
            let c = document.getElementById('c').value === '' ? null : parseFloat(document.getElementById('c').value);
            let deltaT = document.getElementById('deltaT').value === '' ? null : parseFloat(document.getElementById('deltaT').value);
            const mUnit = document.getElementById('mUnit').value;

           
            if ([m, c, deltaT].filter(x => x !== null).length < 3) {
                resultDiv.innerHTML = 'Se necesitan todos los valores.';
                return;
            }
            if (m <= 0) {
                resultDiv.innerHTML = 'La masa debe ser mayor que 0.';
                return;
            }
            if (c <= 0) {
                resultDiv.innerHTML = 'El calor específico debe ser mayor que 0.';
                return;
            }

            m = m * conversions.masa[mUnit];
            const Q = m * c * deltaT;
            resultsHTML = `Calor transferido = ${Q.toFixed(2)} J`;
        } else if (subcategory === 'gases') {
            let p = document.getElementById('p').value === '' ? null : parseFloat(document.getElementById('p').value);
            let v = document.getElementById('v').value === '' ? null : parseFloat(document.getElementById('v').value);
            let t = document.getElementById('t').value === '' ? null : parseFloat(document.getElementById('t').value);
            let n = document.getElementById('n').value === '' ? null : parseFloat(document.getElementById('n').value);
            const R = 8.314; 

            
            if ([p, v, t, n].filter(x => x !== null).length < 3) {
                resultDiv.innerHTML = 'Se necesitan al menos 3 valores.';
                return;
            }
            if (p !== null && p <= 0) {
                resultDiv.innerHTML = 'La presión debe ser mayor que 0.';
                return;
            }
            if (v !== null && v <= 0) {
                resultDiv.innerHTML = 'El volumen debe ser mayor que 0.';
                return;
            }
            if (t !== null && t <= 0) {
                resultDiv.innerHTML = 'La temperatura debe ser mayor que 0 (en Kelvin).';
                return;
            }
            if (n !== null && n <= 0) {
                resultDiv.innerHTML = 'La cantidad de moles debe ser mayor que 0.';
                return;
            }

            
            if (p === null) p = (n * R * t) / v;
            else if (v === null) v = (n * R * t) / p;
            else if (n === null) n = (p * v) / (R * t);
            else if (t === null) t = (p * v) / (n * R);

            resultsHTML = `Presión = ${p.toFixed(2)} Pa, Volumen = ${v.toFixed(2)} m³, Temperatura = ${t.toFixed(2)} K, Moles = ${n.toFixed(2)} mol`;
        }
    }

    resultDiv.innerHTML = resultsHTML;
}


document.getElementById('category').addEventListener('change', updateSubcategories);
document.getElementById('subcategory').addEventListener('change', showInputs);
document.getElementById('calculate').addEventListener('click', calculate);
document.getElementById('clear').addEventListener('click', clearForm);