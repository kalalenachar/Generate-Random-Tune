// ragas.js - Comprehensive Carnatic Raga Database
// 72 Melakarta Ragas + 28 Popular Janya Ragas

const RAGAS = {
    // ==================== MELAKARTA RAGAS (72) ====================
    
    // Chakra 1: Indu (S R1 combinations)
    "Kanakangi": {
        arohanam: [0, 1, 3, 5, 7, 8, 10, 12],
        avarohanam: [12, 10, 8, 7, 5, 3, 1, 0],
        type: "Melakarta",
        number: 1,
        description: "1st Melakarta - Rare, serious mood"
    },
    "Ratnangi": {
        arohanam: [0, 1, 3, 5, 7, 8, 11, 12],
        avarohanam: [12, 11, 8, 7, 5, 3, 1, 0],
        type: "Melakarta",
        number: 2,
        description: "2nd Melakarta - Devotional"
    },
    "Ganamurti": {
        arohanam: [0, 1, 3, 5, 7, 9, 10, 12],
        avarohanam: [12, 10, 9, 7, 5, 3, 1, 0],
        type: "Melakarta",
        number: 3,
        description: "3rd Melakarta"
    },
    "Vanaspati": {
        arohanam: [0, 1, 3, 5, 7, 9, 11, 12],
        avarohanam: [12, 11, 9, 7, 5, 3, 1, 0],
        type: "Melakarta",
        number: 4,
        description: "4th Melakarta - Powerful"
    },
    "Manavati": {
        arohanam: [0, 1, 4, 5, 7, 8, 10, 12],
        avarohanam: [12, 10, 8, 7, 5, 4, 1, 0],
        type: "Melakarta",
        number: 5,
        description: "5th Melakarta"
    },
    "Tanarupi": {
        arohanam: [0, 1, 4, 5, 7, 8, 11, 12],
        avarohanam: [12, 11, 8, 7, 5, 4, 1, 0],
        type: "Melakarta",
        number: 6,
        description: "6th Melakarta"
    },

    // Chakra 2: Netra (S R1 G3 combinations)
    "Senavati": {
        arohanam: [0, 1, 4, 5, 7, 9, 10, 12],
        avarohanam: [12, 10, 9, 7, 5, 4, 1, 0],
        type: "Melakarta",
        number: 7,
        description: "7th Melakarta"
    },
    "Hanumatodi": {
        arohanam: [0, 1, 3, 5, 7, 8, 10, 12],
        avarohanam: [12, 10, 8, 7, 5, 3, 1, 0],
        type: "Melakarta",
        number: 8,
        description: "8th Melakarta - Deeply devotional, morning raga"
    },
    "Dhenuka": {
        arohanam: [0, 1, 4, 5, 7, 9, 11, 12],
        avarohanam: [12, 11, 9, 7, 5, 4, 1, 0],
        type: "Melakarta",
        number: 9,
        description: "9th Melakarta"
    },
    "Natakapriya": {
        arohanam: [0, 1, 4, 5, 7, 8, 10, 12],
        avarohanam: [12, 10, 8, 7, 5, 4, 1, 0],
        type: "Melakarta",
        number: 10,
        description: "10th Melakarta - Dramatic"
    },
    "Kokilapriya": {
        arohanam: [0, 1, 4, 5, 7, 8, 11, 12],
        avarohanam: [12, 11, 8, 7, 5, 4, 1, 0],
        type: "Melakarta",
        number: 11,
        description: "11th Melakarta - Sweet like cuckoo"
    },
    "Rupavati": {
        arohanam: [0, 1, 4, 5, 7, 9, 10, 12],
        avarohanam: [12, 10, 9, 7, 5, 4, 1, 0],
        type: "Melakarta",
        number: 12,
        description: "12th Melakarta"
    },

    // Chakra 3: Agni (S R2 combinations)
    "Gayakapriya": {
        arohanam: [0, 2, 3, 5, 7, 8, 10, 12],
        avarohanam: [12, 10, 8, 7, 5, 3, 2, 0],
        type: "Melakarta",
        number: 13,
        description: "13th Melakarta"
    },
    "Vakulabharanam": {
        arohanam: [0, 2, 3, 5, 7, 8, 11, 12],
        avarohanam: [12, 11, 8, 7, 5, 3, 2, 0],
        type: "Melakarta",
        number: 14,
        description: "14th Melakarta"
    },
    "Mayamalavagowla": {
        arohanam: [0, 1, 4, 5, 7, 8, 11, 12],
        avarohanam: [12, 11, 8, 7, 5, 4, 1, 0],
        type: "Melakarta",
        number: 15,
        description: "15th Melakarta - Peaceful morning raga, very popular"
    },
    "Chakravakam": {
        arohanam: [0, 2, 3, 5, 7, 9, 10, 12],
        avarohanam: [12, 10, 9, 7, 5, 3, 2, 0],
        type: "Melakarta",
        number: 16,
        description: "16th Melakarta"
    },
    "Suryakantam": {
        arohanam: [0, 2, 3, 5, 7, 9, 11, 12],
        avarohanam: [12, 11, 9, 7, 5, 3, 2, 0],
        type: "Melakarta",
        number: 17,
        description: "17th Melakarta - Bright like sun"
    },
    "Hatakambari": {
        arohanam: [0, 2, 4, 5, 7, 8, 10, 12],
        avarohanam: [12, 10, 8, 7, 5, 4, 2, 0],
        type: "Melakarta",
        number: 18,
        description: "18th Melakarta"
    },

    // Chakra 4: Veda (S R2 G3 combinations)
    "Jhankaradhwani": {
        arohanam: [0, 2, 4, 5, 7, 8, 11, 12],
        avarohanam: [12, 11, 8, 7, 5, 4, 2, 0],
        type: "Melakarta",
        number: 19,
        description: "19th Melakarta - Resonating sound"
    },
    "Natabhairavi": {
        arohanam: [0, 2, 3, 5, 7, 8, 10, 12],
        avarohanam: [12, 10, 8, 7, 5, 3, 2, 0],
        type: "Melakarta",
        number: 20,
        description: "20th Melakarta - Very popular, serious and devotional"
    },
    "Keeravani": {
        arohanam: [0, 2, 3, 5, 7, 8, 11, 12],
        avarohanam: [12, 11, 8, 7, 5, 3, 2, 0],
        type: "Melakarta",
        number: 21,
        description: "21st Melakarta - Serious and devotional, very popular"
    },
    "Kharaharapriya": {
        arohanam: [0, 2, 3, 5, 7, 9, 10, 12],
        avarohanam: [12, 10, 9, 7, 5, 3, 2, 0],
        type: "Melakarta",
        number: 22,
        description: "22nd Melakarta - Extremely popular, versatile"
    },
    "Gourimanohari": {
        arohanam: [0, 2, 3, 5, 7, 9, 11, 12],
        avarohanam: [12, 11, 9, 7, 5, 3, 2, 0],
        type: "Melakarta",
        number: 23,
        description: "23rd Melakarta - Captivating beauty"
    },
    "Varunapriya": {
        arohanam: [0, 2, 4, 5, 7, 8, 10, 12],
        avarohanam: [12, 10, 8, 7, 5, 4, 2, 0],
        type: "Melakarta",
        number: 24,
        description: "24th Melakarta"
    },

    // Chakra 5: Bana (S R3 combinations)
    "Mararanjani": {
        arohanam: [0, 2, 4, 5, 7, 8, 11, 12],
        avarohanam: [12, 11, 8, 7, 5, 4, 2, 0],
        type: "Melakarta",
        number: 25,
        description: "25th Melakarta"
    },
    "Charukesi": {
        arohanam: [0, 2, 4, 5, 7, 9, 10, 12],
        avarohanam: [12, 10, 9, 7, 5, 4, 2, 0],
        type: "Melakarta",
        number: 26,
        description: "26th Melakarta - Graceful and elegant"
    },
    "Sarasangi": {
        arohanam: [0, 2, 4, 5, 7, 9, 11, 12],
        avarohanam: [12, 11, 9, 7, 5, 4, 2, 0],
        type: "Melakarta",
        number: 27,
        description: "27th Melakarta"
    },
    "Harikambhoji": {
        arohanam: [0, 2, 4, 5, 7, 9, 10, 12],
        avarohanam: [12, 10, 9, 7, 5, 4, 2, 0],
        type: "Melakarta",
        number: 28,
        description: "28th Melakarta - Very popular, joyful"
    },
    "Dheerasankarabharanam": {
        arohanam: [0, 2, 4, 5, 7, 9, 11, 12],
        avarohanam: [12, 11, 9, 7, 5, 4, 2, 0],
        type: "Melakarta",
        number: 29,
        description: "29th Melakarta - Major scale, extremely popular"
    },
    "Naganandini": {
        arohanam: [0, 3, 4, 5, 7, 8, 10, 12],
        avarohanam: [12, 10, 8, 7, 5, 4, 3, 0],
        type: "Melakarta",
        number: 30,
        description: "30th Melakarta"
    },

    // Chakra 6: Rutu (S R3 G3 combinations)
    "Yagapriya": {
        arohanam: [0, 3, 4, 5, 7, 8, 11, 12],
        avarohanam: [12, 11, 8, 7, 5, 4, 3, 0],
        type: "Melakarta",
        number: 31,
        description: "31st Melakarta"
    },
    "Ragavardhini": {
        arohanam: [0, 3, 4, 5, 7, 9, 10, 12],
        avarohanam: [12, 10, 9, 7, 5, 4, 3, 0],
        type: "Melakarta",
        number: 32,
        description: "32nd Melakarta"
    },
    "Gangeyabhushani": {
        arohanam: [0, 3, 4, 5, 7, 9, 11, 12],
        avarohanam: [12, 11, 9, 7, 5, 4, 3, 0],
        type: "Melakarta",
        number: 33,
        description: "33rd Melakarta"
    },
    "Vagadheeswari": {
        arohanam: [0, 3, 4, 6, 7, 8, 10, 12],
        avarohanam: [12, 10, 8, 7, 6, 4, 3, 0],
        type: "Melakarta",
        number: 34,
        description: "34th Melakarta"
    },
    "Shulini": {
        arohanam: [0, 3, 4, 6, 7, 8, 11, 12],
        avarohanam: [12, 11, 8, 7, 6, 4, 3, 0],
        type: "Melakarta",
        number: 35,
        description: "35th Melakarta"
    },
    "Chalanatta": {
        arohanam: [0, 3, 4, 6, 7, 9, 10, 12],
        avarohanam: [12, 10, 9, 7, 6, 4, 3, 0],
        type: "Melakarta",
        number: 36,
        description: "36th Melakarta"
    },

    // Chakra 7: Rishi (S M2 combinations)
    "Salagam": {
        arohanam: [0, 1, 3, 6, 7, 8, 10, 12],
        avarohanam: [12, 10, 8, 7, 6, 3, 1, 0],
        type: "Melakarta",
        number: 37,
        description: "37th Melakarta"
    },
    "Jalarnavam": {
        arohanam: [0, 1, 3, 6, 7, 8, 11, 12],
        avarohanam: [12, 11, 8, 7, 6, 3, 1, 0],
        type: "Melakarta",
        number: 38,
        description: "38th Melakarta"
    },
    "Jhalavarali": {
        arohanam: [0, 1, 3, 6, 7, 9, 10, 12],
        avarohanam: [12, 10, 9, 7, 6, 3, 1, 0],
        type: "Melakarta",
        number: 39,
        description: "39th Melakarta"
    },
    "Navaneetam": {
        arohanam: [0, 1, 3, 6, 7, 9, 11, 12],
        avarohanam: [12, 11, 9, 7, 6, 3, 1, 0],
        type: "Melakarta",
        number: 40,
        description: "40th Melakarta"
    },
    "Pavani": {
        arohanam: [0, 1, 4, 6, 7, 8, 10, 12],
        avarohanam: [12, 10, 8, 7, 6, 4, 1, 0],
        type: "Melakarta",
        number: 41,
        description: "41st Melakarta - Purifying"
    },
    "Raghupriya": {
        arohanam: [0, 1, 4, 6, 7, 8, 11, 12],
        avarohanam: [12, 11, 8, 7, 6, 4, 1, 0],
        type: "Melakarta",
        number: 42,
        description: "42nd Melakarta"
    },

    // Chakra 8: Vasu (S R1 G2 M2 combinations)
    "Gavambhodi": {
        arohanam: [0, 1, 4, 6, 7, 9, 10, 12],
        avarohanam: [12, 10, 9, 7, 6, 4, 1, 0],
        type: "Melakarta",
        number: 43,
        description: "43rd Melakarta"
    },
    "Bhavapriya": {
        arohanam: [0, 1, 4, 6, 7, 9, 11, 12],
        avarohanam: [12, 11, 9, 7, 6, 4, 1, 0],
        type: "Melakarta",
        number: 44,
        description: "44th Melakarta"
    },
    "Shubhapantuvarali": {
        arohanam: [0, 1, 3, 6, 7, 8, 10, 12],
        avarohanam: [12, 10, 8, 7, 6, 3, 1, 0],
        type: "Melakarta",
        number: 45,
        description: "45th Melakarta - Auspicious"
    },
    "Shadvidamargini": {
        arohanam: [0, 1, 4, 6, 7, 8, 11, 12],
        avarohanam: [12, 11, 8, 7, 6, 4, 1, 0],
        type: "Melakarta",
        number: 46,
        description: "46th Melakarta"
    },
    "Suvarnangi": {
        arohanam: [0, 1, 4, 6, 7, 9, 10, 12],
        avarohanam: [12, 10, 9, 7, 6, 4, 1, 0],
        type: "Melakarta",
        number: 47,
        description: "47th Melakarta - Golden hued"
    },
    "Divyamani": {
        arohanam: [0, 1, 4, 6, 7, 9, 11, 12],
        avarohanam: [12, 11, 9, 7, 6, 4, 1, 0],
        type: "Melakarta",
        number: 48,
        description: "48th Melakarta - Divine gem"
    },

    // Chakra 9: Brahma (S R2 G2 M2 combinations)
    "Dhavalambari": {
        arohanam: [0, 2, 3, 6, 7, 8, 10, 12],
        avarohanam: [12, 10, 8, 7, 6, 3, 2, 0],
        type: "Melakarta",
        number: 49,
        description: "49th Melakarta"
    },
    "Namanarayani": {
        arohanam: [0, 2, 3, 6, 7, 8, 11, 12],
        avarohanam: [12, 11, 8, 7, 6, 3, 2, 0],
        type: "Melakarta",
        number: 50,
        description: "50th Melakarta"
    },
    "Kamavardhini": {
        arohanam: [0, 2, 3, 6, 7, 9, 10, 12],
        avarohanam: [12, 10, 9, 7, 6, 3, 2, 0],
        type: "Melakarta",
        number: 51,
        description: "51st Melakarta - Desire enhancing"
    },
    "Ramapriya": {
        arohanam: [0, 2, 3, 6, 7, 9, 11, 12],
        avarohanam: [12, 11, 9, 7, 6, 3, 2, 0],
        type: "Melakarta",
        number: 52,
        description: "52nd Melakarta"
    },
    "Gamanashrama": {
        arohanam: [0, 2, 4, 6, 7, 8, 10, 12],
        avarohanam: [12, 10, 8, 7, 6, 4, 2, 0],
        type: "Melakarta",
        number: 53,
        description: "53rd Melakarta"
    },
    "Vishwambhari": {
        arohanam: [0, 2, 4, 6, 7, 8, 11, 12],
        avarohanam: [12, 11, 8, 7, 6, 4, 2, 0],
        type: "Melakarta",
        number: 54,
        description: "54th Melakarta - World supporting"
    },

    // Chakra 10: Disi (S R2 G3 M2 combinations)
    "Shyamalangi": {
        arohanam: [0, 2, 4, 6, 7, 9, 10, 12],
        avarohanam: [12, 10, 9, 7, 6, 4, 2, 0],
        type: "Melakarta",
        number: 55,
        description: "55th Melakarta - Dark complexioned"
    },
    "Shanmukhapriya": {
        arohanam: [0, 2, 4, 6, 7, 9, 11, 12],
        avarohanam: [12, 11, 9, 7, 6, 4, 2, 0],
        type: "Melakarta",
        number: 56,
        description: "56th Melakarta - Popular and versatile"
    },
    "Simhendramadhyamam": {
        arohanam: [0, 2, 3, 6, 7, 8, 10, 12],
        avarohanam: [12, 10, 8, 7, 6, 3, 2, 0],
        type: "Melakarta",
        number: 57,
        description: "57th Melakarta - Lion-hearted"
    },
    "Hemavati": {
        arohanam: [0, 2, 3, 6, 7, 8, 11, 12],
        avarohanam: [12, 11, 8, 7, 6, 3, 2, 0],
        type: "Melakarta",
        number: 58,
        description: "58th Melakarta - Golden goddess"
    },
    "Dharmavati": {
        arohanam: [0, 2, 3, 6, 7, 9, 10, 12],
        avarohanam: [12, 10, 9, 7, 6, 3, 2, 0],
        type: "Melakarta",
        number: 59,
        description: "59th Melakarta - Righteous"
    },
    "Neetimati": {
        arohanam: [0, 2, 3, 6, 7, 9, 11, 12],
        avarohanam: [12, 11, 9, 7, 6, 3, 2, 0],
        type: "Melakarta",
        number: 60,
        description: "60th Melakarta - Ethical"
    },

    // Chakra 11: Rudra (S R3 G2 M2 combinations)
    "Kantamani": {
        arohanam: [0, 2, 4, 6, 7, 8, 10, 12],
        avarohanam: [12, 10, 8, 7, 6, 4, 2, 0],
        type: "Melakarta",
        number: 61,
        description: "61st Melakarta"
    },
    "Rishabhapriya": {
        arohanam: [0, 2, 4, 6, 7, 8, 11, 12],
        avarohanam: [12, 11, 8, 7, 6, 4, 2, 0],
        type: "Melakarta",
        number: 62,
        description: "62nd Melakarta"
    },
    "Latangi": {
        arohanam: [0, 2, 4, 6, 7, 9, 10, 12],
        avarohanam: [12, 10, 9, 7, 6, 4, 2, 0],
        type: "Melakarta",
        number: 63,
        description: "63rd Melakarta - Creeper-like"
    },
    "Vachaspati": {
        arohanam: [0, 2, 4, 6, 7, 9, 11, 12],
        avarohanam: [12, 11, 9, 7, 6, 4, 2, 0],
        type: "Melakarta",
        number: 64,
        description: "64th Melakarta - Lord of speech"
    },
    "Mechakalyani": {
        arohanam: [0, 2, 4, 6, 7, 9, 11, 12],
        avarohanam: [12, 11, 9, 7, 6, 4, 2, 0],
        type: "Melakarta",
        number: 65,
        description: "65th Melakarta - Auspicious and bright, very popular"
    },
    "Chitrambari": {
        arohanam: [0, 3, 4, 6, 7, 8, 10, 12],
        avarohanam: [12, 10, 8, 7, 6, 4, 3, 0],
        type: "Melakarta",
        number: 66,
        description: "66th Melakarta - Wonderfully adorned"
    },

    // Chakra 12: Aditya (S R3 G3 M2 combinations)
    "Sucharitra": {
        arohanam: [0, 3, 4, 6, 7, 8, 11, 12],
        avarohanam: [12, 11, 8, 7, 6, 4, 3, 0],
        type: "Melakarta",
        number: 67,
        description: "67th Melakarta - Good character"
    },
    "Jyotiswarupini": {
        arohanam: [0, 3, 4, 6, 7, 9, 10, 12],
        avarohanam: [12, 10, 9, 7, 6, 4, 3, 0],
        type: "Melakarta",
        number: 68,
        description: "68th Melakarta - Embodiment of light"
    },
    "Dhatuvardani": {
        arohanam: [0, 3, 4, 6, 7, 9, 11, 12],
        avarohanam: [12, 11, 9, 7, 6, 4, 3, 0],
        type: "Melakarta",
        number: 69,
        description: "69th Melakarta - Element enhancing"
    },
    "Nasikabhushani": {
        arohanam: [0, 3, 4, 6, 7, 8, 10, 12],
        avarohanam: [12, 10, 8, 7, 6, 4, 3, 0],
        type: "Melakarta",
        number: 70,
        description: "70th Melakarta"
    },
    "Kosalam": {
        arohanam: [0, 3, 4, 6, 7, 8, 11, 12],
        avarohanam: [12, 11, 8, 7, 6, 4, 3, 0],
        type: "Melakarta",
        number: 71,
        description: "71st Melakarta"
    },
    "Rasikapriya": {
        arohanam: [0, 3, 4, 6, 7, 9, 10, 12],
        avarohanam: [12, 10, 9, 7, 6, 4, 3, 0],
        type: "Melakarta",
        number: 72,
        description: "72nd Melakarta - Loved by connoisseurs"
    },

    // ==================== POPULAR JANYA RAGAS (28) ====================
    
    "Mohanam": {
        arohanam: [0, 2, 4, 7, 9, 12],
        avarohanam: [12, 9, 7, 4, 2, 0],
        type: "Janya",
        parent: "Harikambhoji (28)",
        description: "Sweet pentatonic - Extremely popular, peaceful"
    },
    "Hamsadhwani": {
        arohanam: [0, 2, 4, 7, 11, 12],
        avarohanam: [12, 11, 7, 4, 2, 0],
        type: "Janya",
        parent: "Dheerasankarabharanam (29)",
        description: "Uplifting pentatonic - Evening raga, joyful"
    },
    "Hindolam": {
        arohanam: [0, 3, 5, 8, 10, 12],
        avarohanam: [12, 10, 8, 5, 3, 0],
        type: "Janya",
        parent: "Natabhairavi (20)",
        description: "Devotional pentatonic - Spring season raga"
    },
    "Madhyamavati": {
        arohanam: [0, 2, 5, 7, 10, 12],
        avarohanam: [12, 10, 7, 5, 2, 0],
        type: "Janya",
        parent: "Kharaharapriya (22)",
        description: "Serene pentatonic - Evening raga"
    },
    "Shivaranjani": {
        arohanam: [0, 2, 3, 7, 9, 12],
        avarohanam: [12, 9, 7, 3, 2, 0],
        type: "Janya",
        parent: "Kharaharapriya (22)",
        description: "Devotional - Pleasing to Lord Shiva"
    },
    "Abhogi": {
        arohanam: [0, 2, 4, 5, 7, 12],
        avarohanam: [12, 7, 5, 4, 2, 0],
        type: "Janya",
        parent: "Kharaharapriya (22)",
        description: "Ancient pentatonic - Devotional"
    },
    "Revagupti": {
        arohanam: [0, 1, 5, 7, 10, 12],
        avarohanam: [12, 10, 7, 5, 1, 0],
        type: "Janya",
        parent: "Hanumatodi (8)",
        description: "Rare pentatonic - Mystical"
    },
    "Amritavarshini": {
        arohanam: [0, 3, 4, 6, 9, 11, 12],
        avarohanam: [12, 11, 9, 6, 4, 3, 0],
        type: "Janya",
        parent: "Suvarnangi (47)",
        description: "Rain raga - Invokes rainfall"
    },
    "Charukesi": {
        arohanam: [0, 2, 4, 5, 7, 9, 10, 12],
        avarohanam: [12, 10, 9, 7, 5, 4, 2, 0],
        type: "Janya",
        parent: "Harikambhoji (28)",
        description: "Graceful and elegant - Versatile"
    },
    "Behag": {
        arohanam: [0, 2, 4, 7, 9, 11, 12],
        avarohanam: [12, 9, 7, 6, 4, 2, 0],
        type: "Janya",
        parent: "Mechakalyani (65)",
        description: "Hindustani - Romantic evening raga"
    },
    "Desh": {
        arohanam: [0, 2, 5, 7, 9, 11, 12],
        avarohanam: [12, 10, 9, 7, 5, 4, 2, 0],
        type: "Janya",
        parent: "Kharaharapriya (22)",
        description: "Patriotic - Monsoon raga"
    },
    "Bageshri": {
        arohanam: [0, 2, 3, 5, 7, 10, 12],
        avarohanam: [12, 10, 9, 7, 5, 3, 2, 0],
        type: "Janya",
        parent: "Natabhairavi (20)",
        description: "Hindustani - Romantic night raga"
    },
    "Anandabhairavi": {
        arohanam: [0, 2, 3, 5, 7, 8, 10, 12],
        avarohanam: [12, 10, 8, 7, 5, 3, 2, 0],
        type: "Janya",
        parent: "Natabhairavi (20)",
        description: "Joyful devotional - Very popular"
    },
    "Sahana": {
        arohanam: [0, 2, 5, 7, 9, 10, 12],
        avarohanam: [12, 10, 9, 7, 5, 4, 2, 0],
        type: "Janya",
        parent: "Harikambhoji (28)",
        description: "Melodious - Evening raga"
    },
    "Simhendramadhyamam": {
        arohanam: [0, 2, 3, 6, 7, 8, 10, 12],
        avarohanam: [12, 10, 8, 7, 6, 3, 2, 0],
        type: "Melakarta",
        number: 57,
        description: "Popular - Powerful and majestic"
    },
    "Kaanada": {
        arohanam: [0, 2, 3, 5, 7, 9, 10, 12],
        avarohanam: [12, 10, 9, 7, 5, 3, 2, 0],
        type: "Janya",
        parent: "Kharaharapriya (22)",
        description: "Melancholic - Night raga"
    },
    "Begada": {
        arohanam: [0, 2, 3, 5, 7, 8, 10, 12],
        avarohanam: [12, 10, 8, 7, 5, 3, 2, 0],
        type: "Janya",
        parent: "Kharaharapriya (22)",
        description: "Powerful - Dramatic expressions"
    },
    "Saveri": {
        arohanam: [0, 2, 3, 5, 7, 9, 10, 12],
        avarohanam: [12, 10, 9, 7, 5, 3, 2, 0],
        type: "Janya",
        parent: "Dheerasankarabharanam (29)",
        description: "Morning raga - Peaceful and bright"
    },
    "Kalyani": {
        arohanam: [0, 2, 4, 6, 7, 9, 11, 12],
        avarohanam: [12, 11, 9, 7, 6, 4, 2, 0],
        type: "Janya",
        parent: "Mechakalyani (65)",
        description: "Auspicious - Very popular, bright"
    },
    "Bhairavi": {
        arohanam: [0, 1, 3, 5, 7, 8, 10, 12],
        avarohanam: [12, 10, 8, 7, 5, 3, 1, 0],
        type: "Janya",
        parent: "Hanumatodi (8)",
        description: "Hindustani - Morning raga, devotional"
    },
    "Durga": {
        arohanam: [0, 2, 5, 7, 9, 12],
        avarohanam: [12, 9, 7, 5, 2, 0],
        type: "Janya",
        parent: "Dheerasankarabharanam (29)",
        description: "Hindustani pentatonic - Evening raga"
    },
    "Bhupali": {
        arohanam: [0, 2, 4, 7, 9, 12],
        avarohanam: [12, 9, 7, 4, 2, 0],
        type: "Janya",
        parent: "Dheerasankarabharanam (29)",
        description: "Hindustani - Evening raga, peaceful"
    },
    "Malayamarutam": {
        arohanam: [0, 1, 5, 7, 8, 12],
        avarohanam: [12, 8, 7, 5, 1, 0],
        type: "Janya",
        parent: "Mayamalavagowla (15)",
        description: "Gentle breeze - Soothing"
    },
    "Vasanta": {
        arohanam: [0, 2, 4, 6, 9, 11, 12],
        avarohanam: [12, 11, 9, 6, 4, 2, 0],
        type: "Janya",
        parent: "Vachaspati (64)",
        description: "Spring season - Joyful"
    },
    "Khamas": {
        arohanam: [0, 2, 4, 5, 7, 9, 11, 12],
        avarohanam: [12, 10, 9, 7, 5, 4, 2, 0],
        type: "Janya",
        parent: "Harikambhoji (28)",
        description: "Versatile - Popular in film music"
    },
    "Valaji": {
        arohanam: [0, 4, 7, 9, 10, 12],
        avarohanam: [10, 9, 7, 4, 0],
        type: "Janya",
        parent: "Natabhairavi (20)",
        description: "Gentle and soothing - Rare pentatonic"
    },
    "Kedaram": {
        arohanam: [0, 2, 5, 7, 9, 11, 12],
        avarohanam: [12, 10, 9, 7, 5, 4, 2, 0],
        type: "Janya",
        parent: "Shankarabharanam (29)",
        description: "Devotional - Popular in Keertanas"
    },
    "Reethigowla": {
        arohanam: [0, 2, 5, 7, 10, 12],
        avarohanam: [12, 10, 7, 5, 4, 2, 0],
        type: "Janya",
        parent: "Harikambhoji (28)",
        description: "Melodious pentatonic - Soothing"
    }
};

// Export for use in HTML
if (typeof module !== 'undefined' && module.exports) {
    module.exports = RAGAS;
}
