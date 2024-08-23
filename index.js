document.getElementById("calculate").addEventListener("click", function () {
  const birthdayInput = document.getElementById("birthday");
  const birthdayValue = birthdayInput.value;
  const errorDiv = document.getElementById("error");
  const resultDiv = document.getElementById("result");

  if (!birthdayValue) {
    errorDiv.style.display = "block";
    resultDiv.textContent = "";
    return;
  }

  errorDiv.style.display = "none";

  const today = new Date();
  let birthday = new Date(birthdayValue);
  birthday.setFullYear(today.getFullYear());

  if (birthday < today) {
    birthday.setFullYear(today.getFullYear() + 1);
  }

  const timeDifference = birthday - today;
  const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

  resultDiv.textContent = `До вашего дня рождения осталось ${daysDifference} дней.`;
});

document.getElementById("birthday").addEventListener("input", function () {
  const errorDiv = document.getElementById("error");
  errorDiv.style.display = "none";
});
