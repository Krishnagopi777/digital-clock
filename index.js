function pad(num) {
    return num.toString().padStart(2, '0');
  }

  function updateClock() {
    const now = new Date();

    let hours = now.getHours();
    const minutes = pad(now.getMinutes());
    const seconds = pad(now.getSeconds());
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours === 0 ? 12 : hours;
    hours = pad(hours);

    const clockEl = document.getElementById('clock');
    clockEl.innerHTML = `
      <div class="digit-box">${hours[0]}</div>
      <div class="digit-box">${hours[1]}</div>
      <div class="colon">:</div>
      <div class="digit-box">${minutes[0]}</div>
      <div class="digit-box">${minutes[1]}</div>
      <div class="colon">:</div>
      <div class="digit-box">${seconds[0]}</div>
      <div class="digit-box">${seconds[1]}</div>
      <div class="digit-box ampm">${ampm}</div>
    `;

    const days = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    const months = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];

    const dateStr = `${days[now.getDay()]}, ${pad(now.getDate())} ${months[now.getMonth()]} ${now.getFullYear()}`;
    document.getElementById('date').textContent = dateStr;
  }

  updateClock();
  setInterval(updateClock, 1000);