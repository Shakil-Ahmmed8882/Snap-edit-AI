/* eslint-disable @typescript-eslint/no-explicit-any */
import { Document } from 'mongoose';


export interface IImage extends Document {
  title: string;
  transformationType: string;
  publicId: string;
  secureUrl: string;
  width?: number;
  height?: number;
  config?: Record<string, any>;  
  transformationUrl?: string;
  aspectRatio?: string;
  color?: string;
  prompt?: string;
  author: {
    _id:string,
    firstName: string,
    lastName: string
  }
  createdAt: Date;
  updatedAt: Date;
}
