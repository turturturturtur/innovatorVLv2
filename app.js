(() => {
  "use strict";
  const data = window.INNOVATOR_DATA;
  const translations = {
    zh: {
      skip: "跳至主要内容", mainNav: "主导航", mobileNav: "移动导航", openMenu: "打开导航", closeMenu: "关闭导航",
      navOverview: "模型概览", navBenchmarks: "评测结果", navDemos: "真实案例", explore: "探索 Demo",
      metaDescription: "Innovator 科学多模态大模型：探索科学理解、跨学科分析，查看模型评测对比。",
      resourceLinks: "论文与模型资源", resourceSoon: "敬请期待", resourcePending: "{resource} 链接待发布",
      heroLine1: "让智能，", heroLine2: "探索科学的边界。",
      heroDescription: "连接视觉、语言与科学知识。\n从理解一个结构，到探索一个未知。",
      exploreCases: "探索评测案例", viewResults: "查看评测结果", builtFor: "为科学探索而生",
      chemistry: "化学", biology: "生命科学", physics: "物理", earth: "地球科学", scroll: "向下探索",
      overviewFocus: "科学智能", overviewLine1: "探索科学，", overviewLine2: "读懂证据。",
      capability1Title: "理解科学图像", capability1Description: "连接科学图像与语言，探索分子结构、实验图表与微观世界中的信息。", capability1Tag: "科学多模态理解",
      capability2Title: "连接知识与视觉", capability2Description: "结合专业知识与视觉线索，为跨学科的科学问题提供分析思路与解释。", capability2Tag: "跨学科分析",
      measured: "MEASURED, NOT ASSUMED", benchmarksTitle: "让能力，以结果说话。", benchmarksDescription: "精选科学与通用理解评测。点击一项，查看同一配置与外部模型的完整对比。",
      sourceRecords: "完整评测结果", benchmarkFilters: "选择评测基准", ours: "本模型", selectedBenchmarks: "精选评测",
      benchmarkHint: "点击不同评测，查看对应的模型对比。", comparisonNotes: "评测口径说明", scorePoints: "分", comparisonReference: "较 {model}",
      chartScale: "评测分数 · 越高越好", unreported: "未报告",
      chartAnnouncement: "已显示 {benchmark}，Innovator 得分 {score}，共 {models} 个模型配置。",
      questions: "FROM EVALUATION TO EVIDENCE", demosLine1: "聚焦细节，", demosLine2: "看见答案浮现。", demosDescription: "展示 Innovator 在科学理解与通用视觉中的多模态能力。",
      examplePreviews: "{count} 个案例 · 视觉导览", demoFilters: "案例领域",
      closePreview: "关闭原图", scoreAria: "原始记录分数：{score}", noScoreAria: "暂无评测分数",
      visualWalkthrough: "视觉导览",
      viewEvidence: "查看完整回答与验证依据", visualLabel: "基于真实评测案例编排的聚焦与高亮动画",
      caseComplete: "{title}导览结束。原始回答：{answer}。可展开验证依据。",
      modelSelection: "Innovator 选择 {answer}",
      casePicker: "选择评测案例",
      selectedConfiguration: "模型表现",
      selectionBasis: "{metric} 涵盖 {count} 项通用任务。科学能力见下方案例。",
      recordedCase: "评测记录",
      recordedInput: "原始输入",
      recordedAnswer: "已记录的模型回答",
      reactionAnswer: "反应条件与产物",
      ionAnswer: "离子计数", bIons: "b 离子", yIons: "y 离子", ionCount: "{count} 个",
      stemAnswer: "茎区数量", stemCount: "{count} 个茎区",
      diameterAnswer: "颗粒等效直径范围", parkingAnswer: "停车场位置",
      upperLeft: "图像左上方", upperRight: "图像右上方", lowerRight: "图像右下方", rightCenter: "图像右侧中部",
      positionAbsent: "图中未显示该位置",
      reactant: "反应物", product: "产物", reagent: "试剂", solvent: "溶剂", reactionTime: "反应时间", temperature: "温度",
      substituent: "取代基 {group} · * 位点（原子 {atom}）",
      formattedCaseComplete: "{title}导览结束。{answer}。可展开原始回答与验证依据。",
      evaluationEvidence: "评测依据",
      enlargeImage: "查看原图",
      originalImage: "原始评测图片",
      originalImages: "查看全部 {count} 张原图",
      chooseOriginalImage: "选择原始评测图片",
      textOnly: "纯文本评测输入",
      originalChoices: "原始选项",
      fullPrompt: "完整原始提示词",
      correctByMetric: "该样本在所示指标下判为正确",
      referenceAnswer: "参考答案 · 原文",
      referenceDescription: "参考场景描述 · 原文",
      benchmarkScore: "该配置的整项评测分数",
      compareModels: "查看模型对比",
      caseAnnouncement: "已选择{title}，来自 {benchmark}。正在展示聚焦与答案揭示动画。"
    },
    en: {
      skip: "Skip to main content", mainNav: "Main navigation", mobileNav: "Mobile navigation", openMenu: "Open navigation", closeMenu: "Close navigation",
      navOverview: "Overview", navBenchmarks: "Benchmarks", navDemos: "Recorded cases", explore: "Explore demos",
      metaDescription: "Innovator multimodal AI for science: explore scientific understanding, cross-disciplinary analysis, and benchmark comparisons.",
      resourceLinks: "Paper and model resources", resourceSoon: "Coming soon", resourcePending: "{resource} link coming soon",
      heroLine1: "Intelligence,", heroLine2: "beyond the known.",
      heroDescription: "Connecting vision, language and scientific knowledge.\nFrom understanding a structure to exploring the unknown.",
      exploreCases: "Explore recorded cases", viewResults: "View benchmarks", builtFor: "Built for discovery",
      chemistry: "Chemistry", biology: "Life sciences", physics: "Physics", earth: "Earth science", scroll: "Scroll to explore",
      overviewFocus: "SCIENTIFIC INTELLIGENCE", overviewLine1: "Explore science.", overviewLine2: "Understand the evidence.",
      capability1Title: "Understand scientific images", capability1Description: "Connect scientific images and language to explore molecular structures, experimental charts and the microscopic world.", capability1Tag: "SCIENTIFIC UNDERSTANDING",
      capability2Title: "Connect knowledge and vision", capability2Description: "Combine specialist knowledge with visual clues to support the analysis and explanation of scientific questions across disciplines.", capability2Tag: "CROSS-DISCIPLINARY ANALYSIS",
      measured: "MEASURED, NOT ASSUMED", benchmarksTitle: "Capability, measured.", benchmarksDescription: "Selected science and general understanding benchmarks. Choose one to compare the same configuration with every external baseline.",
      sourceRecords: "Full benchmark results", benchmarkFilters: "Choose a benchmark", ours: "OURS", selectedBenchmarks: "SELECTED BENCHMARKS",
      benchmarkHint: "Select a benchmark to compare models.", comparisonNotes: "Evaluation notes", scorePoints: "pts", comparisonReference: "vs {model}",
      chartScale: "BENCHMARK SCORE · HIGHER IS BETTER", unreported: "Unreported",
      chartAnnouncement: "Showing {benchmark}. Innovator scores {score}. Comparing {models} model configurations.",
      questions: "FROM EVALUATION TO EVIDENCE", demosLine1: "Follow the details.", demosLine2: "Watch the answer emerge.", demosDescription: "Explore Innovator’s multimodal capabilities across scientific understanding and visual reasoning.",
      examplePreviews: "{count} CASES · VISUAL STORIES", demoFilters: "Case categories",
      closePreview: "Close image", scoreAria: "Original recorded score: {score}", noScoreAria: "No evaluation score reported",
      visualWalkthrough: "VISUAL WALKTHROUGH",
      viewEvidence: "Read the complete answer and verification", visualLabel: "Authored focus and highlight animation of a recorded evaluation case",
      caseComplete: "{title} walkthrough complete. Recorded answer: {answer}. Verification can now be expanded.",
      modelSelection: "Innovator selected {answer}",
      casePicker: "Choose an evaluation example",
      selectedConfiguration: "MODEL PERFORMANCE",
      selectionBasis: "{metric} covers {count} general tasks. Explore scientific capabilities in the cases below.",
      recordedCase: "RECORDED EVALUATION",
      recordedInput: "Original input",
      recordedAnswer: "Recorded model answer",
      reactionAnswer: "Reaction conditions & product",
      ionAnswer: "Ion counts", bIons: "b ions", yIons: "y ions", ionCount: "{count}",
      stemAnswer: "Stem count", stemCount: "{count} stems",
      diameterAnswer: "Equivalent particle diameter", parkingAnswer: "Parking lot location",
      upperLeft: "Upper left of the image", upperRight: "Upper right of the image", lowerRight: "Lower right of the image", rightCenter: "Right-center of the image",
      positionAbsent: "Position not shown in the image",
      reactant: "Reactant", product: "Product", reagent: "Reagent", solvent: "Solvent", reactionTime: "Reaction time", temperature: "Temperature",
      substituent: "Substituent {group} · * site (atom {atom})",
      formattedCaseComplete: "{title} walkthrough complete. {answer}. Original answer and verification are available below.",
      evaluationEvidence: "Evaluation evidence",
      enlargeImage: "View original image",
      originalImage: "Original evaluation image",
      originalImages: "View all {count} original images",
      chooseOriginalImage: "Choose an original evaluation image",
      textOnly: "Text-only evaluation input",
      originalChoices: "Original choices",
      fullPrompt: "Full original prompt",
      correctByMetric: "Correct under the stated metric",
      referenceAnswer: "REFERENCE ANSWER · VERBATIM",
      referenceDescription: "Original reference description",
      benchmarkScore: "FULL BENCHMARK SCORE",
      compareModels: "Compare models",
      caseAnnouncement: "Selected {title} from {benchmark}. Showing the focus and answer reveal."
    }
  };

  const languagePreferenceKey = "innovator-preferred-language";
  let language = "en";
  let activeBenchmark = data.featuredBenchmarks[0].sourceColumn;
  let demoCategory = "all";
  let activeCase = data.caseStudies[0].id;
  let originalImageIndex = 0;
  let revealObserver;
  let casePlayer;
  const dialog = document.getElementById("demo-dialog");
  const menuButton = document.getElementById("menu-toggle");
  const mobileNav = document.getElementById("mobile-nav");
  const header = document.querySelector(".site-header");

  // Only an explicit language choice overrides English; ignore the old auto-saved default.
  try {
    const preference = localStorage.getItem(languagePreferenceKey);
    if (preference === "zh" || preference === "en") language = preference;
  } catch { /* Storage is optional. */ }

  function t(key, values = {}) {
    let result = translations[language][key] || key;
    for (const [name, value] of Object.entries(values)) result = result.replaceAll(`{${name}}`, value);
    return result;
  }

  function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[character]));
  }

  function observeReveals() {
    document.querySelectorAll(".reveal:not(.is-visible)").forEach((element) => revealObserver.observe(element));
  }

  function renderFilter(container, categories, selected, select) {
    container.replaceChildren(...categories.map((category) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "filter-tab";
      button.dataset.category = category.id;
      button.setAttribute("aria-pressed", String(selected === category.id));
      button.textContent = category.label[language];
      button.addEventListener("click", () => {
        select(category.id);
        container.querySelectorAll("button").forEach((tab) => tab.setAttribute("aria-pressed", String(tab === button)));
      });
      return button;
    }));
  }

  function renderBenchmarkPicker() {
    const container = document.getElementById("benchmark-tabs");
    container.replaceChildren(...data.featuredBenchmarks.map((featured, index) => {
      const benchmark = data.benchmarks.find((row) => row.sourceColumn === featured.sourceColumn);
      const button = document.createElement("button");
      button.type = "button";
      button.className = "benchmark-option";
      button.dataset.benchmark = featured.sourceColumn;
      button.setAttribute("aria-pressed", String(activeBenchmark === featured.sourceColumn));
      button.setAttribute("aria-controls", "benchmark-chart");
      button.innerHTML = `<span class="benchmark-option-index" aria-hidden="true">${String(index + 1).padStart(2, "0")}</span><span class="benchmark-option-text"><strong>${escapeHTML(benchmark.name)}</strong><small>${escapeHTML(benchmark.domain[language])}</small></span><span class="benchmark-option-arrow" aria-hidden="true">↗</span>`;
      button.addEventListener("click", () => {
        activeBenchmark = featured.sourceColumn;
        container.querySelectorAll("button").forEach((option) => option.setAttribute("aria-pressed", String(option === button)));
        renderBenchmarkChart();
      });
      return button;
    }));
  }

  function renderBenchmarkChart() {
    const featured = data.featuredBenchmarks.find((entry) => entry.sourceColumn === activeBenchmark);
    const benchmark = data.benchmarks.find((row) => row.sourceColumn === activeBenchmark);
    const baselineScores = data.baselines.map((model) => ({ name: model.name, sourceRow: model.sourceRow, score: model.scores[activeBenchmark] }));
    // Sort only numeric records. Missing or compound records stay visible at the end.
    baselineScores.sort((a, b) => (Number.isFinite(b.score) ? b.score : -Infinity) - (Number.isFinite(a.score) ? a.score : -Infinity));
    const models = [{ name: data.model, sourceRow: data.source.row, score: benchmark.score, isOurs: true }, ...baselineScores];
    const reference = baselineScores.find((model) => model.sourceRow === featured.comparisonRow);
    const hasDifference = Number.isFinite(benchmark.score) && Number.isFinite(reference?.score);
    const difference = hasDifference ? benchmark.score - reference.score : null;
    document.getElementById("benchmark-chart-title").textContent = benchmark.name;
    document.getElementById("benchmark-chart-domain").textContent = benchmark.domain[language];
    document.querySelector(".benchmark-difference").hidden = !hasDifference;
    document.getElementById("benchmark-difference").innerHTML = hasDifference ? `${difference >= 0 ? "+" : ""}${difference.toFixed(2)}<small>${t("scorePoints")}</small>` : "";
    document.getElementById("benchmark-reference").textContent = hasDifference ? t("comparisonReference", { model: reference?.name }) : "";
    // Fresh bar elements restart the left-to-right animation on every click, including reselection.
    document.getElementById("benchmark-bars").innerHTML = models.map((model, index) => {
      const numeric = Number.isFinite(model.score);
      const score = numeric ? model.score.toFixed(2) : typeof model.score === "string" ? model.score : "—";
      const label = numeric ? t("scoreAria", { score }) : model.score === null ? t("noScoreAria") : t("scoreAria", { score });
      return `<li class="benchmark-bar-row ${model.isOurs ? "is-ours" : ""}" data-source-row="${model.sourceRow}"><span class="bar-model"><span class="bar-model-name">${escapeHTML(model.name)}</span>${model.isOurs ? `<span class="ours-tag">${t("ours")}</span>` : ""}</span><span class="benchmark-bar-track" aria-hidden="true">${numeric ? `<span class="benchmark-bar-fill" style="width:${model.score}%;--bar-delay:${index * 45}ms"></span>` : `<span class="bar-unreported">${escapeHTML(model.score ?? t("unreported"))}</span>`}</span><span class="bar-score" aria-label="${escapeHTML(label)}">${escapeHTML(score)}</span></li>`;
    }).join("");
    document.getElementById("benchmark-announcement").textContent = t("chartAnnouncement", { benchmark: benchmark.name, score: benchmark.score.toFixed(2), models: models.length });
  }

  function categoryLabel(id) { return data.demoCategories.find((category) => category.id === id).label[language]; }

  function originalImages(example) {
    return example.images || [{ src: example.image, alt: example.imageAlt, label: example.title }];
  }

  function renderOriginalImages(example) {
    const images = originalImages(example);
    const picker = document.getElementById("dialog-image-picker");
    picker.hidden = images.length < 2;
    const select = (index) => {
      originalImageIndex = index;
      const input = images[index];
      document.getElementById("dialog-image").src = input.src;
      document.getElementById("dialog-image").alt = input.alt[language];
      picker.querySelectorAll("button").forEach((button, i) => button.setAttribute("aria-pressed", String(i === index)));
    };
    picker.replaceChildren(...images.map((input, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = input.label[language];
      button.setAttribute("aria-controls", "dialog-image");
      button.addEventListener("click", () => select(index));
      return button;
    }));
    select(Math.min(originalImageIndex, images.length - 1));
  }

  function renderSelection() {
    const aggregate = data.aggregates.find((row) => row.name === data.source.selectionMetric);
    document.getElementById("selection-summary").innerHTML = `<div><span class="chart-eyebrow">${escapeHTML(t("selectedConfiguration"))}</span><strong>${escapeHTML(data.model)}</strong><p>${escapeHTML(t("selectionBasis", { metric: aggregate.name, count: aggregate.members.length }))}</p></div><div class="selection-score"><strong>${aggregate.score.toFixed(2)}</strong><span>${escapeHTML(aggregate.name)}</span></div>`;
  }

  function renderCasePicker() {
    const examples = data.caseStudies.filter((example) => demoCategory === "all" || example.category === demoCategory);
    if (!examples.some((example) => example.id === activeCase)) activeCase = examples[0].id;
    const picker = document.getElementById("case-picker");
    picker.replaceChildren(...examples.map((example) => {
      const benchmark = data.benchmarks.find((row) => row.sourceColumn === example.sourceColumn);
      const button = document.createElement("button");
      button.type = "button";
      button.className = "case-option";
      button.dataset.case = example.id;
      button.setAttribute("aria-pressed", String(example.id === activeCase));
      button.setAttribute("aria-controls", "case-viewer");
      button.innerHTML = `<span class="case-option-category">${escapeHTML(categoryLabel(example.category))} / ${escapeHTML(benchmark.name)}</span><strong>${escapeHTML(example.title[language])}</strong><span aria-hidden="true">↗</span>`;
      button.addEventListener("click", () => {
        activeCase = example.id;
        picker.querySelectorAll("button").forEach((option) => option.setAttribute("aria-pressed", String(option === button)));
        renderCase();
      });
      return button;
    }));
  }

  function formatReactionAnswer(response) {
    // Recognize the recorded OpenRxn serialization, never interpret it as HTML.
    // Unknown formats fall back to escaped verbatim text without losing fields.
    const reaction = /^<E-SMILES>(.*?)<\/E-SMILES>>>(.*?)\(agents: ([^,]+), solvents: ([^,]+), time: (\d+(?:\.\d+)?)h, temperature: (-?\d+(?:\.\d+)?)°C\)$/.exec(response);
    if (!reaction) return null;
    const molecule = (value) => /^([^<>]+)<sep><a>(\d+):R\[(\d+)\]<\/a>$/.exec(value);
    const reactant = molecule(reaction[1]), product = molecule(reaction[2]);
    if (!reactant || !product) return null;
    const superscript = (value) => value.replace(/\d/g, (digit) => "⁰¹²³⁴⁵⁶⁷⁸⁹"[Number(digit)]);
    const reagent = reaction[3].replace(/^\[([A-Z][a-z]?)([+-])(\d+)\]$/, (_, element, sign, charge) => `${element}${superscript(charge)}${sign === "+" ? "⁺" : "⁻"}`);
    const conditions = [
      ["reagent", reagent], ["solvent", reaction[4]],
      ["reactionTime", `${reaction[5]} h`], ["temperature", `${reaction[6]} °C`]
    ];
    const species = (key, value) => `<div class="reaction-species reaction-${key}"><span class="reaction-label">${escapeHTML(t(key))} <small>SMILES</small></span><code lang="en">${escapeHTML(value[1])}</code><p class="reaction-substituent">${escapeHTML(t("substituent", { group: `R${superscript(value[3])}`, atom: value[2] }))}</p></div>`;
    return {
      className: "reaction-answer", titleKey: "reactionAnswer",
      html: `<dl class="reaction-conditions">${conditions.map(([key, value]) => `<div><dt>${escapeHTML(t(key))}</dt><dd>${escapeHTML(value)}</dd></div>`).join("")}</dl>
        <div class="reaction-equation">${species("reactant", reactant)}<span class="reaction-arrow" aria-hidden="true">→</span>${species("product", product)}</div>`,
      summary: `${conditions.map(([key, value]) => `${t(key)}: ${value}`).join("; ")}; ${t("product")}: ${product[1]}`
    };
  }

  function formatIonCountAnswer(response) {
    // Accept only two distinct b/y integer counts, in either dictionary order.
    // Python-style single quotes are data, never executable code or HTML.
    const match = /^\{\s*(['"])([by] ions)\1\s*:\s*(\d+)\s*,\s*(['"])([by] ions)\4\s*:\s*(\d+)\s*\}$/.exec(response.trim());
    if (!match) return null;
    const counts = new Map([[match[2], Number(match[3])], [match[5], Number(match[6])]]);
    if (counts.size !== 2 || [...counts.values()].some((count) => !Number.isSafeInteger(count))) return null;
    const series = [["b", "bIons"], ["y", "yIons"]];
    return {
      className: "ion-count-answer", titleKey: "ionAnswer",
      html: `<dl class="ion-counts">${series.map(([ion, key]) => `<div class="ion-count ion-count-${ion}"><dt>${escapeHTML(t(key))}</dt><dd>${escapeHTML(t("ionCount", { count: counts.get(`${ion} ions`) }))}</dd></div>`).join("")}</dl>`,
      summary: series.map(([ion, key]) => `${t(key)}: ${t("ionCount", { count: counts.get(`${ion} ions`) })}`).join("; ")
    };
  }

  function formatStemCountAnswer(response) {
    if (!/^\d+(?:\.0+)?$/.test(response.trim())) return null;
    const count = Number(response);
    if (!Number.isSafeInteger(count)) return null;
    const summary = t("stemCount", { count });
    return { className: "stem-count-answer short-answer", titleKey: "stemAnswer", html: escapeHTML(summary), summary };
  }

  function formatChoiceResult(example, presentation) {
    if (presentation !== "diameter-choice" && presentation !== "location-choice") return null;
    // Resolve the recorded letter against the original choices, never the
    // reference answer. Unrecognized or ambiguous choices keep the safe fallback.
    const choices = example.choices.map((choice) => /^(?:\(([A-Z])\)|([A-Z])\.)\s+(.+)$/.exec(choice))
      .filter((choice) => choice && (choice[1] || choice[2]) === example.response.trim());
    if (choices.length !== 1) return null;
    const selected = choices[0][3];
    let titleKey, value, graphic;
    if (presentation === "diameter-choice") {
      const range = /^(\d+)\s*[–−-]\s*(\d+)\s+nm$/.exec(selected);
      const above = /^>\s*(\d+)\s+nm$/.exec(selected);
      if (!(range || above) || !(range || above).slice(1).every((n) => Number.isSafeInteger(Number(n)))
        || (range && Number(range[1]) > Number(range[2]))) return null;
      titleKey = "diameterAnswer";
      value = range ? `${range[1]}–${range[2]} nm` : `> ${above[1]} nm`;
      // A diameter symbol, not a reconstructed or individually measured particle.
      graphic = `<svg viewBox="0 0 100 80" aria-hidden="true"><circle class="result-particle" cx="50" cy="35" r="26"/><path class="result-dimension" d="M24 35H76 M30 31L24 35L30 39 M70 31L76 35L70 39 M24 66H76 M24 62V70 M76 62V70"/></svg>`;
    } else if (presentation === "location-choice") {
      const locations = {
        "In the upper left area of the picture": ["upperLeft", 0],
        "In the upper right area of the picture": ["upperRight", 2],
        "In the lower right area of the picture": ["lowerRight", 8],
        "In the right-center area of the picture": ["rightCenter", 5],
        "This image doesn't feature the position.": ["positionAbsent", -1]
      };
      const location = Object.hasOwn(locations, selected) ? locations[selected] : null;
      if (!location) return null;
      titleKey = "parkingAnswer";
      value = t(location[0]);
      graphic = `<div class="result-location-grid" aria-hidden="true">${Array.from({ length: 9 }, (_, i) => `<span${i === location[1] ? ' class="is-selected"' : ""}></span>`).join("")}</div>`;
    } else return null;
    return {
      className: "choice-result-answer", titleKey,
      html: `<div class="choice-result-graphic">${graphic}</div><strong class="choice-result-value">${escapeHTML(value)}</strong>`,
      summary: `${t(titleKey)}: ${value}`
    };
  }

  function renderCase() {
    casePlayer?.destroy();
    const example = data.caseStudies.find((entry) => entry.id === activeCase);
    const benchmark = data.benchmarks.find((row) => row.sourceColumn === example.sourceColumn);
    const viewer = document.getElementById("case-viewer");
    const inputLanguage = example.inputLanguage || "en";
    const scene = data.caseAnimations[example.id];
    const answerInScene = scene.answerPresentation === "molecule-selection" && scene.kind === "spectrum"
      && scene.molecules.options.some((option) => option.letter === example.response.trim());
    const formattedAnswer = scene.kind === "reaction" ? formatReactionAnswer(example.response)
      : scene.answerPresentation === "ion-counts" ? formatIonCountAnswer(example.response)
      : scene.answerPresentation === "stem-count" ? formatStemCountAnswer(example.response)
      : formatChoiceResult(example, scene.answerPresentation);
    const answerHTML = formattedAnswer
      ? `<div class="recorded-response ${formattedAnswer.className}" lang="${language}">${formattedAnswer.html}</div>`
      : `<pre class="recorded-response ${example.response.trim().length < 45 ? "short-answer" : ""}" lang="${inputLanguage}">${escapeHTML(example.response)}</pre>`;
    viewer.dataset.case = example.id;
    viewer.innerHTML = `<header class="case-heading"><div><span class="chart-eyebrow">${escapeHTML(benchmark.name)} / ${escapeHTML(t("visualWalkthrough"))}</span><h3 id="case-title">${escapeHTML(example.title[language])}</h3></div></header>
      <p class="case-question">${escapeHTML(example.question[language])}</p>
      <div class="case-cinema"></div>
      ${answerInScene ? "" : `<section class="case-live-output" aria-labelledby="case-answer-label"><div class="answer-topline"><h4 id="case-answer-label">${escapeHTML(t(formattedAnswer?.titleKey || "recordedAnswer"))}</h4></div>${answerHTML}</section>`}
      <div class="case-detail-actions">${example.image ? `<button type="button" class="case-image-button">${escapeHTML(example.images ? t("originalImages", { count: example.images.length }) : t("originalImage"))} ↗</button>` : `<span class="text-input-note">${escapeHTML(t("textOnly"))}</span>`}<a href="#benchmarks" class="case-compare">${escapeHTML(t("compareModels"))} ↗</a></div>
      <details class="case-records" hidden><summary>${escapeHTML(t("viewEvidence"))}<span>↗</span></summary><div class="case-evidence"><span class="case-verdict">✓ ${escapeHTML(t("correctByMetric"))}</span><p class="reference-label">${escapeHTML(t("recordedAnswer"))} · ${escapeHTML(data.model)}</p><pre class="raw-response" lang="${inputLanguage}">${escapeHTML(example.response)}</pre><p class="reference-label">${escapeHTML(t("referenceAnswer"))}</p><pre class="case-reference" lang="${inputLanguage}">${escapeHTML(example.reference)}</pre>${example.referenceDescription ? `<details class="reference-description"><summary>${escapeHTML(t("referenceDescription"))}</summary><p lang="${inputLanguage}">${escapeHTML(example.referenceDescription)}</p></details>` : ""}<p class="case-verification">${escapeHTML(example.verification[language])}</p><div class="case-benchmark-score"><div><span>${escapeHTML(t("benchmarkScore"))}</span><strong>${benchmark.score.toFixed(2)}<small> / 100</small></strong></div></div></div></details>
      ${example.choices.length ? `<details class="case-choices"><summary>${escapeHTML(t("originalChoices"))}</summary><ul lang="${inputLanguage}">${example.choices.map((choice) => `<li>${escapeHTML(choice)}</li>`).join("")}</ul></details>` : ""}<details class="case-prompt"><summary>${escapeHTML(t("fullPrompt"))}</summary><pre lang="${inputLanguage}">${escapeHTML(example.prompt)}</pre></details>`;
    document.getElementById("case-announcement").textContent = t("caseAnnouncement", { title: example.title[language], benchmark: benchmark.name });
    casePlayer = window.InnovatorCasePlayer.mount({ root: viewer, example, scene, language,
      labels: { visualLabel: t("visualLabel"), modelSelection: t("modelSelection", { answer: example.response.trim() }) },
      onComplete: () => { document.getElementById("case-announcement").textContent = t(formattedAnswer ? "formattedCaseComplete" : "caseComplete", { title: example.title[language], answer: formattedAnswer?.summary || example.response }); }
    });
    updateCasePlayback();
    viewer.querySelector(".case-image-button")?.addEventListener("click", () => {
      originalImageIndex = 0;
      renderOriginalImages(example);
      dialog.showModal();
      document.body.classList.add("dialog-open");
      updateCasePlayback();
    });
    viewer.querySelector(".case-compare").addEventListener("click", () => {
      activeBenchmark = example.sourceColumn;
      renderBenchmarkPicker();
      renderBenchmarkChart();
    });
  }

  function closeMenu() {
    mobileNav.hidden = true;
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", t("openMenu"));
    header.classList.remove("menu-open");
  }

  function renderResourceLinks() {
    for (const [id, key, label] of [["paper-link", "paper", "Paper"], ["hugging-face-link", "huggingFace", "Hugging Face"]]) {
      const link = document.getElementById(id);
      const url = data.links[key].trim();
      if (url) {
        link.href = url;
        link.removeAttribute("aria-disabled");
        link.removeAttribute("title");
      } else {
        link.removeAttribute("href");
        link.setAttribute("aria-disabled", "true");
        link.title = t("resourcePending", { resource: label });
      }
    }
  }

  function setLanguage(nextLanguage) {
    language = nextLanguage;
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
    document.title = language === "zh" ? "INNOVATOR · 科学多模态大模型" : "INNOVATOR · Scientific Multimodal AI";
    document.querySelector('meta[name="description"]').content = t("metaDescription");
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const text = t(element.dataset.i18n, { count: data.caseStudies.length });
      element.replaceChildren(...text.split("\n").flatMap((line, i) => i ? [document.createElement("br"), document.createTextNode(line)] : [document.createTextNode(line)]));
    });
    document.querySelectorAll("[data-i18n-aria]").forEach((element) => element.setAttribute("aria-label", t(element.dataset.i18nAria)));
    document.querySelector(".brand").setAttribute("aria-label", language === "zh" ? "Innovator 首页" : "Innovator home");
    const languageButton = document.getElementById("language-toggle");
    languageButton.innerHTML = `${language === "zh" ? "EN" : "中文"} <span aria-hidden="true">↗</span>`;
    languageButton.setAttribute("aria-label", language === "zh" ? "Switch to English" : "切换至中文");
    menuButton.setAttribute("aria-label", t(mobileNav.hidden ? "openMenu" : "closeMenu"));
    document.querySelectorAll("[data-model-name]").forEach((element) => { element.textContent = data.model; });
    renderBenchmarkPicker();
    document.getElementById("comparison-notes").innerHTML = data.comparisonNotes.map((note) => `<li>${escapeHTML(note[language])}</li>`).join("");
    renderFilter(document.getElementById("demo-filters"), data.demoCategories, demoCategory, (id) => { demoCategory = id; renderCasePicker(); renderCase(); });
    renderBenchmarkChart();
    renderSelection();
    renderCasePicker();
    renderCase();
    renderResourceLinks();
    if (dialog.open) renderOriginalImages(data.caseStudies.find((entry) => entry.id === activeCase));
  }

  revealObserver = new IntersectionObserver((entries) => {
    for (const entry of entries) if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    }
  }, { threshold: .08, rootMargin: "0px 0px -20px 0px" });

  const benchmarkChart = document.getElementById("benchmark-chart");
  let chartInView = false;
  function updateChartPlayback() {
    benchmarkChart.classList.toggle("is-paused", !chartInView || document.hidden);
  }
  const chartObserver = new IntersectionObserver(([entry]) => {
    chartInView = entry.isIntersecting;
    updateChartPlayback();
  }, { threshold: .05 });
  chartObserver.observe(benchmarkChart);
  document.addEventListener("visibilitychange", updateChartPlayback);

  const caseViewer = document.getElementById("case-viewer");
  let caseInView = false;
  function updateCasePlayback() {
    const active = caseInView && !document.hidden && !dialog.open;
    caseViewer.classList.toggle("is-paused", !active);
    casePlayer?.setActive(active);
  }
  const caseObserver = new IntersectionObserver(([entry]) => {
    caseInView = entry.isIntersecting;
    updateCasePlayback();
  }, { threshold: .05 });
  caseObserver.observe(caseViewer);
  document.addEventListener("visibilitychange", updateCasePlayback);

  document.getElementById("results-source").href = data.source.url;
  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("language-toggle").addEventListener("click", () => {
    setLanguage(language === "zh" ? "en" : "zh");
    try { localStorage.setItem(languagePreferenceKey, language); } catch { /* Storage is optional. */ }
  });
  menuButton.addEventListener("click", () => {
    const open = mobileNav.hidden;
    mobileNav.hidden = !open;
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute("aria-label", t(open ? "closeMenu" : "openMenu"));
    header.classList.toggle("menu-open", open);
  });
  mobileNav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", (event) => { if (event.key === "Escape") closeMenu(); });
  window.matchMedia("(min-width: 821px)").addEventListener("change", (event) => { if (event.matches) closeMenu(); });
  document.getElementById("dialog-close").addEventListener("click", () => dialog.close());
  dialog.addEventListener("close", () => { document.body.classList.remove("dialog-open"); updateCasePlayback(); });
  dialog.addEventListener("click", (event) => {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
  });
  window.addEventListener("scroll", () => header.classList.toggle("scrolled", window.scrollY > 24), { passive: true });

  const sectionObserver = new IntersectionObserver((entries) => {
    for (const entry of entries) if (entry.isIntersecting) {
      document.querySelectorAll(".desktop-nav a").forEach((link) => {
        const active = link.getAttribute("href") === `#${entry.target.id}`;
        link.classList.toggle("active", active);
        if (active) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    }
  }, { rootMargin: "-15% 0px -65% 0px", threshold: 0 });
  document.querySelectorAll("main section[id]").forEach((section) => sectionObserver.observe(section));
  setLanguage(language);
  document.documentElement.classList.add("js-ready");
  header.classList.toggle("scrolled", window.scrollY > 24);
  observeReveals();
})();
