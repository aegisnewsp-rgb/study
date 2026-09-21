// Qatar General Secondary Education Certificate — Islamic Studies.
// Awarding body: Ministry of Education and Higher Education (MoEHE), State of
// Qatar. The MoEHE Islamic Studies curriculum for Grade 12 is organised into
// five domains (Quran الكريم, Hadith الشريف, Aqidah الإسلامية, Fiqh الإسلامي,
// Seerah والبحوث الإسلامية) with the Aqedah and Akhlaq themes running across
// both terms. Topics below are taken from the MoEHE-issued Grade 12 Islamic
// Studies textbook (كتاب الطالب) for Term 1 and Term 2 as published on the
// official MoEHE-aligned textbook distributor almanahj.com (al-Manahij
// al-Qatariyya, backed by the MoEHE) and the Afedni education platform,
// which reproduces the MoEHE textbook contents verbatim with chapter
// references. Source pages: MoEHE Islamic Studies Grade 12 Term 1 textbook,
// https://almanahj.com/qa/id=7313 and Afedni platform, https://afedni.com/
// (%d9%83%d8%aa%d8%a7%d8%a8-%d8%a7%d9%84%d8%a5%d8%b3%d9%84%d8%a7%d9%85%d9%8a
// %d8%a9-%d9%84%d9%84%d8%ab%d8%a7%d9%86%d9%8a-%d8%b9%d8%b4%d8%b1/) and Term 2,
// https://afedni.com/%d9%83%d8%aa%d8%a7%d8%a8-%d8%a7%d9%84%d8%aa%d8%b1%d8%a8
// %d9%8a%d8%a9-%d8%a7%d9%84%d8%a7%d8%b3%d9%84%d8%a7%d9%85%d9%8a%d8%a9-%d8%a7
// %d9%84%d9%85%d8%b3%d8%aa%d9%88%d9%89-%d8%a7%d9%84%d8%ab%d8%a7%d9%86/
// The textbook content is also confirmed in the MoEHE-QU 2023 Islamic Studies
// curriculum cooperation agreement at https://thepeninsulaqatar.com/article/21/11/2023/moehe-qu-to-develop-islamic-education-curricula-for-schools
// Re-check the live Grade 12 textbook edition (the MoEHE updated the book for
// the 2025-2026 / 1447 academic year) and any track-specific changes on
// https://www.edu.gov.qa/ before committing any revision plan to a student.

import type { Subject } from '../../types';

export const qsscIslamicStudies: Subject = {
  id: 'qssc-islamic-studies',
  name: 'Islamic Studies',
  color: '#16a34a',
  topics: [
    { id: 'qsscrel-001', name: 'Quran — Surah Ash-Shura (Tajweed and Recitation)', weight: 4 as const, description: 'Tajweed rules applied to Surah Ash-Shura: correct articulation of makharij, sifat al-huruf, madd rules, and the recitation fluency expected at MoEHE Grade 12 Term 1 (MoEHE-issued textbook, almanahj.com/qa/id=7313).' },
    { id: 'qsscrel-002', name: 'Quran — Surah Al-Hashr Memorisation and Surah Aal Imran Tafsir', weight: 4 as const, description: 'Memorisation of Surah Al-Hashr with chain-of-narration review, and Tafsir of selected verses of Surah Aal Imran on taqwa and adherence to the religion of Allah — the MoEHE Term 1 Quran module (MoEHE textbook).' },
    { id: 'qsscrel-003', name: 'Quran — I\'jaz al-Quran and Quranic Memorisation Methods', weight: 3 as const, description: 'The inimitability of the Quran (i\'jaz) as the MoEHE Term 1 Quran strand, including the linguistic, legislative and scientific dimensions of Quranic challenge to Arabic-speaking contemporaries, plus memorisation pedagogy.' },
    { id: 'qsscrel-004', name: 'Hadith — Ittqa\' al-Shubuhat and Qimat al-Ata\'', weight: 4 as const, description: 'Hadith content from MoEHE Term 1 (avoiding doubts, the hadith of al-Nu\'man ibn Bashir on halal and haram) and Term 2 (value of giving, the hadith on charity in Islam) — narrations, chain analysis and applied rulings.' },
    { id: 'qsscrel-005', name: 'Aqidah — Athar al-Aqidah and Mawaqif al-Islam min al-Sihr', weight: 3 as const, description: 'The impact of Islamic creed on building the Muslim personality (MoEHE Term 1) and the Islamic position on sihr (sorcery) as a Term 2 Aqidah module — sources, evidence, and the orthodox Sunni position.' },
    { id: 'qsscrel-006', name: 'Fiqh — Ahkam al-Jihad and Masadir al-Tashri\'', weight: 4 as const, description: 'Rulings of jihad in Islamic jurisprudence (MoEHE Term 1 Fiqh module) and the sources of Islamic legislation (Quran, Sunnah, Ijma\', Qiyas — MoEHE Term 2) including the conditions and methodology of ijtihad.' },
    { id: 'qsscrel-007', name: 'Seerah — Umm Salama and Makana al-Shabab', weight: 3 as const, description: 'The life of Umm Salama (Mother of the Believers) as the MoEHE Term 1 Seerah module, and the role of youth in the Prophetic biography (Makana al-Shabab fi al-Sira al-Nabawiyya) as the Term 2 Seerah unit.' },
    { id: 'qsscrel-008', name: 'Islamic History — Amir al-Mu\'minin Umar ibn Abd al-Aziz', weight: 2 as const, description: 'The rule of the Umayyad caliph Umar ibn Abd al-Aziz as the MoEHE Term 2 Sira wa-al-Buhuth al-Islamiyya module — his reforms, justice and the model of righteous leadership in Islamic political thought.' },
    { id: 'qsscrel-009', name: 'Akhlaq — Islah Dhawat al-Bayn and al-Shura', weight: 3 as const, description: 'Reconciliation between people (islah dhawat al-bayn) as a Term 2 Akhlaq module, and the value of shura (consultation) in Islamic ethics and governance — Quranic basis, prophetic application, contemporary relevance.' }
  ]
};
