// ==========================================
// ㄅㄆㄇ 冒險樂園 - 核心遊戲邏輯與資料庫
// ==========================================

// 1. 注音符號資料庫 (37個符號)
const ZHUYIN_DB = {
  // --- 聲母 ---
  "ㄅ": { category: "initial", word: "包子", pinyin: "ㄅㄠ ˙ㄗ", rhyme: "ㄅ ㄅ ㄅ，包子香香，爸爸買包子。", color: "#FFE4E6", textColor: "#BE123C", svg: `<circle cx="50" cy="50" r="30" fill="#FDA4AF"/><path d="M40 35 h20 v20 H40 z" fill="#FFF"/><path d="M45 42 Q50 37 55 42" stroke="#FDA4AF" stroke-width="3" fill="none"/>` },
  "ㄆ": { category: "initial", word: "蘋果", pinyin: "ㄆㄧㄥˊ ㄍㄨㄛˇ", rhyme: "ㄆ ㄆ ㄆ，蘋果甜甜，婆婆洗蘋果。", color: "#FFE4E6", textColor: "#BE123C", svg: `<circle cx="50" cy="50" r="35" fill="#EF4444"/><path d="M50 15 Q55 5 45 5 Q40 5 50 15" stroke="#10B981" stroke-width="3" fill="none"/><circle cx="42" cy="45" r="3" fill="#FFF"/>` },
  "ㄇ": { category: "initial", word: "貓咪", pinyin: "ㄇㄠ ㄇㄧ", rhyme: "ㄇ ㄇ ㄇ，貓咪喵喵，小貓抓蝴蝶。", color: "#FFE4E6", textColor: "#BE123C", svg: `<path d="M20 70 Q20 30 50 30 Q80 30 80 70 Z" fill="#F59E0B"/><path d="M20 35 L30 45 L15 50 Z" fill="#D97706"/><path d="M80 35 L70 45 L85 50 Z" fill="#D97706"/><circle cx="38" cy="48" r="4" fill="#000"/><circle cx="62" cy="48" r="4" fill="#000"/><path d="M48 55 L52 55 L50 58 Z" fill="#000"/><path d="M40 58 Q50 63 60 58" stroke="#000" stroke-width="2" fill="none"/>` },
  "ㄈ": { category: "initial", word: "飛機", pinyin: "ㄈㄟ ㄐㄧ", rhyme: "ㄈ ㄈ ㄈ，飛機高高，飛到白雲端。", color: "#FFE4E6", textColor: "#BE123C", svg: `<path d="M15 50 Q50 35 85 50 L80 55 L20 55 Z" fill="#3B82F6"/><path d="M45 45 L50 15 L60 45 Z" fill="#60A5FA"/><path d="M45 55 L50 85 L60 55 Z" fill="#60A5FA"/><circle cx="30" cy="51" r="2" fill="#FFF"/><circle cx="45" cy="51" r="2" fill="#FFF"/><circle cx="60" cy="51" r="2" fill="#FFF"/>` },
  "ㄉ": { category: "initial", word: "大象", pinyin: "ㄉㄚˋ ㄒㄧㄤˋ", rhyme: "ㄉ ㄉ ㄉ，大象大鼻，大步往前走。", color: "#FFE4E6", textColor: "#BE123C", svg: `<rect x="25" y="30" width="50" height="40" rx="15" fill="#9CA3AF"/><circle cx="35" cy="45" r="4" fill="#000"/><circle cx="65" cy="45" r="4" fill="#000"/><path d="M50 48 Q50 75 40 75" stroke="#9CA3AF" stroke-width="12" stroke-linecap="round" fill="none"/><path d="M15 35 Q10 45 20 50 Z" fill="#78716C"/><path d="M85 35 Q90 45 80 50 Z" fill="#78716C"/>` },
  "ㄊ": { category: "initial", word: "兔子", pinyin: "ㄊㄨˋ ㄗ˙", rhyme: "ㄊ ㄊ ㄊ，兔子跳跳，愛吃紅蘿蔔。", color: "#FFE4E6", textColor: "#BE123C", svg: `<circle cx="50" cy="55" r="25" fill="#E5E7EB"/><rect x="35" y="10" width="10" height="30" rx="5" fill="#E5E7EB"/><rect x="55" y="10" width="10" height="30" rx="5" fill="#E5E7EB"/><path d="M38 18 H42 V28 H38 Z" fill="#FCA5A5"/><path d="M58 18 H62 V28 H58 Z" fill="#FCA5A5"/><circle cx="42" cy="50" r="3" fill="#EF4444"/><circle cx="58" cy="50" r="3" fill="#EF4444"/><circle cx="50" cy="58" r="3" fill="#FCA5A5"/>` },
  "ㄋ": { category: "initial", word: "牛奶", pinyin: "ㄋㄧㄡˊ ㄋㄞˇ", rhyme: "ㄋ ㄋ ㄋ，牛奶營養，每天喝一杯。", color: "#FFE4E6", textColor: "#BE123C", svg: `<rect x="32" y="20" width="36" height="55" rx="5" fill="#FFF" stroke="#6B7280" stroke-width="3"/><rect x="32" y="35" width="36" height="20" fill="#3B82F6"/><path d="M40 45 Q50 35 60 45" stroke="#FFF" stroke-width="3" fill="none"/><circle cx="45" cy="65" r="3" fill="#E5E7EB"/><circle cx="55" cy="65" r="3" fill="#E5E7EB"/>` },
  "ㄌ": { category: "initial", word: "綠色", pinyin: "ㄌㄩˋ ㄙㄜˋ", rhyme: "ㄌ ㄌ ㄌ，綠色小草，長滿大草原。", color: "#FFE4E6", textColor: "#BE123C", svg: `<rect x="15" y="70" width="70" height="15" fill="#10B981"/><path d="M30 70 L30 45 Q35 55 40 70" stroke="#10B981" stroke-width="5" fill="none"/><path d="M50 70 L50 35 Q55 50 60 70" stroke="#10B981" stroke-width="6" fill="none"/><path d="M70 70 L70 50 Q75 60 80 70" stroke="#10B981" stroke-width="5" fill="none"/>` },
  "ㄍ": { category: "initial", word: "西瓜", pinyin: "ㄒㄧ ㄍㄨㄚ", rhyme: "ㄍ ㄍ ㄍ，西瓜甜甜，夏天最消暑。", color: "#FFE4E6", textColor: "#BE123C", svg: `<path d="M20 40 Q50 85 80 40 Z" fill="#EF4444" stroke="#10B981" stroke-width="6"/><circle cx="35" cy="48" r="2" fill="#000"/><circle cx="50" cy="55" r="2" fill="#000"/><circle cx="65" cy="48" r="2" fill="#000"/>` },
  "ㄎ": { category: "initial", word: "恐龍", pinyin: "ㄎㄨㄥˇ ㄌㄨㄥˊ", rhyme: "ㄎ ㄎ ㄎ，恐龍高大，吼聲震森林。", color: "#FFE4E6", textColor: "#BE123C", svg: `<path d="M30 70 Q30 35 55 35 Q75 35 75 55 Q75 70 85 70" stroke="#10B981" stroke-width="12" stroke-linecap="round" fill="none"/><circle cx="45" cy="42" r="4" fill="#000"/><path d="M25 68 L32 70 L30 75 Z" fill="#F59E0B"/><path d="M50 70 Q45 85 55 85" stroke="#10B981" stroke-width="6" fill="none"/>` },
  "ㄏ": { category: "initial", word: "花朵", pinyin: "ㄏㄨㄚ ㄉㄨㄛˇ", rhyme: "ㄏ ㄏ ㄏ，花朵香香，蝴蝶愛採蜜。", color: "#FFE4E6", textColor: "#BE123C", svg: `<circle cx="50" cy="50" r="14" fill="#FBBF24"/><circle cx="50" cy="26" r="12" fill="#F87171"/><circle cx="50" cy="74" r="12" fill="#F87171"/><circle cx="26" cy="50" r="12" fill="#F87171"/><circle cx="74" cy="50" r="12" fill="#F87171"/><circle cx="33" cy="33" r="12" fill="#F87171"/><circle cx="67" cy="33" r="12" fill="#F87171"/><circle cx="33" cy="67" r="12" fill="#F87171"/><circle cx="67" cy="67" r="12" fill="#F87171"/>` },
  "ㄐ": { category: "initial", word: "雞蛋", pinyin: "ㄐㄧ ㄉㄢˋ", rhyme: "ㄐ ㄐ ㄐ，雞蛋圓圓，營養又美味。", color: "#FFE4E6", textColor: "#BE123C", svg: `<path d="M30 60 Q30 20 50 20 Q70 20 70 60 Q70 85 50 85 Q30 85 30 60 Z" fill="#FFF" stroke="#D1D5DB" stroke-width="4"/><circle cx="45" cy="40" r="3" fill="#D1D5DB"/><circle cx="55" cy="40" r="3" fill="#D1D5DB"/>` },
  "ㄑ": { category: "initial", word: "氣球", pinyin: "ㄑㄧˋ ㄑㄧㄡˊ", rhyme: "ㄑ ㄑ ㄑ，氣球飛高，牽在手裡玩。", color: "#FFE4E6", textColor: "#BE123C", svg: `<circle cx="50" cy="40" r="28" fill="#EC4899"/><path d="M50 68 L48 72 H52 Z" fill="#D946EF"/><path d="M50 72 Q45 80 50 88" stroke="#9CA3AF" stroke-width="2" fill="none"/>` },
  "ㄒ": { category: "initial", word: "香蕉", pinyin: "ㄒㄧㄤ ㄐㄧㄠ", rhyme: "ㄒ ㄒ ㄒ，香蕉彎彎，像一條小船。", color: "#FFE4E6", textColor: "#BE123C", svg: `<path d="M20 30 Q50 75 80 30 Q70 55 30 50 Z" fill="#FBBF24"/><path d="M80 30 L83 26" stroke="#78350F" stroke-width="4" stroke-linecap="round"/>` },
  "ㄓ": { category: "initial", word: "蜘蛛", pinyin: "ㄓ ㄓㄨ", rhyme: "ㄓ ㄓ ㄓ，蜘蛛織網，捕捉小蚊子。", color: "#FFE4E6", textColor: "#BE123C", svg: `<circle cx="50" cy="50" r="15" fill="#1F2937"/><path d="M50 20 Q50 35 50 80" stroke="#E5E7EB" stroke-width="1"/><path d="M20 50 Q50 50 80 50" stroke="#E5E7EB" stroke-width="1"/><circle cx="45" cy="48" r="2" fill="#EF4444"/><circle cx="55" cy="48" r="2" fill="#EF4444"/><path d="M35 50 Q30 35 20 40" stroke="#1F2937" stroke-width="3" fill="none"/><path d="M65 50 Q70 35 80 40" stroke="#1F2937" stroke-width="3" fill="none"/><path d="M35 52 Q28 65 20 60" stroke="#1F2937" stroke-width="3" fill="none"/><path d="M65 52 Q72 65 80 60" stroke="#1F2937" stroke-width="3" fill="none"/>` },
  "ㄔ": { category: "initial", word: "汽車", pinyin: "ㄑㄧˋ ㄔㄜ", rhyme: "ㄔ ㄔ ㄔ，汽車跑快，嗶嗶過馬路。", color: "#FFE4E6", textColor: "#BE123C", svg: `<rect x="25" y="40" width="50" height="25" rx="5" fill="#EF4444"/><path d="M33 40 L40 28 H60 L67 40 Z" fill="#93C5FD"/><circle cx="37" cy="65" r="8" fill="#1F2937"/><circle cx="63" cy="65" r="8" fill="#1F2937"/><circle cx="37" cy="65" r="3" fill="#9CA3AF"/><circle cx="63" cy="65" r="3" fill="#9CA3AF"/>` },
  "ㄕ": { category: "initial", word: "獅子", pinyin: "ㄕ ㄗ˙", rhyme: "ㄕ ㄕ ㄕ，獅子大吼，森林的大王。", color: "#FFE4E6", textColor: "#BE123C", svg: `<circle cx="50" cy="50" r="32" fill="#F59E0B"/><circle cx="50" cy="50" r="20" fill="#FBBF24"/><circle cx="43" cy="45" r="3" fill="#000"/><circle cx="57" cy="45" r="3" fill="#000"/><circle cx="50" cy="53" r="3" fill="#EF4444"/><path d="M45 60 Q50 63 55 60" stroke="#000" stroke-width="2" fill="none"/><path d="M25 25 L32 35" stroke="#F59E0B" stroke-width="8" stroke-linecap="round"/><path d="M75 25 L68 35" stroke="#F59E0B" stroke-width="8" stroke-linecap="round"/>` },
  "ㄖ": { category: "initial", word: "日曆", pinyin: "ㄖˋ ㄌㄧˋ", rhyme: "ㄖ ㄖ ㄖ，日曆天天，撕下一頁頁。", color: "#FFE4E6", textColor: "#BE123C", svg: `<rect x="25" y="20" width="50" height="60" rx="5" fill="#FFF" stroke="#D1D5DB" stroke-width="3"/><rect x="25" y="20" width="50" height="15" fill="#EF4444"/><circle cx="35" cy="27" r="2" fill="#FFF"/><circle cx="65" cy="27" r="2" fill="#FFF"/><text x="50" y="65" font-family="Arial" font-size="28" font-weight="bold" fill="#1F2937" text-anchor="middle">7</text>` },
  "ㄗ": { category: "initial", word: "紫色", pinyin: "ㄗˇ ㄙㄜˋ", rhyme: "ㄗ ㄗ ㄗ，紫色葡萄，一串圓又甜。", color: "#FFE4E6", textColor: "#BE123C", svg: `<circle cx="42" cy="35" r="10" fill="#8B5CF6"/><circle cx="58" cy="35" r="10" fill="#8B5CF6"/><circle cx="35" cy="50" r="10" fill="#8B5CF6"/><circle cx="50" cy="50" r="10" fill="#8B5CF6"/><circle cx="65" cy="50" r="10" fill="#8B5CF6"/><circle cx="42" cy="65" r="10" fill="#8B5CF6"/><circle cx="58" cy="65" r="10" fill="#8B5CF6"/><circle cx="50" cy="78" r="10" fill="#8B5CF6"/><path d="M50 15 Q45 22 50 26" stroke="#10B981" stroke-width="3" fill="none"/>` },
  "ㄘ": { category: "initial", word: "草地", pinyin: "ㄘㄠˇ ㄉㄧˋ", rhyme: "ㄘ ㄘ ㄘ，草地綠綠，小狗跑又跳。", color: "#FFE4E6", textColor: "#BE123C", svg: `<rect x="10" y="65" width="80" height="25" fill="#10B981" rx="5"/><path d="M25 65 L20 45 L30 65" fill="#10B981"/><path d="M45 65 L45 40 L50 65" fill="#10B981"/><path d="M65 65 L70 45 L75 65" fill="#10B981"/>` },
  "ㄙ": { category: "initial", word: "三", pinyin: "ㄙㄢ", rhyme: "ㄙ ㄙ ㄙ，三隻小豬，蓋了三間房。", color: "#FFE4E6", textColor: "#BE123C", svg: `<text x="50" y="70" font-family="Arial" font-size="60" font-weight="bold" fill="#3B82F6" text-anchor="middle">3</text>` },

  // --- 介音 ---
  "ㄧ": { category: "medial", word: "衣服", pinyin: "ㄧ ㄈㄨˊ", rhyme: "ㄧ ㄧ ㄧ，穿上衣服，保暖不感冒。", color: "#ECFDF5", textColor: "#047857", svg: `<path d="M30 25 L50 35 L70 25 L80 40 L70 45 V80 H30 V45 L20 40 Z" fill="#10B981"/><circle cx="50" cy="50" r="4" fill="#FFF"/><circle cx="50" cy="65" r="4" fill="#FFF"/>` },
  "ㄨ": { category: "medial", word: "烏龜", pinyin: "ㄨ ㄍㄨㄟ", rhyme: "ㄨ ㄨ ㄨ，烏龜爬爬，不怕得第一。", color: "#ECFDF5", textColor: "#047857", svg: `<path d="M30 50 Q30 25 50 25 Q70 25 70 50 Q70 70 50 70 Q30 70 30 50 Z" fill="#10B981" stroke="#047857" stroke-width="4"/><circle cx="76" cy="45" r="8" fill="#34D399"/><circle cx="79" cy="43" r="2" fill="#000"/><rect x="35" y="68" width="10" height="15" rx="3" fill="#34D399"/><rect x="55" y="68" width="10" height="15" rx="3" fill="#34D399"/>` },
  "ㄩ": { category: "medial", word: "小魚", pinyin: "ㄒㄧㄠˇ ㄩˊ", rhyme: "ㄩ ㄩ ㄩ，小魚游游，水中吹泡泡。", color: "#ECFDF5", textColor: "#047857", svg: `<path d="M20 50 Q50 30 75 50 Q50 70 20 50 Z" fill="#F59E0B"/><path d="M75 50 L90 35 L85 50 L90 65 Z" fill="#D97706"/><circle cx="35" cy="45" r="3" fill="#FFF"/><circle cx="45" cy="25" r="4" fill="none" stroke="#60A5FA" stroke-width="2"/><circle cx="53" cy="15" r="6" fill="none" stroke="#60A5FA" stroke-width="2"/>` },

  // --- 韻母 ---
  "ㄚ": { category: "final", word: "鴨子", pinyin: "ㄧㄚ ㄗ˙", rhyme: "ㄚ ㄚ ㄚ，鴨子呱呱，游水抓小魚。", color: "#EFF6FF", textColor: "#1D4ED8", svg: `<path d="M25 60 Q25 40 45 40 Q65 40 65 60 Z" fill="#FBBF24"/><circle cx="65" cy="50" r="10" fill="#FBBF24"/><path d="M72 48 L82 52 L72 56 Z" fill="#F97316"/><circle cx="62" cy="45" r="2" fill="#000"/>` },
  "ㄛ": { category: "final", word: "公雞", pinyin: "ㄍㄨㄥ ㄐㄧ", rhyme: "ㄛ ㄛ ㄛ，公雞喔喔，叫醒早起人。", color: "#EFF6FF", textColor: "#1D4ED8", svg: `<circle cx="45" cy="55" r="20" fill="#EF4444"/><circle cx="62" cy="40" r="10" fill="#FBBF24"/><path d="M68 38 L76 42 L68 46 Z" fill="#F97316"/><circle cx="60" cy="37" r="2" fill="#000"/><path d="M42 22 C35 22 28 35 40 38" stroke="#EF4444" stroke-width="6" fill="none"/><path d="M50 20 C60 20 55 35 50 35" stroke="#F59E0B" stroke-width="6" fill="none"/>` },
  "ㄜ": { category: "final", word: "天鵝", pinyin: "ㄊㄧㄢ ㄜˊ", rhyme: "ㄜ ㄜ ㄜ，天鵝游游，脖子彎又長。", color: "#EFF6FF", textColor: "#1D4ED8", svg: `<path d="M40 75 Q65 75 65 55 Q65 30 75 30 Q80 30 80 40 Q70 45 70 55 L70 75 Z" fill="#FFF" stroke="#E5E7EB" stroke-width="3"/><path d="M80 35 L86 38 L80 41 Z" fill="#F97316"/><circle cx="75" cy="35" r="2" fill="#000"/>` },
  "ㄝ": { category: "final", word: "樹葉", pinyin: "ㄕㄨˋ ㄧㄝˋ", rhyme: "ㄝ ㄝ ㄝ，樹葉綠綠，大樹的衣服。", color: "#EFF6FF", textColor: "#1D4ED8", svg: `<path d="M50 15 Q25 45 50 85 Q75 45 50 15 Z" fill="#10B981"/><path d="M50 15 V85" stroke="#047857" stroke-width="3"/><path d="M50 35 Q40 40 33 35" stroke="#047857" stroke-width="2" fill="none"/><path d="M50 48 Q60 53 67 48" stroke="#047857" stroke-width="2" fill="none"/><path d="M50 60 Q40 65 35 60" stroke="#047857" stroke-width="2" fill="none"/>` },
  "ㄞ": { category: "final", word: "愛心", pinyin: "ㄞˋ ㄒㄧㄣ", rhyme: "ㄞ ㄞ ㄞ，媽媽愛心，溫暖照我心。", color: "#EFF6FF", textColor: "#1D4ED8", svg: `<path d="M50 35 Q35 15 20 35 Q10 50 50 85 Q90 50 80 35 Q65 15 50 35 Z" fill="#EC4899"/>` },
  "ㄟ": { category: "final", word: "直升機", pinyin: "ㄓˊ ㄕㄥ ㄐㄧ", rhyme: "ㄟ ㄟ ㄟ，飛機起飛，飛向大晴天。", color: "#EFF6FF", textColor: "#1D4ED8", svg: `<rect x="30" y="45" width="45" height="20" rx="10" fill="#EF4444"/><circle cx="62" cy="55" r="8" fill="#FFF"/><path d="M52 45 L52 25" stroke="#374151" stroke-width="4"/><path d="M30 25 H74" stroke="#374151" stroke-width="6" stroke-linecap="round"/><path d="M35 65 H70" stroke="#374151" stroke-width="3"/><path d="M42 65 L38 75 M63 65 L67 75" stroke="#374151" stroke-width="3"/>` },
  "ㄠ": { category: "final", word: "書包", pinyin: "ㄕㄨ ㄅㄠ", rhyme: "ㄠ ㄠ ㄠ，揹起書包，快樂上學去。", color: "#EFF6FF", textColor: "#1D4ED8", svg: `<rect x="25" y="30" width="50" height="50" rx="10" fill="#3B82F6"/><rect x="35" y="45" width="30" height="25" rx="5" fill="#1D4ED8"/><path d="M35 30 V20 Q50 15 65 20 V30" stroke="#1D4ED8" stroke-width="5" fill="none"/>` },
  "ㄡ": { category: "final", word: "海鷗", pinyin: "ㄏㄞˇ ㄡ", rhyme: "ㄡ ㄡ ㄡ，海鷗飛飛，在大海上飛。", color: "#EFF6FF", textColor: "#1D4ED8", svg: `<path d="M15 45 Q30 30 45 45 Q60 30 75 45 Q60 35 45 48 Q30 35 15 45 Z" fill="#FFF" stroke="#D1D5DB" stroke-width="2"/>` },
  "ㄢ": { category: "final", word: "安全帽", pinyin: "ㄢ ㄑㄩㄢˊ ㄇㄠˋ", rhyme: "ㄢ ㄢ ㄢ，安全出門，騎車戴頭盔。", color: "#EFF6FF", textColor: "#1D4ED8", svg: `<path d="M20 55 Q20 20 50 20 Q80 20 80 55 H20 Z" fill="#FBBF24"/><rect x="28" y="55" width="44" height="6" fill="#1F2937" rx="3"/><path d="M35 58 Q50 78 65 58" stroke="#1F2937" stroke-width="3" fill="none"/>` },
  "ㄣ": { category: "final", word: "門口", pinyin: "ㄇㄣˊ ㄎㄡˇ", rhyme: "ㄣ ㄣ ㄣ，推開大門，禮貌說你好。", color: "#EFF6FF", textColor: "#1D4ED8", svg: `<rect x="25" y="20" width="50" height="60" fill="#D97706" rx="3"/><rect x="28" y="23" width="20" height="54" fill="#F59E0B"/><rect x="52" y="23" width="20" height="54" fill="#F59E0B"/><circle cx="43" cy="50" r="3" fill="#1F2937"/><circle cx="57" cy="50" r="3" fill="#1F2937"/>` },
  "ㄤ": { category: "final", word: "幫忙", pinyin: "ㄅㄤ ㄇㄤˊ", rhyme: "ㄤ ㄤ ㄤ，雙手幫忙，互助真快樂。", color: "#EFF6FF", textColor: "#1D4ED8", svg: `<path d="M30 65 V50 Q30 40 40 40 H60 Q70 40 70 50 V65 Z" fill="#EF4444"/><circle cx="50" cy="26" r="10" fill="#FDE047"/><path d="M20 50 H30 M70 50 H80" stroke="#1F2937" stroke-width="6" stroke-linecap="round"/>` },
  "ㄥ": { category: "final", word: "蜜蜂", pinyin: "ㄇㄧˋ ㄈㄥ", rhyme: "ㄥ ㄥ ㄥ，蜜蜂忙碌，花間飛嗡嗡。", color: "#EFF6FF", textColor: "#1D4ED8", svg: `<ellipse cx="50" cy="55" rx="25" ry="18" fill="#FBBF24"/><path d="M40 38 V72 M50 37 V73 M60 38 V72" stroke="#000" stroke-width="4"/><circle cx="70" cy="48" r="3" fill="#000"/><path d="M42 38 Q30 20 40 25 Q50 30 48 38 Z" fill="#93C5FD"/><path d="M58 38 Q70 20 60 25 Q50 30 52 38 Z" fill="#93C5FD"/>` },
  "ㄦ": { category: "final", word: "耳朵", pinyin: "ㄦˇ ㄉㄨㄛˇ", rhyme: "ㄦ ㄦ ㄦ，耳朵聽聽，聽見美聲音。", color: "#EFF6FF", textColor: "#1D4ED8", svg: `<path d="M35 50 Q30 25 50 25 Q65 25 65 40 Q65 55 50 65 Q40 70 45 80" stroke="#FCA5A5" stroke-width="8" stroke-linecap="round" fill="none"/><path d="M45 42 Q40 33 50 35" stroke="#EF4444" stroke-width="3" fill="none"/>` }
};

// 2. 聲調符號清單
const TONES = [
  { symbol: "", name: "一聲 (基本調)", audioText: "一聲" },
  { symbol: "ˊ", name: "二聲", audioText: "二聲" },
  { symbol: "ˇ", name: "三聲", audioText: "三聲" },
  { symbol: "ˋ", name: "四聲", audioText: "四聲" },
  { symbol: "˙", name: "輕聲", audioText: "輕聲" }
];

// 3. 拼音拼讀字典 - 聲韻調組合與中文字插圖對照表
const SPELLING_DICT = {
  // 八
  "ㄅ+ㄚ+": { word: "八", detail: "八隻小鴨", svg: `<text x="50" y="65" font-family="Arial" font-size="50" font-weight="bold" fill="#3B82F6" text-anchor="middle">8</text>` },
  "ㄅ+ㄚ+ˊ": { word: "拔", detail: "拔蘿蔔", svg: `<path d="M50 75 Q40 50 50 20 Q60 50 50 75" fill="#10B981"/><path d="M40 75 H60 V85 H40 Z" fill="#D97706"/>` },
  "ㄅ+ㄚ+ˇ": { word: "靶", detail: "射擊打靶", svg: `<circle cx="50" cy="50" r="30" fill="#EF4444" stroke="#FFF" stroke-width="4"/><circle cx="50" cy="50" r="20" fill="#FFF"/><circle cx="50" cy="50" r="10" fill="#EF4444"/>` },
  "ㄅ+ㄚ+ˋ": { word: "爸", detail: "爸爸抱抱", svg: `<circle cx="50" cy="40" r="15" fill="#F59E0B"/><path d="M30 80 Q50 60 70 80 Z" fill="#3B82F6"/><path d="M42 35 L48 35 M52 35 L58 35" stroke="#000" stroke-width="3"/>` },
  // 貓
  "ㄇ+ㄠ+": { word: "貓", detail: "可愛貓咪", svg: ZHUYIN_DB["ㄇ"].svg },
  "ㄇ+ㄠ+ˊ": { word: "毛", detail: "毛線球", svg: `<circle cx="50" cy="50" r="25" fill="#F43F5E" stroke="#E11D48" stroke-width="3"/><path d="M30 35 Q50 65 70 35 M28 50 Q50 20 72 50" stroke="#FFF" stroke-width="2" fill="none"/>` },
  "ㄇ+ㄠ+ˋ": { word: "帽", detail: "遮陽帽子", svg: `<path d="M25 60 Q25 30 50 30 Q75 30 75 60 Z" fill="#EF4444"/><ellipse cx="50" cy="62" rx="35" ry="6" fill="#F59E0B"/>` },
  // 瓜
  "ㄍ+ㄨ+ㄚ+": { word: "瓜", detail: "綠皮西瓜", svg: ZHUYIN_DB["ㄍ"].svg },
  "ㄍ+ㄨ+ㄚ+ˋ": { word: "掛", detail: "掛衣服", svg: `<path d="M50 25 V75 M35 45 H65 M35 25 L50 35 L65 25" stroke="#78350F" stroke-width="4" fill="none"/>` },
  // 魚
  "+ㄩ+ˊ": { word: "魚", detail: "水裡小魚", svg: ZHUYIN_DB["ㄩ"].svg },
  // 花
  "ㄏ+ㄨ+ㄚ+": { word: "花", detail: "美麗花朵", svg: ZHUYIN_DB["ㄏ"].svg },
  "ㄏ+ㄨ+ㄚ+ˊ": { word: "華", detail: "中華健兒", svg: `<circle cx="50" cy="50" r="25" fill="#3B82F6"/><text x="50" y="58" font-size="24" fill="#FFF" text-anchor="middle">華</text>` },
  "ㄏ+ㄨ+ㄚ+ˋ": { word: "畫", detail: "蠟筆畫畫", svg: `<rect x="25" y="25" width="50" height="45" rx="3" fill="#FFF" stroke="#000" stroke-width="2"/><circle cx="50" cy="45" r="10" fill="#EF4444"/><path d="M30 65 L45 65" stroke="#10B981" stroke-width="4"/>` },
  // 樹
  "ㄕ+ㄨ+ˋ": { word: "樹", detail: "綠色大樹", svg: `<path d="M45 50 V80 H55 V50 Z" fill="#78350F"/><circle cx="50" cy="35" r="25" fill="#10B981"/>` },
  "ㄕ+ㄨ+ˇ": { word: "鼠", detail: "小老鼠", svg: `<ellipse cx="50" cy="60" rx="20" ry="15" fill="#9CA3AF"/><circle cx="65" cy="52" r="2" fill="#000"/><circle cx="40" cy="45" r="8" fill="#FCA5A5"/><path d="M30 60 Q15 65 15 50" stroke="#9CA3AF" stroke-width="3" fill="none"/>` },
  // 鳥
  "ㄋ+ㄧ+ㄠ+ˇ": { word: "鳥", detail: "樹上小鳥", svg: `<path d="M35 55 Q50 35 65 55 Z" fill="#60A5FA"/><circle cx="60" cy="48" r="8" fill="#60A5FA"/><circle cx="63" cy="45" r="2" fill="#000"/><path d="M68 46 L76 48 L68 50 Z" fill="#F97316"/>` },
  // 羊
  "+ㄧ+ㄤ+ˊ": { word: "羊", detail: "溫馴綿羊", svg: `<circle cx="50" cy="50" r="22" fill="#F3F4F6" stroke="#D1D5DB" stroke-width="2"/><path d="M35 32 Q25 20 35 25 M65 32 Q75 20 65 25" stroke="#78350F" stroke-width="4" stroke-linecap="round" fill="none"/><circle cx="43" cy="46" r="3" fill="#000"/><circle cx="57" cy="46" r="3" fill="#000"/>` },
  // 書
  "ㄕ+ㄨ+": { word: "書", detail: "故事童書", svg: `<path d="M20 70 L48 65 V25 L20 30 Z" fill="#3B82F6"/><path d="M80 70 L52 65 V25 L80 30 Z" fill="#60A5FA"/><circle cx="35" cy="45" r="4" fill="#FFF"/><circle cx="65" cy="45" r="4" fill="#FFF"/>` },
  // 簡
  "ㄐ+ㄧ+ㄢ+ˇ": { word: "簡", detail: "簡單快樂", svg: `<text x="50" y="65" font-family="Arial" font-size="45" font-weight="bold" fill="#10B981" text-anchor="middle">😊</text>` },
  // 蛋
  "ㄉ+ㄢ+ˋ": { word: "蛋", detail: "美味煎蛋", svg: `<ellipse cx="50" cy="55" rx="35" ry="25" fill="#FFF" stroke="#E5E7EB" stroke-width="2"/><circle cx="45" cy="52" r="14" fill="#FBBF24"/>` },
  // 綠
  "ㄌ+ㄩ+ˋ": { word: "綠", detail: "小草綠色", svg: ZHUYIN_DB["ㄌ"].svg },
  // 葉
  "+ㄧ+ㄝ+ˋ": { word: "葉", detail: "一片綠葉", svg: ZHUYIN_DB["ㄝ"].svg },
  // 二
  "ㄦ+ˇ": { word: "二", detail: "數字二", svg: `<text x="50" y="70" font-family="Arial" font-size="60" font-weight="bold" fill="#F59E0B" text-anchor="middle">2</text>` }
};

// 4. 全域狀態
let audioUnlocked = false; // iOS 語音解鎖狀態
let currentMode = "keyboard"; // 當前模式: keyboard, robot, game
let selectedVoice = null;
let synth = window.speechSynthesis;

// 氣球挑戰關卡狀態
let gameState = {
  currentQuestion: null,
  stars: 0,
  balloons: []
};

// 5. 語音合成引擎初始化
function initSpeech() {
  if (!synth) return;
  
  function setVoice() {
    const voices = synth.getVoices();
    // 優先尋找台灣繁體中文 (zh-TW)
    selectedVoice = voices.find(v => v.lang.includes("zh-TW") || v.name.includes("Hanhan") || v.name.includes("Yating"));
    // 備用：尋找任何中文語音
    if (!selectedVoice) {
      selectedVoice = voices.find(v => v.lang.startsWith("zh"));
    }
  }

  setVoice();
  if (synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = setVoice;
  }
}

// 解鎖 iOS 語音 (需在使用者第一次點擊時執行)
function unlockAudio() {
  if (audioUnlocked) return;
  try {
    const u = new SpeechSynthesisUtterance("");
    u.volume = 0;
    synth.speak(u);
    audioUnlocked = true;
    console.log("Audio Unlocked for iOS");
  } catch (e) {
    console.error("Failed to unlock audio:", e);
  }
}

// 語音發音
function speak(text, callback) {
  if (!synth) return;
  synth.cancel(); // 停止目前所有發音

  const utterance = new SpeechSynthesisUtterance(text);
  if (selectedVoice) {
    utterance.voice = selectedVoice;
  }
  utterance.lang = "zh-TW";
  utterance.rate = 0.85; // 稍慢發音，適合幼兒
  utterance.pitch = 1.1; // 稍微拉高音調，聽起來比較親切

  if (callback) {
    utterance.onend = callback;
  }
  synth.speak(utterance);
}

// ==========================================
// 模式 1：點讀鍵盤功能
// ==========================================
function renderKeyboard() {
  const container = document.getElementById("keyboard-grid");
  if (!container) return;
  container.innerHTML = "";

  // 分組排列：聲母、介音、韻母
  const categories = {
    initial: { title: "聲母 (ㄅ-ㄙ)", class: "category-initial" },
    medial: { title: "介音 (ㄧ-ㄩ)", class: "category-medial" },
    final: { title: "韻母 (ㄚ-ㄦ)", class: "category-final" }
  };

  Object.keys(categories).forEach(cat => {
    const section = document.createElement("div");
    section.className = `keyboard-section ${categories[cat].class}`;
    
    const title = document.createElement("h3");
    title.innerText = categories[cat].title;
    section.appendChild(title);

    const keysContainer = document.createElement("div");
    keysContainer.className = "keys-container";

    Object.keys(ZHUYIN_DB).forEach(key => {
      const item = ZHUYIN_DB[key];
      if (item.category !== cat) return;

      const card = document.createElement("div");
      card.className = "zhuyin-card";
      card.style.backgroundColor = item.color;
      card.style.color = item.textColor;
      card.id = `card-${key}`;

      // 建立卡片內層 (3D 翻轉)
      card.innerHTML = `
        <div class="card-inner">
          <div class="card-front">
            <span class="symbol">${key}</span>
            <button class="rhyme-btn" onclick="playRhyme('${key}', event)">🎵</button>
          </div>
          <div class="card-back" style="background-color: ${item.color}">
            <div class="back-svg">${item.svg}</div>
            <div class="back-word">${item.word}</div>
            <div class="back-pinyin">${item.pinyin}</div>
          </div>
        </div>
      `;

      card.addEventListener("click", () => {
        unlockAudio();
        // 觸發翻轉動畫
        card.classList.toggle("flipped");
        
        if (card.classList.contains("flipped")) {
          // 翻到背面，唸出詞彙與發音
          speak(`${key}，${item.word}`);
          // 3秒後自動翻回來
          setTimeout(() => {
            card.classList.remove("flipped");
          }, 4000);
        } else {
          speak(key);
        }
      });

      keysContainer.appendChild(card);
    });

    section.appendChild(keysContainer);
    container.appendChild(section);
  });
}

// 播放注音口訣
function playRhyme(key, event) {
  event.stopPropagation(); // 阻止卡片翻轉
  unlockAudio();
  const item = ZHUYIN_DB[key];
  if (item) {
    // 朗讀口訣
    speak(item.rhyme);
  }
}

// ==========================================
// 模式 2：拼音機器人功能
// ==========================================
let robotState = {
  initial: "",
  medial: "",
  final: "",
  tone: ""
};

function renderRobot() {
  // 渲染聲母選擇器
  const initialGroup = document.getElementById("robot-initials");
  if (initialGroup) {
    initialGroup.innerHTML = `<button class="robot-btn empty-btn" onclick="selectRobotKey('initial', '')">無</button>`;
    Object.keys(ZHUYIN_DB).forEach(key => {
      if (ZHUYIN_DB[key].category === "initial") {
        initialGroup.innerHTML += `<button class="robot-btn btn-init" id="robot-key-${key}" onclick="selectRobotKey('initial', '${key}')">${key}</button>`;
      }
    });
  }

  // 渲染介音選擇器
  const medialGroup = document.getElementById("robot-medials");
  if (medialGroup) {
    medialGroup.innerHTML = `<button class="robot-btn empty-btn" onclick="selectRobotKey('medial', '')">無</button>`;
    Object.keys(ZHUYIN_DB).forEach(key => {
      if (ZHUYIN_DB[key].category === "medial") {
        medialGroup.innerHTML += `<button class="robot-btn btn-med" id="robot-key-${key}" onclick="selectRobotKey('medial', '${key}')">${key}</button>`;
      }
    });
  }

  // 渲染韻母選擇器
  const finalGroup = document.getElementById("robot-finals");
  if (finalGroup) {
    finalGroup.innerHTML = `<button class="robot-btn empty-btn" onclick="selectRobotKey('final', '')">無</button>`;
    Object.keys(ZHUYIN_DB).forEach(key => {
      if (ZHUYIN_DB[key].category === "final") {
        finalGroup.innerHTML += `<button class="robot-btn btn-fin" id="robot-key-${key}" onclick="selectRobotKey('final', '${key}')">${key}</button>`;
      }
    });
  }

  // 渲染聲調盤
  const toneGroup = document.getElementById("robot-tones");
  if (toneGroup) {
    toneGroup.innerHTML = "";
    TONES.forEach(tone => {
      const displaySym = tone.symbol === "" ? "一聲" : tone.symbol;
      toneGroup.innerHTML += `<button class="robot-btn btn-tone" id="robot-tone-${tone.symbol}" onclick="selectRobotKey('tone', '${tone.symbol}')">${displaySym}</button>`;
    });
  }

  updateRobotDisplay();
}

function selectRobotKey(type, value) {
  unlockAudio();
  robotState[type] = value;
  
  // 播放單音聲
  if (value !== "") {
    if (type === "tone") {
      const toneObj = TONES.find(t => t.symbol === value);
      speak(toneObj.audioText);
    } else {
      speak(value);
    }
  }

  // 更新按鈕高亮狀態
  const containerId = {
    initial: "robot-initials",
    medial: "robot-medials",
    final: "robot-finals",
    tone: "robot-tones"
  }[type];

  const btns = document.getElementById(containerId).getElementsByTagName("button");
  for (let btn of btns) {
    btn.classList.remove("active");
  }

  if (value === "") {
    btns[0].classList.add("active"); // "無" 按鈕
  } else {
    let activeId = type === "tone" ? `robot-tone-${value}` : `robot-key-${value}`;
    const activeBtn = document.getElementById(activeId);
    if (activeBtn) activeBtn.classList.add("active");
  }

  updateRobotDisplay();
}

function updateRobotDisplay() {
  document.getElementById("robot-display-initial").innerText = robotState.initial || " ";
  document.getElementById("robot-display-medial").innerText = robotState.medial || " ";
  document.getElementById("robot-display-final").innerText = robotState.final || " ";
  document.getElementById("robot-display-tone").innerText = robotState.tone || " ";

  // 檢查是否有對應的單字
  const combinationKey = `${robotState.initial}+${robotState.medial}+${robotState.final}+${robotState.tone}`;
  const dictItem = SPELLING_DICT[combinationKey];
  const screen = document.getElementById("robot-screen");

  if (dictItem) {
    screen.innerHTML = `
      <div class="result-word">${dictItem.word}</div>
      <div class="result-svg">${dictItem.svg}</div>
      <div class="result-detail">${dictItem.detail}</div>
    `;
  } else {
    // 預設無組合畫面
    screen.innerHTML = `
      <div class="result-word">🤖</div>
      <div class="result-detail">點擊「拼音機器人」來聽聽看吧！</div>
    `;
  }
}

// 執行拼音機器人發音
function startRobotSpelling() {
  unlockAudio();
  const init = robotState.initial;
  const med = robotState.medial;
  const fin = robotState.final;
  const tone = robotState.tone;

  if (!init && !med && !fin) {
    speak("請先選擇注音符號喔！");
    return;
  }

  // 組合發音順序
  // 範例：ㄅ - ㄚ - ㄅㄚˇ
  const toneObj = TONES.find(t => t.symbol === tone);
  const toneName = toneObj ? toneObj.audioText : "一聲";
  
  // 計算拼出來的音
  const combinationKey = `${init}+${med}+${fin}+${tone}`;
  const dictItem = SPELLING_DICT[combinationKey];

  let readSequence = [];
  if (init) readSequence.push(init);
  if (med) readSequence.push(med);
  if (fin) readSequence.push(fin);

  const mainSpell = init + med + fin;

  // 1. 唸單個注音
  let step = 0;
  function playNextStep() {
    if (step < readSequence.length) {
      speak(readSequence[step], () => {
        step++;
        setTimeout(playNextStep, 200);
      });
    } else {
      // 2. 唸結合音與聲調
      let toneText = (tone === "") ? "一聲" : `${toneObj.name}`;
      let finalSpellSpeech = dictItem ? dictItem.word : mainSpell + tone;
      
      speak(`${mainSpell}，${toneText}，${finalSpellSpeech}`, () => {
        // 如果有配圖，額外唸造詞
        if (dictItem) {
          setTimeout(() => {
            speak(dictItem.detail);
          }, 300);
        }
      });
    }
  }

  playNextStep();
}

// ==========================================
// 模式 3：問答挑戰遊戲
// ==========================================
function startBalloonGame() {
  unlockAudio();
  gameState.stars = 0;
  updateStars();
  nextBalloonQuestion();
}

function updateStars() {
  const container = document.getElementById("stars-container");
  if (container) {
    container.innerHTML = "⭐".repeat(gameState.stars);
  }
}

// 產生新題目
function nextBalloonQuestion() {
  const questionType = Math.floor(Math.random() * 3); // 0: 找注音, 1: 聽音辨調, 2: 聽詞拼音
  const keys = Object.keys(ZHUYIN_DB);
  
  // 答對效果重設
  document.getElementById("game-canvas-area").innerHTML = "";

  if (questionType === 0) {
    // 關卡一：聽音找符號
    const targetKey = keys[Math.floor(Math.random() * keys.length)];
    gameState.currentQuestion = {
      type: "find_key",
      answer: targetKey,
      prompt: `請找到注音符號：${targetKey}`
    };

    // 播放語音題目
    speak(`請找到，${targetKey}`);

    // 生成氣球
    const options = [targetKey];
    while (options.length < 4) {
      const randomKey = keys[Math.floor(Math.random() * keys.length)];
      if (!options.includes(randomKey)) {
        options.push(randomKey);
      }
    }
    // 打散選項
    options.sort(() => Math.random() - 0.5);
    createBalloons(options);

  } else if (questionType === 1) {
    // 關卡二：聽音辨調
    const targetTone = TONES[Math.floor(Math.random() * TONES.length)];
    const toneText = targetTone.symbol === "" ? "一聲" : targetTone.name;
    
    // 找出有這個聲調的拼音單字
    const validKeys = Object.keys(SPELLING_DICT).filter(k => k.endsWith(`+${targetTone.symbol}`));
    let displayWord = "爸";
    let dictPrompt = "爸爸的爸";
    if (validKeys.length > 0) {
      const selectedComb = validKeys[Math.floor(Math.random() * validKeys.length)];
      displayWord = SPELLING_DICT[selectedComb].word;
      dictPrompt = SPELLING_DICT[selectedComb].detail;
    }

    gameState.currentQuestion = {
      type: "find_tone",
      answer: targetTone.symbol,
      prompt: `請問「${displayWord}」是第幾聲？`
    };

    speak(`請問，${dictPrompt}的，${displayWord}，是第幾聲呢？`);

    // 氣球選項為所有聲調
    const options = TONES.map(t => t.symbol);
    createBalloons(options, true); // true 代表聲調氣球

  } else {
    // 關卡三：聽詞拼音
    const dictKeys = Object.keys(SPELLING_DICT);
    const targetComb = dictKeys[Math.floor(Math.random() * dictKeys.length)];
    const targetItem = SPELLING_DICT[targetComb];

    // 分解注音答案
    const parts = targetComb.split("+");
    const initAns = parts[0];
    const medAns = parts[1];
    const finAns = parts[2];
    const toneAns = parts[3];

    gameState.currentQuestion = {
      type: "spelling",
      answer: targetComb,
      initAns, medAns, finAns, toneAns,
      prompt: `請拼出「${targetItem.word}」：${targetItem.detail}`
    };

    speak(`請拼出，${targetItem.detail}，的，${targetItem.word}`);

    // 特殊拼音面板渲染
    renderSpellingChallengeUI(targetItem);
  }
}

// 建立氣球
function createBalloons(options, isTone = false) {
  const area = document.getElementById("game-canvas-area");
  area.className = "balloon-layout";

  options.forEach((opt, idx) => {
    const balloon = document.createElement("div");
    balloon.className = `balloon balloon-color-${(idx % 4) + 1}`;
    
    const displayVal = isTone ? (opt === "" ? "一聲" : opt) : opt;
    balloon.innerHTML = `<span class="balloon-val">${displayVal}</span>`;

    balloon.addEventListener("click", () => {
      unlockAudio();
      checkAnswer(opt);
    });

    area.appendChild(balloon);
  });
}

// 拼詞關卡特殊的 UI 面板
function renderSpellingChallengeUI(targetItem) {
  const area = document.getElementById("game-canvas-area");
  area.className = "spelling-layout";

  area.innerHTML = `
    <div class="spelling-question-card">
      <div class="q-word">${targetItem.word}</div>
      <div class="q-svg">${targetItem.svg}</div>
      <div class="q-detail">${targetItem.detail}</div>
    </div>
    
    <div class="spelling-slots">
      <div class="slot" id="slot-init">聲母</div>
      <div class="slot" id="slot-med">介音</div>
      <div class="slot" id="slot-fin">韻母</div>
      <div class="slot" id="slot-tone">聲調</div>
    </div>

    <div class="spelling-btn-panel">
      <button class="submit-btn" onclick="submitSpellingChallengeAnswer()">拼好了！🤖</button>
    </div>

    <div class="challenge-keyboard">
      <!-- 聲母區 -->
      <div class="c-keys-col col-init" id="c-init-keys"></div>
      <!-- 介音區 -->
      <div class="c-keys-col col-med" id="c-med-keys"></div>
      <!-- 韻母區 -->
      <div class="c-keys-col col-fin" id="c-fin-keys"></div>
      <!-- 聲調區 -->
      <div class="c-keys-col col-tone" id="c-tone-keys"></div>
    </div>
  `;

  // 暫存拼音挑戰答案
  window.challengeState = { initial: "", medial: "", final: "", tone: "" };

  // 渲染限縮的候選注音鍵（避免完全找不到）
  const q = gameState.currentQuestion;

  // 1. 聲母候選
  const initKeys = document.getElementById("c-init-keys");
  initKeys.innerHTML = `<button class="c-key-btn empty-btn" onclick="setChallengeSlot('initial', '')">無</button>`;
  const availableInitials = Object.keys(ZHUYIN_DB).filter(k => ZHUYIN_DB[k].category === "initial");
  // 隨機塞三個錯的跟一個對的
  const initOptions = getRandomOptions(availableInitials, q.initAns, 3);
  initOptions.forEach(k => {
    initKeys.innerHTML += `<button class="c-key-btn btn-init" id="ckey-${k}" onclick="setChallengeSlot('initial', '${k}')">${k}</button>`;
  });

  // 2. 介音候選
  const medKeys = document.getElementById("c-med-keys");
  medKeys.innerHTML = `<button class="c-key-btn empty-btn" onclick="setChallengeSlot('medial', '')">無</button>`;
  const availableMedials = Object.keys(ZHUYIN_DB).filter(k => ZHUYIN_DB[k].category === "medial");
  const medOptions = getRandomOptions(availableMedials, q.medAns, 2);
  medOptions.forEach(k => {
    medKeys.innerHTML += `<button class="c-key-btn btn-med" id="ckey-${k}" onclick="setChallengeSlot('medial', '${k}')">${k}</button>`;
  });

  // 3. 韻母候選
  const finKeys = document.getElementById("c-fin-keys");
  finKeys.innerHTML = `<button class="c-key-btn empty-btn" onclick="setChallengeSlot('final', '')">無</button>`;
  const availableFinals = Object.keys(ZHUYIN_DB).filter(k => ZHUYIN_DB[k].category === "final");
  const finOptions = getRandomOptions(availableFinals, q.finAns, 3);
  finOptions.forEach(k => {
    finKeys.innerHTML += `<button class="c-key-btn btn-fin" id="ckey-${k}" onclick="setChallengeSlot('final', '${k}')">${k}</button>`;
  });

  // 4. 聲調候選
  const toneKeys = document.getElementById("c-tone-keys");
  TONES.forEach(tone => {
    const displaySym = tone.symbol === "" ? "一聲" : tone.symbol;
    toneKeys.innerHTML += `<button class="c-key-btn btn-tone" id="cktone-${tone.symbol}" onclick="setChallengeSlot('tone', '${tone.symbol}')">${displaySym}</button>`;
  });
}

function getRandomOptions(sourceArray, answer, maxWrongCount) {
  let list = [answer].filter(x => x !== "");
  const remaining = sourceArray.filter(x => x !== answer);
  remaining.sort(() => Math.random() - 0.5);
  for (let i = 0; i < Math.min(maxWrongCount, remaining.length); i++) {
    list.push(remaining[i]);
  }
  return list.sort(() => Math.random() - 0.5);
}

function setChallengeSlot(type, value) {
  unlockAudio();
  window.challengeState[type] = value;

  // 語音發音
  if (value !== "") {
    if (type === "tone") {
      const toneObj = TONES.find(t => t.symbol === value);
      speak(toneObj.audioText);
    } else {
      speak(value);
    }
  }

  // 更新顯示槽
  const slotId = {
    initial: "slot-init",
    medial: "slot-med",
    final: "slot-fin",
    tone: "slot-tone"
  }[type];

  const slot = document.getElementById(slotId);
  if (slot) {
    if (value === "") {
      slot.innerText = { initial: "聲母", medial: "介音", final: "韻母", tone: "聲調" }[type];
      slot.classList.remove("filled");
    } else {
      slot.innerText = value === "" ? "一聲" : value;
      slot.classList.add("filled");
    }
  }

  // 高亮選中按鈕
  const colId = {
    initial: "c-init-keys",
    medial: "c-med-keys",
    final: "c-fin-keys",
    tone: "c-tone-keys"
  }[type];
  const btns = document.getElementById(colId).getElementsByTagName("button");
  for (let btn of btns) {
    btn.classList.remove("active");
  }
  if (value === "") {
    btns[0].classList.add("active");
  } else {
    let targetId = type === "tone" ? `cktone-${value}` : `ckey-${value}`;
    const targetBtn = document.getElementById(targetId);
    if (targetBtn) targetBtn.classList.add("active");
  }
}

function submitSpellingChallengeAnswer() {
  unlockAudio();
  const q = gameState.currentQuestion;
  const userComb = `${window.challengeState.initial}+${window.challengeState.medial}+${window.challengeState.final}+${window.challengeState.tone}`;
  
  if (userComb === q.answer) {
    handleAnswerSuccess();
  } else {
    handleAnswerFail();
  }
}

// 判定答案 (氣球點擊)
function checkAnswer(selectedOpt) {
  const q = gameState.currentQuestion;
  if (selectedOpt === q.answer) {
    handleAnswerSuccess();
  } else {
    handleAnswerFail();
  }
}

function handleAnswerSuccess() {
  speak("答對了！你真棒！");
  gameState.stars += 1;
  updateStars();
  triggerConfetti();

  const area = document.getElementById("game-canvas-area");
  // 顯示歡慶過關大字卡
  const successCard = document.createElement("div");
  successCard.className = "success-popup-card";
  successCard.innerHTML = `
    <div class="success-emoji">🎉 Correct!</div>
    <div class="success-msg">你太厲害了！得到一顆星星！</div>
  `;
  area.appendChild(successCard);

  setTimeout(() => {
    nextBalloonQuestion();
  }, 2500);
}

function handleAnswerFail() {
  speak("再試試看喔！你可以的！");
}

// ==========================================
// 輕量級 JavaScript Confetti (五彩紙花) 特效
// ==========================================
function triggerConfetti() {
  const canvas = document.getElementById("confetti-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  
  // 設定畫布大小
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.display = "block";

  let particles = [];
  const colors = ["#FFC0CB", "#FFB84D", "#60A5FA", "#34D399", "#A78BFA", "#F472B6"];

  for (let i = 0; i < 150; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      r: Math.random() * 6 + 4,
      d: Math.random() * canvas.height,
      color: colors[Math.floor(Math.random() * colors.length)],
      tilt: Math.random() * 10 - 5,
      tiltAngleIncremental: Math.random() * 0.07 + 0.02,
      tiltAngle: 0
    });
  }

  let animationFrame;
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let active = false;

    particles.forEach((p, idx) => {
      p.tiltAngle += p.tiltAngleIncremental;
      p.y += (Math.cos(p.d) + 3 + p.r / 2) / 2;
      p.x += Math.sin(p.tiltAngle);
      p.tilt = Math.sin(p.tiltAngle - idx / 3) * 15;

      if (p.y < canvas.height) {
        active = true;
      }

      ctx.beginPath();
      ctx.lineWidth = p.r;
      ctx.strokeStyle = p.color;
      ctx.moveTo(p.x + p.tilt + p.r / 2, p.y);
      ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r / 2);
      ctx.stroke();
    });

    if (active) {
      animationFrame = requestAnimationFrame(draw);
    } else {
      canvas.style.display = "none";
      cancelAnimationFrame(animationFrame);
    }
  }

  draw();
}

// ==========================================
// 介面導覽控制
// ==========================================
function switchMode(mode) {
  unlockAudio();
  currentMode = mode;

  // 切換按鈕樣式
  const navBtns = document.getElementsByClassName("nav-btn");
  for (let btn of navBtns) {
    btn.classList.remove("active");
  }
  document.getElementById(`nav-${mode}`).classList.add("active");

  // 切換面板顯示
  const panels = document.getElementsByClassName("mode-panel");
  for (let panel of panels) {
    panel.style.display = "none";
  }
  document.getElementById(`panel-${mode}`).style.display = "block";

  // 模式專屬初始化
  if (mode === "keyboard") {
    renderKeyboard();
  } else if (mode === "robot") {
    renderRobot();
  } else if (mode === "game") {
    startBalloonGame();
  }
}

// 點擊「進入冒險樂園」解鎖發音權限並進入
function enterAdventure() {
  unlockAudio();
  document.getElementById("welcome-screen").style.display = "none";
  document.getElementById("app-main").style.display = "block";
  switchMode("keyboard");
}

// 頁面載入初始化
window.addEventListener("DOMContentLoaded", () => {
  initSpeech();
  
  // PWA Service Worker 註冊
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => console.log('Service Worker Registered!', reg))
      .catch(err => console.warn('Service Worker registration failed:', err));
  }
});
