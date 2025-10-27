<!-- Vue 3.x  -->
<script>
let codeUrl = new URL(window.location.href);
let codeParams = new URLSearchParams(url.search);
let titleParam = params.get("title");
console.log(codeUrl);
Vue.createApp({
computed: {
	title() {
		return titleParam;
	},
	timeOfDay() {
      const date = new Date();
      const hours = date.getHours();

      if (hours < 12) {
        return 'morning';
      }
      else if (hours < 18) {
        return 'afternoon';
      }
      else {
        return 'evening'
      }
    }
}}).mount('#example');
</script>

# Title

<div id="example">
Good {{ timeOfDay }}!
</div>