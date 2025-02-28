import mongoose, { Schema } from 'mongoose';

const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    sortdescription: {
      type: String,
      required: true,
    },
    thumPicture: {
      type: String,
      required: true,
    },
    
      metatitle  : {
      type : String,
      requireed : true, 
      },








      
      metadescription : {
        type : String,
        required : true,
      },
      keyword : {
        tpye : Array,
        required : true,
      }

  
  },
  {
    timestamps: true,
  }
);

export const blog = mongoose.model('blog', blogSchema);
