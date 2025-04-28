import { useState, useRef } from "react";
import { ArrowLeft, Camera, Loader } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { validationSchema } from "../utils/validationSchema";
import { db } from "../firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { toast } from "react-toastify";

const PostAdForm = () => {
  const { user } = useAuth();

  const [imageUrl, setImageUrl] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const navigate = useNavigate();

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const uploadImage = async (file: File) => {
    setImageUrl("");
    setIsUploading(true);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "olx_preset");

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await response.json();
      setImageUrl(data.secure_url);

      return data.secure_url;
    } catch (error) {
      toast.error("Unable to upload photo!", {
        position: "bottom-right",
      });

      console.error("Upload error:", error);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Header with back button */}
      <div className="bg-[#f9f9f9] p-3 shadow-sm flex items-center fixed z-1 w-full">
        <Link to={"/"}>
          <button className="mr- p-3 cursor-pointer">
            <ArrowLeft size={22} />
          </button>
        </Link>
      </div>

      <div className="max-w-4xl mx-auto pt-18">
        {/* Main form */}
        <div className="p-4">
          <h1 className="text-center font-bold text-2xl text-gray-800 mb-4">
            POST YOUR AD
          </h1>

          <Formik
            initialValues={{
              adTitle: "",
              description: "",
              location: "",
              price: null,
              image: "",
              name: user?.displayName,
            }}
            initialTouched={{ image: true }}
            initialErrors={{ image: "Photo is required" }}
            validationSchema={validationSchema}
            onSubmit={async (values) => {
              try {
                setIsSubmitting(true);

                if (!user?.uid) {
                  console.error("No authenticated user found.");
                  return;
                }

                await addDoc(collection(db, "items"), {
                  userId: user.uid,
                  ...values,
                  postedOn: new Date(),
                });
                console.log("Form Data Saved Successfully!");

                toast.success("AD posted successfully!", {
                  position: "bottom-right",
                });

                navigate("/", { replace: true });
                
                window.scrollTo({ top: 0, behavior: "smooth" });
              } catch (error) {
                console.error("Error saving data:", error);
              } finally {
                setIsSubmitting(false);
              }
            }}
          >
            {({ isValid, dirty, setFieldValue, setFieldTouched, values }) => (
              // Selected Category
              <Form>
                <div className="border rounded-md rounded-b-none border-gray-300">
                  <div className="p-4 pb-7 border-b border-gray-300">
                    <h2 className="text-lg font-semibold text-gray-800 mb-7">
                      CATEGORY
                    </h2>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-600">Furniture</span>
                    </div>
                  </div>

                  {/* Include some details */}
                  <div className="p-8 border-b border-gray-300">
                    <h2 className="text-lg font-semibold text-gray-800 mb-4">
                      INCLUDE SOME DETAILS
                    </h2>

                    <div className="mb-6 max-w-md">
                      <label className="block text-sm mb-1">
                        Ad title <span>*</span>
                      </label>
                      <div>
                        <Field
                          type="text"
                          name="adTitle"
                          autoComplete="off"
                          className="w-full border rounded-md p-3"
                          onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
                            setFieldValue("adTitle", e.target.value.trim());
                            setFieldTouched("adTitle", true, false);
                          }}
                        />
                      </div>
                      <p className="text-xs text-gray-500 !mt-1">
                        Mention the key features of your item (e.g. brand,
                        model, age, type)
                      </p>
                      <ErrorMessage
                        component="small"
                        name="adTitle"
                        className="text-red-500"
                      />
                    </div>

                    <div className="max-w-md mb-6">
                      <label className="block text-sm mb-1">
                        Description <span>*</span>
                      </label>
                      <div>
                        <Field
                          as="textarea"
                          type="text"
                          name="description"
                          autoComplete="off"
                          className="w-full border rounded-md p-3 h-24"
                          onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
                            setFieldValue("description", e.target.value.trim());
                            setFieldTouched("description", true, false);
                          }}
                        ></Field>
                      </div>
                      <p className="text-xs text-gray-500 !mt-1">
                        Include condition, features and reason for selling
                      </p>
                      <ErrorMessage
                        component="small"
                        name="description"
                        className="text-red-500"
                      />
                    </div>

                    <div className="max-w-md">
                      <label className="block text-sm mb-1">
                        Location <span>*</span>
                      </label>
                      <div>
                        <Field
                          type="text"
                          name="location"
                          autoComplete="off"
                          className="w-full border rounded-md p-3"
                          onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
                            setFieldValue("location", e.target.value.trim());
                            setFieldTouched("location", true, false);
                          }}
                        />
                      </div>
                      <ErrorMessage
                        component="small"
                        name="location"
                        className="text-red-500"
                      />
                    </div>
                  </div>

                  {/* Set a price */}
                  <div className="p-8 max-w-lg">
                    <h2 className="text-lg font-semibold text-gray-800 mb-4">
                      SET A PRICE
                    </h2>
                    <div>
                      <label className="block text-xs mb-1 text-gray-500">
                        Price <span>*</span>
                      </label>
                      <div className="flex items-center border rounded-md">
                        <div className="px-3 py-2 text-gray-500">₹</div>
                        <Field
                          type="text"
                          name="price"
                          autoComplete="off"
                          className="flex-1 p-3 border-l outline-none appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                          value={
                            values.price || values.price === 0
                              ? Number(values.price).toLocaleString("en-IN")
                              : ""
                          }
                          onChange={(
                            e: React.ChangeEvent<HTMLInputElement>
                          ) => {
                            const rawValue = e.target.value.replace(
                              /[^0-9]/g,
                              ""
                            );
                            const numericValue = rawValue
                              ? Number(rawValue)
                              : "";
                            setFieldValue("price", numericValue);
                          }}
                        />
                      </div>
                      <ErrorMessage
                        component="small"
                        name="price"
                        className="text-red-500"
                      />
                    </div>
                  </div>

                  {/* Upload photos */}
                  <div className="p-8 border-b border-t border-gray-300">
                    <h2 className="text-lg font-semibold text-gray-800 mb-4">
                      UPLOAD PHOTO
                    </h2>
                    <div className="grid grid-cols-7 gap-2">
                      <div
                        className={`border-2 cursor-pointer relative`}
                        onClick={handleClick}
                      >
                        <Loader
                          className={`${
                            isUploading ? "animate-spin" : "hidden"
                          } absolute inset-0 m-auto text-black`}
                        />
                        <div
                          className={`${
                            isUploading ? "opacity-10" : ""
                          } w-26 h-26 flex flex-col items-center justify-center`}
                        >
                          {imageUrl ? (
                            <img
                              src={imageUrl}
                              alt=""
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <>
                              <Camera className="text-gray-800" size={34} />
                              <span className="text-sm mt-1">Add Photo</span>
                            </>
                          )}
                        </div>
                      </div>
                      <Field
                        type="file"
                        name="image"
                        ref={fileInputRef}
                        className="hidden"
                        accept="image/*"
                        value=""
                        onChange={async (
                          event: React.ChangeEvent<HTMLInputElement>
                        ) => {
                          try {
                            setFieldValue("image", "");

                            const image = event.target.files?.[0];

                            if (image) {
                              const imageUrl = await uploadImage(image);

                              if (imageUrl) setFieldValue("image", imageUrl);
                            }
                          } catch (error) {
                            console.error(error);
                          }
                        }}
                      />
                    </div>
                    <ErrorMessage
                      component="small"
                      name="image"
                      className="text-red-500"
                    />
                  </div>

                  {/* Review details */}
                  <div className="p-8 border-gray-300 max-w-lg">
                    <h2 className="text-lg font-semibold text-gray-800 mb-4">
                      REVIEW YOUR DETAILS
                    </h2>

                    <div className="flex items-center">
                      <img
                        src={user?.photoURL ?? ""}
                        alt=""
                        className="rounded-full mr-4"
                      />
                      <div className="flex-1">
                        <label className="block text-sm mb-1">
                          Name <span>*</span>
                        </label>
                        <Field
                          type="text"
                          name="name"
                          autoComplete="off"
                          className="w-full border rounded-md p-3"
                          onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
                            setFieldValue("name", e.target.value.trim());
                            setFieldTouched("name", true, false);
                          }}
                        />
                        <ErrorMessage
                          component="small"
                          name="name"
                          className="text-red-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Post button */}
                <div className="p-8 border border-gray-300 mb-1 rounded-b-md">
                  <button
                    type="submit"
                    disabled={
                      !(isValid && dirty && !isUploading && !isSubmitting)
                    }
                    className={`font-bold p-2 border-4 rounded-sm ${
                      !(isValid && dirty && !isUploading && !isSubmitting)
                        ? "cursor-not-allowed bg-[#d8dfe0] border-[#d8dfe0] text-[#7f9799]"
                        : "cursor-pointer bg-[#002f34] border-[#002f34] text-white hover:bg-white hover:text-[#002f34]"
                    }`}
                  >
                    Post now
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default PostAdForm;
