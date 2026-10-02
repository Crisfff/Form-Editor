(() => {
  const PAGE_W = 1536;
  const PAGE_H = 1024;
  const BOX_W = 33;
  const BOX_H = 31;
  const STORAGE_KEY = "form-editor-v1";

  const row75 = [207,247,287,327,368,408,448,488,528,568,607,647,686,726,765,804,843,882,921,960,999,1038,1077,1116,1155,1194,1233,1273,1313,1354,1395];
  const row155 = [328.5,368.5,408.5,448.5,488.5,528.5,568,607.5,647.5,686.5,726,765.5,804.5,843.5,882.5,921.5,960.5,999.5,1038.5,1077.5,1116.5,1155.5,1194.5,1233.5,1273.5,1313.5,1354.5,1395.5];
  const row305Type = [162.5,203.5,245.5,287,327.5,368.5,408.5,449.5,490.5,530.5,571.5,611.5,652.5,693];
  const row305Number = [848,888,928.5,968.5,1008.5,1049,1089.5,1128.5,1168.5,1208.5,1249.5,1289,1328.5,1365.5,1401];
  const row450 = [373.5,413.5,453.5,493.5,533,572.5,612,651.5,690.5,729.5,768.5,807,845.5,883.5,922,960.5,998.5,1036.5,1074.5,1112,1149.5,1185.5,1221.5,1257,1292.5,1328.5,1364.5,1400.5];
  const row490 = [173.5,213.5,253.5,293.5,333.5,373.5,413.5,453.5,493.5,533,572.5,612,651.5,690.5,729.5,768.5,806.5,845.5,883.5,921.5,960.5,998.5,1036.5,1074.5,1112,1149.5,1185.5,1221.5,1257.5,1292.5,1328.5,1364.5,1400.5];
  const row570 = [120.5,160.5,200.5,240,279,319.5,359.5,399,438.5,478,517,556.5,595.5,634.5,673.5,712.5,752.5,792.5,833.5,873.5,913.5,952.5,992.5,1031.5,1071.5,1110.5,1149.5,1185.5,1221.5,1257,1292.5,1328.5,1364.5,1400.5];
  const row610 = [170,209,247,285,324,364,404,444,482.5,520.5,557.5,596.5,635.5,674.5,713.5,753,792.5,833.5,874,913.5,953.5,992.5,1031.5,1071.5,1110.5,1149.5,1185.5,1221.5,1257,1292.5,1328.5,1364.5,1400.5];
  const row695Right = [782,818,854,890,926,962,1000,1037,1074,1111,1149,1185,1221,1257,1292,1328,1364,1400];
  const row745 = [736,774,812,850,887,925,962,1000,1037,1075,1112,1149,1185,1221,1257,1292,1328,1364,1400];
  const row800 = [773,811,849,888,925,963,1000,1038,1075,1112,1149,1185,1221,1257,1292,1328,1364,1400];
  const row860 = [773,811,849,887,925,962,1000,1037,1075,1112,1149,1185,1221,1257,1292,1328,1364,1400];

  const fields = [
    { id: "surname", label: "Фамилия · Apellido", kind: "slots", xs: row75, y: 75 },
    { id: "name", label: "Имя · Nombre", kind: "slots", xs: row75, y: 115 },
    { id: "patronymic", label: "Отчество · Patronímico", kind: "slots", xs: row155, y: 155 },
    { id: "citizenship", label: "Гражданство / подданство · Ciudadanía", kind: "slots", xs: row155, y: 195 },

    { id: "birthDay", label: "Дата рождения · Día", kind: "slots", xs: [328,370], y: 235, numeric: true },
    { id: "birthMonth", label: "Дата рождения · Mes", kind: "slots", xs: [499,541], y: 235, numeric: true },
    { id: "birthYear", label: "Дата рождения · Año", kind: "slots", xs: [652,694,736,777], y: 235, numeric: true },
    { id: "gender", label: "Пол · Sexo", kind: "choice", choices: [
      { value: "male", x: 1107, y: 235 },
      { value: "female", x: 1317, y: 235 }
    ]},

    { id: "documentType", label: "Документ · Tipo", kind: "slots", xs: row305Type, y: 305 },
    { id: "documentNumber", label: "Документ · Número", kind: "slots", xs: row305Number, y: 305 },
    { id: "issueDay", label: "Дата выдачи · Día", kind: "slots", xs: [293,333], y: 345, numeric: true },
    { id: "issueMonth", label: "Дата выдачи · Mes", kind: "slots", xs: [445,485], y: 345, numeric: true },
    { id: "issueYear", label: "Дата выдачи · Año", kind: "slots", xs: [578,617,656,696], y: 345, numeric: true },
    { id: "expiryDay", label: "Срок действия · Día", kind: "slots", xs: [1015,1055], y: 345, numeric: true },
    { id: "expiryMonth", label: "Срок действия · Mes", kind: "slots", xs: [1167,1206], y: 345, numeric: true },
    { id: "expiryYear", label: "Срок действия · Año", kind: "slots", xs: [1290,1327,1364,1400], y: 345, numeric: true },

    { id: "federalSubject", label: "Субъект Российской Федерации", kind: "slots", xs: row450, y: 450 },
    { id: "district", label: "Район · Distrito", kind: "slots", xs: row490, y: 490 },
    { id: "locality", label: "Городской округ / населенный пункт", kind: "slots", xs: row570, y: 570 },
    { id: "street", label: "Улица · Calle", kind: "slots", xs: row610, y: 610 },

    { id: "house", label: "Дом · Casa", kind: "text", x: 159, y: 653, w: 120, h: 33, max: 10 },
    { id: "building", label: "Здание, строение, сооружение", kind: "text", x: 641, y: 653, w: 289, h: 32, max: 24 },
    { id: "corpus", label: "Корпус", kind: "slots", xs: [1031,1063,1096], y: 654 },
    { id: "structure", label: "Строение", kind: "text", x: 1232, y: 653, w: 199, h: 32, max: 8 },
    { id: "apartment", label: "Квартира · Apartamento", kind: "slots", xs: [198,241], y: 695 },

    { id: "apartmentPremises", label: "Помещение в пределах квартиры", kind: "slots", xs: row695Right, y: 695 },
    { id: "roomCadastral", label: "Кадастровый номер помещения", kind: "slots", xs: row745, y: 745 },
    { id: "actualResidence", label: "Фактическое место проживания", kind: "slots", xs: row800, y: 800 },
    { id: "otherUse", label: "Строение иное использование", kind: "slots", xs: row860, y: 860 },
    { id: "settlement", label: "Городское и сельское поселение", kind: "slots", xs: row860, y: 900 },
    { id: "landCadastral", label: "Кадастровый номер земельного участка", kind: "slots", xs: row860, y: 940 },

    { id: "stayDay", label: "Срок пребывания · Día", kind: "slots", xs: [555,595], y: 980, numeric: true },
    { id: "stayMonth", label: "Срок пребывания · Mes", kind: "slots", xs: [726,766], y: 980, numeric: true },
    { id: "stayYear", label: "Срок пребывания · Año", kind: "slots", xs: [883,921,959,997], y: 979, numeric: true }
  ];

  const overlay = document.getElementById("overlay");
  const page = document.getElementById("formPage");
  const shell = document.getElementById("pageShell");
  const stage = document.getElementById("stage");
  const fieldStatus = document.getElementById("fieldStatus");
  const zoomValue = document.getElementById("zoomValue");
  const previewToolbar = document.getElementById("previewToolbar");

  let values = {};
  let scale = 1;
  let manualZoom = false;
  const controls = new Map();

  try {
    values = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}") || {};
  } catch {
    values = {};
  }

  function save() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(values));
  }

  function normalizeValue(value, numeric = false) {
    let next = value.replace(/[\r\n\t]/g, " ");
    if (numeric) next = next.replace(/\D/g, "");
    return next.toLocaleUpperCase("ru-RU");
  }

  function setStatus(text) {
    fieldStatus.textContent = text || "Toca una casilla para escribir";
  }

  function clearActive() {
    document.querySelectorAll(".active").forEach(el => el.classList.remove("active"));
  }

  function focusNext(id) {
    const index = fields.findIndex(item => item.id === id);
    for (let i = index + 1; i < fields.length; i++) {
      const control = controls.get(fields[i].id);
      if (control && typeof control.focus === "function") {
        control.focus();
        return;
      }
    }
  }

  function buildSlots(field) {
    const root = document.createElement("div");
    root.className = "slot-field";
    root.dataset.field = field.id;

    const minX = Math.min(...field.xs);
    const maxX = Math.max(...field.xs);
    root.style.left = minX + "px";
    root.style.top = field.y + "px";
    root.style.width = (maxX - minX + BOX_W) + "px";
    root.style.height = BOX_H + "px";

    const chars = document.createElement("div");
    chars.className = "slot-chars";

    const spans = field.xs.map(x => {
      const span = document.createElement("span");
      span.className = "slot-char";
      span.style.left = (x - minX) + "px";
      span.style.top = "0";
      chars.appendChild(span);
      return span;
    });

    const input = document.createElement("input");
    input.className = "slot-input";
    input.type = "text";
    input.autocomplete = "off";
    input.autocapitalize = "characters";
    input.spellcheck = false;
    input.maxLength = field.xs.length;
    input.setAttribute("aria-label", field.label);
    if (field.numeric) input.inputMode = "numeric";

    const render = () => {
      const value = values[field.id] || "";
      spans.forEach((span, i) => span.textContent = value[i] || "");
      input.value = value;
    };

    input.addEventListener("focus", () => {
      clearActive();
      root.classList.add("active");
      setStatus(field.label);
    });

    input.addEventListener("blur", () => root.classList.remove("active"));

    input.addEventListener("input", () => {
      const next = normalizeValue(input.value, field.numeric).slice(0, field.xs.length);
      values[field.id] = next;
      render();
      save();
      if (next.length === field.xs.length) focusNext(field.id);
    });

    input.addEventListener("keydown", event => {
      if (event.key === "Enter") {
        event.preventDefault();
        focusNext(field.id);
      }
    });

    root.addEventListener("pointerdown", () => setStatus(field.label));

    root.append(chars, input);
    overlay.appendChild(root);
    controls.set(field.id, input);
    render();
  }

  function buildText(field) {
    const root = document.createElement("div");
    root.className = "text-field";
    root.dataset.field = field.id;
    root.style.left = field.x + "px";
    root.style.top = field.y + "px";
    root.style.width = field.w + "px";
    root.style.height = field.h + "px";

    const input = document.createElement("input");
    input.className = "text-input";
    input.type = "text";
    input.autocomplete = "off";
    input.autocapitalize = "characters";
    input.spellcheck = false;
    input.maxLength = field.max || 30;
    input.value = values[field.id] || "";
    input.setAttribute("aria-label", field.label);

    input.addEventListener("focus", () => {
      clearActive();
      root.classList.add("active");
      setStatus(field.label);
    });

    input.addEventListener("blur", () => root.classList.remove("active"));

    input.addEventListener("input", () => {
      const next = normalizeValue(input.value).slice(0, input.maxLength);
      values[field.id] = next;
      input.value = next;
      save();
    });

    input.addEventListener("keydown", event => {
      if (event.key === "Enter") {
        event.preventDefault();
        focusNext(field.id);
      }
    });

    root.appendChild(input);
    overlay.appendChild(root);
    controls.set(field.id, input);
  }

  function buildChoice(field) {
    const group = {
      focus() {
        const first = overlay.querySelector('[data-choice-group="' + field.id + '"] button');
        if (first) first.focus();
      }
    };
    controls.set(field.id, group);

    field.choices.forEach(choice => {
      const root = document.createElement("div");
      root.className = "choice-field";
      root.dataset.choiceGroup = field.id;
      root.style.left = choice.x + "px";
      root.style.top = choice.y + "px";
      root.style.width = BOX_W + "px";
      root.style.height = BOX_H + "px";

      const button = document.createElement("button");
      button.className = "choice-button";
      button.type = "button";
      button.setAttribute("aria-label", field.label + " " + choice.value);

      const mark = document.createElement("span");
      mark.className = "choice-mark";
      button.appendChild(mark);

      const render = () => {
        mark.textContent = values[field.id] === choice.value ? "X" : "";
      };

      button.addEventListener("focus", () => {
        clearActive();
        root.classList.add("active");
        setStatus(field.label);
      });

      button.addEventListener("blur", () => root.classList.remove("active"));

      button.addEventListener("click", () => {
        values[field.id] = values[field.id] === choice.value ? "" : choice.value;
        overlay.querySelectorAll('[data-choice-group="' + field.id + '"] .choice-mark').forEach((el, index) => {
          el.textContent = values[field.id] === field.choices[index].value ? "X" : "";
        });
        save();
      });

      root.appendChild(button);
      overlay.appendChild(root);
      render();
    });
  }

  fields.forEach(field => {
    if (field.kind === "slots") buildSlots(field);
    if (field.kind === "text") buildText(field);
    if (field.kind === "choice") buildChoice(field);
  });

  function applyScale(next) {
    scale = Math.max(.3, Math.min(1.6, next));
    document.documentElement.style.setProperty("--scale", scale);
    shell.style.width = (PAGE_W * scale) + "px";
    shell.style.height = (PAGE_H * scale) + "px";
    zoomValue.textContent = Math.round(scale * 100) + "%";
  }

  function fitToWidth(force = false) {
    if (manualZoom && !force) return;

    const isMobile = window.innerWidth <= 760;
    const isResult = document.body.classList.contains("result-mode");

    // En móvil no encogemos todo el formulario durante la edición.
    // El documento queda a un tamaño legible y se recorre horizontalmente.
    if (isMobile && !isResult) {
      applyScale(.72);
      return;
    }

    const horizontalPadding = isMobile ? 24 : 56;
    const available = Math.max(320, stage.clientWidth - horizontalPadding);
    const next = Math.min(1, available / PAGE_W);
    applyScale(next);
  }

  document.getElementById("zoomOut").addEventListener("click", () => {
    manualZoom = true;
    applyScale(scale - .1);
  });

  document.getElementById("zoomIn").addEventListener("click", () => {
    manualZoom = true;
    applyScale(scale + .1);
  });

  zoomValue.addEventListener("click", () => {
    manualZoom = false;
    fitToWidth(true);
  });

  document.getElementById("doneBtn").addEventListener("click", () => {
    clearActive();
    document.body.classList.add("result-mode");
    previewToolbar.setAttribute("aria-hidden", "false");
    stage.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    fitToWidth(true);
  });

  document.getElementById("editBtn").addEventListener("click", () => {
    document.body.classList.remove("result-mode");
    previewToolbar.setAttribute("aria-hidden", "true");
    fitToWidth(true);
  });

  document.getElementById("printBtn").addEventListener("click", () => window.print());

  document.getElementById("clearBtn").addEventListener("click", () => {
    if (!confirm("¿Borrar todos los datos escritos en el formulario?")) return;
    values = {};
    save();
    location.reload();
  });

  window.addEventListener("resize", () => fitToWidth(false));

  window.addEventListener("keydown", event => {
    if (event.key === "Escape" && document.body.classList.contains("result-mode")) {
      document.getElementById("editBtn").click();
    }
  });

  fitToWidth(true);

  window.addEventListener("load", () => {
    if (window.lucide) window.lucide.createIcons();
  });

  if (document.readyState === "complete" && window.lucide) {
    window.lucide.createIcons();
  }
})();