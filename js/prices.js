const priceData = [
  {
    ru: "Консультации",
    pl: "Konsultacje",
    noteRu: "выписка электронного рецепта при необходимости входит в стоимость каждой консультации",
    notePl: "wystawienie e-recepty w razie potrzeby wliczone w cenę każdej konsultacji",
    items: [
      {
        ru: "первичная консультация врача дерматолога, врача эстетической медицины (40–60 мин)",
        pl: "pierwsza konsultacja lekarza dermatologa, lekarza medycyny estetycznej (40–60 min)",
        price: "350 zł"
      },
      {
        ru: "повторная консультация (30 мин)",
        pl: "kolejna konsultacja (30 min)",
        price: "250 zł"
      },
      {
        ru: "выписка рецепта (продолжение лечения / экстренная контрацепция)",
        pl: "wystawienie recepty (kontynuacja leczenia / antykoncepcja awaryjna)",
        price: "60 zł"
      }
    ]
  },
  {
    ru: "Мезотерапия, биоревитализация",
    pl: "Mezoterapia, biorewitalizacja",
    items: [
      { ru: "Fillmed NCTF 135HA (3 ml)", pl: "Fillmed NCTF 135HA (3 ml)", price: "500 zł" },
      { ru: "Infini whitening max — лечение пигментации (5 ml)", pl: "Infini whitening max — leczenie przebarwień (5 ml)", price: "500 zł" },
      { ru: "Jalupro classic (3 ml)", pl: "Jalupro classic (3 ml)", price: "600 zł" },
      { ru: "Jalupro HMW (2,5 ml)", pl: "Jalupro HMW (2,5 ml)", price: "700 zł" },
      { ru: "Jalupro Super Hydro (2,5 ml)", pl: "Jalupro Super Hydro (2,5 ml)", price: "800 zł" }
    ]
  },
  {
    ru: "Мезотерапия, биоревитализация, биорепарация области вокруг глаз",
    pl: "Mezoterapia, biorewitalizacja, bioreparacja okolicy oczu",
    items: [
      { ru: "Jalupro young eye (1 ml)", pl: "Jalupro young eye (1 ml)", price: "700 zł" },
      { ru: "Mastelli Plinest eye (2 ml)", pl: "Mastelli Plinest eye (2 ml)", price: "750 zł" }
    ]
  },
  {
    ru: "Полинуклеотиды",
    pl: "Polinukleotydy",
    items: [
      { ru: "Mastelli Plinest (2 ml)", pl: "Mastelli Plinest (2 ml)", price: "750 zł" },
      { ru: "Mastelli Newest (2 ml)", pl: "Mastelli Newest (2 ml)", price: "750 zł" },
      { ru: "Plenhyage XL Strong (2 ml)", pl: "Plenhyage XL Strong (2 ml)", price: "750 zł" }
    ]
  },
  {
    ru: "Коррекция формы губ",
    pl: "Korekcja kształtu ust",
    items: [
      { ru: "Stylage Lips (1 ml)", pl: "Stylage Lips (1 ml)", price: "950 zł" },
      { ru: "Stylage M (1 ml)", pl: "Stylage M (1 ml)", price: "850 zł" },
      { ru: "Juvederm Ultra 3 (1 ml)", pl: "Juvederm Ultra 3 (1 ml)", price: "950 zł" },
      { ru: "Juvederm Ultra Smile (0,55 ml)", pl: "Juvederm Ultra Smile (0,55 ml)", price: "850 zł" },
      { ru: "Aliaxin FL (1 ml)", pl: "Aliaxin FL (1 ml)", price: "850 zł" },
      { ru: "Belotero Lips (0,6 ml)", pl: "Belotero Lips (0,6 ml)", price: "900 zł" },
      { ru: "Гиалуронидаза", pl: "Hialuronidaza", price: "700 zł" }
    ]
  },
  {
    ru: "Контурная пластика. Бланшинг морщин",
    pl: "Wypełniacze. Blanszing zmarszczek",
    items: [
      { ru: "Belotero soft 1 ml / 2 ml", pl: "Belotero soft 1 ml / 2 ml", price: "750 / 1400 zł" },
      { ru: "Restylane Skinbooster (1 ml)", pl: "Restylane Skinbooster (1 ml)", price: "700 zł" },
      { ru: "Stylage M (1 ml)", pl: "Stylage M (1 ml)", price: "850 zł" }
    ]
  },
  {
    ru: "Ботулинотерапия (Botox, Vistabel, Dysport, Azzalure)",
    pl: "Toksyna botulinowa (Botox, Vistabel, Dysport, Azzalure)",
    noteRu: "для мужчин +150 zł (необходимость в увеличенной дозировке из-за большей мышечной активности)",
    notePl: "dla mężczyzn +150 zł (konieczność zwiększonej dawki ze względu na większą aktywność mięśniową)",
    items: [
      { ru: "Межбровье (+морщины носа при необходимости)", pl: "Okolica międzybrwiowa (+zmarszczki nosa w razie potrzeby)", price: "450 zł" },
      { ru: "Лоб + межбровье", pl: "Czoło + okolica międzybrwiowa", price: "850 zł" },
      { ru: "Лоб + межбровье + глаза", pl: "Czoło + okolica międzybrwiowa + oczy", price: "950 zł" },
      { ru: "Глаза (гусиные лапки)", pl: "Oczy (kurze łapki)", price: "400 zł" },
      { ru: "Десневая улыбка", pl: "Uśmiech dziąsłowy", price: "400 zł" },
      {
        ru: "Full Face (все зоны лица и шеи, которым показана коррекция, кроме жевательных мышц)",
        pl: "Full Face (wszystkie strefy twarzy i szyi wymagające korekcji, z wyjątkiem mięśni żuchwowych)",
        price: "1600 zł"
      },
      { ru: "Лечение гипергидроза (подмышки, ладони, стопы)", pl: "Leczenie nadpotliwości (pachy, dłonie, stopy)", price: "1500 zł" },
      { ru: "Лечение бруксизма", pl: "Leczenie bruksizmu", price: "1000 zł" },
      { ru: "Лечение мигрени", pl: "Leczenie migreny", price: "1800 zł" }
    ]
  },
  {
    ru: "Лечение рубцов",
    pl: "Leczenie blizn",
    items: [
      {
        ru: "лечение келоидных и гипертрофических рубцов (введение кортикостероидов)",
        pl: "leczenie blizn keloidowych i przerostowych (iniekcje kortykosteroidów)",
        price: "от 450 zł"
      },
      { ru: "субцизия рубцов постакне классическая", pl: "subincyzja blizn potrądzikowych klasyczna", price: "500–650 zł" },
      {
        ru: "субцизия рубцов постакне с введением биостимулирующего препарата",
        pl: "subincyzja blizn potrądzikowych z podaniem preparatu biostymulującego",
        price: "900 zł"
      }
    ]
  },
  {
    ru: "Эстетическая косметология",
    pl: "Kosmetologia estetyczna",
    items: [
      {
        ru: "дерматологическая чистка лица + противовоспалительный пилинг (базовая)",
        pl: "dermatologiczne oczyszczanie twarzy + peeling przeciwzapalny (podstawowy)",
        price: "300 zł",
        footnoteRu: "выполняется только после назначения на консультации",
        footnotePl: "wykonywany tylko po przepisaniu na konsultacji"
      },
      {
        ru: "дерматологическая чистка лица + противовоспалительный пилинг (интенсивная)",
        pl: "dermatologiczne oczyszczanie twarzy + peeling przeciwzapalny (intensywny)",
        price: "370 zł",
        footnoteRu: "выполняется только после назначения на консультации",
        footnotePl: "wykonywany tylko po przepisaniu na konsultacji"
      },
      {
        ru: "дерматологическая чистка спины + противовоспалительный пилинг",
        pl: "dermatologiczne oczyszczanie pleców + peeling przeciwzapalny",
        price: "450 zł",
        footnoteRu: "выполняется только после назначения на консультации",
        footnotePl: "wykonywany tylko po przepisaniu na konsultacji"
      },
      {
        ru: "пилинг по проблеме (лицо)",
        pl: "peeling ukierunkowany (twarz)",
        price: "300 zł",
        footnoteRu: "выполняется только после назначения на консультации",
        footnotePl: "wykonywany tylko po przepisaniu na konsultacji"
      },
      {
        ru: "пилинг по проблеме (лицо+шея)",
        pl: "peeling ukierunkowany (twarz+szyja)",
        price: "380 zł",
        footnoteRu: "выполняется только после назначения на консультации",
        footnotePl: "wykonywany tylko po przepisaniu na konsultacji"
      },
      {
        ru: "пилинг по проблеме (лицо+шея+декольте)",
        pl: "peeling ukierunkowany (twarz+szyja+dekolt)",
        price: "460 zł",
        footnoteRu: "выполняется только после назначения на консультации",
        footnotePl: "wykonywany tylko po przepisaniu na konsultacji"
      }
    ]
  },
  {
    ru: "Фотолечение IPL Clearlight",
    pl: "Fototerapia IPL Clearlight",
    items: [
      { ru: "Лицо", pl: "Twarz", price: "600 zł" },
      { ru: "Лицо + шея", pl: "Twarz + szyja", price: "800 zł" },
      { ru: "Лицо + шея + декольте", pl: "Twarz + szyja + dekolt", price: "1000 zł" },
      { ru: "Щёки / лоб / нос", pl: "Policzki / czoło / nos", price: "300 zł" },
      { ru: "Спина", pl: "Plecy", price: "1000 zł" },
      { ru: "Рубцы послеоперационные / посттравматические (до 15 см)", pl: "Blizny pooperacyjne / pourazowe (do 15 cm)", price: "300 zł" }
    ]
  },
  {
    ru: "Микроигольчатый RF-lifting",
    pl: "Mikroigłkowy RF-lifting",
    noteRu: "одноразовая индивидуальная насадка входит в стоимость",
    notePl: "jednorazowa indywidualna końcówka wliczona w cenę",
    items: [
      { ru: "Лицо", pl: "Twarz", price: "1000 zł" },
      { ru: "Шея", pl: "Szyja", price: "800 zł" },
      { ru: "Лицо + шея", pl: "Twarz + szyja", price: "1200 zł" },
      { ru: "Лицо + шея + декольте", pl: "Twarz + szyja + dekolt", price: "1400 zł" },
      { ru: "Щёки (рубцы постакне)", pl: "Policzki (blizny potrądzikowe)", price: "800 zł" },
      { ru: "Живот", pl: "Brzuch", price: "1400 zł" }
    ]
  }
];

function renderPriceList() {
  const lang = document.documentElement.lang || "ru";
  const container = document.getElementById("price-list");
  if (!container) return;

  container.innerHTML = priceData.map((cat, index) => {
    const name = lang === "pl" ? cat.pl : cat.ru;
    const note = lang === "pl" ? cat.notePl : cat.noteRu;
    const isFirst = index === 0;

    const noteHtml = note
      ? `<p class="text-sm text-gray-400 mt-1 ml-3">${note}</p>`
      : "";

    const itemsHtml = cat.items.map(item => {
      const itemName = lang === "pl" ? item.pl : item.ru;
      const footnote = lang === "pl" ? item.footnotePl : item.footnoteRu;

      const footnoteHtml = footnote
        ? ` <span class="text-gray-400 italic text-xs">— ${footnote}</span>`
        : "";

      return `
        <div class="flex justify-between items-start px-6 py-3 gap-4">
          <span class="text-sm text-gray-700">${itemName}${footnoteHtml}</span>
          <span class="font-semibold text-[#1589d9] whitespace-nowrap">${item.price}</span>
        </div>`;
    }).join("");

    if (isFirst) {
      return `
        <div class="bg-white rounded-xl shadow-sm">
          <div class="px-6 pt-5 pb-4 border-b border-gray-100">
            <div class="flex items-center gap-2">
              <div class="w-1 h-5 rounded-full bg-[#c6e92a]"></div>
              <h3 class="font-semibold text-gray-800">${name}</h3>
            </div>
            ${noteHtml}
          </div>
          <div class="divide-y divide-gray-100">
            ${itemsHtml}
          </div>
        </div>`;
    }

    return `
      <div class="bg-white rounded-xl shadow-sm">
        <div class="px-6 pt-5 pb-4 cursor-pointer select-none"
             onclick="this.nextElementSibling.classList.toggle('hidden'); this.querySelector('.chevron').classList.toggle('rotate-180')">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <div class="w-1 h-5 rounded-full bg-[#c6e92a]"></div>
              <h3 class="font-semibold text-gray-800">${name}</h3>
            </div>
            <i class="fa-solid fa-chevron-down text-gray-400 text-xs chevron transition-transform duration-200"></i>
          </div>
          ${noteHtml}
        </div>
        <div class="hidden">
          <div class="border-t border-gray-100 divide-y divide-gray-100">
            ${itemsHtml}
          </div>
        </div>
      </div>`;
  }).join("");
}

document.addEventListener("DOMContentLoaded", renderPriceList);
