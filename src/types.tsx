export type Course = {
  _id: string;
  title: string;
  description: string;
  instructor: {
    _id: string;
    firstName: string;
    lastName: string;
    fullName: string;
    id: string;
  };
  sections: Record<string, unknown>[];
  price: number;
  category: string;
  level: string;
  language: string[];
  requirements: string[];
  whatYouWillLearn: string[];
  tags: string[];
  thumbnail: string;
  averageRating: number;
  totalReviews: number;
  totalStudents: number;
  isPublished: boolean;
  approvalStatus: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  rejectionReason?: string;
};
export type wishlistCard ={
    id: number;
    title: string;
    description: string;
    instructor: string ;
    price: number;
    image: string;
    rating: number;
}