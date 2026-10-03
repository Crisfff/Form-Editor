(() => {
  const PAGE1_W = 1536;
  const PAGE1_H = 1024;
  const PAGE2_W = 1536;
  const PAGE2_H = 1921;
  const BOX_W = 33;
  const BOX_H = 31;
  const STORAGE_KEY = "form-editor-v1";

  const seq = (start, count, step) =>
    Array.from({ length: count }, (_, i) => start + i * step);

  const spreadXs = (left, right, count, boxW = BOX_W) => {
    if (count === 1) return [left];
    const step = (right - left - boxW) / (count - 1);
    return Array.from({ length: count }, (_, i) =>
      +(left + i * step).toFixed(2)
    );
  };

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
    { page: 1, id: "surname", label: "Фамилия · Apellido", kind: "slots", xs: row75, y: 75 },
    { page: 1, id: "name", label: "Имя · Nombre", kind: "slots", xs: row75, y: 115 },
    { page: 1, id: "patronymic", label: "Отчество · Patronímico", kind: "slots", xs: row155, y: 155 },
    { page: 1, id: "citizenship", label: "Гражданство / подданство · Ciudadanía", kind: "slots", xs: row155, y: 195 },

    { page: 1, id: "birthDay", label: "Дата рождения · Día", kind: "slots", xs: [328,370], y: 235, numeric: true },
    { page: 1, id: "birthMonth", label: "Дата рождения · Mes", kind: "slots", xs: [499,541], y: 235, numeric: true },
    { page: 1, id: "birthYear", label: "Дата рождения · Año", kind: "slots", xs: [652,694,736,777], y: 235, numeric: true },
    { page: 1, id: "gender", label: "Пол · Sexo", kind: "choice", choices: [
      { value: "male", x: 1107, y: 235 },
      { value: "female", x: 1317, y: 235 }
    ]},

    { page: 1, id: "documentType", label: "Документ · Tipo", kind: "slots", xs: row305Type, y: 305 },
    { page: 1, id: "documentNumber", label: "Документ · Número", kind: "slots", xs: row305Number, y: 305 },
    { page: 1, id: "issueDay", label: "Дата выдачи · Día", kind: "slots", xs: [293,333], y: 345, numeric: true },
    { page: 1, id: "issueMonth", label: "Дата выдачи · Mes", kind: "slots", xs: [445,485], y: 345, numeric: true },
    { page: 1, id: "issueYear", label: "Дата выдачи · Año", kind: "slots", xs: [578,617,656,696], y: 345, numeric: true },
    { page: 1, id: "expiryDay", label: "Срок действия · Día", kind: "slots", xs: [1015,1055], y: 345, numeric: true },
    { page: 1, id: "expiryMonth", label: "Срок действия · Mes", kind: "slots", xs: [1167,1206], y: 345, numeric: true },
    { page: 1, id: "expiryYear", label: "Срок действия · Año", kind: "slots", xs: [1290,1327,1364,1400], y: 345, numeric: true },

    { page: 1, id: "federalSubject", label: "Субъект Российской Федерации", kind: "slots", xs: row450, y: 450 },
    { page: 1, id: "district", label: "Район · Distrito", kind: "slots", xs: row490, y: 490 },
    { page: 1, id: "locality", label: "Городской округ / населенный пункт", kind: "slots", xs: row570, y: 570 },
    { page: 1, id: "street", label: "Улица · Calle", kind: "slots", xs: row610, y: 610 },

    { page: 1, id: "house", label: "Дом · Casa", kind: "text", x: 159, y: 653, w: 120, h: 33, max: 10 },
    { page: 1, id: "building", label: "Здание, строение, сооружение", kind: "text", x: 641, y: 653, w: 289, h: 32, max: 24 },
    { page: 1, id: "corpus", label: "Корпус", kind: "slots", xs: [1031,1063,1096], y: 654 },
    { page: 1, id: "structure", label: "Строение", kind: "text", x: 1232, y: 653, w: 199, h: 32, max: 8 },
    { page: 1, id: "apartment", label: "Квартира · Apartamento", kind: "slots", xs: [198,241], y: 695 },

    { page: 1, id: "apartmentPremises", label: "Помещение в пределах квартиры", kind: "slots", xs: row695Right, y: 695 },
    { page: 1, id: "roomCadastral", label: "Кадастровый номер помещения", kind: "slots", xs: row745, y: 745 },
    { page: 1, id: "actualResidence", label: "Фактическое место проживания", kind: "slots", xs: row800, y: 800 },
    { page: 1, id: "otherUse", label: "Строение иное использование", kind: "slots", xs: row860, y: 860 },
    { page: 1, id: "settlement", label: "Городское и сельское поселение", kind: "slots", xs: row860, y: 900 },
    { page: 1, id: "landCadastral", label: "Кадастровый номер земельного участка", kind: "slots", xs: row860, y: 940 },

    { page: 1, id: "stayDay", label: "Срок пребывания · Día", kind: "slots", xs: [555,595], y: 980, numeric: true },
    { page: 1, id: "stayMonth", label: "Срок пребывания · Mes", kind: "slots", xs: [726,766], y: 980, numeric: true },
    { page: 1, id: "stayYear", label: "Срок пребывания · Año", kind: "slots", xs: [883,921,959,997], y: 979, numeric: true }
  ];

  const P2_RIGHT = 1428;
  const P2_LABEL_X = 109;
  const P2_ROW_LEFT = 207;
  const P2_ROW_INDENT = 328;

  const fields2 = [
    {
      page: 2,
      id: "p2Surname",
      label: "Página 2 · Фамилия · Apellido",
      kind: "slots",
      xs: spreadXs(P2_ROW_LEFT, P2_RIGHT, 28),
      y: 230,
      boxW: BOX_W,
      boxH: BOX_H
    },
    {
      page: 2,
      id: "p2Name",
      label: "Página 2 · Имя · Nombre",
      kind: "slots",
      xs: spreadXs(P2_ROW_LEFT, P2_RIGHT, 28),
      y: 297,
      boxW: BOX_W,
      boxH: BOX_H
    },
    {
      page: 2,
      id: "p2Patronymic",
      label: "Página 2 · Отчество",
      kind: "slots",
      xs: spreadXs(P2_ROW_INDENT, P2_RIGHT, 26),
      y: 364,
      boxW: BOX_W,
      boxH: BOX_H
    },
    {
      page: 2,
      id: "p2Organization1",
      label: "Página 2 · Наименование организации",
      kind: "slots",
      xs: spreadXs(P2_ROW_INDENT, P2_RIGHT, 26),
      y: 459,
      boxW: BOX_W,
      boxH: BOX_H
    },
    {
      page: 2,
      id: "p2Organization2",
      label: "Página 2 · Наименование организации, продолжение",
      kind: "slots",
      xs: spreadXs(P2_LABEL_X, 788, 16),
      y: 568,
      boxW: BOX_W,
      boxH: BOX_H
    },
    {
      page: 2,
      id: "p2Inn",
      label: "Página 2 · ИНН",
      kind: "slots",
      xs: spreadXs(930, P2_RIGHT, 12),
      y: 568,
      boxW: BOX_W,
      boxH: BOX_H,
      numeric: true
    }
  ];

  const allFields = [...fields, ...fields2];

  const overlay = document.getElementById("overlay");
  const overlay2 = document.getElementById("overlay2");
  const page = document.getElementById("formPage");
  const page2 = document.getElementById("formPage2");
  const shell = document.getElementById("pageShell");
  const shell2 = document.getElementById("pageShell2");
  const stage = document.getElementById("stage");
  const fieldStatus = document.getElementById("fieldStatus");
  const zoomValue = document.getElementById("zoomValue");
  const previewToolbar = document.getElementById("previewToolbar");
  const pageIndicator = document.getElementById("pageIndicator");
  const page2Tools = document.getElementById("page2Tools");
  const signatureBtn = document.getElementById("signatureBtn");
  const stampBtn = document.getElementById("stampBtn");
  const signatureInput = document.getElementById("signatureInput");
  const stampInput = document.getElementById("stampInput");

  let values = {};
  let scale = 1;
  let manualZoom = false;
  let currentPage = 1;
  const controls = new Map();

  try {
    values = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}") || {};
  } catch {
    values = {};
  }

  function svgBase(width, height, extraClass = "") {
    const NS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(NS, "svg");
    svg.classList.add("form-paper");
    if (extraClass) svg.classList.add(extraClass);
    svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
    svg.setAttribute("aria-hidden", "true");

    const add = (name, attrs = {}, value = "") => {
      const el = document.createElementNS(NS, name);
      Object.entries(attrs).forEach(([key, val]) => el.setAttribute(key, String(val)));
      if (value) el.textContent = value;
      svg.appendChild(el);
      return el;
    };

    const text = (x, y, value, size = 20, weight = 400, anchor = "start") =>
      add("text", {
        x, y,
        "font-family": '"Tinos","Times New Roman",serif',
        "font-size": size,
        "font-weight": weight,
        "text-anchor": anchor,
        fill: "#000"
      }, value);

    const rect = (x, y, w = BOX_W, h = BOX_H, strokeWidth = 1.35) =>
      add("rect", {
        x, y, width: w, height: h,
        fill: "none",
        stroke: "#000",
        "stroke-width": strokeWidth,
        "shape-rendering": "geometricPrecision"
      });

    const line = (x1, y1, x2, y2, attrs = {}) =>
      add("line", { x1, y1, x2, y2, stroke: "#000", "stroke-width": 1.35, ...attrs });

    const fitText = (x, y, value, size, maxWidth, weight = 400, anchor = "start") => {
      const el = text(x, y, value, size, weight, anchor);
      try {
        const actualWidth = el.getComputedTextLength();
        if (actualWidth > maxWidth && actualWidth > 0) {
          const fittedSize = Math.max(9, size * (maxWidth / actualWidth));
          el.setAttribute("font-size", fittedSize.toFixed(2));
        }
      } catch {
        const estimatedWidth = Math.max(1, value.length * size * 0.55);
        if (estimatedWidth > maxWidth) {
          el.setAttribute("font-size", Math.max(9, size * (maxWidth / estimatedWidth)).toFixed(2));
        }
      }
      return el;
    };

    return { svg, add, text, fitText, rect, line };
  }

  function drawStaticForm() {
    const { svg, text, fitText, rect, line } = svgBase(PAGE1_W, PAGE1_H);

    line(110, 30, 680, 30, { "stroke-width": 3, "stroke-dasharray": "10 6" });
    line(855, 30, 1428, 30, { "stroke-width": 3, "stroke-dasharray": "10 6" });
    text(768, 37, "Линия отрыва", 20, 400, "middle");

    text(109, 63, "Настоящим подтверждается, что", 20);
    text(109, 101, "Фамилия", 20);
    text(109, 141, "Имя", 20);
    fitText(109, 181, "Отчество (при наличии)", 20, 205);
    fitText(109, 221, "Гражданство / подданство", 18, 205);

    fitText(109, 260, "Дата рождения:", 20, 145);
    text(272, 260, "число", 18);
    text(442, 260, "месяц", 18);
    text(612, 260, "год", 18);
    text(922, 260, "Пол:", 20);
    text(1014, 260, "мужской", 18);
    text(1223, 260, "женский", 18);

    text(109, 298, "Документ, удостоверяющий личность:", 20);
    text(109, 329, "вид", 20);
    text(814, 329, "№", 20);
    text(109, 369, "Дата выдачи:", 20);
    text(241, 369, "число", 18);
    text(389, 369, "месяц", 18);
    text(542, 369, "год", 18);
    text(803, 369, "Срок действия до:", 20);
    text(963, 369, "число", 18);
    text(1113, 369, "месяц", 18);
    text(1256, 369, "год", 18);

    text(257, 416, "(в случае ограничения срока действия документа)", 17);
    fitText(109, 442, "в установленном порядке уведомил о прибытии в место пребывания по адресу:", 17, 1180);
    fitText(109, 473, "субъект Российской Федерации", 18, 245);
    text(109, 514, "район", 20);
    text(289, 540, "(при наличии)", 16);

    fitText(109, 562, "городской округ (при наличии), внутригородской район (при наличии), населенный пункт", 16, 1185);
    text(109, 634, "улица", 20);
    text(326, 654, "(при наличии)", 16);

    text(109, 679, "дом", 20);
    fitText(407, 679, "здание, строение, сооружение", 18, 215);
    fitText(969, 679, "корпус", 18, 52);
    fitText(1151, 679, "строение", 18, 66);
    text(109, 722, "квартира", 20);
    fitText(388, 722, "представленных в пределах квартиры (при наличии)", 15, 345);

    fitText(109, 752, "Кадастровый номер (при наличии), помещение в пределах квартиры (при наличии),", 14, 585);
    fitText(109, 770, "кадастровый номер (при наличии), жилое или нежилое помещение в", 14, 585);
    fitText(109, 788, "пределах здания (сооружения) в случае, предусмотренном Федеральным законом", 14, 585);

    fitText(109, 816, "фактическое место проживания (в случае, если место пребывания не совпадает с адресом места пребывания,", 13, 625);
    fitText(109, 834, "указанным в документе, удостоверяющем личность (в том числе временном)),", 13, 625);
    text(109, 852, "оказываемые гостиничные услуги)", 13);

    fitText(109, 884, "строение иное использование (в случае, если место пребывания не совпадает с адресом места пребывания,", 13, 625);
    fitText(109, 902, "указанным в документе, удостоверяющем личность (в том числе временном))", 13, 625);

    fitText(109, 929, "городское и сельское поселение (при наличии), внутригородской район (при наличии)", 15, 625);
    fitText(109, 965, "Кадастровый номер земельного участка (при наличии)", 16, 625);

    fitText(109, 1003, "Заявленный срок пребывания до:", 20, 365);
    text(494, 1003, "число", 18);
    text(665, 1003, "месяц", 18);
    text(839, 1003, "год", 18);

    fields.forEach(field => {
      const bw = field.boxW || BOX_W;
      const bh = field.boxH || BOX_H;
      if (field.kind === "slots") field.xs.forEach(x => rect(x, field.y, bw, bh));
      if (field.kind === "text") rect(field.x, field.y, field.w, field.h);
      if (field.kind === "choice") field.choices.forEach(choice => rect(choice.x, choice.y, bw, bh));
    });

    page.insertBefore(svg, overlay);
  }

  function drawSecondForm() {
    const { svg, text, fitText, rect } = svgBase(PAGE2_W, PAGE2_H, "page-two-paper");

    text(768, 103, "Для принимающей стороны либо иностранного гражданина или лица без гражданства в случае,", 20, 700, "middle");
    text(768, 132, "предусмотренном частью 3¹ статьи 22 Федерального закона \"О миграционном учете иностранных", 20, 700, "middle");
    text(768, 161, "граждан и лиц без гражданства в Российской Федерации\"", 20, 700, "middle");

    fitText(109, 255, "Фамилия", 20, 82);
    fitText(109, 322, "Имя", 20, 82);
    fitText(109, 389, "Отчество", 20, 190);
    fitText(109, 413, "(при их наличии)", 18, 190);
    fitText(109, 484, "Наименование", 20, 190);
    fitText(109, 512, "организации", 20, 190);
    fitText(845, 593, "ИНН", 20, 60);

    fields2.forEach(field => {
      const bw = field.boxW || BOX_W;
      const bh = field.boxH || BOX_H;
      field.xs.forEach(x => rect(x, field.y, bw, bh, 1.35));
    });

    // Distribución inferior basada en la referencia:
    // firma a la izquierda, cuño oficial a la derecha y sello de organización debajo.
    rect(109, 760, 500, 150, 1.45);
    rect(760, 750, 667, 430, 1.45);

    text(359, 952, "Подпись принимающей стороны либо", 20, 400, "middle");
    text(359, 980, "иностранного гражданина или лица без", 20, 400, "middle");
    text(359, 1008, "гражданства, в случаях, предусмотренных", 20, 400, "middle");
    text(359, 1036, "частями 3¹, 3², 4 статьи 22 Федерального", 20, 400, "middle");
    text(359, 1064, "закона \"О миграционном учете иностранных", 20, 400, "middle");
    text(359, 1092, "граждан и лиц без гражданства", 20, 400, "middle");
    text(359, 1120, "в Российской Федерации\"", 20, 400, "middle");

    text(1094, 1225, "Отметка о подтверждении выполнения принимающей", 19, 400, "middle");
    text(1094, 1253, "стороной и иностранным гражданином или лицом без", 19, 400, "middle");
    text(1094, 1281, "гражданства действий, необходимых для его постановки", 19, 400, "middle");
    text(1094, 1309, "на учет по месту пребывания", 19, 400, "middle");

    rect(109, 1250, 500, 300, 1.45);
    text(359, 1592, "Печать организации", 20, 400, "middle");
    text(359, 1620, "(при наличии)", 20, 400, "middle");

    text(768, 1682, "ОТРЫВНАЯ ЧАСТЬ БЛАНКА УВЕДОМЛЕНИЯ О ПРИБЫТИИ ИНОСТРАННОГО ГРАЖДАНИНА", 21, 400, "middle");
    text(768, 1713, "ИЛИ ЛИЦА БЕЗ ГРАЖДАНСТВА В МЕСТО ПРЕБЫВАНИЯ", 21, 400, "middle");

    page2.insertBefore(svg, overlay2);
  }

  function save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(values));
    } catch (error) {
      console.warn("No se pudo guardar todo en el almacenamiento local.", error);
    }
  }

  function ensurePlacedImage(id, className) {
    let img = document.getElementById(id);
    if (!img) {
      img = document.createElement("img");
      img.id = id;
      img.className = "placed-media " + className;
      img.alt = "";
      img.draggable = false;
      overlay2.appendChild(img);
    }
    return img;
  }

  function renderPlacedMedia() {
    const signature = ensurePlacedImage("signaturePreview", "signature-media");
    const stamp = ensurePlacedImage("stampPreview", "stamp-media");

    signature.src = values.p2SignatureImage || "";
    signature.hidden = !values.p2SignatureImage;

    stamp.src = values.p2StampImage || "";
    stamp.hidden = !values.p2StampImage;
  }

  function compressImageFile(file, maxWidth = 1100, maxHeight = 900, quality = 0.84) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onerror = () => reject(new Error("No se pudo leer la imagen."));
      reader.onload = () => {
        const img = new Image();

        img.onerror = () => reject(new Error("La imagen no es válida."));
        img.onload = () => {
          const ratio = Math.min(1, maxWidth / img.naturalWidth, maxHeight / img.naturalHeight);
          const width = Math.max(1, Math.round(img.naturalWidth * ratio));
          const height = Math.max(1, Math.round(img.naturalHeight * ratio));

          const canvas = document.createElement("canvas");
          canvas.width = width;
          canvas.height = height;

          const ctx = canvas.getContext("2d");
          ctx.fillStyle = "#fff";
          ctx.fillRect(0, 0, width, height);
          ctx.drawImage(img, 0, 0, width, height);

          resolve(canvas.toDataURL("image/jpeg", quality));
        };

        img.src = String(reader.result);
      };

      reader.readAsDataURL(file);
    });
  }

  async function handleMediaUpload(input, storageKey) {
    const file = input.files && input.files[0];
    if (!file) return;

    try {
      const dataUrl = await compressImageFile(file);
      values[storageKey] = dataUrl;
      save();
      renderPlacedMedia();
    } catch (error) {
      alert(error.message || "No se pudo cargar la imagen.");
    } finally {
      input.value = "";
    }
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

  function showPage(pageNumber, keepZoom = false) {
    currentPage = pageNumber === 2 ? 2 : 1;
    shell.classList.toggle("is-hidden", currentPage !== 1);
    shell2.classList.toggle("is-hidden", currentPage !== 2);
    pageIndicator.textContent = currentPage + " / 2";
    page2Tools.classList.toggle("is-hidden", currentPage !== 2 || document.body.classList.contains("result-mode"));
    setStatus("Página " + currentPage + " de 2");
    stage.scrollTo({ top: 0, left: 0, behavior: "auto" });
    if (!keepZoom) {
      manualZoom = false;
      fitToWidth(true);
    }
  }

  function focusNext(id) {
    const index = allFields.findIndex(item => item.id === id);
    for (let i = index + 1; i < allFields.length; i++) {
      const nextField = allFields[i];
      const control = controls.get(nextField.id);
      if (control && typeof control.focus === "function") {
        if (nextField.page !== currentPage) showPage(nextField.page);
        requestAnimationFrame(() => control.focus());
        return;
      }
    }
  }

  function buildSlots(field, targetOverlay) {
    const bw = field.boxW || BOX_W;
    const bh = field.boxH || BOX_H;

    const root = document.createElement("div");
    root.className = "slot-field";
    root.dataset.field = field.id;

    const minX = Math.min(...field.xs);
    const maxX = Math.max(...field.xs);
    root.style.left = minX + "px";
    root.style.top = field.y + "px";
    root.style.width = (maxX - minX + bw) + "px";
    root.style.height = bh + "px";

    const chars = document.createElement("div");
    chars.className = "slot-chars";

    const spans = field.xs.map(x => {
      const span = document.createElement("span");
      span.className = "slot-char";
      span.style.left = (x - minX) + "px";
      span.style.top = "0";
      span.style.width = bw + "px";
      span.style.height = bh + "px";
      span.style.fontSize = "25px";
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
    targetOverlay.appendChild(root);
    controls.set(field.id, input);
    render();
  }

  function buildText(field, targetOverlay) {
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
    targetOverlay.appendChild(root);
    controls.set(field.id, input);
  }

  function buildChoice(field, targetOverlay) {
    const group = {
      focus() {
        const first = targetOverlay.querySelector('[data-choice-group="' + field.id + '"] button');
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
        targetOverlay.querySelectorAll('[data-choice-group="' + field.id + '"] .choice-mark').forEach((el, index) => {
          el.textContent = values[field.id] === field.choices[index].value ? "X" : "";
        });
        save();
      });

      root.appendChild(button);
      targetOverlay.appendChild(root);
      render();
    });
  }

  function buildFieldSet(fieldSet, targetOverlay) {
    fieldSet.forEach(field => {
      if (field.kind === "slots") buildSlots(field, targetOverlay);
      if (field.kind === "text") buildText(field, targetOverlay);
      if (field.kind === "choice") buildChoice(field, targetOverlay);
    });
  }

  function applyScale(next) {
    scale = Math.max(.3, Math.min(1.6, next));
    document.documentElement.style.setProperty("--scale", scale);

    shell.style.width = (PAGE1_W * scale) + "px";
    shell.style.height = (PAGE1_H * scale) + "px";
    shell2.style.width = (PAGE2_W * scale) + "px";
    shell2.style.height = (PAGE2_H * scale) + "px";

    zoomValue.textContent = Math.round(scale * 100) + "%";
  }

  function fitToWidth(force = false) {
    if (manualZoom && !force) return;

    const isMobile = window.innerWidth <= 760;
    const isResult = document.body.classList.contains("result-mode");

    if (isMobile && !isResult) {
      applyScale(.72);
      return;
    }

    const horizontalPadding = isMobile ? 24 : 56;
    const available = Math.max(320, stage.clientWidth - horizontalPadding);
    const targetWidth = currentPage === 1 ? PAGE1_W : PAGE2_W;
    applyScale(Math.min(1, available / targetWidth));
  }

  drawStaticForm();
  drawSecondForm();
  buildFieldSet(fields, overlay);
  buildFieldSet(fields2, overlay2);
  renderPlacedMedia();
  showPage(1);

  signatureBtn.addEventListener("click", () => signatureInput.click());
  stampBtn.addEventListener("click", () => stampInput.click());

  signatureInput.addEventListener("change", () => handleMediaUpload(signatureInput, "p2SignatureImage"));
  stampInput.addEventListener("change", () => handleMediaUpload(stampInput, "p2StampImage"));

  document.getElementById("prevPage").addEventListener("click", () => showPage(currentPage === 1 ? 2 : 1));
  document.getElementById("nextPage").addEventListener("click", () => showPage(currentPage === 1 ? 2 : 1));
  pageIndicator.addEventListener("click", () => showPage(currentPage === 1 ? 2 : 1));

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
    page2Tools.classList.add("is-hidden");
    previewToolbar.setAttribute("aria-hidden", "false");
    shell.classList.remove("is-hidden");
    shell2.classList.remove("is-hidden");
    stage.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    fitToWidth(true);
  });

  document.getElementById("editBtn").addEventListener("click", () => {
    document.body.classList.remove("result-mode");
    previewToolbar.setAttribute("aria-hidden", "true");
    showPage(currentPage, true);
    fitToWidth(true);
  });

  function loadScriptOnce(src) {
    return new Promise((resolve, reject) => {
      const existing = Array.from(document.scripts).find(script => script.src === src);
      if (existing) {
        if (existing.dataset.loaded === "true") {
          resolve();
          return;
        }
        existing.addEventListener("load", () => {
          existing.dataset.loaded = "true";
          resolve();
        }, { once: true });
        existing.addEventListener("error", reject, { once: true });
        return;
      }

      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      script.addEventListener("load", () => {
        script.dataset.loaded = "true";
        resolve();
      }, { once: true });
      script.addEventListener("error", reject, { once: true });
      document.head.appendChild(script);
    });
  }

  async function ensurePdfLibraries() {
    const sources = [
      {
        test: () => !!window.html2canvas,
        urls: [
          "https://unpkg.com/html2canvas@1.4.1/dist/html2canvas.min.js",
          "https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js"
        ]
      },
      {
        test: () => !!(window.jspdf && window.jspdf.jsPDF),
        urls: [
          "https://unpkg.com/jspdf@2.5.2/dist/jspdf.umd.min.js",
          "https://cdn.jsdelivr.net/npm/jspdf@2.5.2/dist/jspdf.umd.min.js"
        ]
      }
    ];

    for (const source of sources) {
      if (source.test()) continue;

      let loaded = false;
      for (const url of source.urls) {
        try {
          await loadScriptOnce(url);
          if (source.test()) {
            loaded = true;
            break;
          }
        } catch {}
      }

      if (!loaded && !source.test()) {
        return false;
      }
    }

    return true;
  }

  function waitForImage(img) {
    if (!img || !img.src || img.hidden) return Promise.resolve();
    if (typeof img.decode === "function") {
      return img.decode().catch(() => undefined);
    }
    if (img.complete) return Promise.resolve();
    return new Promise(resolve => {
      img.addEventListener("load", resolve, { once: true });
      img.addEventListener("error", resolve, { once: true });
    });
  }

  function makePdfCapture(sourcePage, width, height) {
    const host = document.createElement("div");
    host.style.position = "fixed";
    host.style.left = "-20000px";
    host.style.top = "0";
    host.style.width = width + "px";
    host.style.height = height + "px";
    host.style.background = "#fff";
    host.style.overflow = "hidden";
    host.style.zIndex = "-1";

    const clone = sourcePage.cloneNode(true);
    clone.removeAttribute("id");
    clone.style.position = "relative";
    clone.style.left = "0";
    clone.style.top = "0";
    clone.style.width = width + "px";
    clone.style.height = height + "px";
    clone.style.transform = "none";
    clone.style.transformOrigin = "top left";
    clone.style.boxShadow = "none";
    clone.style.margin = "0";
    clone.style.background = "#fff";

    clone.querySelectorAll(".active").forEach(el => el.classList.remove("active"));

    host.appendChild(clone);
    document.body.appendChild(host);

    return { host, clone };
  }

  function addCanvasToPdf(pdf, canvas, pageWidthMm, pageHeightMm) {
    const image = canvas.toDataURL("image/png");
    pdf.addImage(image, "PNG", 0, 0, pageWidthMm, pageHeightMm, undefined, "FAST");
  }

  async function printPdf() {
    const button = document.getElementById("printBtn");

    const librariesReady = await ensurePdfLibraries();
    if (!librariesReady) {
      alert("No se pudieron cargar los componentes necesarios para crear el PDF. Comprueba la conexión y vuelve a intentarlo.");
      return;
    }

    const previousText = button.querySelector("span")?.textContent || "Descargar PDF";
    button.disabled = true;
    if (button.querySelector("span")) button.querySelector("span").textContent = "Generando…";

    try {
      if (document.fonts && document.fonts.ready) {
        try { await document.fonts.ready; } catch {}
      }

      const images = Array.from(page.querySelectorAll("img")).concat(Array.from(page2.querySelectorAll("img")));
      await Promise.all(images.map(waitForImage));

      const capture1 = makePdfCapture(page, PAGE1_W, PAGE1_H);
      const capture2 = makePdfCapture(page2, PAGE2_W, PAGE2_H);

      try {
        const canvas1 = await window.html2canvas(capture1.clone, {
          backgroundColor: "#ffffff",
          scale: 1.5,
          width: PAGE1_W,
          height: PAGE1_H,
          useCORS: true,
          logging: false,
          scrollX: 0,
          scrollY: 0
        });

        const canvas2 = await window.html2canvas(capture2.clone, {
          backgroundColor: "#ffffff",
          scale: 1.5,
          width: PAGE2_W,
          height: PAGE2_H,
          useCORS: true,
          logging: false,
          scrollX: 0,
          scrollY: 0
        });

        const { jsPDF } = window.jspdf;

        // Combine both editor pages into ONE continuous PDF page,
        // keeping the same top-to-bottom order and proportions seen in the editor.
        const gapPx = 48 * 1.5;
        const combinedWidth = Math.max(canvas1.width, canvas2.width);
        const combinedHeight = canvas1.height + gapPx + canvas2.height;

        const combinedCanvas = document.createElement("canvas");
        combinedCanvas.width = combinedWidth;
        combinedCanvas.height = combinedHeight;

        const ctx = combinedCanvas.getContext("2d");
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, combinedWidth, combinedHeight);

        const x1 = (combinedWidth - canvas1.width) / 2;
        const x2 = (combinedWidth - canvas2.width) / 2;

        ctx.drawImage(canvas1, x1, 0);
        ctx.drawImage(canvas2, x2, canvas1.height + gapPx);

        // Custom single-sheet size with the exact combined editor aspect ratio.
        const pdfWidthMm = 210;
        const pdfHeightMm = pdfWidthMm * (combinedHeight / combinedWidth);

        const pdf = new jsPDF({
          orientation: "portrait",
          unit: "mm",
          format: [pdfWidthMm, pdfHeightMm],
          compress: true
        });

        addCanvasToPdf(pdf, combinedCanvas, pdfWidthMm, pdfHeightMm);
        pdf.save("Form-Editor.pdf");
      } finally {
        capture1.host.remove();
        capture2.host.remove();
      }
    } catch (error) {
      console.error(error);
      alert("No se pudo generar el PDF. Recarga la página e inténtalo nuevamente.");
    } finally {
      button.disabled = false;
      if (button.querySelector("span")) button.querySelector("span").textContent = previousText;
    }
  }

  document.getElementById("printBtn").addEventListener("click", printPdf);

  document.getElementById("clearBtn").addEventListener("click", () => {
    if (!confirm("¿Borrar todos los datos escritos en las dos páginas?")) return;
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

  window.addEventListener("load", () => {
    if (window.lucide) window.lucide.createIcons();
  });

  if (document.readyState === "complete" && window.lucide) {
    window.lucide.createIcons();
  }
})();