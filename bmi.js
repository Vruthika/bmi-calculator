function generateDiet() {
  const weight = document.getElementById('weight').value;
  const height = document.getElementById('height').value;
  const age = document.getElementById('age').value;
  const dietType = document.getElementById('dietType').value;

  // Validation: Check if all fields are filled
  if (weight === "" || height === "" || age === "" || dietType === "") {
    alert("Please fill in all the fields.");
    return;  // Exit the function if validation fails
  }

  const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
  let dietPlan;

  if (bmi < 18.5) {
    dietPlan = generateDietPlan('Underweight', dietType);
  } else if (bmi >= 18.5 && bmi < 25) {
    dietPlan = generateDietPlan('Normal', dietType);
  } else if (bmi >= 25 && bmi < 30) {
    dietPlan = generateDietPlan('Overweight', dietType);
  } else {
    dietPlan = generateDietPlan('Obese', dietType);
  }

  document.getElementById('result').innerHTML = `
      Your BMI is ${bmi}<br><br>
      ${dietPlan}
  `;
  document.getElementById('result').style.display = 'block';
}

function generateDietPlan(bmiCategory, dietType) {
  let dietPlan = '';

  if (bmiCategory === 'Underweight') {
    if (dietType === 'Non-Veg') {
      dietPlan = `
              <strong>Morning:</strong> 1 glass of full-fat milk, 2 slices of whole-grain bread with peanut butter, 1 boiled egg, 1 banana<br>
              <strong>Mid-Meal:</strong> 1 handful of mixed nuts<br>
              <strong>Lunch:</strong> 1 cup of rice, 1 serving of chicken, 1 bowl of cooked vegetables, 1 cup of curd<br>
              <strong>Evening:</strong> 1 smoothie with milk, yogurt, and berries<br>
              <strong>Dinner:</strong> 1 bowl of pasta with cheese and vegetables, 1 serving of lean meat, 1 bowl of salad<br>
          `;
    } else {
      dietPlan = `
              <strong>Morning:</strong> 1 glass of full-fat milk, 2 slices of whole-grain bread with peanut butter, 1 banana<br>
              <strong>Mid-Meal:</strong> 1 handful of mixed nuts<br>
              <strong>Lunch:</strong> 1 cup of rice, 1 serving of legumes, 1 bowl of cooked vegetables, 1 cup of curd<br>
              <strong>Evening:</strong> 1 smoothie with milk, yogurt, and berries<br>
              <strong>Dinner:</strong> 1 bowl of pasta with cheese and vegetables, 1 serving of tofu, 1 bowl of salad<br>
          `;
    }
  } else if (bmiCategory === 'Normal') {
    if (dietType === 'Non-Veg') {
      dietPlan = `
              <strong>Morning:</strong> 1 bowl of oatmeal with fresh fruits, 1 boiled egg<br>
              <strong>Mid-Meal:</strong> 1 apple or orange<br>
              <strong>Lunch:</strong> 1 chapati or 1 cup of brown rice, 1 serving of grilled chicken, 1 bowl of salad, 1 small bowl of yogurt<br>
              <strong>Evening:</strong> 1 cup of green tea, 1 handful of nuts<br>
              <strong>Dinner:</strong> 1 cup of quinoa or millet, 1 serving of steamed vegetables, 1 grilled fish<br>
          `;
    } else {
      dietPlan = `
              <strong>Morning:</strong> 1 bowl of oatmeal with fresh fruits, 1 serving of tofu<br>
              <strong>Mid-Meal:</strong> 1 apple or orange<br>
              <strong>Lunch:</strong> 1 chapati or 1 cup of brown rice, 1 serving of legumes, 1 bowl of salad, 1 small bowl of yogurt<br>
              <strong>Evening:</strong> 1 cup of green tea, 1 handful of nuts<br>
              <strong>Dinner:</strong> 1 cup of quinoa or millet, 1 serving of steamed vegetables, 1 portion of tofu<br>
          `;
    }
  } else if (bmiCategory === 'Overweight') {
    if (dietType === 'Non-Veg') {
      dietPlan = `
              <strong>Morning:</strong> 1 onion stuffed chapati + 1/2 cup low-fat curd, 1 fruit<br>
              <strong>Mid-Meal:</strong> 1 cup of coconut water<br>
              <strong>Lunch:</strong> 1 cup of moong dal or chicken curry, 1 chapati, salad<br>
              <strong>Evening:</strong> 1 cup of pomegranate<br>
              <strong>Dinner:</strong> 1 cup of beans, 1 chapati, salad<br>
          `;
    } else {
      dietPlan = `
              <strong>Morning:</strong> 1 onion stuffed chapati + 1/2 cup low-fat curd, 1 fruit<br>
              <strong>Mid-Meal:</strong> 1 cup of buttermilk<br>
              <strong>Lunch:</strong> 1 cup of moong dal, 1 chapati, salad<br>
              <strong>Evening:</strong> 1 cup of pomegranate<br>
              <strong>Dinner:</strong> 1 cup of mixed vegetables, 1 chapati, salad<br>
          `;
    }
  } else {
    if (dietType === 'Non-Veg') {
      dietPlan = `
              <strong>Morning:</strong> 1 bowl of vegetable porridge or poha, 1 boiled egg<br>
              <strong>Mid-Meal:</strong> 1 glass of lemon water or green tea<br>
              <strong>Lunch:</strong> 1 cup of steamed brown rice or quinoa, 1 serving of boiled chicken, 1 bowl of leafy green salad<br>
              <strong>Evening:</strong> 1 cup of herbal tea, 1 handful of nuts<br>
              <strong>Dinner:</strong> 1 bowl of vegetable soup, 1 portion of grilled fish<br>
          `;
    } else {
      dietPlan = `
              <strong>Morning:</strong> 1 bowl of vegetable porridge or poha, 1 portion of tofu<br>
              <strong>Mid-Meal:</strong> 1 glass of lemon water or green tea<br>
              <strong>Lunch:</strong> 1 cup of steamed brown rice or quinoa, 1 serving of legumes, 1 bowl of leafy green salad<br>
              <strong>Evening:</strong> 1 cup of herbal tea, 1 handful of nuts<br>
              <strong>Dinner:</strong> 1 bowl of vegetable soup, 1 portion of tofu<br>
          `;
    }
  }

  return dietPlan;
}