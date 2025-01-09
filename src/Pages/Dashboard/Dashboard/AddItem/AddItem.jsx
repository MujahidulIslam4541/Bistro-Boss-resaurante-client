import { useForm } from "react-hook-form";
import SectionTitle from "../../../../Components/sectionTitle/sectionTitle";
// import { SubmitHandler } from "react-hook-form";

const AddItem = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <SectionTitle
        heading={"add an item"}
        subheading={"---What's New---"}
      ></SectionTitle>

      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>First Name</label>
          <input {...register("firstName")} />
          <select
            {...register("category")}
            className="select select-bordered w-full max-w-xs"
          >
            <option disabled selected>
              Select a Category
            </option>
            <option value="salad">Salad</option>
            <option value="pizza">Pizza</option>
            <option value="desert">Desert</option>
            <option value="soup">Soup</option>
            <option value="drink">Drinks</option>
          </select>
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddItem;
