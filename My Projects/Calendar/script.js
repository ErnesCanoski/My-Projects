const monthYearDisplay = document.getElementById('month-year');
const daysContainer = document.querySelector('.days');

let currentDate = new Date();

function renderCalendar() {
  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();

  monthYearDisplay.textContent = `${getMonthName(month)} ${year}`;

  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  daysContainer.innerHTML = '';

  for (let i = 0; i < firstDayOfMonth; i++) {
    const dayElement = document.createElement('div');
    dayElement.classList.add('day');
    daysContainer.appendChild(dayElement);
  }

  for (let i = 1; i <= daysInMonth; i++) {
    const dayElement = document.createElement('div');
    dayElement.classList.add('day');
    dayElement.textContent = i;
    if (currentDate.getDate() === i) {
      dayElement.classList.add('current-month');
    }
    daysContainer.appendChild(dayElement);
  }
}

function getMonthName(month) {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return months[month];
}

function prevMonth() {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar();
}

function nextMonth() {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar();
}

renderCalendar();
