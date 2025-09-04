require("dotenv").config();
const { createClient } = require("@supabase/supabase-js");

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

async function createOrUpdateAdmin(email, password) {
  // 1️⃣ Получаем всех пользователей
  const { data, error: listError } = await supabase.auth.admin.listUsers();
  if (listError) {
    console.error("Ошибка при получении пользователей:", listError);
    return;
  }

  const users = data.users; // вот здесь берем массив
  const existingUser = users.find((u) => u.email === email);

  if (existingUser) {
    // 2️⃣ Если пользователь есть — обновляем роль
    const { data: updated, error } = await supabase.auth.admin.updateUserById(
      existingUser.id,
      {
        user_metadata: { role: "admin" },
        password, // можно обновить пароль
      }
    );
    if (error) console.error("Ошибка при обновлении админа:", error);
    else console.log("Админ обновлён:", updated.user);
  } else {
    // 3️⃣ Если нет — создаём нового
    const { data: created, error } = await supabase.auth.admin.createUser({
      email,
      password,
      user_metadata: { role: "admin" },
    });
    if (error) console.error("Ошибка при создании админа:", error);
    else console.log("Админ создан:", created.user);
  }
}

createOrUpdateAdmin("admin72@mail.ru", "hunterCRM");
