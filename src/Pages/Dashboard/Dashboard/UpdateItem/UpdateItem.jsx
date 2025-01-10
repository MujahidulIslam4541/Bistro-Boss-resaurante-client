import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../../Components/sectionTitle/sectionTitle";
import UseAxiosPublic from "../../../../hooks/UseAxiosPublic";
import UseAxiosSecure from "../../../../hooks/UseAxiosSecure";
import { useForm } from "react-hook-form";
import { FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";

const image_token = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_token}`;
const UpdateItem = () => {
  const { name, category, price, recipe, _id } = useLoaderData();
  console.log(name);

  const axiosPublic = UseAxiosPublic();
  const { register, handleSubmit } = useForm();
  const axiosSecure = UseAxiosSecure();

  const onSubmit = async (data) => {
    console.log(data);

    // image upload imgbb and get the url
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      // now send the menu item to the server with image url
      const menuItem = {
        name: data.name,
        category: data.category,
        recipe: data.recipe,
        price: parseFloat(data.price),
        image: res.data.data.display_url,
      };

      const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
      console.log(menuRes.data);
      if (menuRes.data.modifiedCount > 0) {
        Swal.fire({
          title: "Success",
          text: `${name} is Updated`,
          icon: "success",
        });
      }
    }

    console.log(res.data);
  };
  return (
    <div>
      <SectionTitle
        heading={"update item"}
        subheading="---Harry Up---"
      ></SectionTitle>

      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-6 rounded-md"
          style={{ backgroundColor: "#F3F3F3" }}
        >
          {/* Recipe Name */}
          <div>
            <label>Recipe Name*</label>
            <input
              {...register("name", { required: true })}
              type="text"
              defaultValue={name}
              placeholder="Recipe Name"
              className="input input-ghost input-bordered w-full"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {/* Recipe Category */}
            <div>
              <label htmlFor="" className="label">
                <span>Category*</span>
              </label>
              <select
                defaultValue={category}
                {...register("category", { required: true })}
                className="select select-bordered w-full"
              >
                <option Value="default" disabled>
                  Select a Category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="desert">Desert</option>
                <option value="soup">Soup</option>
                <option value="drink">Drinks</option>
              </select>
            </div>

            {/* Recipe Price */}
            <div>
              <label className="label">
                <span>Price</span>
              </label>
              <input
                {...register("price", { required: true })}
                type="text"
                defaultValue={price}
                placeholder="Recipe Price"
                className="input input-ghost input-bordered w-full"
              />
            </div>
          </div>

          {/* Recipe Details */}
          <div>
            <label className="label">
              <span>Recipe Details</span>
            </label>
            <textarea
              placeholder="Recipe Details"
              rows="5"
              defaultValue={recipe}
              className="textarea textarea-bordered w-full"
              {...register("recipe", { required: true })}
            ></textarea>
          </div>
          <div className="my-4">
            <input
              type="file"
              {...register("image")}
              className="file-input w-full max-w-xs"
            />
          </div>
          <div>
            <button className="btn text-white font-semibold  bg-[#896124] ">
              Update Item <FaEdit size={16}></FaEdit>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateItem;
