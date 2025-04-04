import { Cloudinary } from "@cloudinary/url-gen";

const cloudinary = new Cloudinary({
  cloud: {
    cloudName: "dmpbjzzuh",
  },
  url: {
    secure: true,
  },
});

export default cloudinary;
