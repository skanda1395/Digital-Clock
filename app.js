const app = new Vue({
	el: "#app",
	data: {
		hours: null,
		minutes: null,
    seconds: null,
    timeStyles: ["In Military Format", "In Normal Format"],
    inMilitaryStyle: true,
    period: ""
	},
	methods: {
		sec() {
      let sec = new Date().getSeconds();
      this.seconds = sec < 10? `0${sec}`: sec;
    },
    min() {
      let min = new Date().getMinutes();
      this.minutes = min < 10? `0${min}`: min;
    },
    hour() {
      let hour = new Date().getHours();
      this.hours = hour < 10? `0${hour}`: hour;
    },
    toggleFormat() {
      this.inMilitaryStyle = !this.inMilitaryStyle;
    }
  },
  computed: {
    displayFormat() {
      return this.timeStyles[+this.inMilitaryStyle];
    },
    Hour() {
      if(this.inMilitaryStyle) {
        this.period = "";
        return this.hours;
      }
      else {
        if(this.hours < 12) {
          this.period = "AM";
          return this.hours;
        }
        else if(this.hours == 12) {
          this.period = "PM";
          return this.hours;
        }
        else {
          this.period = "PM";
          return `0${this.hours - 12}`;
        }  
      }
    }
  },
	created() {
    // set the time initially
    this.sec();
    this.min();
    this.hour();

    // set an interval for every sec, minute & hour respectively
		setInterval(this.sec, 1000);
		setInterval(this.min, 1000 * 60);
		setInterval(this.hour, 1000 * 60 * 60);
	}
})