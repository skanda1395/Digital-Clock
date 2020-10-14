const app = new Vue({
  el: "#app",
  data: {
    time: null,
    timeStyles: ["In Military Format", "In Normal Format"],
    inMilitaryStyle: true,
    period: null
  },
  methods: {
    getTime() {
      this.time = new Date().toLocaleTimeString();
    },
    toggleFormat() {
      this.inMilitaryStyle = !this.inMilitaryStyle;
    }
  },
  computed: {
    displayFormat() {
      return this.timeStyles[+this.inMilitaryStyle];
    },
    FormattedTime() {
      console.log("formatted time called");
      if(this.inMilitaryStyle) {
        this.period = "";
        return this.time;
      }
      else {
        let currentHour = new Date().getHours();
        this.period = currentHour >= 12? "PM": "AM";
        currentHour = currentHour % 12;
        currentHour = currentHour? currentHour: 12;
        currentHour = (currentHour < 10)? `0${currentHour}`: currentHour;
        let minSec = this.time.slice(3);
        return `${currentHour}:${minSec}`;
      }
    }
  },
  created() {
    this.getTime();
    setInterval(this.getTime, 1000);
  }
});