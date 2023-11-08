import Swal from "sweetalert2";
import { DatePicker } from "antd";
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
const { RangePicker } = DatePicker;

const CreateAssignment = () => {
  const [dates, setDates] = useState([]);
  const {user}=useContext(AuthContext);
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const image_url = form.image_url.value;
    const email=form.email.value;
    const title = form.title.value;
    const type = form.type.value;
    const marks = form.marks.value;
    const short_description = form.short_description.value;

    const assignment = {
      image_url,
      email,
      title,
      type,
      marks,
      short_description,
      dates
    };

    fetch("http://localhost:5000/assignments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(assignment),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire("Try your best!", "Assginment created", "success");
          form.reset();
        }
      });
  };

  return (
    <div className="max-w-7xl mx-auto p-2">
      <div>
        <div>
          <form  onSubmit={handleFormSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-[#CB6CE6] font-medium text-lg">
                  Image URL
                </span>
              </label>
              <input
                type="text"
                placeholder="Image url"
                name="image_url"
                className="input input-bordered border-[#CB6CE6] w-3/4 md:w-full lg:w-1/2"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-[#CB6CE6] font-medium text-lg">
                  Email
                </span>
              </label>
              <input
                type="email"
                placeholder="email"
                defaultValue={user?.email}
                name="email"
                className="input input-bordered border-[#CB6CE6] w-3/4 md:w-full lg:w-1/2"
                disabled
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-[#CB6CE6] font-medium text-lg">
                  Title
                </span>
              </label>
              <input
                type="text"
                placeholder="Title"
                name="title"
                className="input input-bordered border-[#CB6CE6] w-3/4 md:w-full lg:w-1/2"
                required
              />
            </div>

            <br />
            <select
              name="type"
              required
              className="select select-primary  text-[#CB6CE6]  text-lg border-[#CB6CE6] w-3/4 md:w-full lg:w-1/2"
            >
              <option
                disabled
                selected
                className="text-[#CB6CE6] font-medium text-lg"
              >
                Difficulty ?
              </option>
              <option className="text-[#CB6CE6] font-medium text-lg">
                Easy
              </option>
              <option className="text-[#CB6CE6] font-medium text-lg">
                Medium
              </option>
              <option className="text-[#CB6CE6] font-medium text-lg">
                {" "}
                Hard
              </option>
            </select>
            <br />
            <div className="form-control">
              <label className="label">
                <span className="label-text text-[#CB6CE6] font-medium text-lg">
                  Marks
                </span>
              </label>
              <input
                type="text"
                placeholder="Marks"
                name="marks"
                className="input input-bordered border-[#CB6CE6] w-3/4 md:w-full lg:w-1/2"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-[#CB6CE6] font-medium text-lg">
                  Short description
                </span>
              </label>
              <textarea
                type="text"
                placeholder="Short description"
                name="short_description"
                className="input input-bordered border-[#CB6CE6] w-3/4 md:w-full lg:w-1/2"
                required
              />
            </div>
            <div>
              
                <RangePicker
                  className="border-[#CB6CE6] p-2 mt-2 mb-2"
                 onChange={(values) => 
                    {const actualDates=values.map(value=> value.toDate());
                    setDates(actualDates)}}
               
                />
             
            </div>
            <input
              type="submit"
              value="Create Assignment"
              className="btn bg-[#CB6CE6] font-medium text-lg text-white "
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateAssignment;
