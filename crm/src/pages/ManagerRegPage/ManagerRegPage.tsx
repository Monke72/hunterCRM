import { useState } from "react";
import * as yup from "yup";
import "./ManagerRegPage.scss";
import { supabase } from "@entities/Admin/superbase";

const schema = yup.object({
  email: yup.string().email("Некорректный email").required("Обязательное поле"),
  password: yup
    .string()
    .min(6, "Минимум 6 символов")
    .required("Обязательное поле"),
});
const ManagerRegPage = () => {
  const [values, setValues] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  );
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Пробуем валидировать значения
      await schema.validate(values, { abortEarly: false });

      // Если ошибок нет — очищаем ошибки и выполняем вход в Supabase
      setErrors({});
      console.log("Данные валидны, можно логинить в Supabase:", values);

      // 🔹 Здесь делаем запрос к Supabase
      const { data, error } = await supabase.auth.signInWithPassword({
        email: values.email,
        password: values.password,
      });

      if (error) {
        console.log("Ошибка входа:", error.message);
        return;
      }

      const role = data.user?.user_metadata?.role;
      if (role === "admin") {
        console.log("Добро пожаловать, админ!");
        // Здесь редирект или установка состояния админки
      } else {
        console.log("Нет доступа к админке");
      }
    } catch (err) {
      // Если есть ошибки валидации
      if (err instanceof yup.ValidationError) {
        const newErrors: { [key: string]: string } = {};
        err.inner.forEach((e) => {
          if (e.path) newErrors[e.path] = e.message;
        });
        setErrors(newErrors);
        console.log("Ошибки формы:", newErrors);
      }
    }
  };

  return (
    <section className="manager">
      <h1 className="manager__title">Заполним форму перед началом работы</h1>
      <form className="manager__form" onSubmit={handleSubmit}>
        <label htmlFor="email">
          <div className="manager__form-name">Введите email</div>
          <input
            className="manager__input"
            name="email"
            value={values.email}
            onChange={handleChange}
            placeholder="Email"
          />
        </label>
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

        <label htmlFor="password">
          <div className="manager__form-name">Введите пароль</div>
          <input
            className="manager__input"
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            placeholder="Пароль"
          />
        </label>
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}

        <button className="manager__button" type="submit">
          Отправить
        </button>
      </form>
    </section>
  );
};

export default ManagerRegPage;
