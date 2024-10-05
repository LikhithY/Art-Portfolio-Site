import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  personalProjectsGallery,
  professionalProjectsGallery,
} from "../../backend/mockdb";
import { projectActions } from "../store/projectsSlice";
import { useDispatch } from "react-redux";

function AddContentForm({ type, item, setSelectedItem, from }) {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();

  // State to store selected files and existing files in edit mode
  const [selectedThumbnail, setSelectedThumbnail] = useState(null);
  const [selectedPictures, setSelectedPictures] = useState([]);
  const [existingPictures, setExistingPictures] = useState(
    item?.pictures || []
  );
  const [existingThumbnail, setExistingThumbnail] = useState(
    item?.thumbnail || null
  );

  const handleFileUpload = async (file) => {
    // Simulate file upload and return URL
    const fileURL = URL.createObjectURL(file); // Mock: creating a URL for preview
    return fileURL;
  };

  const onSubmit = async (data) => {
    // Handling the thumbnail
    let thumbnailURL = existingThumbnail;
    if (selectedThumbnail) {
      thumbnailURL = await handleFileUpload(selectedThumbnail);
    }

    // Handling pictures
    const newPicturesURLs = await Promise.all(
      selectedPictures.map(async (file) => await handleFileUpload(file))
    );

    const finalPictures = [...existingPictures, ...newPicturesURLs]; // Combine existing and new pictures

    if (from === "personal") {
      // Prepare the project data (new or edited)
      const newProject = {
        id:
          type === "editContent" ? item.id : personalProjectsGallery.length + 1,
        ...data,
        thumbnail: thumbnailURL,
        pictures: finalPictures,
      };

      if (type === "editContent") {
        // Update the existing project in state
        const updatedProjects = personalProjectsGallery.map((project) =>
          project.id === item.id ? newProject : project
        );
        dispatch(projectActions.setPersonalProjects(updatedProjects));
      } else {
        // Add a new project to the state
        dispatch(
          projectActions.setPersonalProjects([
            ...personalProjectsGallery,
            newProject,
          ])
        );
      }
    } else {
      // Prepare the project data (new or edited)
      const newProject = {
        id:
          type === "editContent"
            ? item.id
            : professionalProjectsGallery.length + 1,
        ...data,
        thumbnail: thumbnailURL,
        pictures: finalPictures,
      };

      if (type === "editContent") {
        // Update the existing project in state
        const updatedProjects = professionalProjectsGallery.map((project) =>
          project.id === item.id ? newProject : project
        );
        dispatch(projectActions.setProfessionalProjects(updatedProjects));
      } else {
        // Add a new project to the state
        dispatch(
          projectActions.setProfessionalProjects([
            ...professionalProjectsGallery,
            newProject,
          ])
        );
      }
    }

    // Reset form fields
    reset();
    setSelectedThumbnail(null);
    setSelectedPictures([]);
    setSelectedItem(null);
  };

  // Handle thumbnail and pictures changes
  const handleThumbnailChange = (event) => {
    setSelectedThumbnail(event.target.files[0]);
  };

  const handlePicturesChange = (event) => {
    setSelectedPictures([...event.target.files]);
  };

  // Handle removing images (from existing or newly added ones)
  const removePicture = (index, isNew) => {
    if (isNew) {
      setSelectedPictures(selectedPictures.filter((_, i) => i !== index));
    } else {
      setExistingPictures(existingPictures.filter((_, i) => i !== index));
    }
  };

  const removeThumbnail = () => {
    setExistingThumbnail(null); // Remove existing thumbnail
    setSelectedThumbnail(null); // Also reset any selected thumbnail
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-black text-white w-[50%] h-[550px] p-14 overflow-y-auto hide-scrollbar rounded-lg"
    >
      <div onClick={(e) => e.stopPropagation()}>
        <div className="grid grid-cols-2 p-5">
          <label htmlFor="name">Name:</label>
          <input
            className="p-1 rounded-md text-black"
            defaultValue={type === "editContent" ? item.name : ""}
            {...register("name", { required: true })}
          />
        </div>
        <div className="grid grid-cols-2 p-5">
          <label htmlFor="description">Description:</label>
          <textarea
            className="p-1 rounded-md text-black"
            defaultValue={type === "editContent" ? item.description : ""}
            {...register("description", { required: true })}
          />
        </div>

        {/* Thumbnail Section */}
        <div className="grid grid-cols-2 p-5">
          <label htmlFor="thumbnail">Thumbnail Image:</label>
          <div>
            {existingThumbnail && (
              <div className="mt-2">
                <img
                  src={existingThumbnail}
                  alt="Existing Thumbnail"
                  width="100%"
                />
                <button
                  type="button"
                  className="bg-red-500 text-white p-1 mt-2"
                  onClick={removeThumbnail}
                >
                  Remove Thumbnail
                </button>
              </div>
            )}
            {!existingThumbnail && (
              <div>
                <input
                  className=""
                  {...register("thumbnail", { required: !existingThumbnail })}
                  type="file"
                  onChange={handleThumbnailChange}
                />
                {selectedThumbnail && (
                  <div className="mt-2">
                    <img
                      src={URL.createObjectURL(selectedThumbnail)}
                      alt="New Thumbnail"
                      width="100%"
                    />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Pictures Section */}
        <div className="grid grid-cols-2 p-5">
          <label htmlFor="pictures">Other Images:</label>

          <div>
            {/* Input for new pictures */}
            <input
              className=""
              {...register("pictures", { required: false })}
              type="file"
              multiple
              onChange={handlePicturesChange}
            />
            {/* Display existing pictures */}
            {existingPictures.length > 0 && (
              <div>
                {existingPictures.map((pic, index) => (
                  <div className="mt-2" key={index}>
                    <img
                      src={pic}
                      alt={`Picture Preview ${index + 1}`}
                      width="100%"
                    />
                    <button
                      type="button"
                      className="bg-red-500 text-white p-1 mt-2"
                      onClick={() => removePicture(index, false)}
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            )}

            {selectedPictures.length > 0 && (
              <div className="mt-2">
                {selectedPictures.map((file, index) => (
                  <div key={index}>
                    <img
                      src={URL.createObjectURL(file)}
                      alt={`Picture Preview ${index + 1}`}
                      width="100%"
                    />
                    <button
                      type="button"
                      className="bg-red-500 text-white p-1 mt-2"
                      onClick={() => removePicture(index, true)}
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <div className="grid grid-cols-2 p-5">
          <div></div>
          <button className="bg-slate-400 rounded-lg p-2 w-24" type="submit">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default AddContentForm;
