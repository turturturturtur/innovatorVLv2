/* Static evaluation snapshot. See docs/EVALUATION.md for selection and provenance. */
window.INNOVATOR_DATA = {
  model: "Innovator",
  variant: "MergeMix 500k SFT · ckpt-488",
  // Fill in the publication URLs when the paper and model are available.
  links: { paper: "", huggingFace: "" },
  source: {
    "url": "https://scnfed7y9q7p.feishu.cn/wiki/QXfpwaKEyi7H1hkhFwscFL0bnHb?fromScene=spaceOverview&sheet=RAG5Fk",
    "title": "实验结果",
    "sheet": "Qwen3.5",
    "sheetId": "RAG5Fk",
    "row": 67,
    "revision": 1177,
    "accessed": "2026-10-05",
    "baseModel": "Qwen3.5-9B-Base",
    "checkpoint": 488,
    "thinkingMode": null,
    "selectionMetric": "AVG.General",
    "selectionRange": "Z18:Z79",
    "selectionFormula": "=AVERAGE(I67:X67)",
    "note": {
      "zh": "来源：飞书「实验结果」→ Qwen3.5，revision 1177，读取于 2026-10-05。Innovator 的 33 项结果均来自第 67 行：Qwen3.5-9B-Base / MergeMix 500k SFT / checkpoint-488，按第 18–79 行 AVG.General 最高值选取。5 条外部基线来自第 5–8、10 行，保留各自版本；按用户 2026-11-06 要求，第 9 行 Qwen3.5-9B-Official 与第 11 行 Qwen3.5-9B-Base 不再在页面展示，其原始分数留档于 docs/EVALUATION.md。不包含 Innovator V1。",
      "en": "Source: Feishu “Experimental Results”, Qwen3.5, revision 1177, accessed 2026-10-05. All 33 Innovator results use row 67: Qwen3.5-9B-Base / MergeMix 500k SFT / checkpoint-488, selected by the highest AVG.General across rows 18–79. Five external baselines come from rows 5–8 and 10 with their versions preserved. Per the user's 2026-11-06 request, row 9 (Qwen3.5-9B-Official) and row 11 (Qwen3.5-9B-Base) are no longer shown on the page; their reported scores are archived in docs/EVALUATION.md. Innovator V1 is excluded."
    }
  },
  aggregates: [
    {"name": "AVG.General", "sourceColumn": "Z", "category": "general", "score": 76.414375, "members": ["I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X"]},
    {"name": "AVG.Science", "sourceColumn": "AM", "category": "science", "score": 42.2058333333333, "members": ["AA", "AB", "AC", "AD", "AE", "AF", "AG", "AH", "AI", "AJ", "AK", "AL"]},
    {"name": "AVG.Spatial", "sourceColumn": "AP", "category": "spatial", "score": 63.62, "members": ["AN", "AO"]},
    {"name": "AVG.Industrial", "sourceColumn": "AS", "category": "industrial", "score": 76.195, "members": ["AQ", "AR"]},
  ],
  // External baselines from source rows 5–8 and 10. Innovator V1 (row 4) is excluded,
  // and rows 9/11 were removed from the showcase on 2026-11-06 (scores archived in docs/EVALUATION.md).
  // Scores use source columns. Preserve compound strings; null means unreported.
  baselines: [
    {
      name: "Qwen3-VL-8B", sourceRow: 5, thinkingMode: null,
      scores: {
        "I": 83.74, "J": 93.1, "K": 85.24, "L": 83.72, "M": 93.66, "N": 83.67,
        "O": 63.29, "P": 64.37, "Q": 56.64, "R": 66.33, "S": 59.94, "T": 87.0,
        "U": 68.76, "V": 71.28, "W": 84.82, "X": 39.31, "Y": 43.4, "Z": 74.054375,
        "AA": 44.27, "AB": 91.91, "AC": 4.35, "AD": 9.25, "AE": 82.75, "AF": null,
        "AG": null, "AH": 20.15, "AI": 59.32, "AJ": 47.34, "AK": 28.98, "AL": 49.33,
        "AM": 43.765, "AN": 74.9, "AO": 38.8, "AP": 56.85, "AQ": 64.58, "AR": 72.24,
        "AS": 68.41,
      }
    },
    {
      name: "Gemma4-12B-IT", sourceRow: 6, thinkingMode: null,
      scores: {
        "I": 77.49, "J": 91.74, "K": 52.12, "L": 53.86, "M": 83.1, "N": 81.62,
        "O": 35.02, "P": 35.68, "Q": 32.66, "R": 50.0, "S": 67.11, "T": 77.8,
        "U": 65.23, "V": 68.25, "W": 52.36, "X": 40.27, "Y": 0.0, "Z": 60.269375,
        "AA": 39.3, "AB": 89.39, "AC": 4.95, "AD": 12.6, "AE": 85.31, "AF": 8.6,
        "AG": 11.4, "AH": null, "AI": 56.67, "AJ": 57.61, "AK": 22.41, "AL": 56.81,
        "AM": 40.4590909090909, "AN": 73.54, "AO": 42.25, "AP": 57.895, "AQ": 44.79, "AR": 75.2,
        "AS": 59.995,
      }
    },
    {
      name: "InternVL3.5-8B", sourceRow: 7, thinkingMode: null,
      scores: {
        "I": 82.22, "J": 92.97, "K": 87.2, "L": 74.23, "M": 92.37, "N": 83.51,
        "O": 62.66, "P": 59.86, "Q": 41.33, "R": 56.89, "S": 66.38, "T": 83.2,
        "U": 63.53, "V": 70.58, "W": 70.68, "X": 35.47, "Y": 13.21, "Z": 70.1925,
        "AA": 46.81, "AB": 95.94, "AC": 19.05, "AD": 14.05, "AE": 80.46, "AF": null,
        "AG": null, "AH": 40.27, "AI": 61.76, "AJ": 57.0, "AK": 19.63, "AL": 47.79,
        "AM": 48.276, "AN": 73.24, "AO": 41.25, "AP": 57.245, "AQ": 52.6, "AR": 65.28,
        "AS": 58.94,
      }
    },
    {
      name: "Step3-VL-10B", sourceRow: 8, thinkingMode: null,
      scores: {
        "I": 83.55, "J": 94.14, "K": 59.68, "L": 71.27, "M": 92.33, "N": 85.47,
        "O": 30.32, "P": 40.21, "Q": 26.65, "R": 46.22, "S": 63.24, "T": 85.3,
        "U": 63.66, "V": 69.35, "W": 67.02, "X": 46.24, "Y": 0.0, "Z": 64.040625,
        "AA": 43.03, "AB": 85.76, "AC": 4.25, "AD": 12.7, "AE": 73.7, "AF": 4.0,
        "AG": 4.4, "AH": 6.87, "AI": 56.25, "AJ": 49.6, "AK": 14.44, "AL": 40.6,
        "AM": 32.9666666666667, "AN": 68.1, "AO": 24.0, "AP": 46.05, "AQ": 66.15, "AR": 79.6,
        "AS": 72.875,
      }
    },
    {
      name: "Qwen3.5-9B", sourceRow: 10, thinkingMode: null,
      scores: {
        "I": 85.46, "J": 94.24, "K": 85.28, "L": 83.34, "M": 94.98, "N": 85.48,
        "O": 60.08, "P": 63.87, "Q": 35.26, "R": 47.44, "S": 70.52, "T": 83.1,
        "U": 74.51, "V": 70.84, "W": 84.29, "X": 44.4, "Y": 68.16, "Z": 72.693125,
        "AA": 43.35, "AB": 93.35, "AC": 7.0, "AD": 14.4, "AE": 88.52, "AF": 18.8,
        "AG": 19.8, "AH": 14.38, "AI": 54.77, "AJ": 57.87, "AK": 20.24, "AL": 56.05,
        "AM": 40.7108333333333, "AN": 75.77, "AO": 45.0, "AP": 60.38, "AQ": 71.35, "AR": 81.28,
        "AS": 76.315,
      }
    },
  ],
  comparisonNotes: [
    {
      "zh": "SFE-en 是原评测任务名，该运行实际包含中英样本，分数为混合题型聚合指标，不能称为纯英文准确率。SimpleVQA 使用 A/B/C 三分类 F-score；相关基线的完整评测设置未知，不作同口径领先结论。",
      "en": "SFE-en is the original task name; this run includes English and Chinese items, so the score is a mixed-task aggregate rather than an English-only accuracy. SimpleVQA uses an A/B/C three-way F-score; the full evaluation settings of the compared baselines are unknown, so no matched-setting superiority is claimed."
    },
    {
      "zh": "精选展示 MolParse、OpenRxn、ProteinLMBench、MME-RealWorld、AI2D、SFE-en、EMVista 和 SimpleVQA。Innovator 的分数均来自同一个已选定实验；这些结果不代表全部评测或总体排名。可查看完整评测结果。",
      "en": "This selection features MolParse, OpenRxn, ProteinLMBench, MME-RealWorld, AI2D, SFE-en, EMVista and SimpleVQA. All Innovator scores come from the same selected experiment; these results do not represent every benchmark or an overall ranking. See the full benchmark results for complete coverage."
    },
    {
      "zh": "MolParse、OpenRxn、ProteinLMBench、AI2D 与 SimpleVQA 的差值参照 Qwen3.5-9B；MME-RealWorld 与 SFE-en 参照该项已报告分数最高的外部基线 Qwen3-VL-8B，EMVista 参照 InternVL3.5-8B。未报告不等于零分。差值表示评测分数之差，不是相对百分比。",
      "en": "The differences for MolParse, OpenRxn, ProteinLMBench, AI2D and SimpleVQA are relative to Qwen3.5-9B. MME-RealWorld and SFE-en use Qwen3-VL-8B, the highest reported external baseline for those tasks, and EMVista uses InternVL3.5-8B. Unreported does not mean zero. Differences are score points, not relative percentages."
    },
    {
      "zh": "图中保留原始评测数值，横轴从 0 到 100，不截断起点、不按最高分重新缩放。部分基线的完整评测设置未知，结果按已报告分数比较，不声明所有模型采用相同设置。",
      "en": "Charts retain the reported scores on an axis from 0 to 100, without truncating the origin or rescaling to the highest score. Full evaluation settings are unspecified for some baselines; comparisons use the reported results, without asserting identical settings."
    }
  ],
  // Curated presentation only. Scores remain in the complete records below.
  // comparisonRow identifies the named source baseline used for the score difference.
  featuredBenchmarks: [
    { sourceColumn: "AC", comparisonRow: 10 },
    { sourceColumn: "AD", comparisonRow: 10 },
    { sourceColumn: "AI", comparisonRow: 10 },
    { sourceColumn: "O", comparisonRow: 5 },
    { sourceColumn: "I", comparisonRow: 10 },
    { sourceColumn: "AK", comparisonRow: 5 },
    { sourceColumn: "AA", comparisonRow: 7 },
    { sourceColumn: "X", comparisonRow: 10 }
  ],
  // Every benchmark is from row 67. Null means unreported; zero is a valid score.
  benchmarks: [
    {"name": "EMVista", "sourceColumn": "AA", "category": "science", "domain": {"zh": "科学视觉", "en": "Scientific vision"}, "score": 47.84},
    {"name": "SFE-en", "sourceColumn": "AK", "category": "science", "domain": {"zh": "科学前沿", "en": "Scientific frontier"}, "score": 25.0},
    {"name": "MicroVQA", "sourceColumn": "AL", "category": "science", "domain": {"zh": "微观图像", "en": "Microscopy"}, "score": 7.2},
    {"name": "ScienceQA", "sourceColumn": "AB", "category": "science", "domain": {"zh": "科学问答", "en": "Scientific QA"}, "score": 94.6},
    {"name": "MolParse", "sourceColumn": "AC", "category": "science", "domain": {"zh": "分子结构", "en": "Molecular structures"}, "score": 48.6},
    {"name": "OpenRxn", "sourceColumn": "AD", "category": "science", "domain": {"zh": "化学反应", "en": "Chemical reactions"}, "score": 42.05},
    {"name": "RXNBench · EN", "sourceColumn": "AE", "category": "science", "domain": {"zh": "反应理解", "en": "Reaction understanding"}, "score": 88.79},
    {"name": "SuperChem · EN", "sourceColumn": "AF", "category": "science", "domain": {"zh": "化学推理（英文）", "en": "Chemistry reasoning (EN)"}, "score": 0.0},
    {"name": "SuperChem · CN", "sourceColumn": "AG", "category": "science", "domain": {"zh": "化学推理（中文）", "en": "Chemistry reasoning (CN)"}, "score": 0.2},
    {"name": "SmolInstruct v2", "sourceColumn": "AH", "category": "science", "domain": {"zh": "分子任务", "en": "Molecular tasks"}, "score": 26.35},
    {"name": "ProteinLMBench", "sourceColumn": "AI", "category": "science", "domain": {"zh": "蛋白质理解", "en": "Protein understanding"}, "score": 66.21},
    {"name": "MSEarth · MCQ", "sourceColumn": "AJ", "category": "science", "domain": {"zh": "地球科学", "en": "Earth science"}, "score": 59.63},
    {"name": "AI2D", "sourceColumn": "I", "category": "general", "domain": {"zh": "图示理解", "en": "Diagram understanding"}, "score": 88.34},
    {"name": "AI2D · no mask", "sourceColumn": "J", "category": "general", "domain": {"zh": "图示理解", "en": "Diagram understanding"}, "score": 95.82},
    {"name": "ChartQA", "sourceColumn": "K", "category": "general", "domain": {"zh": "图表问答", "en": "Chart QA"}, "score": 81.24},
    {"name": "InfoVQA · val", "sourceColumn": "L", "category": "general", "domain": {"zh": "信息图理解", "en": "Infographic understanding"}, "score": 84.45},
    {"name": "DocVQA · val", "sourceColumn": "M", "category": "general", "domain": {"zh": "文档问答", "en": "Document QA"}, "score": 95.96},
    {"name": "MMBench · EN dev", "sourceColumn": "N", "category": "general", "domain": {"zh": "综合多模态", "en": "Multimodal understanding"}, "score": 87.11},
    {"name": "MME-RealWorld", "sourceColumn": "O", "category": "general", "domain": {"zh": "真实场景", "en": "Real-world understanding"}, "score": 74.62},
    {"name": "MME-RealWorld · CN", "sourceColumn": "P", "category": "general", "domain": {"zh": "中文真实场景", "en": "Real-world understanding (CN)"}, "score": 71.76},
    {"name": "MMMU-Pro", "sourceColumn": "Q", "category": "general", "domain": {"zh": "跨学科理解", "en": "Cross-disciplinary understanding"}, "score": 44.22},
    {"name": "MMMU · val", "sourceColumn": "R", "category": "general", "domain": {"zh": "跨学科理解", "en": "Cross-disciplinary understanding"}, "score": 58.56},
    {"name": "MMStar", "sourceColumn": "S", "category": "general", "domain": {"zh": "视觉推理", "en": "Visual reasoning"}, "score": 70.74},
    {"name": "OCRBench", "sourceColumn": "T", "category": "general", "domain": {"zh": "文字识别", "en": "Text recognition"}, "score": 85.7},
    {"name": "RealWorldQA", "sourceColumn": "U", "category": "general", "domain": {"zh": "真实场景问答", "en": "Real-world QA"}, "score": 74.9},
    {"name": "SEED-Bench-2-Plus", "sourceColumn": "V", "category": "general", "domain": {"zh": "多模态理解", "en": "Multimodal understanding"}, "score": 73.78},
    {"name": "V* Bench", "sourceColumn": "W", "category": "general", "domain": {"zh": "视觉搜索", "en": "Visual search"}, "score": 88.48},
    {"name": "SimpleVQA", "sourceColumn": "X", "category": "general", "domain": {"zh": "视觉事实问答", "en": "Visual factual QA"}, "score": 46.95},
    {"name": "ScreenSpot", "sourceColumn": "Y", "category": "general", "domain": {"zh": "屏幕定位", "en": "Screen grounding"}, "score": 5.74},
    {"name": "EmbSpatial", "sourceColumn": "AN", "category": "spatial", "domain": {"zh": "空间理解", "en": "Spatial understanding"}, "score": 81.24},
    {"name": "ERQA", "sourceColumn": "AO", "category": "spatial", "domain": {"zh": "具身推理", "en": "Embodied reasoning"}, "score": 46.0},
    {"name": "AECV Bench", "sourceColumn": "AQ", "category": "industrial", "domain": {"zh": "工业图纸", "en": "Industrial drawings"}, "score": 70.31},
    {"name": "InspecSafe", "sourceColumn": "AR", "category": "industrial", "domain": {"zh": "工业安全", "en": "Industrial safety"}, "score": 82.08},
  ],
  demoCategories: [
  {
    "id": "all",
    "label": {
      "zh": "全部案例",
      "en": "All cases"
    }
  },
  {
    "id": "science",
    "label": {
      "zh": "科学",
      "en": "Science"
    }
  },
  {
    "id": "general",
    "label": {
      "zh": "通用",
      "en": "General"
    }
  }
],
  // Authored visual annotations, not model-generated attention or localization.
  caseAnimations: {
    "sfe-676": {
      "kind": "spectrum",
      "answerPresentation": "molecule-selection",
      "size": [
        2131,
        832
      ],
      "focus": [
        0.5,
        0.5,
        1
      ],
      "caption": {
        "zh": "从质谱匹配分子结构",
        "en": "Match a spectrum to a molecule"
      },
      "regions": [],
      "spectrum": {
        "size": [
          2131,
          832
        ],
        "crop": [
          21,
          22,
          2091,
          784
        ]
      },
      "molecules": {
        "sprite": "assets/cases/sfe-676-structures.svg",
        "options": [
          {
            "letter": "A",
            "imageIndex": 1,
            "complex": false
          },
          {
            "letter": "B",
            "imageIndex": 2,
            "complex": false
          },
          {
            "letter": "C",
            "imageIndex": 3,
            "complex": true
          },
          {
            "letter": "D",
            "imageIndex": 4,
            "complex": true
          },
          {
            "letter": "E",
            "imageIndex": 5,
            "complex": false
          },
          {
            "letter": "F",
            "imageIndex": 6,
            "complex": false
          },
          {
            "letter": "G",
            "imageIndex": 7,
            "complex": false
          }
        ]
      }
    },
    "sfe-700": {
      "kind": "scientific",
      "imagePalette": "peptide-purple",
      "answerPresentation": "ion-counts",
      "colors": ["#a6bfff", "#a6bfff", "#b49aff"],
      "size": [
        1854,
        424
      ],
      "outlineOnly": true,
      "focus": [
        0.43,
        0.5,
        1.18
      ],
      "caption": {
        "zh": "读出肽段质谱中的离子",
        "en": "Read the ions in a peptide spectrum"
      },
      "regions": [
        {
          "box": [
            0.153,
            0.63,
            0.022,
            0.1
          ],
          "label": {
            "zh": "b2 离子",
            "en": "b2 ion"
          }
        },
        {
          "box": [
            0.568,
            0.63,
            0.022,
            0.1
          ],
          "label": {
            "zh": "b8 离子",
            "en": "b8 ion"
          }
        },
        {
          "box": [
            0.173,
            0.28,
            0.427,
            0.45
          ],
          "label": {
            "zh": "y 离子标记",
            "en": "y-ion labels"
          }
        }
      ]
    },
    "sfe-693": {
      "kind": "rna",
      "durationMs": 2800,
      "size": [
        1280,
        599
      ],
      "outlineOnly": true,
      "focus": [
        0.5,
        0.5,
        1.02
      ],
      "colors": [
        "#e8ce91",
        "#e8ce91",
        "#e8ce91",
        "#e8ce91",
        "#e8ce91"
      ],
      "caption": {
        "zh": "识别 RNA 的茎区",
        "en": "Count stems in an RNA structure"
      },
      "answerPresentation": "stem-count",
      "rna": {
        "sprite": "assets/cases/sfe-693-structure.svg",
        "route": "M53 591 L53 550 Q17 512 53 477 A75 75 0 1 1 111 477 Q148 512 111 550 L111 591 L233 591 L233 427 A55 55 0 1 1 291 427 L291 591 L658 591 L658 509 L623 489 L658 468 L658 427 A44 44 0 1 1 716 427 L716 591 L839 591 L803 570 L839 550 L839 509 A62 62 0 1 1 896 509 L896 591 L1016 591 A53 53 0 1 1 1074 591 L1175 591 L1175 427 L1140 407 L1175 387 L1175 100 A50.5 50.5 0 1 1 1232 100 L1232 591 L1274 591"
      },
      "regions": [
        {
          "box": [
            0.027,
            0.775,
            0.075,
            0.24
          ],
          "label": {
            "zh": "茎区 1",
            "en": "Stem 1"
          }
        },
        {
          "box": [
            0.165,
            0.69,
            0.08,
            0.325
          ],
          "label": {
            "zh": "茎区 2",
            "en": "Stem 2"
          }
        },
        {
          "box": [
            0.498,
            0.69,
            0.078,
            0.325
          ],
          "label": {
            "zh": "茎区 3",
            "en": "Stem 3"
          }
        },
        {
          "box": [
            0.642,
            0.827,
            0.075,
            0.188
          ],
          "label": {
            "zh": "茎区 4",
            "en": "Stem 4"
          }
        },
        {
          "box": [
            0.902,
            0.14,
            0.078,
            0.875
          ],
          "label": {
            "zh": "茎区 5",
            "en": "Stem 5"
          }
        }
      ]
    },
    "emvista-208": {
      "kind": "scientific",
      "answerPresentation": "diameter-choice",
      "size": [
        512,
        512
      ],
      "natural": true,
      "paper": true,
      "outlineOnly": true,
      "focus": [
        0.52,
        0.52,
        1.03
      ],
      "caption": {
        "zh": "用标尺理解纳米颗粒",
        "en": "Read nanoscale particle sizes"
      },
      "regions": [
        {
          "box": [
            0.81,
            0.875,
            0.17,
            0.1
          ],
          "label": {
            "zh": "100 nm 标尺",
            "en": "100 nm scale bar"
          }
        },
        {
          "box": [
            0.31,
            0.38,
            0.22,
            0.22
          ],
          "label": {
            "zh": "颗粒尺寸",
            "en": "Particle sizes"
          }
        },
        {
          "box": [
            0.55,
            0.53,
            0.24,
            0.22
          ],
          "label": {
            "zh": "尺度对照",
            "en": "Scale comparison"
          }
        }
      ]
    },    "molparse-7": {
      "durationMs": 2000,
      "kind": "molecule",
      "size": [
        121,
        168
      ],
      "ink": true,
      "displayImage": "assets/cases/molparse-7-enhanced.png",
      "imageNote": {
        "zh": "AI 增强展示图 · 原始输入见下方“原始评测图片”",
        "en": "AI-enhanced display · Original input: “Original evaluation image” below"
      },
      "outlineOnly": true,
      "focus": [
        0.49,
        0.49,
        1.15
      ],
      "caption": {
        "zh": "结构图 → E-SMILES",
        "en": "STRUCTURE → E-SMILES"
      },
      "regions": [
        {
          "label": {
            "zh": "沿分子骨架描边",
            "en": "Trace the molecular scaffold"
          },
          "box": [
            0.08,
            0.47,
            0.57,
            0.52
          ],
          "path": [
            [
              0.29,
              0.98
            ],
            [
              0.22,
              0.82
            ],
            [
              0.32,
              0.77
            ],
            [
              0.3,
              0.61
            ],
            [
              0.13,
              0.57
            ],
            [
              0.31,
              0.64
            ],
            [
              0.44,
              0.49
            ],
            [
              0.63,
              0.52
            ]
          ]
        },
        {
          "label": {
            "zh": "聚焦含氮环",
            "en": "Focus on the nitrogen ring"
          },
          "box": [
            0.14,
            0.07,
            0.4,
            0.36
          ],
          "path": [
            [
              0.2,
              0.17
            ],
            [
              0.36,
              0.13
            ],
            [
              0.5,
              0.24
            ],
            [
              0.39,
              0.34
            ],
            [
              0.2,
              0.29
            ],
            [
              0.2,
              0.17
            ]
          ]
        },
        {
          "label": {
            "zh": "连接右侧基团",
            "en": "Connect the right-hand group"
          },
          "box": [
            0.53,
            0.04,
            0.46,
            0.4
          ],
          "path": [
            [
              0.49,
              0.24
            ],
            [
              0.7,
              0.24
            ],
            [
              0.78,
              0.11
            ],
            [
              0.71,
              0.26
            ],
            [
              0.8,
              0.36
            ]
          ]
        }
      ]
    },
    "openrxn-3": {
      "durationMs": 2000,
      "kind": "reaction",
      "size": [
        1146,
        1531
      ],
      "ink": true,
      "focus": [
        0.36,
        0.115,
        2.45
      ],
      "caption": {
        "zh": "反应图 → 条件与产物",
        "en": "REACTION → CONDITIONS & PRODUCT"
      },
      "regions": [
        {
          "label": {
            "zh": "锁定通用反应",
            "en": "Frame the general reaction"
          },
          "box": [
            0.01,
            0.04,
            0.24,
            0.09
          ],
          "path": [
            [
              0.055,
              0.075
            ],
            [
              0.073,
              0.052
            ],
            [
              0.106,
              0.052
            ],
            [
              0.124,
              0.075
            ],
            [
              0.106,
              0.098
            ],
            [
              0.073,
              0.098
            ],
            [
              0.055,
              0.075
            ]
          ]
        },
        {
          "label": {
            "zh": "提亮条件区域",
            "en": "Illuminate the conditions"
          },
          "box": [
            0.25,
            0.067,
            0.23,
            0.113
          ],
          "path": [
            [
              0.256,
              0.12
            ],
            [
              0.47,
              0.12
            ]
          ]
        },
        {
          "label": {
            "zh": "沿箭头看向产物",
            "en": "Follow the arrow to the product"
          },
          "box": [
            0.48,
            0.031,
            0.24,
            0.093
          ],
          "path": [
            [
              0.501,
              0.061
            ],
            [
              0.528,
              0.039
            ],
            [
              0.576,
              0.039
            ],
            [
              0.598,
              0.062
            ],
            [
              0.578,
              0.085
            ],
            [
              0.53,
              0.085
            ],
            [
              0.501,
              0.061
            ]
          ]
        }
      ]
    },
    "protein-0": {
      "kind": "domains",
      "size": [
        1000,
        620
      ],
      "ink": false,
      "focus": [
        0.5,
        0.49,
        1.07
      ],
      "caption": {
        "zh": "文本问答 · 结构域关系示意",
        "en": "TEXT QUESTION · DOMAIN SCHEMATIC"
      },
      "regions": [
        {
          "label": {
            "zh": "聚焦 KH1 / KH2",
            "en": "Focus on KH1 / KH2"
          },
          "box": [
            0.1,
            0.24,
            0.35,
            0.39
          ]
        },
        {
          "label": {
            "zh": "切换到 KH3 / KH4",
            "en": "Shift to KH3 / KH4"
          },
          "box": [
            0.55,
            0.24,
            0.35,
            0.39
          ]
        },
        {
          "label": {
            "zh": "连接到参考选项",
            "en": "Connect to the reference option"
          },
          "box": [
            0.18,
            0.67,
            0.64,
            0.2
          ]
        }
      ]
    },
    "realworld-46": {
      "kind": "aerial",
      "answerPresentation": "location-choice",
      "size": [
        1147,
        1083
      ],
      "ink": false,
      "focus": [
        0.67,
        0.58,
        1.7
      ],
      "caption": {
        "zh": "遥感图像 → 空间定位",
        "en": "AERIAL IMAGE → SPATIAL LOCATION"
      },
      "regions": [
        {
          "label": {
            "zh": "建立全图方位",
            "en": "Establish the image layout"
          },
          "box": [
            0.12,
            0.13,
            0.72,
            0.71
          ]
        },
        {
          "label": {
            "zh": "聚焦右侧中部",
            "en": "Focus on the right-center"
          },
          "box": [
            0.61,
            0.51,
            0.13,
            0.15
          ],
          "path": [
            [
              0.611,
              0.551
            ],
            [
              0.659,
              0.517
            ],
            [
              0.738,
              0.616
            ],
            [
              0.689,
              0.65
            ],
            [
              0.611,
              0.551
            ]
          ]
        },
        {
          "label": {
            "zh": "勾勒停车区域",
            "en": "Outline the parking area"
          },
          "box": [
            0.61,
            0.51,
            0.13,
            0.15
          ]
        }
      ]
    }
  },
  caseStudies: [
  {
    "id": "molparse-7",
    "sourceColumn": "AC",
    "category": "science",
    "title": {
      "zh": "从结构图到分子表达",
      "en": "From diagram to molecular notation"
    },
    "question": {
      "zh": "请写出图中分子的 Extended SMILES（E-SMILES）。",
      "en": "Please write the Extended SMILES (E-SMILES) of the given molecule image."
    },
    "image": "assets/cases/molparse-7.png",
    "imageAlt": {
      "zh": "从结构图到分子表达",
      "en": "From diagram to molecular notation"
    },
    "choices": [],
    "prompt": "<image>Please write the Extended SMILES (E-SMILES) of the given molecule image.\n\nBelow is the definition of Extended SMILES (E-SMILES) Format Writing Rules:\n\nThe Extended SMILES (E-SMILES) format used in the MolParser paper is designed to augment a standard RDKit-compatible SMILES string with additional machine-readable annotations, especially useful for representing Markush structures, abstract rings, repeating groups, and other extensions commonly seen in chemical patents.\nThe general form of an E-SMILES string is:\n    SMILES<sep>EXTENSION\n\n# Components:\n\n1. SMILES\n        This is a valid RDKit-compatible SMILES string.\n        To ensure consistency, the atom indexing starts from 0. You can generate this using RDKit with rootedAtAtom=0.\n\n2. <sep>\n    A special delimiter separating the base SMILES string from the extension part.\n\n3. EXTENSION\n    The extension part contains structured XML-like tokens providing additional information.\n    These tokens annotate atom positions, ring positions, and other special features.\n    There are three types of tags:\n        <a>ATOM_INDEX:[GROUP_NAME]</a> — attaches a group to a specific atom.\n        <r>RING_INDEX:[GROUP_NAME]</r> — attaches a group to any position on a ring.\n        <c>CIRCLE_INDEX:[CIRCLE_NAME]</c> — defines abstract repeating rings.\n        A special token <dum> can be used to represent a connection point.\n\n# Definitions:\n    ATOM_INDEX: Index of the atom in the SMILES string (starting from 0).\n    RING_INDEX: Index of the ring in the molecule (starting from 0).\n    CIRCLE_INDEX: Index of the abstract repeating ring (starting from 0).\n    GROUP_NAME: The name of the substituent or group, which may be:\n        A standard group: R, X, Y, Z, Ph, Me, OMe, CF3, etc.\n        An arbitrary or custom-defined group with superscripts or subscripts, e.g., R[1], X[2], R1, R₃.\n\n# Examples:\n    (1)*c1ccccc1<sep><a>0:R[1]</a>\n        → Adds substituent R[1] to atom 0.\n    (2)clccecc1<sep><r>0:R[1]</r><r>0:R[2]</r>\n        → Adds two substituents R[1], R[2] to ring 0.\n    (3)*C1*C(*)C(C(*)C2=CC=N=C2)N=1<sep><a>0:R[4]</a><a>1:X</a><r>1:R[5]</r>\n        → Complex structure with atom-level and ring-level substitutions.\n    (4)*c(NC(*)C(*)C(*)C(*)C(=O)N(*)<sep><a>0:R[1]</a><a>2:R[3]</a><a>5:R[2]</a><a>7:R[5]</a><a>8:R[4]</a><c>0:B</c><a>13:R[7]</a><a>14:R[6]</a>\n        → Shows the usage of abstract ring <c>, with multiple atom-level substitutions.\n",
    "response": "CCOC(=O)C(C)n1ccnc1C(=O)O<sep>",
    "reference": "CCOC(=O)C(C)n1ccnc1C(=O)O<sep>",
    "verification": {
      "zh": "原始回答与参考 E-SMILES 完全一致，本地 judge 亦判为正确。",
      "en": "The recorded E-SMILES exactly matches the reference and was accepted by the local judge."
    },
    "metric": "Exact reference match + local judge",
    "docId": 7,
    "sourceRow": 67,
    "evaluatedAt": "2026-09-11",
    "split": "test",
    "thinkingMode": false
  },
  {
    "id": "openrxn-3",
    "sourceColumn": "AD",
    "category": "science",
    "title": {
      "zh": "提取反应条件与产物",
      "en": "Read the reaction conditions"
    },
    "question": {
      "zh": "提取图中的通用反应条件和产物。",
      "en": "Extract the general reaction conditions and products from this image."
    },
    "image": "assets/cases/openrxn-3.png",
    "imageAlt": {
      "zh": "提取反应条件与产物",
      "en": "Read the reaction conditions"
    },
    "choices": [],
    "prompt": "<image>Extract the general reaction conditions and products from this image.",
    "response": "<E-SMILES>COc1ccc(C2=NNC(=O)C2(C)C)c(*)c1F<sep><a>15:R[1]</a></E-SMILES>>>Oc1ccc(C2=NNC(=O)C2(C)C)c(*)c1F<sep><a>14:R[1]</a>(agents: [Al+3], solvents: THF, time: 10h, temperature: 121°C)",
    "reference": "<E-SMILES>COc1ccc(C2=NNC(=O)C2(C)C)c(*)c1F<sep><a>15:R[1]</a></E-SMILES>>>Oc1ccc(C2=NNC(=O)C2(C)C)c(*)c1F<sep><a>14:R[1]</a>(agents: [Al+3], solvents: THF, time: 10h, temperature: 121°C)",
    "verification": {
      "zh": "回答保留产物结构、THF、10h 与 121°C；与参考答案完全一致，judge 判为正确。",
      "en": "The response preserves the product structure, THF, 10h and 121°C. It exactly matches the reference and was accepted by the judge."
    },
    "metric": "Exact reference match + local judge",
    "docId": 3,
    "sourceRow": 67,
    "evaluatedAt": "2026-09-11",
    "split": "test",
    "thinkingMode": false
  },
  {
    "id": "protein-0",
    "sourceColumn": "AI",
    "category": "science",
    "title": {
      "zh": "辨别蛋白质结构域关系",
      "en": "Distinguish protein domain interfaces"
    },
    "question": {
      "zh": "IMP1 蛋白的 KH1/KH2 与 KH3/KH4 结构域，在域间界面上有何不同？",
      "en": "How do the KH1 and KH2 domains of the IMP1 protein interact differently compared to the KH3 and KH4 domains in terms of their inter-domain interface?"
    },
    "image": null,
    "imageAlt": {
      "zh": "辨别蛋白质结构域关系",
      "en": "Distinguish protein domain interfaces"
    },
    "choices": [
      "option 1: The differences in the inter domain interface in KH1KH2 result in a change in the angle between the two domains and a shorter distance between the RNA binding grooves.",
      "option 2: The KH1 and KH2 domains form a symmetrical pseudo dimer like KH3 and KH4.",
      "option 3: KH1 alpha 3 is longer than KH3 alpha 3 and the linker between KH1 and KH2 is three amino acids shorter than that between KH3 and KH4.",
      "option 4: Many of the amino acids mediating the contacts between the two alpha 3 helices are conserved in KH1KH2 across species, but are different in KH3KH4.",
      "option 5: The KH1 and KH2 domains interact through the two beta 1 strands, the inter domain linker, and the C terminal alpha helix of each domain.",
      "option 6: The path between the RNA binding grooves of KH1 and KH2 is negatively charged."
    ],
    "prompt": "Answer the multiple-choice question based solely on the provided context. \nIf you are still unsure about the answer, output option 7.\nSelect only ONE correct option by its number. Start your response with 'The correct option is' followed by the option number ONLY. eg: \"The correct option is Option X.\"\n\n Question: \nHow do the KH1 and KH2 domains of the IMP1 protein interact differently compared to the KH3 and KH4 domains in terms of their inter-domain interface?\n Options: \noption 1: The differences in the inter domain interface in KH1KH2 result in a change in the angle between the two domains and a shorter distance between the RNA binding grooves.\noption 2: The KH1 and KH2 domains form a symmetrical pseudo dimer like KH3 and KH4.\noption 3: KH1 alpha 3 is longer than KH3 alpha 3 and the linker between KH1 and KH2 is three amino acids shorter than that between KH3 and KH4.\noption 4: Many of the amino acids mediating the contacts between the two alpha 3 helices are conserved in KH1KH2 across species, but are different in KH3KH4.\noption 5: The KH1 and KH2 domains interact through the two beta 1 strands, the inter domain linker, and the C terminal alpha helix of each domain.\noption 6: The path between the RNA binding grooves of KH1 and KH2 is negatively charged.\n\nThe correct option is:",
    "response": "Option 1",
    "reference": "1",
    "verification": {
      "zh": "模型选中选项 1，与参考选项一致。这是原始纯文本问答样本。",
      "en": "The model selected option 1, matching the reference. This is an original text-only question."
    },
    "metric": "Correct option",
    "docId": 0,
    "sourceRow": 67,
    "evaluatedAt": "2026-09-11",
    "split": "train",
    "thinkingMode": false
  },
  {
    "id": "sfe-676",
    "sourceColumn": "AK",
    "category": "science",
    "title": {
      "zh": "从质谱匹配分子结构",
      "en": "Match a spectrum to a molecule"
    },
    "question": {
      "zh": "根据质谱，从 A–G 七个候选分子结构中选择最匹配的一项。",
      "en": "Which of the seven molecular structures A–G best matches the mass spectrum?"
    },
    "image": "assets/cases/sfe-676-0.png",
    "imageAlt": {
      "zh": "质谱",
      "en": "Mass spectrum"
    },
    "choices": [
      "(A) <image>",
      "(B) <image>",
      "(C) <image>",
      "(D) <image>",
      "(E) <image>",
      "(F) <image>",
      "(G) <image>"
    ],
    "prompt": "You are an expert in life and need to solve the following question.\nThe question is a multiple-choice question. Answer with the option letter from the given choices.\n\nThis is a multiple-choice question with only one correct answer. Based on given mass spectrum <image>, select the molecular structure that best matches it.\n(A) <image>\n(B) <image>\n(C) <image>\n(D) <image>\n(E) <image>\n(F) <image>\n(G) <image>",
    "response": "C",
    "reference": "C",
    "verification": {
      "zh": "原始回答 C 与参考选项完全一致，SFE judge 的该题得分为 1。谱图与七张候选结构均来自原始输入；这条记录仅包含最终选项，不包含模型推理过程。",
      "en": "The recorded answer C exactly matches the reference; the SFE judge gives this item a score of 1. The spectrum and all seven structures are original inputs. This record contains the final choice, not a reasoning trace."
    },
    "metric": "SFE judge · exact_match = 1",
    "docId": 676,
    "sourceRow": 67,
    "evaluatedAt": "2026-09-02",
    "split": "test",
    "thinkingMode": false,
    "inputLanguage": "en",
    "images": [
      {
        "src": "assets/cases/sfe-676-0.png",
        "label": {
          "zh": "质谱",
          "en": "Mass spectrum"
        },
        "alt": {
          "zh": "质谱",
          "en": "Mass spectrum"
        }
      },
      {
        "src": "assets/cases/sfe-676-1.png",
        "label": {
          "zh": "候选 A",
          "en": "Option A"
        },
        "alt": {
          "zh": "候选 A",
          "en": "Option A"
        }
      },
      {
        "src": "assets/cases/sfe-676-2.png",
        "label": {
          "zh": "候选 B",
          "en": "Option B"
        },
        "alt": {
          "zh": "候选 B",
          "en": "Option B"
        }
      },
      {
        "src": "assets/cases/sfe-676-3.png",
        "label": {
          "zh": "候选 C",
          "en": "Option C"
        },
        "alt": {
          "zh": "候选 C",
          "en": "Option C"
        }
      },
      {
        "src": "assets/cases/sfe-676-4.png",
        "label": {
          "zh": "候选 D",
          "en": "Option D"
        },
        "alt": {
          "zh": "候选 D",
          "en": "Option D"
        }
      },
      {
        "src": "assets/cases/sfe-676-5.png",
        "label": {
          "zh": "候选 E",
          "en": "Option E"
        },
        "alt": {
          "zh": "候选 E",
          "en": "Option E"
        }
      },
      {
        "src": "assets/cases/sfe-676-6.png",
        "label": {
          "zh": "候选 F",
          "en": "Option F"
        },
        "alt": {
          "zh": "候选 F",
          "en": "Option F"
        }
      },
      {
        "src": "assets/cases/sfe-676-7.png",
        "label": {
          "zh": "候选 G",
          "en": "Option G"
        },
        "alt": {
          "zh": "候选 G",
          "en": "Option G"
        }
      }
    ]
  },
  {
    "id": "sfe-700",
    "sourceColumn": "AK",
    "category": "science",
    "title": {
      "zh": "读出肽段质谱中的离子",
      "en": "Read the ions in a peptide spectrum"
    },
    "question": {
      "zh": "肽段 GVSREEIQR 的 MS/MS 谱图中，标注了多少个 b 离子和 y 离子？",
      "en": "How many b ions and y ions are labeled in the MS/MS spectrum of the peptide GVSREEIQR?"
    },
    "image": "assets/cases/sfe-700.png",
    "imageAlt": {
      "zh": "读出肽段质谱中的离子",
      "en": "Read the ions in a peptide spectrum"
    },
    "choices": [],
    "prompt": "You are an expert in life and need to solve the following question.\nThe question is an exact match question. Answer the question using a single word or phrase.\n\nYou are an expert in mass spectrometry and peptide sequencing. The peptide sequence is given as GVSREEIQR. Given the MS/MS spectrum shown in <image>, please count and fill in the number of b ions and y ions in the following format:\n\n{\n  \"b ions\": ,\n  \"y ions\": \n}",
    "response": "{'b ions': 2, 'y ions': 5}",
    "reference": "{'b ions': 2, 'y ions': 5}",
    "verification": {
      "zh": "原始回答与参考完全一致：2 个 b 离子、5 个 y 离子，SFE judge 得分为 1。人工复核可见 b2、b8，以及 y1、y2、y3、y5、y7；这些标注说明不是模型输出的推理过程。",
      "en": "The response exactly matches the reference: 2 b ions and 5 y ions, with an SFE judge score of 1. Editorial inspection identifies b2, b8, y1, y2, y3, y5 and y7; this explanation is not a model reasoning trace."
    },
    "metric": "SFE judge · exact_match = 1",
    "docId": 700,
    "sourceRow": 67,
    "evaluatedAt": "2026-09-02",
    "split": "test",
    "thinkingMode": false,
    "inputLanguage": "en"
  },
  {
    "id": "sfe-693",
    "sourceColumn": "AK",
    "category": "science",
    "title": {
      "zh": "识别 RNA 的茎区",
      "en": "Count stems in an RNA structure"
    },
    "question": {
      "zh": "图中的 RNA 二级结构包含多少个茎区？",
      "en": "How many stem regions are present in this RNA secondary structure?"
    },
    "image": "assets/cases/sfe-693.png",
    "imageAlt": {
      "zh": "识别 RNA 的茎区",
      "en": "Count stems in an RNA structure"
    },
    "choices": [],
    "prompt": "You are an expert in life and need to solve the following question.\nThe question is an exact match question. Answer the question using a single word or phrase.\n\nExamine the given RNA secondary structure diagram <image>. How many stem regions are present in the structure?",
    "response": "5.0",
    "reference": "5",
    "verification": {
      "zh": "原始回答为 5.0，参考为 5，数值一致；SFE judge 得分为 1。图像为原始评测提供的 RNA 二级结构示意。",
      "en": "The recorded answer 5.0 equals the reference 5; the SFE judge score is 1. The diagram is the original RNA secondary-structure input supplied by the benchmark."
    },
    "metric": "SFE judge · exact_match = 1",
    "docId": 693,
    "sourceRow": 67,
    "evaluatedAt": "2026-09-02",
    "split": "test",
    "thinkingMode": false,
    "inputLanguage": "en"
  },
  {
    "id": "emvista-208",
    "sourceColumn": "AA",
    "category": "science",
    "title": {
      "zh": "用标尺理解纳米颗粒",
      "en": "Read nanoscale particle sizes"
    },
    "question": {
      "zh": "结合电镜图和标尺，图中颗粒的等效直径范围是多少？",
      "en": "Using the electron micrograph and its scale bar, what is the range of equivalent particle diameters?"
    },
    "image": "assets/cases/emvista-208.png",
    "imageAlt": {
      "zh": "用标尺理解纳米颗粒",
      "en": "Read nanoscale particle sizes"
    },
    "choices": [
      "A. 0 – 20 nm",
      "B. 20 – 40 nm",
      "C. 40 – 60 nm",
      "D. > 60 nm"
    ],
    "prompt": "<image>.Carefully examine the electron microscopy image, select the most accurate diagnosis based on the visual evidence observed in the microstructure, and answer the question What is the range of equivalent particle diameters (minimum to maximum, in nm)? by choosing the most suitable option from:\nA. 0 – 20 nm\nB. 20 – 40 nm\nC. 40 – 60 nm\nD. > 60 nm\n\nAnswer with the option's letter from the given choices directly.",
    "response": "C",
    "reference": "C",
    "verification": {
      "zh": "原始回答 C 对应 40–60 nm，与参考选项一致，exact_match_accuracy 为 1。该指标验证区间选择，不代表逐颗粒的精密测量。",
      "en": "The recorded answer C selects 40–60 nm and matches the reference, with exact_match_accuracy = 1. This verifies the interval choice, not a precise measurement of each particle."
    },
    "metric": "Exact match accuracy = 1",
    "docId": 208,
    "sourceRow": 67,
    "evaluatedAt": "2026-09-02",
    "split": "test",
    "thinkingMode": false,
    "inputLanguage": "en"
  },
  {
    "id": "realworld-46",
    "sourceColumn": "O",
    "category": "general",
    "title": {
      "zh": "定位遥感图中的停车场",
      "en": "Locate a parking lot from above"
    },
    "question": {
      "zh": "图中的矩形停车场位于哪里？",
      "en": "Where is the rectangular parking lot located in the picture?"
    },
    "image": "assets/cases/realworld-46.jpg",
    "imageAlt": {
      "zh": "定位遥感图中的停车场",
      "en": "Locate a parking lot from above"
    },
    "choices": [
      "(A) In the upper left area of the picture",
      "(B) In the upper right area of the picture",
      "(C) In the lower right area of the picture",
      "(D) In the right-center area of the picture",
      "(E) This image doesn't feature the position."
    ],
    "prompt": "Where is the rectangular parking lot located in the picture? The choices are listed below:\n(A) In the upper left area of the picture\n(B) In the upper right area of the picture\n(C) In the lower right area of the picture\n(D) In the right-center area of the picture\n(E) This image doesn't feature the position.\nSelect the best answer to the above multiple-choice question based on the image. Respond with only the letter (A, B, C, D, or E) of the correct option.\nThe best answer is: ",
    "response": "D",
    "reference": "D",
    "verification": {
      "zh": "原始回答 D 对应“图像右侧中部”，与参考选项一致。",
      "en": "The recorded answer D means “in the right-center area” and matches the reference."
    },
    "metric": "Correct option",
    "docId": 46,
    "sourceRow": 67,
    "evaluatedAt": "2026-09-01",
    "split": "train",
    "thinkingMode": false
  }
]
};
