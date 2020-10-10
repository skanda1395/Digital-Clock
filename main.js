const app = new Vue({
  el: "#drum-machine",
  data: {
    date: "",
    time: "",
    timeStyle: "Normal Format",
  },
  methods: {
    clock() {
      setInterval(this.getTime, 1000);
    },
    getTime() {
      let d = new Date();
      this.time = `${d.getMinutes()}:${d.getSeconds()}`;
    },
    getDate() {
      this.date = new Date().toDateString();
    },
    toggleTimeStyle() {
      if(this.timeStyle == "Military Format") {
        this.timeStyle = "Normal Format";
      } 
      else {
        this.timeStyle = "Military Format";
      }
    }
  },
  computed: {
    hours() {
      if(this.timeStyle == "Military Format") {
        return new Date().getHours();
      } 
      else {
        let hours =  new Date().getHours();
        console.log("inside computed else block")
        return (hours > 12)? (hours - 12): hours;
      }
    },
    displayStyle() {
      return (this.timeStyle == "Military Format")? "In Normal Format": "In Military Format";
    },
    period() {
      if(this.timeStyle == "Military Format") {
        return "";
      }
      else {
        return (new Date().getHours() >= 12)? "PM": "AM";
      }
    }
  },
  created() {
    this.getTime();
    this.clock();
    this.getDate();
    this.toggleTimeStyle();
  },
  filters: {
    timeFormat(value, hours) {
      let time = String(value).split(":", 2);
      let [minutes, seconds] = [time[0], time[1]];

      if(hours < 10) hours = "0" + hours;
      if(minutes.length == 1) minutes = "0" + minutes;
      if(seconds.length == 1) seconds = "0" + seconds;

      return `${hours}:${minutes}:${seconds}`;
    }
  }
});