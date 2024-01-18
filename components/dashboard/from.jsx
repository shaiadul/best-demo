"use client";
import { useEffect, useState } from "react";
import { Alert, Button, Modal } from "flowbite-react";
import axios from "axios";

export default function From() {
  const [reels_title, setReels_title] = useState("");
  const [product_tags, setProduct_tags] = useState("");
  const [product_code, setProduct_code] = useState("");
  const [product_brand, setProduct_brand] = useState("");
  const [product_catagary, setProduct_catagary] = useState("");
  const [admin_email, setAdmin_email] = useState("admin@best.com.bd");
  const [product_description, setProduct_description] = useState("");
  const [product_duration, setProduct_duration] = useState("");
  const [video_files, setVideo_files] = useState(null);
  const [link_video, setLink_video] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleFileChange = async (e) => {
    setVideo_files(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    if (!video_files) return;

    try {
      const formData = new FormData();
      formData.append("file", video_files);
      formData.append("upload_preset", "reels_video");

      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/video/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await response.json();
      // setVideo_files(result?.secure_url);
      localStorage.setItem("video_files", result?.secure_url);
      setOpenModal(true);
      setLoading(false);
    } catch (error) {
      console.error("Error uploading video:", error);
    }

    if (typeof window !== "undefined") {
      const { localStorage } = window;
      setLink_video((prev) => (prev = localStorage.getItem("video_files")));
    }
  };

  const handleUpload = async () => {
    setLoading(true);
    setShowSuccess(true);
    const data = {
      reels_title,
      product_tags,
      product_code,
      product_brand,
      product_catagary,
      admin_email,
      product_description,
      product_duration,
      link_video,
    };

    console.log(data);
    setLoading(false);
    setOpenModal(false);
    if (typeof window !== "undefined") {
      const { localStorage } = window;
      localStorage.removeItem("video_files");
    }
  };

  return (
    <div className="mt-10">
      {loading ? (
        <div
          className={`${
            loading ? "flex" : "hidden"
          } items-center justify-center mt-[30vh] `}
        >
          <div className="relative">
            <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
            <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-[#f36523] animate-spin"></div>
          </div>
        </div>
      ) : (
        <div>
          <from className="w-full">
            <Alert
              color="success"
              className={`mb-2 ${
                showSuccess ? "block" : "hidden"
              } relative select-none`}
            >
              <span className="font-medium">Info alert!</span> Change a few
              things up and try submitting again.
              <button
                className="absolute top-0 right-0 mx-3 my-3 font-semibold text-xl text-gray-600 cursor-pointer "
                onClick={() => setShowSuccess(false)}
              >
                {" "}
                x{" "}
              </button>
            </Alert>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="reels_tile"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Reels Title
                </label>
                <input
                  type="text"
                  name="reels_title"
                  id="reels_title"
                  onChange={(e) => setReels_title(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white outline-none focus:outline-none"
                  placeholder="I phone 12 pro max"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="product_tags"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Products Tags
                </label>
                <input
                  type="text"
                  name="product_tags"
                  id="product_tags"
                  onChange={(e) => setProduct_tags(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="#iphone12promax #iphone12 #iphone12pro"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="product_code"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Product Code
                </label>
                <input
                  type="text"
                  name="product_code"
                  id="product_code"
                  onChange={(e) => setProduct_code(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="WAR-CON-001"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="product_brand"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Produc Brand
                </label>
                <input
                  type="text"
                  name="product_brand"
                  id="product_brand"
                  onChange={(e) => setProduct_brand(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Apple Brand"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Catagary
                </label>
                <input
                  type="text"
                  name="product_catagary"
                  id="product_catagary"
                  onChange={(e) => setProduct_catagary(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="mobile,apple,iphone,iphone12pro"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="admin_email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="admin_email"
                  id="admin_email"
                  onChange={(e) => setAdmin_email(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="adminemail@best.bd"
                  value="adminemail@best.com.bd"
                  disabled
                  readOnly
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="last_name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Description
                </label>
                <textarea
                  id="product_description"
                  name="product_description"
                  onChange={(e) => setProduct_description(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="I phone 12 pro max 256GB 8GB ram 6.7 inch display 12MP camera"
                  cols={30}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="duration"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Set Video Duration(Per Secound)
                </label>
                <input
                  type="number"
                  id="product_duration"
                  name="product_duration"
                  onChange={(e) => setProduct_duration(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="10 secound is recommended"
                  required
                />
              </div>
            </div>

            <div className="my-10">
              <input
                className="block w-full text-sm text-gray-900 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                id="video_files"
                name="video_files"
                type="file"
                accept="video/*"
                onChange={handleFileChange}
              />
            </div>

            <button
              onClick={handleSubmit}
              className="text-gray-100 border border-gray-300 rounded-lg bg-gray-900 dark:text-gray-400 focus:outline-none px-4 py-2 cursor-pointer flex ml-auto"
            >
              Upload
            </button>
          </from>
          <p className="mb-6 rounded border-l-4 border-neutral-800 bg-neutral-100 p-2 dark:border-neutral-200 dark:bg-neutral-700 my-10">
            <strong>Note:</strong> This is a demo form. You can upload any file
            from here. But in real life you can only upload video file. And the
            video duration must be 10 secound.
          </p>
        </div>
      )}

      {/* -------------------modal */}
      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header> upload reeels ?</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              With less than a month to go before the European Union enacts new
              consumer privacy laws for its citizens, companies around the world
              are updating their terms of service agreements to comply.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              The European Union’s General Data Protection Regulation (G.D.P.R.)
              goes into effect on May 25 and is meant to ensure a common set of
              data rights in the European Union. It requires organizations to
              notify users as soon as possible of high-risk data breaches that
              could personally affect them.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleUpload}>I accept</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
