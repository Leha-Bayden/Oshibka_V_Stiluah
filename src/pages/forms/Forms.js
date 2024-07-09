import { useForm} from "react-hook-form";
import { useState } from "react";
import Button from "./../../components/buttonform/Button";
import "./Forms.css"


const Forms = () => {

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const [selectedCheckbox1, setSelectedCheckbox1] = useState(null);

  const handleCheckboxChange1 = (checkboxId) => {
    setSelectedCheckbox1(checkboxId);
  };

  const [selectedCheckbox2, setSelectedCheckbox2] = useState(null);
  const [selectedDate2, setSelectedDate2] = useState('');

  const handleCheckboxChange2 = (checkboxId) => {
    setSelectedCheckbox2(checkboxId);
  };

  const handleDateChange2 = (event) => {
    setSelectedDate2(event.target.value);
  };

  const [selectedCheckbox3, setSelectedCheckbox3] = useState(null);
  const [selectedDate3, setSelectedDate3] = useState('');

  const handleCheckboxChange3 = (checkboxId) => {
    setSelectedCheckbox3(checkboxId);
  };

  const handleDateChange3 = (event) => {
    setSelectedDate3(event.target.value);
  };

  const onSubmit = (data) => console.log(data);





  return (
    <div>
      <div>
        <h2>Форма подачи заявки</h2>
      </div>
      <div className="forms">
        
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div>
          <legend>ФИО</legend>
            <input
              type="text"
              placeholder=""
              className={errors.name && "error"}
              {...register("name", {
                required: true,
                minLength: 1,
                maxLength: 100,
              })}
            /><br/>
            {errors.name?.type === "required" && <span>Введите ФИО</span>}
            {errors.name?.type === "minLength" && <span>Мин 1 буква</span>}
            {errors.name?.type === "maxLength" && <span>Макс 100 букв</span>}
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

          <div>
          <legend>Почта</legend>
            <input
              type="email"
              placeholder=""
              className={errors.email && "error"}
              {...register("email", {
                required: true,
                pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i
              })}
            /><br/>
            {errors.email?.type === "required" && <span>Введите email</span>}
            {errors.email?.type === "pattern" && <span>Недопустимая форма почты</span>}
          </div>
          
          <div>
          <legend>Язык статьи</legend>
            <input
              type="text"
              placeholder=""
              className={errors.language && "error"}
              {...register("language", {
                required: true,
                minLength: 1,
                maxLength: 100,
              })}
            /><br/>
            {errors.language?.type === "required" && <span>Введите требуемый язык</span>}
            {errors.language?.type === "minLength" && <span>Мин 1 буква</span>}
            {errors.language?.type === "maxLength" && <span>Макс 100 букв</span>}
          </div>

          <div>
          <legend>Предметные области</legend>
            <input
              type="text"
              placeholder=""
              className={errors.predmet && "error"}
              {...register("predmet", {
                required: true,
                minLength: 1,
                maxLength: 100,
              })}
            /><br/>
            {errors.predmet?.type === "required" && <span>Введите предметные области</span>}
            {errors.predmet?.type === "minLength" && <span>Мин 1 буква</span>}
            {errors.predmet?.type === "maxLength" && <span>Макс 100 букв</span>}
          </div>

          <div>
          <legend>Индексация журнала</legend>
          <select name="indeksacia" {...register("indeksacia",{required: true})}>
            <option value="1" selected>1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select><br/>
            {errors.indeksacia?.type === "required" && <span>Выберите ...</span>}
          </div>

          <div>
          <legend>Квартиль журнала</legend>
            <input
              type="text"
              placeholder=""
              className={errors.kvartil && "error"}
              {...register("kvartil", {
                required: true,
                minLength: 1,
                maxLength: 100,
              })}
            /><br/>
            {errors.kvartil?.type === "required" && <span>Введите ...</span>}
            {errors.kvartil?.type === "minLength" && <span>Мин 1 буква</span>}
            {errors.kvartil?.type === "maxLength" && <span>Макс 100 букв</span>}
          </div>

          <div>
          <legend>Есть ли дедлайн?</legend>
          <label>
              <input
                type="checkbox"
                {...register("Нет дедлайна")}
                checked={selectedCheckbox2 === 1}
                onChange={() => handleCheckboxChange2(1)}
              />
              Нет
            </label><br/>
            <label>
              <input
                type="checkbox"
                {...register("Есть дедлайн")}
                checked={selectedCheckbox2 === 2}
                onChange={() => handleCheckboxChange2(2)}
              />
              Да
            </label>
            {selectedCheckbox2 === 2 && (
              <div>
                <label>
                  Выберите дедлайн:
                  <input
                    type="date"
                    {...register("Дата дедлайна")}
                    value={selectedDate2}
                    onChange={handleDateChange2}
                  />
                </label>
              </div>
            )}
            <br/>
          </div>

          <div>
          <legend>Написана ли статья в рамках гранта/ГЗ?</legend>
          <label>
              <input
                type="checkbox"
                {...register("Не написана в рамках гранта/ГЗ")}
                checked={selectedCheckbox3 === 1}
                onChange={() => handleCheckboxChange3(1)}
              />
              Нет
            </label><br/>
            <label>
              <input
                type="checkbox"
                {...register("Написана в рамках гранта/ГЗ")}
                checked={selectedCheckbox3 === 2}
                onChange={() => handleCheckboxChange3(2)}
              />
              Да
            </label>
            {selectedCheckbox3 === 2 && (
              <div>
                <label>
                  В рамках чего?(название):
                  <input
                    type="text"
                    {...register("Название гранта/ГЗ")}
                    value={selectedDate3}
                    onChange={handleDateChange3}
                  />
                </label>
              </div>
            )}
            <br/>
          </div>

          {/* <button type="submit">Отправить</button> */}

          <Button/>

        </form>
      </div>
    </div>

  );
};

 
export default Forms;