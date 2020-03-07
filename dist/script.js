//navbar
const notification_btn = document.getElementById('notification_btn')
const notification_list = document.getElementById('notification_list')

notification_list.style.display = 'none'

notification_btn.addEventListener('click', (e) => {
  if(notification_list.style.display === 'none'){
    notification_list.style.display = 'block'
  }
  else{
    notification_list.style.display = 'none'
  }
})

const dropdown_btn = document.getElementById('dropdown_btn')
const dropdown_list = document.getElementById('dropdown_list')

dropdown_list.style.display = 'none'

dropdown_btn.addEventListener('click', (e) => {
  if(dropdown_list.style.display === 'none'){
    dropdown_list.style.display = 'block'
  }
  else{
    dropdown_list.style.display = 'none'
  }
})

//sidebar
const left = document.querySelector('.sidebar_left')
function openSideMenu(e) {
  document.getElementById('side-menu').style.width = '220px'
  document.querySelector('.manage_campaign_right').style.marginLeft = '100px'
}

function closeSideMenu(){
  document.getElementById('side-menu').style.width = '0px'
  document.querySelector('.manage_campaign_right').style.marginLeft = '0px'
}

//dropdown
document.querySelector('.custom-select-wrapper-language').addEventListener('click', function() {
  this.querySelector('.custom-select-language').classList.toggle('open-language');
})

for (const option of document.querySelectorAll(".custom-option-language")) {
option.addEventListener('click', function() {
    if (!this.classList.contains('selected-language')) {
        this.parentNode.querySelector('.custom-option-language.selected-language').classList.remove('selected-language');
        this.classList.add('selected-language');
        this.closest('.custom-select-language').querySelector('.custom-select__trigger-language span').textContent = this.textContent;
    }
})
}

//chart
let myChart = document.getElementById('myChart').getContext('2d')
let myChartTwo = document.getElementById('myChart_two').getContext('2d')

Chart.defaults.global.legend.display = false;
// Chart.defaults.global.tooltips.enabled = false;


let massChart = new Chart(myChart, {
  type: 'doughnut', //bar, horizontal bar, pie, line, radar, doughnut, polar area
  data: {
    labels: ['Select', 'Select', 'Select'],
    datasets: [{
      label: 'Population',
      data: [100, 200, 300],
      backgroundColor: ['#55D8FE', '#FF6565', '#A3A0FB'],
      // borderWidth: 4,
      // borderColor: 'yellow' 
    }]
  },
  option: {
    tooltip: 'none'
  }
})

let massChartTwo = new Chart(myChartTwo, {
  type: 'doughnut', //bar, horizontal bar, pie, line, radar, doughnut, polar area
  data: {
    labels: ['Select', 'Select', 'Select'],
    datasets: [{
      label: 'Population',
      data: [100, 200, 300],
      backgroundColor: ['#55D8FE', '#FF6565', '#A3A0FB'],
      // borderWidth: 4,
      // borderColor: 'yellow' 
    }]
  },
  option: {
    tooltip: 'none'
  }
})

// date-ranger

$(function () {
  $('input[name="daterange"]').daterangepicker({
    opens: 'left'
  }, function (start, end, label) {
    console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
  });
});    