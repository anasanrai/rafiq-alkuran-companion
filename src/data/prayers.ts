export type Prayer = {
  key: string;
  name: string;
  arabic: string;
  emoji: string;
  time: string;
  active?: boolean;
  verseArabic: string;
  surahRef: string;
  translation: string;
};

export const PRAYERS: Prayer[] = [
  {
    key: "fajr",
    name: "Fajr",
    arabic: "الفجر",
    emoji: "🌅",
    time: "4:42 AM",
    verseArabic: "إِنَّ قُرْآنَ الْفَجْرِ كَانَ مَشْهُودًا",
    surahRef: "Al-Isra 17:78",
    translation: "Indeed, the recitation of dawn is ever witnessed.",
  },
  {
    key: "dhuhr",
    name: "Dhuhr",
    arabic: "الظهر",
    emoji: "☀️",
    time: "12:08 PM",
    active: true,
    verseArabic: "وَأَقِمِ الصَّلَاةَ لِذِكْرِي",
    surahRef: "Ta-Ha 20:14",
    translation: "And establish prayer for My remembrance.",
  },
  {
    key: "asr",
    name: "Asr",
    arabic: "العصر",
    emoji: "🌤️",
    time: "3:35 PM",
    verseArabic: "وَالْعَصْرِ ۝ إِنَّ الْإِنْسَانَ لَفِي خُسْرٍ",
    surahRef: "Al-Asr 103:1-2",
    translation: "By time, indeed mankind is in loss.",
  },
  {
    key: "maghrib",
    name: "Maghrib",
    arabic: "المغرب",
    emoji: "🌇",
    time: "6:21 PM",
    verseArabic: "فَسُبْحَانَ اللَّهِ حِينَ تُمْسُونَ وَحِينَ تُصْبِحُونَ",
    surahRef: "Ar-Rum 30:17",
    translation: "So glorify Allah when you reach the evening and when you rise in the morning.",
  },
  {
    key: "isha",
    name: "Isha",
    arabic: "العشاء",
    emoji: "🌙",
    time: "7:51 PM",
    verseArabic: "وَمِنَ اللَّيْلِ فَتَهَجَّدْ بِهِ نَافِلَةً لَّكَ",
    surahRef: "Al-Isra 17:79",
    translation: "And from [part of] the night, pray with it as additional [worship] for you.",
  },
];
