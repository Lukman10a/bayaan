export type CourseStage = string;

export interface CourseData {
  slug: string;
  type: 'islamic' | 'academic';
  titleKey: string; // Key for translation, e.g., 'arabicTitle'
  descKey: string;
  levels: string;
  format: string;
  icon: 'Book' | 'MonitorPlay';
  stagesKey?: string; // Prefix for stage translations
  stageCount?: number;
}

export const courses: CourseData[] = [
  // Islamic Courses
  {
    slug: 'arabic-language',
    type: 'islamic',
    titleKey: 'arabicTitle',
    descKey: 'arabicDesc',
    levels: 'Beginner to Advanced',
    format: '1-on-1 & Group',
    icon: 'Book',
    stagesKey: 'arabicStages',
    stageCount: 3,
  },
  {
    slug: 'quran',
    type: 'islamic',
    titleKey: 'quranTitle',
    descKey: 'quranDesc',
    levels: 'Beginner to Advanced',
    format: '1-on-1 & Group',
    icon: 'Book',
    stagesKey: 'quranStages',
    stageCount: 3,
  },
  {
    slug: 'tawhid',
    type: 'islamic',
    titleKey: 'tawhidTitle',
    descKey: 'tawhidDesc',
    levels: 'Beginner to Advanced',
    format: '1-on-1 & Group',
    icon: 'Book',
    stagesKey: 'tawhidStages',
    stageCount: 3,
  },
  {
    slug: 'fiqh',
    type: 'islamic',
    titleKey: 'fiqhTitle',
    descKey: 'fiqhDesc',
    levels: 'Beginner to Advanced',
    format: '1-on-1 & Group',
    icon: 'Book',
    stagesKey: 'fiqhStages',
    stageCount: 3,
  },
  {
    slug: 'hadith',
    type: 'islamic',
    titleKey: 'hadithTitle',
    descKey: 'hadithDesc',
    levels: 'Beginner to Advanced',
    format: '1-on-1 & Group',
    icon: 'Book',
    stagesKey: 'hadithStages',
    stageCount: 3,
  },
  {
    slug: 'tafsir',
    type: 'islamic',
    titleKey: 'tafsirTitle',
    descKey: 'tafsirDesc',
    levels: 'Beginner to Advanced',
    format: '1-on-1 & Group',
    icon: 'Book',
    stagesKey: 'tafsirStages',
    stageCount: 3,
  },
  // Academic Courses
  {
    slug: 'igcse-mathematics',
    type: 'academic',
    titleKey: 'mathTitle',
    descKey: 'mathDesc',
    levels: 'High School',
    format: 'Group & 1-on-1',
    icon: 'MonitorPlay',
  },
  {
    slug: 'general-sciences',
    type: 'academic',
    titleKey: 'scienceTitle',
    descKey: 'scienceDesc',
    levels: 'Middle & High School',
    format: 'Group & 1-on-1',
    icon: 'MonitorPlay',
  },
  {
    slug: 'programming',
    type: 'academic',
    titleKey: 'progTitle',
    descKey: 'progDesc',
    levels: 'Middle & High School',
    format: 'Group',
    icon: 'MonitorPlay',
  }
];

export function getCourseBySlug(slug: string): CourseData | undefined {
  return courses.find(c => c.slug === slug);
}
