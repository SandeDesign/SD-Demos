export interface Course {
  id: string;
  title: string;
  instructor: string;
  instructorImage: string;
  description: string;
  image: string;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  lessons: number;
  students: number;
  rating: number;
  reviews: number;
  price: number;
  enrolled?: boolean;
  progress?: number;
  tags: string[];
}

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  completed: boolean;
  type: 'video' | 'quiz' | 'reading';
}

export interface Module {
  id: string;
  title: string;
  lessons: Lesson[];
}
