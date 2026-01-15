
export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  rating: number;
  reviews: number;
  location: string;
  fees: string;
  image: string;
  available: boolean;
  timeToLocation: string;
}

export interface Specialty {
  id: string;
  name: string;
  icon: string;
  count: number;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  comment: string;
  rating: number;
  image: string;
}

export interface FAQ {
  question: string;
  answer: string;
}
