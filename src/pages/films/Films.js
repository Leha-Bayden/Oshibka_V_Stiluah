import React, { useState } from 'react';
import { useForm} from "react-hook-form";
import './Films.css'

function Form() {
  const [formData, setFormData] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const {register, handleSubmit} = useForm({ mode: "onChange" });

  const [selectedCheckbox1, setSelectedCheckbox1] = useState(null);

  const handleCheckboxChange1 = (checkboxId) => {
    setSelectedCheckbox1(checkboxId);
  };

  const isFormValid = () => {
    return formData.FIO && formData.field1 && formData.field2 && formData.field3;
  };

  const onSubmit = (data) => console.log(data);

  return (
    <div>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <legend>ФИО</legend>
            <input
              type="text"
              name="FIO"
              value={formData.FIO}
              onChange={handleInputChange}
            />
        </div>    

        <div>
            <label>
              <input
                type="checkbox"
                {...register("Научный сотрудник")}
                checked={selectedCheckbox1 === 1}
                onChange={() => handleCheckboxChange1(1)}
              />
              Научный сотрудник
            </label><br/>
            <label>
              <input
                type="checkbox"
                {...register("Преподаватель")}
                checked={selectedCheckbox1 === 2}
                onChange={() => handleCheckboxChange1(2)}
              />
              Преподаватель
            </label><br/>
            <label>
              <input
                type="checkbox"
                {...register("Студент бакалавра")}
                checked={selectedCheckbox1 === 3}
                onChange={() => handleCheckboxChange1(3)}
              />
              Студент бакалавра
            </label><br/>
          </div>

      <label>
        Field 1:
        <input
          type="text"
          name="field1"
          value={formData.field1}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Field 2:
        <input
          type="text"
          name="field2"
          value={formData.field2}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Field 3:
        <input
          type="text"
          name="field3"
          value={formData.field3}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <button type="submit" disabled={!isFormValid()}>
        Отправить
      </button>
      </form>
    </div>
  );
}

export default Form;